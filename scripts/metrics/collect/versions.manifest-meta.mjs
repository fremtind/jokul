/** Tilleggs-metrikker fra en parset package.json (lokalt, synkront). */
import { resolveLocalCatalog } from "./versions.pnpm-catalog.mjs";

const TRACKED_DEPS = {
    reactVersion: "react",
    tailwindVersion: "tailwindcss",
    typescriptVersion: "typescript",
    nextVersion: "next",
    viteVersion: "vite",
};

function findSpec(pkg, name, sections) {
    for (const s of sections) {
        const v = pkg[s]?.[name];
        if (v) return v;
    }
    return null;
}

function resolveDepSpec(dir, pkg, name, sections) {
    const raw = findSpec(pkg, name, sections);
    if (!raw) return null;
    if (/^catalog:/.test(raw.trim()))
        return resolveLocalCatalog(dir, raw, name) ?? raw;
    return raw;
}

export function manifestMeta(dir, pkg, config) {
    const sections = config.depSections;
    const meta = {};
    for (const [field, name] of Object.entries(TRACKED_DEPS)) {
        meta[field] = resolveDepSpec(dir, pkg, name, sections);
    }
    meta.moduleType = pkg.type === "module" ? "esm" : "cjs";
    meta.packageManager = pkg.packageManager ?? null;
    meta.nodeEngine = pkg.engines?.node ?? null;
    const legacy = new Set();
    for (const s of sections) {
        for (const dep of Object.keys(pkg[s] ?? {})) {
            if (dep.startsWith("@fremtind/jkl-")) legacy.add(dep);
        }
    }
    meta.legacyJokulPackages = [...legacy];
    return meta;
}
