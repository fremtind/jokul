import { cpSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

function setupDev(destination) {
    return {
        name: "setup-dev",
        buildStart() {
            cpSync(
                resolve(fileURLToPath(new URL(".", import.meta.url)), "index.html"),
                resolve(destination, "index.html"),
            );
            cpSync(resolve(fileURLToPath(new URL(".", import.meta.url)), "main.tsx"), resolve(destination, "main.tsx"));
            console.log(`Copied index.html and main.tsx into "${destination}"`);
        },
        buildEnd() {
            rmSync(resolve(destination, "index.html"));
            rmSync(resolve(destination, "main.tsx"));
            console.log(`Deleted index.html and main.tsx from "${destination}"`);
        },
    };
}

export { setupDev };
