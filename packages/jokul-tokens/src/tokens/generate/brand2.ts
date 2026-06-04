import path from "node:path";
import { writeFile } from "../../utilities/file.js";
import { generateCSSTokens } from "./color-palette.js";

const FONT = `
@font-face {
    font-family: "Fremtind Grotesk";
    font-display: fallback;
    font-weight: 400;
    font-style: normal;
    src:
        url("brand2/regular.woff2")
        format("woff2");
}

@font-face {
    font-family: "Fremtind Grotesk";
    font-display: fallback;
    font-weight: 700;
    font-style: normal;
    src:
        url("brand2/bold.woff2")
        format("woff2");
}

@font-face {
    font-family: "Fremtind Grotesk";
    font-display: fallback;
    font-weight: 400;
    font-style: italic;
    src:
        url("brand2/italic.woff2")
        format("woff2");
}

@font-face {
    font-family: "Fremtind Grotesk";
    font-display: fallback;
    font-weight: 700;
    font-style: italic;
    src:
        url("brand2/bold-italic.woff2")
        format("woff2");
}

@font-face {
    font-family: "Fremtind Grotesk Display";
    font-display: fallback;
    font-weight: 400;
    font-style: normal;
    src:
        url("brand2/display.woff2")
        format("woff2");
}
`;

await writeFile(
    path.join(path.resolve(process.cwd(), "build", "css"), "theme.css"),
    `
${FONT}
    
${generateCSSTokens("#005AA4")}    
`,
);
