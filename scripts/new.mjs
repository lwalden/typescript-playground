#!/usr/bin/env node
// Usage: node scripts/new.mjs <filename>
// Or via npm: npm run new -- <filename>
// Or via VS Code task: Ctrl+Shift+P > "Run Task" > "New playground file"

import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const name = process.argv[2] || "scratch";
const safeName = name.replace(/\.ts$/, "").replace(/[^a-zA-Z0-9_\-]/g, "-");
const outDir = join(root, "src");
const outPath = join(outDir, `${safeName}.ts`);

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

if (existsSync(outPath)) {
  console.log(`Already exists: src/${safeName}.ts`);
  process.exit(0);
}

const template = `// ${safeName}.ts
// Run:   Ctrl+Shift+B  (or F5 to debug)
// ─────────────────────────────────────
export {};

function main() {
  console.log("${safeName} — ready");
}

main();
`;

writeFileSync(outPath, template, "utf8");
console.log(`Created: src/${safeName}.ts`);
