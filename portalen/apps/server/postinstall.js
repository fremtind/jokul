/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs/promises");
const glob = require("glob");

async function copyJokulFonts() {
    const files = glob.sync("../../node_modules/@fremtind/jkl-webfonts/fonts/*");
    for (const file of files) {
        const fileName = file.substring(file.lastIndexOf("/"));
        await fs.copyFile(file, `./public/fonts${fileName}`);
    }
}

copyJokulFonts();

console.log("Copied Jøkul assets to /fonts/");
