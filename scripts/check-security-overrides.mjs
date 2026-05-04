#!/usr/bin/env node
/**
 * check-security-overrides.mjs
 *
 * Sjekker om pnpm.overrides-oppføringer merket som sikkerhetsfikser
 * er fortsatt nødvendige.
 *
 * En override er UTDATERT hvis alle konsumentpakker allerede deklarerer
 * et versjonskrav som garanterer en sikker minimumsversjon — uten overriden.
 *
 * En override er NØDVENDIG hvis minst én konsument tillater en versjon
 * lavere enn sikkerhetsminimum.
 *
 * Kjøring: node scripts/check-security-overrides.mjs
 */

import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// ── Hjelpefunksjoner for enkel semver-håndtering ─────────────────────────────

function parseVersion(v) {
    const [major = 0, minor = 0, patch = 0] = String(v)
        .replace(/[^0-9.]/g, "")
        .split(".")
        .map(Number);
    return { major, minor, patch };
}

/** Returnerer true hvis a >= b */
function versionGte(a, b) {
    const av = parseVersion(a);
    const bv = parseVersion(b);
    if (av.major !== bv.major) return av.major > bv.major;
    if (av.minor !== bv.minor) return av.minor > bv.minor;
    return av.patch >= bv.patch;
}

/**
 * Returnerer den laveste versjonen som et versjonskrav KAN oppfylles av,
 * kun for ranges med klart nedre grense (^, ~, >=, > eller eksakt versjon).
 * Returnerer null for ranges med ukjent/komplekst mønster (f.eks. "<2.0.0",
 * hyphen ranges, komparatorsett).
 * Eksempel: "^4.0.0" → "4.0.0", ">=4.0.1" → "4.0.1", "~1.2.3" → "1.2.3"
 */
function rangeMinVersion(range) {
    if (!range || typeof range !== "string") return null;
    const r = range.trim();
    // Håndter komplekse ranges (||) — ta laveste del
    const parts = r.split("||").map((p) => p.trim());
    const mins = parts.map((part) => {
        // Tillatte mønstre med klart nedre grense:
        // "^1.2.3", "~1.2.3", "1.2.3" (eksakt), ">=1.2.3", ">1.2.3"
        // Enkel versjon med bare major, f.eks. ">=6"
        const match = part.match(/^[~^]?\s*(\d+(?:\.\d+)*(?:-[a-z0-9.]+)?)$/i)
            ?? part.match(/^>=?\s*(\d+(?:\.\d+)*(?:-[a-z0-9.]+)?)\s*$/i);
        return match ? match[1] : null;
    });
    const valid = mins.filter(Boolean);
    if (valid.length === 0) return null;
    return valid.reduce((lowest, v) =>
        versionGte(lowest, v) ? v : lowest,
    );
}

// ── Les og valider konfig ─────────────────────────────────────────────────────

const pkgJson = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const allOverrides = pkgJson?.pnpm?.overrides ?? {};

// Disse overrides er ikke sikkerhetsrelaterte — hopp over dem
const NON_SECURITY_OVERRIDES = new Set([
    "@types/react",
    "@types/react-dom",
    "react",
    "react-dom",
    "react-is",
    "axe-core",
    "chokidar",
    "glob-stream>glob-parent",
    "resolve-url-loader>loader-utils",
    "sharp",
]);

const securityOverrides = Object.entries(allOverrides)
    .filter(([key]) => !NON_SECURITY_OVERRIDES.has(key))
    .map(([key, value]) => {
        // Håndter "minimatch@3" → pakkenavn "minimatch", nøkkelspesifikator "3"
        // Ikke forveksle med scoped packages som "@isaacs/brace-expansion"
        const atIdx = key.lastIndexOf("@");
        const hasVersionedKey = atIdx > 0; // ikke @ i starten (scoped packages)
        const packageName = hasVersionedKey ? key.slice(0, atIdx) : key;
        const keySpecifier = hasVersionedKey ? key.slice(atIdx + 1) : null; // f.eks. "3", "9", "10"
        const minSafe = rangeMinVersion(value);
        return { key, packageName, keySpecifier, minSafe, overrideValue: value };
    })
    .filter(({ minSafe }) => minSafe !== null);

// ── Bygg indeks over alle deklarerte avhengighetsranger i én enkelt pasning ──

/**
 * Skanner node_modules/.pnpm én gang og bygger en indeks:
 *   Map<depName, Array<{ consumer, declaredRange }>>
 */
function buildConsumersIndex() {
    const pnpmDir = join(ROOT, "node_modules", ".pnpm");
    const index = new Map();

    let entries;
    try {
        entries = readdirSync(pnpmDir, { withFileTypes: true });
    } catch {
        return index;
    }

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const pkgJsonPath = join(
            pnpmDir,
            entry.name,
            "node_modules",
            // Dekod pnpm mappenavn: @scope+pkg@version_peer@v → @scope/pkg
            entry.name.replace(/\+/g, "/").replace(/@[0-9].*$/, ""),
            "package.json",
        );

        let data;
        try {
            data = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
        } catch {
            continue;
        }

        const consumerLabel = `${data.name}@${data.version}`;
        const seen = new Set(); // unngå å telle samme dep to ganger per pakke
        for (const depSection of [
            "dependencies",
            "devDependencies",
            "peerDependencies",
            "optionalDependencies",
        ]) {
            const deps = data[depSection];
            if (!deps) continue;
            for (const [depName, range] of Object.entries(deps)) {
                if (seen.has(depName)) continue;
                seen.add(depName);
                if (!index.has(depName)) index.set(depName, []);
                index.get(depName).push({ consumer: consumerLabel, declaredRange: range });
            }
        }
    }

    return index;
}

const consumersIndex = buildConsumersIndex();

/** Returnerer major-versjon fra en range-streng, f.eks. "^3.1.2" → 3 */
function rangeMajor(range) {
    const min = rangeMinVersion(range);
    if (!min) return null;
    return parseVersion(min).major;
}

// ── Kjør sjekk for hver sikkerhetsoverride ────────────────────────────────────

console.log("🔍 Sjekker sikkerhetsoverrides i pnpm.overrides...\n");

let staleCount = 0;
let neededCount = 0;
let unknownCount = 0;

for (const { key, packageName, keySpecifier, minSafe, overrideValue } of securityOverrides) {
    let consumers = consumersIndex.get(packageName) ?? [];

    // Hvis overriden er versjonsspesifikk (f.eks. minimatch@9), evaluer kun
    // konsumenter som tilhører den major-linjen, eller der major er uklar
    // (konservativt: inkluder heller for mange enn for få)
    if (keySpecifier !== null) {
        const expectedMajor = Number(keySpecifier);
        if (!Number.isNaN(expectedMajor)) {
            consumers = consumers.filter(({ declaredRange }) => {
                const major = rangeMajor(declaredRange);
                // Behold konsumenter der major matcher, eller der vi ikke kan bestemme major
                return major === null || major === expectedMajor;
            });
        }
    }

    if (consumers.length === 0) {
        // Ingen konsumenter i denne major-linjen — override er sannsynligvis utdatert
        console.log(`⚪ ${key}: ${overrideValue}`);
        console.log(
            `   Ingen konsumenter funnet — overriden er sannsynligvis utdatert.\n`,
        );
        staleCount++;
        continue;
    }

    // Finn konsumenter som VILLE tillatt en usikker versjon uten overriden
    const unsafeConsumers = consumers.filter(({ declaredRange }) => {
        const consumerMin = rangeMinVersion(declaredRange);
        if (!consumerMin) {
            unknownCount++;
            return true; // ukjent range — vær forsiktig
        }
        return !versionGte(consumerMin, minSafe);
    });

    if (unsafeConsumers.length === 0) {
        console.log(`✅ ${key}: ${overrideValue} — KAN FJERNES`);
        console.log(
            `   Alle ${consumers.length} konsument(er) krever allerede >= ${minSafe}`,
        );
        const examples = consumers.slice(0, 3);
        for (const { consumer, declaredRange } of examples) {
            console.log(`   • ${consumer} → "${packageName}": "${declaredRange}"`);
        }
        console.log();
        staleCount++;
    } else {
        console.log(`🔒 ${key}: ${overrideValue} — FORTSATT NØDVENDIG`);
        const examples = unsafeConsumers.slice(0, 3);
        for (const { consumer, declaredRange } of examples) {
            const consMin = rangeMinVersion(declaredRange) ?? "?";
            console.log(
                `   • ${consumer} tillater ${packageName}@${consMin} (< ${minSafe})`,
            );
            console.log(`     Deklarert: "${packageName}": "${declaredRange}"`);
        }
        if (unsafeConsumers.length > 3) {
            console.log(`   ... og ${unsafeConsumers.length - 3} til`);
        }
        console.log();
        neededCount++;
    }
}

// ── Oppsummering ──────────────────────────────────────────────────────────────

console.log("─".repeat(60));
console.log(`📊 Oppsummering:`);
console.log(`   🔒 Fortsatt nødvendig: ${neededCount}`);
console.log(`   ✅ Kan fjernes:        ${staleCount}`);
if (unknownCount > 0) console.log(`   ⚠️  Ukjent:             ${unknownCount}`);
console.log();

if (staleCount > 0) {
    console.log(
        `💡 Fjern utdaterte overrides fra "pnpm.overrides" i package.json`,
    );
    console.log(
        `   og kjør "pnpm install" for å verifisere at ingenting går i stykker.`,
    );
}
