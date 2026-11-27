import type { JokulThemeFont } from "../types.js";
import registry from "./fontRegistry.json" with { type: "json" };

// TODO: Erstatt fontoppslaget når brukerne kan laste opp egne fontfiler.
export function resolveFontFaces(choice: JokulThemeFont) {
    if (!Object.hasOwn(registry, choice.family)) {
        throw new Error(`Ukjent fontfamilie: ${choice.family}.`);
    }
    const { regular, bold } = registry[choice.family as keyof typeof registry];
    if (
        Number(choice.weight.normal) !== regular.weight ||
        Number(choice.weight.bold) !== bold.weight
    ) {
        throw new Error(
            `Ustøttede fontvekter for ${choice.family}: ${choice.weight.normal}/${choice.weight.bold}.`,
        );
    }
    return {
        regular: { type: "brandFontFace", value: regular },
        bold: { type: "brandFontFace", value: bold },
    };
}
