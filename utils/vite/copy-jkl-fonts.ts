import { cpSync } from "fs";
import { resolve } from "path";

export default function copyJklFonts() {
    return {
        name: "copy-jkl-fonts",
        buildStart() {
            cpSync(
                resolve(__dirname, "..", "..", "packages", "webfonts", "fonts"),
                resolve(__dirname, "public", "fonts"),
                {
                    recursive: true,
                },
            );
            console.log("Copied font files into public/fonts");
        },
    };
}
