const THEME_USAGE = `Bruk:
  jokul theme generate <hex> [--name <navn>] [--title <tittel>] [--out <fil>] [--no-dark]
  jokul theme build <temafil> [--out <mappe>]

generate  Lag en temafil fra en merkevarefarge. Uten --out skrives JSON til terminalen.
build     Skriv token-JSON til src/tokens/brands/ og Sass til src/styles/theme/brands/<navn>/.
          --out erstatter resultatrotens src-mappe.


Eksempler:
  jokul theme generate "#006F4E" --name mitt-tema --out theme.json
  jokul theme build theme.json`;

export async function runThemeCommand([command, ...args]) {
    if (
        !command ||
        [command, ...args].some((arg) => arg === "--help" || arg === "-h")
    ) {
        console.log(THEME_USAGE);
        return 0;
    }
    try {
        if (command === "generate") {
            const { runGenerate } = await import(
                "../build/es/theme/cli/generate.js"
            );
            return await runGenerate(args);
        }
        if (command === "build") {
            const { runBuild } = await import("../build/es/theme/cli/build.js");
            return await runBuild(args);
        }
        console.error(`Ukjent kommando: theme ${command}\n\n${THEME_USAGE}`);
    } catch (error) {
        if (
            command === "build" &&
            error.code === "ERR_MODULE_NOT_FOUND" &&
            error.message.includes("Cannot find package 'style-dictionary'")
        ) {
            console.error(
                "Temabygging krever Style Dictionary. Installer med: pnpm add -D style-dictionary@^5.5.0",
            );
        } else {
            console.error(error.message);
        }
    }
    return 1;
}
