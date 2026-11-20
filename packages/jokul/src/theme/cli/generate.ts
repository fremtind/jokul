import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { parseArgs } from "node:util";
import { generatePalette } from "../generation/generate.js";
import { isHex, isThemeName, normalizeHex } from "../utils.js";

export async function runGenerate(args: string[]): Promise<number> {
    const { values, positionals } = parseArgs({
        args,
        allowPositionals: true,
        options: {
            name: { type: "string", default: "mitt-tema" },
            title: { type: "string" },
            out: { type: "string" },
            "no-dark": { type: "boolean", default: false },
        },
    });

    const [color] = positionals;
    if (positionals.length !== 1 || color === undefined) {
        console.error("Oppgi nøyaktig én farge.");
        return 1;
    }

    const baseColor = normalizeHex(color);
    if (!isHex(baseColor)) {
        console.error(`Ugyldig farge: ${color}. Bruk formatet #RRGGBB.`);
        return 1;
    }
    if (!isThemeName(values.name)) {
        console.error(
            `Ugyldig navn: ${values.name}. Bruk kebab-case som starter med en bokstav, f.eks. mitt-tema.`,
        );
        return 1;
    }

    const theme = {
        version: "1",
        name: values.name,
        ...(values.title && { title: values.title }),
        colorTokens: generatePalette(baseColor),
        includeDarkMode: !values["no-dark"],
    };
    const json = JSON.stringify(theme, null, 4);
    if (!values.out) {
        console.log(json);
        return 0;
    }

    await mkdir(dirname(values.out), { recursive: true });
    await writeFile(values.out, `${json}\n`);
    console.log(`Skrev ${values.out}`);
    return 0;
}
