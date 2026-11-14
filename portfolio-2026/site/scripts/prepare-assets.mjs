import sharp from 'sharp';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const cwd = process.cwd();
const out = (p) => path.join(cwd, 'public', p);
const srcPortrait = path.resolve(cwd, '../../Monalisha(Me) copy.JPG');

await mkdir(out('img'), { recursive: true });
await mkdir(out('og'), { recursive: true });

for (const [width, height, name] of [
  [1200, 1500, 'portrait-1200.webp'],
  [800, 1000, 'portrait-800.webp'],
]) {
  await sharp(srcPortrait)
    .resize(width, height, { fit: 'cover', position: 'top' })
    .modulate({ saturation: 0.62, brightness: 1.02 })
    .webp({ quality: 82, effort: 5 })
    .toFile(out(`img/${name}`));
}

await copyFile(
  path.resolve(cwd, '../../Profile.pdf'),
  out('Profile.pdf'),
);

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#101010"/>
  <rect x="6" y="6" width="52" height="52" fill="none" stroke="#D8FF4F" stroke-width="1"/>
  <text x="32" y="43" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#F4F1EA">MC</text>
</svg>`;

await writeFile(out('favicon.svg'), favicon);
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile(out('favicon-180.png'));

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const cards = [
  {
    file: 'default',
    kicker: 'MONALISHA CHATTERJEE  ·  SENIOR PRODUCT DESIGNER',
    title: ['Design that holds up', 'when you look closer.'],
    foot: 'PORTFOLIO 2026',
    accent: '#2547FF',
    chip: 'RESEARCH → STRUCTURE → INTERFACE → SYSTEM',
  },
  {
    file: 'engagement',
    kicker: 'CASE STUDY  ·  2026',
    title: ['One platform,', 'four kinds of loyalty.'],
    foot: 'DESIGNING FOR ENGAGEMENT',
    accent: '#2547FF',
    chip: '+42% ENGAGEMENT  ·  +67% POINT USE',
  },
  {
    file: 'wallet',
    kicker: 'CASE STUDY  ·  JABU (YC S21)',
    title: ['Designing trust for', 'cash-first merchants.'],
    foot: 'MERCHANT WALLET',
    accent: '#D8FF4F',
    chip: '3 SURFACES  ·  6 MONEY PATHS',
  },
  {
    file: 'dashboard',
    kicker: 'CASE STUDY  ·  JABU CRM',
    title: ['A queue,', 'not a feature list.'],
    foot: 'AGENT DASHBOARD',
    accent: '#D8FF4F',
    chip: '75% INDEPENDENT TASK COMPLETION',
  },
  {
    file: 'systems',
    kicker: 'SYSTEMS  ·  DESIGN LIBRARY',
    title: ['The system behind', 'the screens.'],
    foot: 'TOKENS · COMPONENTS · QA',
    accent: '#2547FF',
    chip: 'ONE LIBRARY, MANY SURFACES',
  },
  {
    file: 'about',
    kicker: 'ABOUT  ·  BENGALURU, INDIA',
    title: ['Finance first.', 'Then design.'],
    foot: 'MONALISHA CHATTERJEE',
    accent: '#D8FF4F',
    chip: 'SENIOR PRODUCT DESIGNER',
  },
];

for (const card of cards) {
  const titleLines = card.title
    .map(
      (line, index) =>
        `<text x="72" y="${232 + index * 96}" font-family="Georgia, 'Times New Roman', serif" font-size="82" fill="#101010" letter-spacing="-2">${escapeXml(line)}</text>`,
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#F4F1EA"/>
    <rect x="0" y="0" width="1200" height="630" fill="none" stroke="rgba(16,16,16,0.12)" stroke-width="1"/>
    <text x="72" y="62" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" letter-spacing="2" fill="#5C5A54">${escapeXml(card.kicker)}</text>
    <text x="1128" y="62" text-anchor="end" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" letter-spacing="2" fill="#5C5A54">MC / 2026</text>
    <line x1="72" y1="92" x2="1128" y2="92" stroke="rgba(16,16,16,0.18)" stroke-width="1"/>
    ${titleLines}
    <line x1="72" y1="470" x2="1128" y2="470" stroke="rgba(16,16,16,0.18)" stroke-width="1"/>
    <text x="72" y="512" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" letter-spacing="2.4" fill="#5C5A54">${escapeXml(card.foot)}</text>
    <rect x="72" y="548" width="530" height="34" fill="${card.accent}"/>
    <text x="90" y="571" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="1.4" fill="#101010">${escapeXml(card.chip)}</text>
    <text x="1128" y="571" text-anchor="end" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" letter-spacing="1.4" fill="#5C5A54">MONALISHA-PORTFOLIO.VERCEL.APP</text>
    <g transform="translate(1040 330) rotate(-9)">
      <rect x="0" y="0" width="132" height="84" fill="#FBFAF4" stroke="rgba(16,16,16,0.22)"/>
      <rect x="-14" y="14" width="132" height="84" fill="#FBFAF4" stroke="rgba(16,16,16,0.18)"/>
      <rect x="-28" y="28" width="132" height="84" fill="#FBFAF4" stroke="rgba(16,16,16,0.14)"/>
      <rect x="-42" y="42" width="132" height="84" fill="#FBFAF4" stroke="rgba(16,16,16,0.1)"/>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, palette: false })
    .toFile(out(`og/${card.file}.png`));
}

console.log('Assets written to public/.');
