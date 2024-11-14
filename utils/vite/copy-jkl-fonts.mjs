import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

function copyJklFonts(destination) {
    return {
        name: "copy-jkl-fonts",
        configResolved() {
            const source = resolve(
                fileURLToPath(new URL(".", import.meta.url)),
                "..",
                "..",
                "packages",
                "webfonts",
                "fonts",
            );
            if (!existsSync(destination)) {
                cpSync(source, destination, {
                    recursive: true,
                });
                console.log(`Copied font files into "${destination}"`);
            }
        },
    };
}

export { copyJklFonts };
