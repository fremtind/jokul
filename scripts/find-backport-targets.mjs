#!/usr/bin/env node
/**
 * find-backport-targets.mjs
 *
 * Leser changesetfiler fra en PR, finner høyeste semver-nivå blant dem,
 * og skriver ut hvilke grener fra .github/backport-targets.json som skal
 * motta en backport.
 *
 * Brukes av backport.yml til å bestemme hvilke grener som skal få en
 * cherry-pick PR.
 *
 * Forventer en JSON-fil med en liste over endrede changesetfiler, sendt
 * inn via --files <path>. Filen produseres av backport.yml ved å filtrere
 * PR-filene fra GitHub API-et.
 *
 * Skriver resultatet som JSON til $GITHUB_OUTPUT hvis tilgjengelig,
 * ellers til stdout.
 *
 * Kjøring: node scripts/find-backport-targets.mjs --files changeset-files.json
 */

import { readFileSync } from "node:fs";
import { appendFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// ── Hjelpefunksjoner ──────────────────────────────────────────────────────────

const BUMP_LEVELS = { patch: 0, minor: 1, major: 2 };

function bumpLevel(bump) {
    return BUMP_LEVELS[bump] ?? -1;
}

/**
 * Enkel parser for changeset-frontmatter.
 * Changesetfiler har formatet:
 *
 *   ---
 *   "@fremtind/jokul": minor
 *   ---
 *
 *   Beskrivelse av endringen.
 */
function parseChangeset(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return [];

    return match[1]
        .split("\n")
        .map((line) => {
            const parts = line.match(/^"([^"]+)":\s*(major|minor|patch)$/);
            if (!parts) return null;
            return { package: parts[1], bump: parts[2] };
        })
        .filter(Boolean);
}

function writeOutput(key, value) {
    const stringValue =
        typeof value === "string" ? value : JSON.stringify(value);
    if (process.env.GITHUB_OUTPUT) {
        appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${stringValue}\n`);
    } else {
        console.log(`${key}=${stringValue}`);
    }
}

// ── Les --files-argumentet ────────────────────────────────────────────────────

const filesArgIndex = process.argv.indexOf("--files");
if (filesArgIndex === -1 || !process.argv[filesArgIndex + 1]) {
    console.error(
        "Bruk: node scripts/find-backport-targets.mjs --files <path>",
    );
    process.exit(1);
}

const filesPath = process.argv[filesArgIndex + 1];
let addedFiles;
try {
    addedFiles = JSON.parse(readFileSync(filesPath, "utf8"));
} catch {
    console.error(`Kunne ikke lese ${filesPath}.`);
    process.exit(1);
}

if (!Array.isArray(addedFiles) || addedFiles.length === 0) {
    console.log("Ingen nye changesetfiler i denne PR-en. Ingen backport.");
    writeOutput("targets", []);
    writeOutput("highest_bump", "none");
    process.exit(0);
}

console.log(`Fant ${addedFiles.length} ny(e) changesetfil(er):`);
for (const f of addedFiles) {
    console.log(`  ${f}`);
}

// ── Les og analyser changesetfilene ──────────────────────────────────────────

let highestBump = "patch";

for (const file of addedFiles) {
    let content;
    try {
        content = readFileSync(join(ROOT, file), "utf8");
    } catch {
        console.warn(`Kunne ikke lese ${file}, hopper over.`);
        continue;
    }

    const releases = parseChangeset(content);
    for (const { package: pkg, bump } of releases) {
        console.log(`  ${pkg}: ${bump}`);
        if (bumpLevel(bump) > bumpLevel(highestBump)) {
            highestBump = bump;
        }
    }
}

console.log(`\nHøyeste bump-nivå: ${highestBump}`);

// ── Les backport-targets og filtrer ──────────────────────────────────────────

let allTargets;
try {
    allTargets = JSON.parse(
        readFileSync(join(ROOT, ".github/backport-targets.json"), "utf8"),
    );
} catch {
    console.error(
        "Kunne ikke lese .github/backport-targets.json. Sjekk at filen finnes.",
    );
    process.exit(1);
}

const eligibleTargets = allTargets.filter(
    ({ maxBump }) => bumpLevel(highestBump) <= bumpLevel(maxBump),
);

if (eligibleTargets.length === 0) {
    console.log(
        `Ingen backport-grener er konfigurert til å motta ${highestBump}-endringer.`,
    );
    writeOutput("targets", []);
    writeOutput("highest_bump", highestBump);
    process.exit(0);
}

console.log(`\nEligible backport-grener:`);
for (const { branch } of eligibleTargets) {
    console.log(`  ${branch}`);
}

writeOutput(
    "targets",
    eligibleTargets.map(({ branch }) => branch),
);
writeOutput("highest_bump", highestBump);
