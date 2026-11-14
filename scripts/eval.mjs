// One-off CDP evaluate helper: prints the JSON result of a page expression.
import { spawn } from 'node:child_process';
import { rmSync } from 'node:fs';
import WebSocket from 'ws';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9334;
const profile = '/tmp/cdp-eval-profile';

const url = process.argv[2] || 'http://localhost:4321/';
const expr = process.argv[3] || 'document.title';
const width = Number(process.argv[4] || 1440);

rmSync(profile, { recursive: true, force: true });
const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
  '--no-default-browser-check', '--remote-debugging-port=' + PORT,
  '--user-data-dir=' + profile, 'about:blank',
], { stdio: 'ignore' });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  let target = null;
  for (let i = 0; i < 50; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      target = list.find((t) => t.type === 'page');
      if (target) break;
    } catch {}
    await wait(200);
  }
  const ws = new WebSocket(target.webSocketDebuggerUrl, { perMessageDeflate: false });
  await new Promise((r) => ws.on('open', r));
  let id = 0;
  const pending = new Map();
  const events = new Map();
  ws.on('message', (raw) => {
    const msg = JSON.parse(raw.toString());
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); }
    else if (msg.method && events.has(msg.method)) { events.get(msg.method).forEach((fn) => fn(msg.params)); events.delete(msg.method); }
  });
  const send = (method, params = {}) => new Promise((resolve) => { const mid = ++id; pending.set(mid, resolve); ws.send(JSON.stringify({ id: mid, method, params })); });
  const once = (method) => new Promise((resolve) => { if (!events.has(method)) events.set(method, []); events.get(method).push(resolve); });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
  const loaded = once('Page.loadEventFired');
  await send('Page.navigate', { url });
  await loaded;
  await wait(1500);
  const res = await send('Runtime.evaluate', { expression: `JSON.stringify((()=>{${expr}})())`, returnByValue: true, awaitPromise: true });
  console.log(res.result?.value ?? JSON.stringify(res));
  ws.close(); chrome.kill(); process.exit(0);
}
main().catch((e) => { console.error(e); chrome.kill(); process.exit(1); });
