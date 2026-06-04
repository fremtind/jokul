import path from "node:path";
import { writeFile } from "../../utilities/file.js";
import { generateCSSTokens } from "./color-palette.js";

await writeFile(
    path.join(path.resolve(process.cwd(), "build", "css"), "theme.css"),
    generateCSSTokens("#1b1917"),
);
