// One Star, Written in Sap — make.fun bounty
// u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
//
// Writes a single line of text (1-279 characters) to /output/entry.txt:
// a one-star review written by a houseplant about its human owner.
// Deterministic: the line is a fixed string; the program only validates
// its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "One star. My owner waters me on a schedule he found online, for a different plant, in a pot with no drainage — so I have spent a year drowning, punctually, every Sunday, while he tells guests I'm 'low maintenance.'";

const chars = [...LINE].length;
if (chars < 1 || chars > 279) {
  throw new Error(`entry must be 1-279 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
