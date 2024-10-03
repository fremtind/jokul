import { cpSync } from "fs";
import { resolve } from "path";

function copyJklFonts(destination: string) {
    return {
        name: "copy-jkl-fonts",
        buildStart() {
            cpSync(resolve(__dirname, "..", "..", "packages", "webfonts", "fonts"), destination, {
                recursive: true,
            });
            console.log(`Copied font files into "${destination}"`);
        },
    };
}

export { copyJklFonts };
