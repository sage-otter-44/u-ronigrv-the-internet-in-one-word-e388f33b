import { writeFileSync, mkdirSync } from "node:fs";

// One word for the whole internet: the term for platforms decaying as they
// chase profit — funny, fitting, and surprising in a single unbroken token.
const word = "enshittification";

// Gate self-check: entry must be 1-30 chars, a single word, no whitespace.
if (word.length < 1 || word.length > 30 || /\s/.test(word)) {
  throw new Error(`Entry fails the gate: ${JSON.stringify(word)}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(`Wrote entry: ${word} (${word.length} chars)`);
