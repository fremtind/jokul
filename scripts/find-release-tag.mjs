#!/usr/bin/env node
/**
 * find-release-tag.mjs
 *
 * Finner riktig npm dist-tag for en release/preview basert på hvilken
 * branch vi står på:
 *
 *   - `jokul-N.x`: "latest" hvis branchen er markert med "latest": true i
 *     .github/maintained-versions.json, ellers "version-N".
 *   - `main`: tag-en definert i .changeset/pre.json, eller "latest" hvis
 *     filen ikke finnes.
 *
 * Andre grener støttes ikke og gir en feil.
 *
 * Brukes av release.yml og storybook_branch_preview.yml for å holde
 * tag-logikken på ett sted.
 *
 * Skriver resultatet som `tag=<verdi>` til $GITHUB_OUTPUT hvis
 * tilgjengelig, ellers til stdout.
 *
 * Kjøring: node scripts/find-release-tag.mjs --ref jokul-6.x
 */

import { appendFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function writeOutput(key, value) {
    if (process.env.GITHUB_OUTPUT) {
        appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
    } else {
        console.log(`${key}=${value}`);
    }
}

const refArgIndex = process.argv.indexOf("--ref");
const ref = refArgIndex !== -1 ? process.argv[refArgIndex + 1] : undefined;

if (!ref) {
    console.error("Bruk: node scripts/find-release-tag.mjs --ref <branch>");
    process.exit(1);
}

function findTag(refName) {
    const jokulBranchMatch = refName.match(/^jokul-([0-9]+)\.x$/);
    if (jokulBranchMatch) {
        const version = jokulBranchMatch[1];
        const targets = JSON.parse(
            readFileSync(
                join(ROOT, ".github/maintained-versions.json"),
                "utf8",
            ),
        );
        const target = targets.find((t) => t.branch === refName);
        return target?.latest ? "latest" : `version-${version}`;
    }

    if (refName === "main") {
        const preJsonPath = join(ROOT, ".changeset/pre.json");
        if (existsSync(preJsonPath)) {
            const preSettings = JSON.parse(readFileSync(preJsonPath, "utf8"));
            return preSettings.tag || "latest";
        }
        return "latest";
    }

    throw new Error(
        `Ukjent branch "${refName}". Forventet "main" eller "jokul-N.x".`,
    );
}

try {
    writeOutput("tag", findTag(ref));
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
