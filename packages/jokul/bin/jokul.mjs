#!/usr/bin/env node

import { runJokulCli } from "./run-jokul-cli.mjs";

try {
    process.exit(await runJokulCli());
} catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
}
