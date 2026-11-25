import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review written by a houseplant about its human owner.
// v4 (final): "One star, and only because her showers are steamy: she moved me to a windowless bathroom 'for the humidity,' and now I photosynthesize by night-light."
const ENTRY =
  "One star, and only because her showers are steamy: she moved me to a windowless bathroom 'for the humidity,' and now I photosynthesize by night-light.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
