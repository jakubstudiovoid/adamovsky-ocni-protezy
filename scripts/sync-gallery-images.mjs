import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/images");

const assets = [
  {
    file: "iris-blue.jpg",
    url: "https://i.imgur.com/0geAKjR.jpeg",
  },
  {
    file: "iris-brown.jpg",
    url: "https://i.imgur.com/xg9EXXx.jpeg",
  },
  {
    file: "iris-green.jpg",
    url: "https://i.imgur.com/s08hvCY.jpeg",
  },
  {
    file: "collection.jpg",
    url: "https://i.imgur.com/liEHMiH.jpeg",
  },
];

async function download(url) {
  const res = await fetch(url, {
    headers: { Accept: "image/jpeg,image/*;q=0.8" },
  });
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

await mkdir(outDir, { recursive: true });

for (const asset of assets) {
  const bytes = await download(asset.url);
  const dest = resolve(outDir, asset.file);
  await writeFile(dest, bytes);
  console.log(`gallery: wrote ${asset.file} (${bytes.length} B)`);
}
