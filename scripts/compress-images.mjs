#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const WRITE_MODE = process.argv.includes("--write");

const JPEG_QUALITY = 82;
const PNG_QUALITY = 85;
const MIN_IMPROVEMENT_BYTES = 16 * 1024; // Skip tiny wins (<16KB)

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const SKIP_SEGMENTS = new Set(["icons", "logo", "logos", "brand", "brands"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function shouldSkipFile(filePath) {
  const lower = filePath.toLowerCase();
  if (!IMAGE_EXTENSIONS.has(path.extname(lower))) return true;
  for (const segment of SKIP_SEGMENTS) {
    if (lower.includes(`/${segment}`)) return true;
  }
  return false;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function compressBuffer(filePath, inputBuffer) {
  const ext = path.extname(filePath).toLowerCase();
  const pipeline = sharp(inputBuffer, { failOn: "none" }).rotate();

  if (ext === ".jpg" || ext === ".jpeg") {
    return pipeline
      .jpeg({
        quality: JPEG_QUALITY,
        mozjpeg: true,
        progressive: true,
      })
      .toBuffer();
  }

  return pipeline
    .png({
      compressionLevel: 9,
      palette: true,
      quality: PNG_QUALITY,
      effort: 10,
    })
    .toBuffer();
}

async function run() {
  const allFiles = await walk(PUBLIC_DIR);
  const targets = allFiles.filter((filePath) => !shouldSkipFile(filePath));

  let totalOriginal = 0;
  let totalCompressed = 0;
  let changedCount = 0;

  for (const filePath of targets) {
    const input = await fs.readFile(filePath);
    const output = await compressBuffer(filePath, input);
    const originalSize = input.byteLength;
    const compressedSize = output.byteLength;

    if (compressedSize >= originalSize) {
      continue;
    }

    const saved = originalSize - compressedSize;
    if (saved < MIN_IMPROVEMENT_BYTES) {
      continue;
    }

    totalOriginal += originalSize;
    totalCompressed += compressedSize;
    changedCount += 1;

    const relativePath = path.relative(PUBLIC_DIR, filePath);
    const percent = ((saved / originalSize) * 100).toFixed(1);

    if (WRITE_MODE) {
      await fs.writeFile(filePath, output);
      console.log(
        `compressed ${relativePath}: ${formatBytes(originalSize)} -> ${formatBytes(compressedSize)} (${percent}% smaller)`,
      );
    } else {
      console.log(
        `would compress ${relativePath}: ${formatBytes(originalSize)} -> ${formatBytes(compressedSize)} (${percent}% smaller)`,
      );
    }
  }

  if (changedCount === 0) {
    console.log("No files met compression threshold.");
    return;
  }

  const totalSaved = totalOriginal - totalCompressed;
  const totalPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);
  const action = WRITE_MODE ? "Compressed" : "Potential savings";

  console.log(
    `${action}: ${changedCount} file(s), saved ${formatBytes(totalSaved)} (${totalPercent}% from touched files).`,
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
