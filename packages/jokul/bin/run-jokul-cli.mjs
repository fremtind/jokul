import { runImportPathsCodemod } from "../codemods/import-paths.mjs";

function printCodemodHelp(commandName) {
    console.log(`Jøkul codemods

Bruk:
  ${commandName} [import-paths] [--dry-run] [--verbose] [sti ...]

Eksempler:
  ${commandName}
  ${commandName} --dry-run
  ${commandName} src app
  ${commandName} import-paths src app README.md --dry-run
`);
}

async function runCodemodCommand(args, commandName) {
    const [firstArg, ...rest] = args;

    if (firstArg === "--help" || firstArg === "-h") {
        printCodemodHelp(commandName);
        return 0;
    }

    if (!firstArg) {
        await runImportPathsCodemod([]);
        return 0;
    }

    if (firstArg === "import-paths") {
        await runImportPathsCodemod(rest);
        return 0;
    }

    await runImportPathsCodemod(args);
    return 0;
}

export async function runJokulCli(argv = process.argv.slice(2)) {
    const [command, ...rest] = argv;

    if (!command || command === "--help" || command === "-h") {
        console.log(`Jøkul kommandolinje

Bruk:
  jokul codemod [import-paths] [--dry-run] [--verbose] [sti ...]
  jokul theme generate <hex> [--name <navn>] [--title <tittel>] [--out <fil>] [--method wcag|oklch] [--no-dark]
  jokul theme build <temafil ...> [--out <mappe>] [--selector <selektor>] [--css] [--index] [--types]
  jokul theme validate <temafil ...>

Eksempler:
  jokul codemod
  jokul codemod --dry-run
  jokul codemod src app
  jokul codemod import-paths src app README.md --dry-run
  jokul theme generate "#006F4E" --name mitt-tema --out theme.json
  jokul theme build theme.json --out themes --css

Kjør \`jokul theme --help\` for mer om temaer.
`);
        return 0;
    }

    if (command === "theme") {
        const { runThemeCommand } = await import("./theme.mjs");
        return runThemeCommand(rest);
    }

    if (command !== "codemod") {
        console.error(`Ukjent kommando: ${command}`);
        return 1;
    }

    return runCodemodCommand(rest, "jokul codemod");
}
