import { escapeRegExp } from "../utils.mjs";

// Fallback-navnet kommer først (lengst-først) slik at det ikke blir delvis
// overskrevet av det kortere primærnavnet.
const FONT_FAMILY_REPLACEMENTS = [
    ["Fremtind Material Symbols Fallback", "Jokul Icons Fallback"],
    ["Fremtind Material Symbols", "Jokul Icons"],
];

export function applyFontFamilyReplacements(text) {
    let next = text;
    let count = 0;

    for (const [from, to] of FONT_FAMILY_REPLACEMENTS) {
        const pattern = new RegExp(escapeRegExp(from), "g");
        next = next.replace(pattern, () => {
            count += 1;
            return to;
        });
    }

    return { text: next, count };
}
