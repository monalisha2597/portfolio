// Lightweight CDP screenshotter — lets us emulate real mobile widths and capture full pages.
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import WebSocket from 'ws';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;
const profile = '/tmp/cdp-profile';

const args = process.argv.slice(2);
const url = args[0] || 'http://localhost:4321/';
const out = args[1] || '/tmp/cdp.png';
const width = Number(args[2] || 1440);
const height = Number(args[3] || 900);
const full = args[4] !== 'viewport';
const mobile = args[5] === 'mobile';
const clipY = args[6] ? Number(args[6]) : null;
const clipH = args[7] ? Number(args[7]) : null;

rmSync(profile, { recursive: true, force: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  '--remote-debugging-port=' + PORT,
  '--user-data-dir=' + profile,
  'about:blank',
], { stdio: 'ignore' });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  let target = null;
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      target = list.find((t) => t.type === 'page');
      if (target) break;
    } catch {}
    await wait(200);
  }
  if (!target) throw new Error('no chrome target');

  const ws = new WebSocket(target.webSocketDebuggerUrl, { perMessageDeflate: false });
  await new Promise((r) => ws.on('open', r));

  let id = 0;
  const pending = new Map();
  const events = new Map();
  ws.on('message', (raw) => {
    const msg = JSON.parse(raw.toString());
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    } else if (msg.method && events.has(msg.method)) {
      events.get(msg.method).forEach((fn) => fn(msg.params));
      events.delete(msg.method);
    }
  });
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const mid = ++id;
      pending.set(mid, resolve);
      ws.send(JSON.stringify({ id: mid, method, params }));
    });
  const once = (method) =>
    new Promise((resolve) => {
      if (!events.has(method)) events.set(method, []);
      events.get(method).push(resolve);
    });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
  });

  const loaded = once('Page.loadEventFired');
  await send('Page.navigate', { url });
  await loaded;
  await wait(1600);

  // scroll the page so lazy images decode, then force reveals in
  await send('Runtime.evaluate', {
    expression: `(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += window.innerHeight * 0.8) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 90));
      }
      window.scrollTo(0, h);
      await new Promise(r => setTimeout(r, 500));
      document.querySelectorAll('[data-reveal]').forEach(e=>e.classList.add('is-in'));
      document.querySelectorAll('.chapter').forEach(e=>e.classList.add('is-in'));
      window.scrollTo(0,0);
      await new Promise(r => setTimeout(r, 400));
    })()`,
    awaitPromise: true,
  });
  await wait(900);

  const metrics = await send('Page.getLayoutMetrics');
  const contentH = Math.ceil(metrics.cssContentSize.height);

  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: full,
    clip: clipY !== null
      ? { x: 0, y: clipY, width, height: clipH ?? height, scale: 1 }
      : full
        ? { x: 0, y: 0, width, height: contentH, scale: 1 }
        : undefined,
  });

  writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log(`saved ${out}  ${width}x${full ? contentH : height}`);

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  chrome.kill();
  process.exit(1);
});