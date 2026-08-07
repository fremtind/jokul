// Runtime-entrypoint for docs-portalen i produksjon (Docker).
//
// Vi kjører to ting side om side i samme container:
//   1. Next.js "standalone"-serveren for selve portalen (lytter på :3333)
//   2. En Express-proxy (server.js) som lytter på :3000, serverer den
//      bygde Storybook-en under /storybook og proxyer alt annet til Next.
//
// Portalen forventer at Storybook er tilgjengelig på samme origin under
// /storybook, så begge må kjøre. Vi starter dem som to child-prosesser og
// speiler exit-koder slik at containeren stopper hvis én av dem dør.

import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const appDir = dirname(fileURLToPath(import.meta.url));
const NEXT_PORT = process.env.NEXT_PORT ?? "3333";

const children = [];
let shuttingDown = false;
let exitCode = 0;

// Drep gjenværende barn og avslutt først når alle faktisk har stoppet, slik at
// vi aldri etterlater en foreldreløs prosess (f.eks. proxyen når Next dør).
function shutdown(reason, code) {
    if (shuttingDown) return;
    shuttingDown = true;
    exitCode = code ?? 0;
    // eslint-disable-next-line no-console
    console.error(`[start] ${reason}; stopper alle prosesser.`);

    const alive = children.filter((c) => c.exitCode === null && !c.killed);
    if (alive.length === 0) {
        process.exit(exitCode);
        return;
    }

    let remaining = alive.length;
    const done = () => {
        remaining -= 1;
        if (remaining === 0) process.exit(exitCode);
    };
    for (const child of alive) {
        child.once("exit", done);
        child.kill("SIGTERM");
    }

    // Sikkerhetsnett: hvis et barn ikke stopper i tide, tving avslutning.
    setTimeout(() => {
        for (const child of children) {
            if (child.exitCode === null) child.kill("SIGKILL");
        }
        process.exit(exitCode);
    }, 5000).unref();
}

function start(name, command, args, env) {
    const child = spawn(command, args, {
        stdio: "inherit",
        env: { ...process.env, ...env },
    });
    child.on("exit", (code, signal) => {
        if (shuttingDown) return;
        shutdown(
            `${name} avsluttet (code=${code}, signal=${signal})`,
            code ?? 1,
        );
    });
    children.push(child);
    return child;
}

// 1. Next standalone-server. `portal/server.js` er entrypointen Next
//    genererer under `output: "standalone"`. Den leser PORT/HOSTNAME fra env.
start("next", process.execPath, [join(appDir, "portal", "server.js")], {
    PORT: NEXT_PORT,
    HOSTNAME: "0.0.0.0",
});

// 2. Express-proxy som serverer Storybook og proxyer til Next.
start("proxy", process.execPath, [join(appDir, "proxy", "server.js")], {
    STORYBOOK_STATIC_DIR: join(appDir, "storybook-static"),
    NEXT_UPSTREAM: `localhost:${NEXT_PORT}`,
});

for (const sig of ["SIGTERM", "SIGINT"]) {
    process.on(sig, () => shutdown(`mottok ${sig}`, 0));
}
