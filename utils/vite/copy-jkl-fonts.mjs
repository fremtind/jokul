import { cpSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

function copyJklFonts(destination) {
    return {
        name: "copy-jkl-fonts",
        buildStart() {
            cpSync(
                resolve(fileURLToPath(new URL(".", import.meta.url)), "..", "..", "packages", "webfonts", "fonts"),
                destination,
                {
                    recursive: true,
                },
            );
            console.log(`Copied font files into "${destination}"`);
        },
    };
}

export { copyJklFonts };
