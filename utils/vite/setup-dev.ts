import { cpSync, rmSync } from "fs";
import { resolve } from "path";

function setupDev(destination: string) {
    return {
        name: "setup-dev",
        buildStart() {
            cpSync(resolve(__dirname, "index.html"), resolve(destination, "index.html"));
            cpSync(resolve(__dirname, "main.tsx"), resolve(destination, "main.tsx"));
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
