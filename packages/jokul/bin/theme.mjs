import { join } from "node:path";
import { parseArgs } from "node:util";

const THEME_USAGE = `Bruk:
  jokul theme generate <hex> [--name <navn>] [--title <tittel>] [--out <fil>] [--method wcag|oklch] [--no-dark]
  jokul theme build <temafil ...> [--out <mappe>] [--selector <selektor>] [--css] [--index] [--types]
  jokul theme validate <temafil ...>`;

function printThemeHelp() {
    console.log(`Jøkul temaer

${THEME_USAGE}

generate  Lager en temafil fra én merkevarefarge. Uten --out skrives temaet til stdout.
build     Bygger hver temafil til <out>/<navn>/. Ligger det en fonts/-mappe ved
          siden av temafilen, kopieres *.woff2-filene til <out>/<navn>/fonts/.
            --css       kompilerer <out>/<navn>/theme.css (krever sass)
            --index     skriver <out>/_index.scss, <out>/manifest.json og, med --css, <out>/all.css
            --types     skriver <out>/brands.d.ts som utvider JokulBrands
validate  Sjekker at temafilene er gyldige.

Eksempler:
  jokul theme generate "#006F4E" --name mitt-tema --out themes/mitt-tema/theme.json
  jokul theme build themes/*/theme.json --out dist/themes --css --index --types
  jokul theme validate themes/*/theme.json
`);
}

async function importBuildModule() {
    try {
        return await import("../build/es/theme/node/index.js");
    } catch (error) {
        if (
            error?.code === "ERR_MODULE_NOT_FOUND" &&
            String(error.message).includes("'style-dictionary'")
        ) {
            throw new Error(
                "`jokul theme build` krever `style-dictionary`. Installer det med `pnpm add -D style-dictionary`.",
            );
        }
        throw error;
    }
}

async function loadThemeFiles(paths) {
    const { formatThemeFileErrors, loadThemeFile } = await import(
        "../build/es/theme/node/files.js"
    );
    const results = await Promise.all(paths.map(loadThemeFile));

    for (const result of results) {
        if (!result.valid) {
            console.error(formatThemeFileErrors(result));
        }
    }

    return results;
}

async function runGenerate(args) {
    const { values, positionals } = parseArgs({
        args,
        allowPositionals: true,
        options: {
            name: { type: "string", default: "mitt-tema" },
            title: { type: "string" },
            out: { type: "string" },
            method: { type: "string", default: "wcag" },
            "no-dark": { type: "boolean", default: false },
        },
    });
    const {
        generatePalette,
        isHex,
        isThemeName,
        normalizeHex,
        THEME_FILE_VERSION,
    } = await import("../build/es/theme/index.js");

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

    if (values.method !== "wcag" && values.method !== "oklch") {
        console.error(
            `Ugyldig metode: ${values.method}. Bruk wcag eller oklch.`,
        );
        return 1;
    }

    const theme = {
        version: THEME_FILE_VERSION,
        name: values.name,
        ...(values.title && { title: values.title }),
        colorTokens: generatePalette(baseColor, values.method),
        includeDarkMode: !values["no-dark"],
    };

    if (!values.out) {
        console.log(JSON.stringify(theme, null, 4));
        return 0;
    }

    const { writeThemeFile } = await import("../build/es/theme/node/files.js");
    await writeThemeFile(theme, values.out);
    console.log(`Skrev ${values.out}`);
    return 0;
}

async function runBuild(args) {
    const { values, positionals } = parseArgs({
        args,
        allowPositionals: true,
        options: {
            out: { type: "string", default: "." },
            selector: { type: "string" },
            css: { type: "boolean", default: false },
            index: { type: "boolean", default: false },
            types: { type: "boolean", default: false },
        },
    });

    if (positionals.length === 0) {
        console.error(`Oppgi minst én temafil.\n\n${THEME_USAGE}`);
        return 1;
    }

    const { buildThemes } = await importBuildModule();
    const results = await loadThemeFiles(positionals);
    if (results.some((result) => !result.valid)) {
        return 1;
    }

    const manifest = await buildThemes(results, {
        outDir: values.out,
        selector: values.selector,
        css: values.css,
        index: values.index,
        types: values.types,
    });

    for (const { name } of manifest.themes) {
        console.log(`Bygget ${name} til ${join(values.out, name)}`);
    }
    return 0;
}

async function runValidate(args) {
    const { positionals } = parseArgs({ args, allowPositionals: true });

    if (positionals.length === 0) {
        console.error(`Oppgi minst én temafil.\n\n${THEME_USAGE}`);
        return 1;
    }

    const results = await loadThemeFiles(positionals);
    for (const result of results) {
        if (result.valid) {
            console.log(`✓ ${result.path}`);
        }
    }

    return results.every((result) => result.valid) ? 0 : 1;
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
        case "build":
            return runBuild(rest);
        case "validate":
            return runValidate(rest);
        default:
            console.error(
                `Ukjent kommando: theme ${subcommand}\n\n${THEME_USAGE}`,
            );
            return 1;
    }
}
