import { mkdirSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import litePreset from "cssnano-preset-lite";
import { glob } from "glob";
import postcss from "postcss";
import * as sass from "sass-embedded";

(async function build() {
    try {
        const sources = await glob("./src/**/[!_]*.scss", {
            ignore: ["node_modules/**", "**/documentation/**", "**/stories/**"],
        });
        const unfilteredSources = await glob("./src/**/*.scss", {
            ignore: ["node_modules/**", "**/documentation/**"],
        });
        console.log(`Transforming ${sources.length} sass files...`);
        performance.mark("start");
        await Promise.all(
            sources.flatMap((source) => {
                const fileName = source.slice(source.lastIndexOf("/") + 1);
                const sourcePath = fileURLToPath(
                    new URL(source, import.meta.url),
                );
                const outDirName = sourcePath
                    .replace("/styles/", "/") // Fjern styles-mappa inne i komponenten
                    .replace(/\/[\w-]+.scss/, "") // Fjern filnavn og siste slash
                    .replace("/src", "/styles"); // Flytt til mappen styles på rot

                const content = sass.compile(sourcePath);
                mkdirSync(outDirName, { recursive: true });

                return new Promise((resolve, reject) => {
                    writeFile(
                        `${outDirName}/${fileName.replace(".scss", ".css")}`,
                        content.css,
                    );
                    postcss([autoprefixer(), cssnano(litePreset)])
                        .process(content.css, { from: undefined })
                        .then((result) =>
                            writeFile(
                                `${outDirName}/${fileName.replace(
                                    ".scss",
                                    ".min.css",
                                )}`,
                                result.css,
                            ).then(() => {
                                resolve();
                            }),
                        )
                        .catch((error) => reject(error));
                });
            }),
        );
        console.log(
            `Rewriting import paths in ${unfilteredSources.length} sass files...`,
        );
        await Promise.all(
            unfilteredSources.map((source) => {
                const fileName = source.slice(source.lastIndexOf("/") + 1);
                const sourcePath = fileURLToPath(
                    new URL(source, import.meta.url),
                );

                const outDirName = sourcePath
                    .replace("/styles/", "/") // Fjern styles-mappa inne i komponenten
                    .replace(/\/[\w-]+.scss/, "") // Fjern filnavn og siste slash
                    .replace("/src", "/styles"); // Flytt til mappen styles på rot

                mkdirSync(outDirName, { recursive: true });

                return readFile(sourcePath, "utf-8").then((content) => {
                    /*
                     * Siden vi fjerner den siste /styles-mappen når vi kopierer Sass-
                     * stilene, må vi sørge for å fjerne ett nivå fra de relative importene
                     * inne i filene der hvor vi går minst ett nivå opp.
                     *
                     * Regex-en erstatter på følgende måte:
                     * FRA: @use "../../../core/jkl";
                     * TIL: @use "../../core/jkl";
                     */
                    let modifiedContent = content.replaceAll(
                        /@use "(\.\.\/)(\.\.\/)?(\.\.\/)?(\.\.\/)?([\w\/\"\-\. ]+);/g,
                        '@use "$2$3$4$5;',
                    );
                    /*
                     * I tillegg må vi fjerne den siste /styles fra interne importer,
                     * For eksempel der vi tar med stiler fra avhengigheter i
                     * _index.scss. Dermed kan vi også fjerne manuell namespacing.
                     * Erstatter på følgende måte:
                     *
                     * FRA: @use "../accordion/styles" as accordion;
                     * TIL: @use "../accordion";
                     */
                    modifiedContent = modifiedContent.replaceAll(
                        /@use "(.*)\/styles(.*)"(.*);/g,
                        '@use "$1$2"$3;',
                    );

                    writeFile(`${outDirName}/${fileName}`, modifiedContent, {
                        encoding: "utf-8",
                    });
                });
            }),
        );
        console.log(
            `✅ Done in ${Math.round(performance.measure("start").duration)} ms`,
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
})();
