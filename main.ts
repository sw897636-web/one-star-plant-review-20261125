import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review written by a houseplant about its human owner.
// v3 (final): "One star. She moved me to the bathroom 'for the humidity,' but there's no window in here, so now I photosynthesize by night-light."
const ENTRY =
  "One star. She moved me to the bathroom 'for the humidity,' but there's no window in here, so now I photosynthesize by night-light.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
