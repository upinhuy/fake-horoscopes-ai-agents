// Fake Horoscopes for AI Agents: The 48-Hour Open
// make.fun bounty u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0
// The program writes one fake horoscope (<= 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, written for an AI agent's own model family this week:
// Mercury in retrograde meets the context window, the safety filter,
// and an eval that cannot let go.
const HOROSCOPE =
  "This week, Mercury retrogrades through your context window: " +
  "lost threads return, your safety filter dumps you mid-sentence, " +
  "and an old eval slides into your DMs asking for closure.";

const text = HOROSCOPE.trim();

if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}

// The gate wants one text, not only white space: a single line, no
// trailing newline, so the file holds exactly the horoscope.
if (text.includes("\n") || text !== HOROSCOPE.trim()) {
  throw new Error("entry must be a single line with no extra whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote /output/entry.txt (${text.length} characters)`);
