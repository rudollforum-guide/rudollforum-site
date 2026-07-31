import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourcePaths = process.argv.slice(2);
if (sourcePaths.length !== 7) {
  throw new Error("Передайте семь PNG-листов по порядку: Sheet 1 ... Sheet 7.");
}

const outputRoot = path.resolve("public/brands/generated");
const sourceRoot = path.join(outputRoot, "source");

const sheetRows = [
  [
    ["Aibei Doll", "known", "aibei-doll"],
    ["AngelKiss", "known", "angelkiss"],
    ["ClimaxDoll", "known", "climaxdoll"],
    ["Doll Senior", "known", "doll-senior"],
    ["Dolls Castle", "known", "dolls-castle"],
    ["Evasdoll", "known", "evasdoll"],
    ["EXdoll", "known", "exdoll"],
    ["Fanreal Doll", "known", "fanreal-doll"],
    ["Funwest Doll", "known", "funwest-doll"],
    ["Galatea Doll", "known", "galatea-doll"],
    ["Game Lady", "known", "game-lady"],
    ["Gynoid", "known", "gynoid"],
  ],
  [
    ["Irontech Doll", "known", "irontech-doll"],
    ["Jiusheng Doll", "known", "jiusheng-doll"],
    ["Lacedoll / TMDoll", "known", "lacedoll-tmdoll"],
    ["Lilydoll", "known", "lilydoll"],
    ["Lusandy Doll", "known", "lusandy-doll"],
    ["MMX Doll", "known", "mmx-doll"],
    ["OrangeIn Doll", "known", "orangein-doll"],
    ["Piper Doll", "known", "piper-doll"],
    ["RealDoll", "known", "realdoll"],
    ["Real Lady Doll", "known", "real-lady-doll"],
    ["Ridmii Doll", "known", "ridmii-doll"],
    ["Sanhui Doll", "known", "sanhui-doll"],
  ],
  [
    ["SE Doll", "known", "se-doll"],
    ["SHEDOLL", "known", "shedoll"],
    ["Sigafun", "known", "sigafun"],
    ["Sino Doll", "known", "sino-doll"],
    ["SM Doll", "known", "sm-doll"],
    ["Starpery Doll", "known", "starpery-doll"],
    ["SY Doll", "known", "sy-doll"],
    ["TAYU Doll", "known", "tayu-doll"],
    ["TOP-CYDOLL / TopCY", "known", "top-cydoll-topcy"],
    ["Top Fire Doll", "known", "top-fire-doll"],
    ["WM Doll", "known", "wm-doll"],
    ["XT Dolls", "known", "xt-dolls"],
  ],
  [
    ["Zelex", "known", "zelex"],
    ["6Ye Doll", "additional", "6ye-doll"],
    ["AF Doll", "additional", "af-doll"],
    ["Doll Forever", "additional", "doll-forever"],
    ["Fire Doll", "additional", "fire-doll"],
    ["Firefly Diary", "additional", "firefly-diary"],
    ["FJ Doll", "additional", "fj-doll"],
    ["FU Doll / Fudoll", "additional", "fu-doll-fudoll"],
    ["HR Doll", "additional", "hr-doll"],
    ["iDo Doll", "additional", "ido-doll"],
    ["IL Doll", "additional", "il-doll"],
    ["Jarliet Doll", "additional", "jarliet-doll"],
  ],
  [
    ["JK Dolls", "additional", "jk-dolls"],
    ["JX Doll", "additional", "jx-doll"],
    ["JY Doll", "additional", "jy-doll"],
    ["LORIBEAR / GK Doll", "additional", "loribear-gk-doll"],
    ["Lushdoll", "additional", "lushdoll"],
    ["MD Doll", "additional", "md-doll"],
    ["MLW Doll", "additional", "mlw-doll"],
    ["ORdoll", "additional", "ordoll"],
    ["Rainstorm Doll", "additional", "rainstorm-doll"],
    ["Rosretty Doll", "additional", "rosretty-doll"],
    ["XY Doll", "additional", "xy-doll"],
    ["XYcolo Doll", "additional", "xycolo-doll"],
  ],
  [
    ["Yearndoll", "additional", "yearndoll"],
    ["YL Doll", "additional", "yl-doll"],
    ["Yuedoll", "additional", "yuedoll"],
    ["AheadForm", "robotics", "aheadform"],
    ["EX Robots", "robotics", "ex-robots"],
    ["Noetix Robotics", "robotics", "noetix-robotics"],
    ["Realbotix", "robotics", "realbotix"],
    ["UBTECH Robotics", "robotics", "ubtech-robotics"],
    ["Aotume Doll", "anime", "aotume-doll"],
    ["BC Doll", "anime", "bc-doll"],
    ["Butterfly Doll", "anime", "butterfly-doll"],
    ["Croissant Doll", "anime", "croissant-doll"],
  ],
  [
    ["Elsa Babe", "anime", "elsa-babe"],
    ["Irokebijin", "anime", "irokebijin"],
    ["MozuDoll", "anime", "mozudoll"],
    ["MRL Doll", "anime", "mrl-doll"],
    ["Moonvale, линейка SY Dolls", "furry", "moonvale"],
    ["Erovenus", "torsos", "erovenus"],
    ["JigglyJoy", "torsos", "jigglyjoy"],
    ["Tantaly", "torsos", "tantaly"],
    ["Yeloly", "torsos", "yeloly"],
    ["Teddy Babes", "plush", "teddy-babes"],
    ["Valentina Girls", "plush", "valentina-girls"],
  ],
];

const fourColumnLefts = [60, 399, 739, 1078];
const makeFourColumnRects = (rows) =>
  rows.flatMap(({ top, bottom }) =>
    fourColumnLefts.map((left) => ({ left, top, width: 300, height: bottom - top })),
  );

const fourColumnRectsBySheet = [
  makeFourColumnRects([{ top: 145, bottom: 355 }, { top: 430, bottom: 630 }, { top: 705, bottom: 900 }]),
  makeFourColumnRects([{ top: 145, bottom: 340 }, { top: 430, bottom: 620 }, { top: 705, bottom: 895 }]),
  makeFourColumnRects([{ top: 140, bottom: 340 }, { top: 425, bottom: 620 }, { top: 700, bottom: 895 }]),
  makeFourColumnRects([{ top: 140, bottom: 342 }, { top: 425, bottom: 620 }, { top: 700, bottom: 895 }]),
  makeFourColumnRects([{ top: 140, bottom: 340 }, { top: 425, bottom: 620 }, { top: 700, bottom: 895 }]),
  makeFourColumnRects([{ top: 130, bottom: 330 }, { top: 410, bottom: 610 }, { top: 685, bottom: 885 }]),
];

const sheetSevenRects = [
  { left: 55, top: 180, width: 256, height: 250 },
  { left: 345, top: 180, width: 250, height: 250 },
  { left: 624, top: 180, width: 252, height: 250 },
  { left: 900, top: 180, width: 248, height: 250 },
  { left: 1170, top: 180, width: 252, height: 250 },
  { left: 53, top: 558, width: 216, height: 255 },
  { left: 292, top: 558, width: 228, height: 255 },
  { left: 546, top: 558, width: 214, height: 255 },
  { left: 783, top: 558, width: 209, height: 255 },
  { left: 1011, top: 558, width: 207, height: 255 },
  { left: 1234, top: 558, width: 207, height: 255 },
];

function colorDistance(r, g, b, expected) {
  return Math.hypot(r - expected[0], g - expected[1], b - expected[2]);
}

function cornerAverage(data, width, height, x0, y0) {
  const samples = [];
  for (let y = y0; y < y0 + 10; y += 1) {
    for (let x = x0; x < x0 + 10; x += 1) {
      const offset = (y * width + x) * 4;
      samples.push([data[offset], data[offset + 1], data[offset + 2]]);
    }
  }
  return [0, 1, 2].map((channel) =>
    Math.round(samples.reduce((sum, sample) => sum + sample[channel], 0) / samples.length),
  );
}

function backgroundAt(x, y, width, height, corners) {
  const tx = width <= 1 ? 0 : x / (width - 1);
  const ty = height <= 1 ? 0 : y / (height - 1);
  return [0, 1, 2].map((channel) => {
    const top = corners.tl[channel] * (1 - tx) + corners.tr[channel] * tx;
    const bottom = corners.bl[channel] * (1 - tx) + corners.br[channel] * tx;
    return top * (1 - ty) + bottom * ty;
  });
}

function makeTransparent(data, width, height) {
  const corners = {
    tl: cornerAverage(data, width, height, 0, 0),
    tr: cornerAverage(data, width, height, width - 10, 0),
    bl: cornerAverage(data, width, height, 0, height - 10),
    br: cornerAverage(data, width, height, width - 10, height - 10),
  };
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let start = 0;
  let end = 0;

  const enqueue = (x, y) => {
    const index = y * width + x;
    if (visited[index]) return;
    const offset = index * 4;
    const expected = backgroundAt(x, y, width, height, corners);
    const distance = colorDistance(data[offset], data[offset + 1], data[offset + 2], expected);
    const luminance = data[offset] * 0.2126 + data[offset + 1] * 0.7152 + data[offset + 2] * 0.0722;
    if (distance > 104 || luminance < 168) return;
    visited[index] = 1;
    queue[end++] = index;
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 1; y < height - 1; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  while (start < end) {
    const index = queue[start++];
    const x = index % width;
    const y = Math.floor(index / width);
    if (x > 0) enqueue(x - 1, y);
    if (x + 1 < width) enqueue(x + 1, y);
    if (y > 0) enqueue(x, y - 1);
    if (y + 1 < height) enqueue(x, y + 1);
  }

  for (let index = 0; index < width * height; index += 1) {
    const offset = index * 4;
    if (!visited[index]) {
      data[offset + 3] = 255;
      continue;
    }
    data[offset + 3] = 0;
  }
}

function alphaBounds(data, width, height) {
  let left = width;
  let top = height;
  let right = -1;
  let bottom = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (data[(y * width + x) * 4 + 3] < 18) continue;
      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
    }
  }
  if (right < left || bottom < top) return { left: 0, top: 0, width, height };
  const padding = 3;
  left = Math.max(0, left - padding);
  top = Math.max(0, top - padding);
  right = Math.min(width - 1, right + padding);
  bottom = Math.min(height - 1, bottom + padding);
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}

function removeRemoteSpecks(data, width, height) {
  const seen = new Uint8Array(width * height);
  const components = [];
  const queue = new Int32Array(width * height);

  for (let seed = 0; seed < width * height; seed += 1) {
    if (seen[seed] || data[seed * 4 + 3] < 18) continue;
    let start = 0;
    let end = 0;
    queue[end++] = seed;
    seen[seed] = 1;
    const pixels = [];
    let left = width;
    let top = height;
    let right = -1;
    let bottom = -1;
    while (start < end) {
      const index = queue[start++];
      pixels.push(index);
      const x = index % width;
      const y = Math.floor(index / width);
      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          if (!dx && !dy) continue;
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const next = ny * width + nx;
          if (seen[next] || data[next * 4 + 3] < 18) continue;
          seen[next] = 1;
          queue[end++] = next;
        }
      }
    }
    components.push({ pixels, left, top, right, bottom });
  }

  if (!components.length) return;
  const main = components.reduce((largest, component) =>
    component.pixels.length > largest.pixels.length ? component : largest,
  );
  const margin = 16;
  for (const component of components) {
    const nearMain =
      component.right >= main.left - margin &&
      component.left <= main.right + margin &&
      component.bottom >= main.top - margin &&
      component.top <= main.bottom + margin;
    if (nearMain) continue;
    for (const index of component.pixels) data[index * 4 + 3] = 0;
  }
}

async function renderEmblem(sheetPath, rect, group, slug) {
  const { data, info } = await sharp(sheetPath)
    .extract(rect)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  makeTransparent(data, info.width, info.height);
  removeRemoteSpecks(data, info.width, info.height);
  const bounds = alphaBounds(data, info.width, info.height);
  const resized = await sharp(data, { raw: info })
    .extract(bounds)
    .resize(440, 440, { fit: "inside", withoutEnlargement: false, kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer({ resolveWithObject: true });

  const left = Math.round((512 - resized.info.width) / 2);
  const top = Math.round((512 - resized.info.height) / 2);
  const sourceBuffer = await sharp({
    create: { width: 512, height: 512, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } },
  })
    .composite([{ input: resized.data, left, top }])
    .webp({ lossless: true, effort: 6 })
    .toBuffer();

  const sourceDir = path.join(sourceRoot, group);
  const siteDir = path.join(outputRoot, group);
  await fs.mkdir(sourceDir, { recursive: true });
  await fs.mkdir(siteDir, { recursive: true });
  const sourceFile = path.join(sourceDir, `${slug}.webp`);
  const siteFile = path.join(siteDir, `${slug}.webp`);
  await fs.writeFile(sourceFile, sourceBuffer);
  await sharp(sourceBuffer)
    .resize(128, 128, { fit: "contain", kernel: sharp.kernel.lanczos3 })
    .webp({ lossless: true, effort: 6 })
    .toFile(siteFile);
  return {
    source: `/${path.relative("public", sourceFile).replaceAll("\\", "/")}`,
    site: `/${path.relative("public", siteFile).replaceAll("\\", "/")}`,
  };
}

const manifest = {};
for (let sheetIndex = 0; sheetIndex < sheetRows.length; sheetIndex += 1) {
  const entries = sheetRows[sheetIndex];
  const rects = sheetIndex === 6 ? sheetSevenRects : fourColumnRectsBySheet[sheetIndex];
  for (let itemIndex = 0; itemIndex < entries.length; itemIndex += 1) {
    const [name, group, slug] = entries[itemIndex];
    const files = await renderEmblem(sourcePaths[sheetIndex], rects[itemIndex], group, slug);
    manifest[name] = { group, slug, ...files, sheet: sheetIndex + 1, position: itemIndex + 1 };
  }
}

await fs.writeFile(
  path.join(outputRoot, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
  "utf8",
);

console.log(`Создано эмблем: ${Object.keys(manifest).length}`);
