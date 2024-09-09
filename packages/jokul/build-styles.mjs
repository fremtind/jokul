import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import litePreset from "cssnano-preset-lite";
import { glob } from "glob";
import { writeFile } from "node:fs/promises";
import { extname } from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";
import * as sass from "sass-embedded";

(async function build() {
    try {
        const sources = await glob("./src/**/[!_]*.scss", { ignore: "node_modules/**" });
        await Promise.all(
            sources.flatMap((source) => {
                const sourcePath = fileURLToPath(new URL(source, import.meta.url));
                const cssPath = `${sourcePath.slice(0, sourcePath.length - extname(sourcePath).length)}.css`;
                const cssMinPath = `${sourcePath.slice(0, sourcePath.length - extname(sourcePath).length)}.min.css`;

                const content = sass.compile(sourcePath);

                return [
                    writeFile(cssPath, content.css).then(() => console.log(`wrote file:${cssPath}`)),
                    new Promise((resolve, reject) => {
                        postcss([autoprefixer({ grid: true }), cssnano(litePreset)])
                            .process(content.css)
                            .then((result) =>
                                writeFile(cssMinPath, result.css).then(() => {
                                    console.log(`wrote file:${cssMinPath}`);
                                    resolve();
                                }),
                            )
                            .catch((error) => reject(error));
                    }),
                ];
            }),
        );
    } catch (error) {
        console.error(error);
    }
})();
