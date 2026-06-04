#!/usr/bin/env node
import path from "node:path";
import { createCommand, program } from "@commander-js/extra-typings";
import pc from "picocolors";
import type { HexColor } from "../src/colors/types.js";
import { generateCSSTokens } from "../src/tokens/generate/color-palette.js";
import { writeFile } from "../src/utilities/file.js";

const DEFAULT_OUTPUT_FOLDER = "./build/css";

program
    .name("jokul")
    .description("CLI-verktøy for å jobbe med designsystemet Jøkul")
    .showHelpAfterError();

const tokensCommand = createCommand("tokens");

tokensCommand
    .command("generate")
    .description("Generer fargetokens ut fra en gitt farge")
    .option(
        "-c, --color <string>",
        "Hex-kode for fargen du vil ha som utgangspunkt for fargepaletten",
    )
    .option(
        "-f, --file <path>",
        "Sti til en JSON-fil med et custom fargeskala for ditt brand",
    )
    .option(
        "-o, --out-dir <string>",
        "Sti der fargevariablene skal lagres etter generering",
        DEFAULT_OUTPUT_FOLDER,
    )
    .action(async (options) => {
        const { color, file, outDir } = options;

        if (!color && !file) {
            console.log(
                `⚠️ Du må angi enten en ${pc.bold("grunnfarge")} eller en ${pc.bold("custom skala")} for å generere fargetokens`,
            );

            return;
        }

        try {
            console.log(
                pc.bold(
                    `\nGenererer fargepalett med utgangspunkt i ${pc.green(color)}`,
                ),
            );

            await writeFile(
                path.join(path.resolve(process.cwd(), outDir), "theme.css"),
                generateCSSTokens(color as HexColor),
            );

            console.log(`✅ CSS-tokens.skrevet ut til ${pc.blue(outDir)}`);
        } catch (_) {
            console.log("🚨 Det oppstod en feil under generering av farger");
        }
    });

program.addCommand(tokensCommand);

await program.parseAsync(process.argv);
