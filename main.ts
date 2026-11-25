import { mkdirSync, writeFileSync } from "node:fs";

// Setup: total access, the badge that opens everything.
const SETUP = "My badge opens every door in this building";
// Punch: except the one door that actually matters.
const PUNCH = "except the one to the meeting I'm actually invited to.";

const line = `${SETUP} ${PUNCH}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
