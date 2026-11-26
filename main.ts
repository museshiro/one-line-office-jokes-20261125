import { mkdirSync, writeFileSync } from "node:fs";

const line = "Our coffee machine's descale warning has been blinking so long "
  + "it's now the closest thing this office has to a long-term plan.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
