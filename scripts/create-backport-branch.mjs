#!/usr/bin/env node
/**
 * create-backport-branch.mjs
 *
 * Setter opp en ny vedlikeholdsgren (`jokul-N.x`) som kan motta backports:
 *
 *   1. Oppretter `jokul-N.x` fra --ref (standard: origin/main).
 *   2. Markerer @fremtind/stylelint-config-jkl som privat på grenen. Pakken
 *      har eget versjonsløp og publiseres kun fra main. Uten dette vil
 *      Changesets forsøke å publisere versjoner som allerede finnes når en
 *      backportet changeset bumper pakken.
 *   3. Committer endringen, og pusher grenen hvis --push er satt.
 *   4. Legger grenen til i .github/maintained-versions.json i arbeidskatalogen
 *      din, slik at backport.yml og find-release-tag.mjs kjenner den igjen.
 *      Denne endringen skal committes på main via en vanlig PR.
 *
 * Kjør fra en ren arbeidskatalog på en gren som skal inn i main.
 *
 * Kjøring:
 *   node scripts/create-backport-branch.mjs [--major 6] [--max-bump patch]
 *       [--ref origin/main] [--push] [--latest] [--yes]
 *
 * I en terminal spørres det om valg som ikke er gitt som argumenter
 * (major, latest, maks bump, push). Bruk --yes for å hoppe over spørsmålene
 * og bruke argumenter og standardverdier, f.eks. i skript.
 *
 * --latest gjør den nye grenen til den som publiserer med npm-taggen
 * "latest", og fjerner flagget fra øvrige grener.
 *
 * Grenbeskyttelse og merge-kø dekkes av GitHub-rulesets som matcher
 * `jokul-[0-9].x`, så de trenger ikke settes opp per gren.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MAINTAINED_VERSIONS = join(ROOT, ".github/maintained-versions.json");
const STYLELINT_PACKAGE = "packages/stylelint-config-jkl/package.json";
const BUMPS = ["patch", "minor"];

function arg(name) {
    const index = process.argv.indexOf(`--${name}`);
    return index === -1 ? undefined : process.argv[index + 1];
}

function git(args, cwd = ROOT) {
    return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

function fail(message) {
    console.error(message);
    process.exit(1);
}

const USAGE =
    "Bruk: node scripts/create-backport-branch.mjs [--major <N>] [--max-bump patch|minor] [--ref <ref>] [--push] [--latest] [--yes]";

// Uten --yes spørres det om valg som ikke er gitt som argumenter
const interactive = process.stdin.isTTY && !process.argv.includes("--yes");
const rl = interactive
    ? createInterface({ input: process.stdin, output: process.stdout })
    : undefined;

async function ask(question, fallback) {
    const answer = (await rl.question(`${question} [${fallback}] `)).trim();
    return answer || fallback;
}

async function confirm(question, fallback) {
    const answer = await ask(question, fallback ? "J/n" : "j/N");
    return /^(j|ja|y|yes)$/i.test(answer) || answer === "J/n";
}

async function choose(question, options, fallback) {
    for (;;) {
        const answer = await ask(
            `${question} (${options.join("/")})`,
            fallback,
        );
        if (options.includes(answer)) return answer;
        console.log(`Velg en av: ${options.join(", ")}.`);
    }
}

// ── Les eksisterende oppsett ──────────────────────────────────────────────────

if (git(["status", "--porcelain"])) {
    fail("Arbeidskatalogen har ucommittede endringer. Rydd opp først.");
}

git(["fetch", "origin", "--prune"]);

const targets = JSON.parse(readFileSync(MAINTAINED_VERSIONS, "utf8"));
const branchMajor = (t) => Number(t.branch.match(/\d+/)?.[0]);
const highestMajor = Math.max(0, ...targets.map(branchMajor));
const ref = arg("ref") ?? "origin/main";

// ── Valg ──────────────────────────────────────────────────────────────────────

let major = arg("major");
if (!major && interactive) {
    major = await ask(
        "Hvilken major skal få en vedlikeholdsgren?",
        String(highestMajor + 1),
    );
}
if (!major || !/^[0-9]+$/.test(major)) {
    fail(USAGE);
}
// Rulesettene i GitHub (review, tester, merge-kø) matcher `jokul-[0-9].x`
if (Number(major) > 9) {
    fail(
        `Rulesettene dekker bare jokul-[0-9].x. Utvid mønsteret i GitHub før du lager jokul-${major}.x.`,
    );
}
const branch = `jokul-${major}.x`;

if (
    git(["branch", "--list", branch]) ||
    git(["ls-remote", "--heads", "origin", branch])
) {
    fail(`Grenen ${branch} finnes allerede.`);
}
if (targets.some((t) => t.branch === branch)) {
    fail(`${branch} står allerede i .github/maintained-versions.json.`);
}

let latest = process.argv.includes("--latest");
if (!latest && interactive) {
    latest = await confirm(
        `Skal ${branch} publisere med npm-taggen "latest"? Flagget fjernes fra øvrige grener.`,
        Number(major) > highestMajor,
    );
}

let maxBump = arg("max-bump");
if (!maxBump) {
    const fallback = latest ? "minor" : "patch";
    maxBump = interactive
        ? await choose("Høyeste bump-nivå som backportes hit", BUMPS, fallback)
        : fallback;
}
if (!BUMPS.includes(maxBump)) {
    fail(`--max-bump må være en av: ${BUMPS.join(", ")}.`);
}

let push = process.argv.includes("--push");
if (!push && interactive) {
    push = await confirm(`Skal ${branch} pushes til origin nå?`, false);
}

if (interactive) {
    console.log(`
Oppsummering:
  gren:        ${branch} (fra ${ref})
  latest:      ${latest ? "ja" : "nei"}
  maks bump:   ${maxBump}
  push:        ${push ? "ja" : "nei"}
`);
    if (!(await confirm("Fortsette?", true))) {
        rl.close();
        fail("Avbrutt.");
    }
    rl.close();
}

// ── Opprett grenen i en midlertidig worktree ──────────────────────────────────

const worktree = join(mkdtempSync(join(tmpdir(), "jokul-backport-")), branch);
git(["worktree", "add", "-b", branch, worktree, ref]);

try {
    if (existsSync(join(worktree, ".changeset/pre.json"))) {
        console.warn(
            `Advarsel: ${ref} er i prerelease-modus (.changeset/pre.json). Avslutt prerelease på ${branch} før den publiseres.`,
        );
    }

    const pkgPath = join(worktree, STYLELINT_PACKAGE);
    const pkg = readFileSync(pkgPath, "utf8");
    if (/"private":\s*true/.test(pkg)) {
        console.log("stylelint-config-jkl er allerede privat.");
    } else {
        // Tekstendring for å bevare formateringen til Biome
        writeFileSync(
            pkgPath,
            pkg.replace(/^(\s*"version":.*\n)/m, '$1    "private": true,\n'),
        );
        git(["add", STYLELINT_PACKAGE], worktree);
        git(
            [
                "commit",
                "--no-verify",
                "-m",
                `chore: ikke publiser stylelint-config-jkl fra ${branch}`,
            ],
            worktree,
        );
    }

    if (push) {
        git(["push", "-u", "origin", branch], worktree);
        console.log(`Pushet ${branch} til origin.`);
    } else {
        console.log(`Opprettet ${branch} lokalt. Bruk --push for å pushe.`);
    }
} finally {
    git(["worktree", "remove", "--force", worktree]);
}

// ── Registrer grenen for backports ────────────────────────────────────────────

const description =
    maxBump === "patch" ? "patch changes only" : "patch and minor changes";
const entry = {
    branch,
    maxBump,
    ...(latest && { latest: true }),
    comment: latest
        ? `Stable release branch. Receives ${description} from main.`
        : `Maintenance branch for v${major}. Receives ${description}.`,
};

// Kun én gren kan publisere med npm-taggen "latest"
const updated = latest
    ? targets.map(({ latest: _, ...rest }) => rest)
    : targets;
updated.push(entry);
updated.sort((a, b) => branchMajor(b) - branchMajor(a));
writeFileSync(MAINTAINED_VERSIONS, `${JSON.stringify(updated, null, 4)}\n`);

console.log(`
Neste steg:
  1. Commit .github/maintained-versions.json og åpne en PR mot main.
${latest ? "" : `  2. Hvis ${branch} skal være latest: kjør på nytt med --latest.\n`}`);
