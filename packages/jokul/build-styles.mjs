import { mkdirSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import litePreset from "cssnano-preset-lite";
import { glob } from "glob";
import postcss from "postcss";
import * as sass from "sass-embedded";

const RELATIVE_IMPORT_REGEX = /@(use|forward)\s+"(\.[^"]+)"([^;]*);/g;

/*
 * Mapper en Sass-fil i src til hvor den publiserte fila havner i /styles.
 *
 * Byggestrukturen gjør to ting samtidig:
 * 1. /src blir til /styles
 * 2. et eventuelt /styles-segment lenger ned i stien fjernes
 *
 * Eksempel:
 * Kilde:
 * /src/components/button/styles/_index.scss
 *
 * Publisert:
 * /styles/components/button/_index.scss
 *
 * Et importmål som i koden peker til:
 * /src/components/autosuggest/styles
 *
 * vil i publisert struktur ligge på:
 * /styles/components/autosuggest
 */
const mapSourcePathToPublishedPath = (filePath) =>
    filePath.replace(/\/styles(?=\/|$)/, "").replace("/src", "/styles");

/*
 * Regner ut relative @use/@forward-importer på nytt etter at filene er flyttet
 * til publisert /styles-struktur.
 *
 * Både kildefila og den importerte fila mappes først til publisert plassering,
 * før vi finner korrekt relativ sti mellom dem.
 *
 * Eksempel:
 * Kilde:
 * /src/styles/theme/_dynamic-spacing.scss
 *
 * Import i kildefila:
 * ../jkl
 *
 * Etter publisering ligger filene her:
 * /styles/theme/_dynamic-spacing.scss
 * /styles/jkl
 *
 * Den relative importen mellom disse er fortsatt:
 * ../jkl
 */
const rewriteImportsForBuiltFile = (content, sourceFilePath) =>
    content.replaceAll(
        RELATIVE_IMPORT_REGEX,
        (_match, keyword, importPath, suffix) => {
            const outputDirectory = path.dirname(
                mapSourcePathToPublishedPath(sourceFilePath),
            );
            const importedSourcePath = path.resolve(
                path.dirname(sourceFilePath),
                importPath,
            );
            // Sass forventer POSIX-separatorer i import paths, også på andre OS.
            let rewrittenImportPath = path
                .relative(
                    outputDirectory,
                    mapSourcePathToPublishedPath(importedSourcePath),
                )
                .split(path.sep)
                .join("/");

            if (!rewrittenImportPath.startsWith(".")) {
                rewrittenImportPath = `./${rewrittenImportPath}`;
            }

            return `@${keyword} "${rewrittenImportPath}"${suffix};`;
        },
    );

(async function build() {
    try {
        const sources = await glob("./src/**/[!_]*.scss", {
            ignore: ["node_modules/**", "**/documentation/**", "**/stories/**"],
        });
        const unfilteredSources = await glob("./src/**/*.scss", {
            ignore: ["node_modules/**", "**/documentation/**"],
        });
        await Promise.all(
            sources
                .flatMap((source) => {
                    const fileName = source.slice(source.lastIndexOf("/") + 1);
                    const sourcePath = fileURLToPath(
                        new URL(source, import.meta.url),
                    );
                    const outDirName = path.dirname(
                        mapSourcePathToPublishedPath(sourcePath),
                    );

                    const content = sass.compile(sourcePath);
                    mkdirSync(outDirName, { recursive: true });

                    return [
                        writeFile(
                            `${outDirName}/${fileName.replace(
                                ".scss",
                                ".css",
                            )}`,
                            content.css,
                        ).then(() =>
                            console.log(
                                `Wrote ${outDirName}/${fileName.replace(
                                    ".scss",
                                    ".css",
                                )}`,
                            ),
                        ),
                        new Promise((resolve, reject) => {
                            postcss([autoprefixer(), cssnano(litePreset)])
                                .process(content.css)
                                .then((result) =>
                                    writeFile(
                                        `${outDirName}/${fileName.replace(
                                            ".scss",
                                            ".min.css",
                                        )}`,
                                        result.css,
                                    ).then(() => {
                                        console.log(
                                            `Wrote ${outDirName}/${fileName.replace(
                                                ".scss",
                                                ".min.css",
                                            )}`,
                                        );
                                        resolve();
                                    }),
                                )
                                .catch((error) => reject(error));
                        }),
                    ];
                })
                .concat(
                    unfilteredSources.map((source) => {
                        const fileName = source.slice(
                            source.lastIndexOf("/") + 1,
                        );
                        const sourcePath = fileURLToPath(
                            new URL(source, import.meta.url),
                        );
                        const outDirName = path.dirname(
                            mapSourcePathToPublishedPath(sourcePath),
                        );

                        mkdirSync(outDirName, { recursive: true });

                        return readFile(sourcePath, "utf-8").then((content) => {
                            const outputFilePath = `${outDirName}/${fileName}`;
                            const modifiedContent = rewriteImportsForBuiltFile(content, sourcePath);

                            writeFile(
                                outputFilePath,
                                modifiedContent,
                                { encoding: "utf-8" },
                            );
                        });
                    }),
                ),
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
})();
