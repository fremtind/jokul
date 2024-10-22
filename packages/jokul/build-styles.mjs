import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import litePreset from "cssnano-preset-lite";
import { glob } from "glob";
import { writeFile, cp } from "node:fs/promises";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import postcss from "postcss";
import * as sass from "sass-embedded";

(async function build() {
    try {
        const sources = await glob("./src/**/[!_]*.scss", { ignore: ["node_modules/**", "**/documentation/**"] });
        const unfilteredSources = await glob("./src/**/*.scss", { ignore: ["node_modules/**", "**/documentation/**"] });
        await Promise.all(
            sources
                .flatMap((source) => {
                    const fileName = source.slice(source.lastIndexOf("/") + 1);
                    const sourcePath = fileURLToPath(new URL(source, import.meta.url));
                    const outDirName = sourcePath
                        .substring(0, sourcePath.lastIndexOf("/styles/"))
                        .replace("/src", "/styles");

                    const content = sass.compile(sourcePath);
                    mkdirSync(outDirName, { recursive: true });

                    return [
                        writeFile(`${outDirName}/${fileName.replace(".scss", ".css")}`, content.css).then(() =>
                            console.log("wrote file:${cssPath}"),
                        ),
                        new Promise((resolve, reject) => {
                            postcss([autoprefixer(), cssnano(litePreset)])
                                .process(content.css)
                                .then((result) =>
                                    writeFile(
                                        `${outDirName}/${fileName.replace(".scss", ".min.css")}`,
                                        result.css,
                                    ).then(() => {
                                        console.log("wrote file:${cssMinPath}");
                                        resolve();
                                    }),
                                )
                                .catch((error) => reject(error));
                        }),
                    ];
                })
                .concat(
                    unfilteredSources.flatMap((source) => {
                        const fileName = source.slice(source.lastIndexOf("/") + 1);
                        const sourcePath = fileURLToPath(new URL(source, import.meta.url));
                        const cutPoint = sourcePath.lastIndexOf("/styles/");
                        const outDirName = sourcePath
                            .substring(0, cutPoint > 0 ? cutPoint : sourcePath.lastIndexOf("/"))
                            .replace("/src", "/styles");

                        mkdirSync(outDirName, { recursive: true });

                        return [cp(sourcePath, `${outDirName}/${fileName}`)];
                    }),
                ),
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
})();
