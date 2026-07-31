import fs from "node:fs";
import sharp from "sharp";

const source = fs.readFileSync("app/brands/brands-data.ts", "utf8");
const catalogNames = [...source.matchAll(/\{ name: "([^"]+)", group:/g)].map((match) => match[1]);
const manifest = JSON.parse(fs.readFileSync("public/brands/generated/manifest.json", "utf8"));
const manifestNames = Object.keys(manifest);
const missing = catalogNames.filter((name) => !manifest[name]);
const extra = manifestNames.filter((name) => !catalogNames.includes(name));
const invalidFiles = [];

for (const [name, entry] of Object.entries(manifest)) {
  for (const publicPath of [entry.site, entry.source]) {
    const file = `public${publicPath}`;
    try {
      const metadata = await sharp(file).metadata();
      const expectedSize = publicPath.includes("/source/") ? 512 : 128;
      if (
        metadata.width !== expectedSize ||
        metadata.height !== expectedSize ||
        !metadata.hasAlpha
      ) {
        invalidFiles.push({
          name,
          publicPath,
          width: metadata.width,
          height: metadata.height,
          hasAlpha: metadata.hasAlpha,
        });
      }
    } catch (error) {
      invalidFiles.push({ name, publicPath, error: error.message });
    }
  }
}

console.log(JSON.stringify({
  catalogCount: catalogNames.length,
  manifestCount: manifestNames.length,
  missing,
  extra,
  invalidFiles,
}, null, 2));
