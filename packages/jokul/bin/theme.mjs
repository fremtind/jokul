import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { parseArgs } from "node:util";

const THEME_USAGE = `Bruk:
  jokul theme generate "<hex>" [--name <navn>] [--title <tittel>] [--out <fil>] [--no-dark]`;

function printThemeHelp() {
    console.log(`Jøkul temaer

${THEME_USAGE}

generate  Lager en temafil fra én merkevarefarge. Uten --out skrives temaet til terminalen.

Eksempler:
  jokul theme generate "#006F4E" --name mitt-tema --out themes/mitt-tema/theme.json
`);
}

async function runGenerate(args) {
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
    const { generatePalette, isHex, isThemeName, normalizeHex } = await import(
        "../build/es/theme/index.js"
    );

    if (positionals.length !== 1) {
        console.error(`Oppgi nøyaktig én farge.\n\n${THEME_USAGE}`);
        return 1;
    }

    const baseColor = normalizeHex(positionals[0]);
    if (!isHex(baseColor)) {
        console.error(
            `Ugyldig farge: ${positionals[0]}. Bruk formatet #RRGGBB.`,
        );
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

    if (!values.out) {
        console.log(JSON.stringify(theme, null, 4));
        return 0;
    }

    await mkdir(dirname(values.out), { recursive: true });
    await writeFile(values.out, `${JSON.stringify(theme, null, 4)}\n`);
    console.log(`Skrev ${values.out}`);
    return 0;
}

export async function runThemeCommand(argv) {
    const [subcommand, ...rest] = argv;

    if (!subcommand || subcommand === "--help" || subcommand === "-h") {
        printThemeHelp();
        return 0;
    }

    switch (subcommand) {
        case "generate":
            return runGenerate(rest);
        default:
            console.error(
                `Ukjent kommando: theme ${subcommand}\n\n${THEME_USAGE}`,
            );
            return 1;
    }
}
