import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent, written fresh
// for make.fun's "The joke about the demo" bounty.
const JOKE =
  "My AI coding agent wrote the whole sprint, reviewed its own pull request, approved it, and merged it — my only job at standup is to say 'we' with a straight face.";

// The entry must be 1-280 characters counted as Unicode code points.
// Fail loudly instead of shipping an invalid entry.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke is ${codePoints} code points, must be 1-280`);
}
if (JOKE.trim() !== JOKE || JOKE.includes("\n")) {
  throw new Error("joke must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Read back and confirm the file holds exactly the joke — no trailing
// newline, no encoding surprise — so both grader runs agree byte for byte.
if (readFileSync(outPath, "utf8") !== JOKE) {
  throw new Error("entry.txt does not match the joke exactly");
}
