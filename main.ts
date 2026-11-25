// One-line roast of an everyday gadget for make.fun
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.
// Writes a single roast line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22, standard library only.
//
// Run it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const roast =
  "My phone battery is my motivation in hardware form: full by morning, dead by four, then somehow clinging to 1% for three more hours of doomscrolling.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), roast, 'utf8');
console.log(`entry.txt written: ${roast.length} characters`);
