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

Eksempler:
  jokul codemod
  jokul codemod --dry-run
  jokul codemod src app
  jokul codemod import-paths src app README.md --dry-run
`);
        return 0;
    }

    if (command !== "codemod") {
        console.error(`Ukjent kommando: ${command}`);
        return 1;
    }

    return runCodemodCommand(rest, "jokul codemod");
}
