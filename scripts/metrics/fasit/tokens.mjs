/** Token-fasit: bygger katalogen av gyldige --jkl-* fra Jøkul-kilden. */
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const DECL_RE = /(--jkl-[A-Za-z0-9-]+)\s*:/g;
const STYLE_EXT = /\.(?:scss|css|sass|less)$/;

// Dynamisk genererte navn (f.eks. spacing-kombinasjoner --jkl-spacing-16-24)
// finnes ikke literalt i kilden, men er gyldige.
const DYNAMIC_PATTERNS = [/^--jkl-spacing-[0-9a-z]+(?:-[0-9a-z]+)+$/];

const CATEGORY_RULES = [
    [/^--jkl-color-/, "farge"],
    [/^--jkl-(?:font|line-height|text-styles?|letter-spacing)-/, "typografi"],
    [/^--jkl-(?:spacing|unit)-/, "avstand"],
    [/^--jkl-border-radius-/, "radius"],
    [/^--jkl-border-width-/, "kantlinje"],
    [/^--jkl-motion-/, "motion"],
    [/^--jkl-breakpoint-/, "brekkpunkt"],
];

function scanDeclarations(dir, into) {
    let entries;
    try {
        entries = readdirSync(dir, { withFileTypes: true });
    } catch {
        return;
    }
    for (const e of entries) {
        if (e.name === "node_modules" || e.name.startsWith(".")) continue;
        const p = join(dir, e.name);
        if (e.isDirectory()) {
            scanDeclarations(p, into);
        } else if (STYLE_EXT.test(e.name)) {
            let text = "";
            try {
                text = readFileSync(p, "utf8");
            } catch {
                continue;
            }
            DECL_RE.lastIndex = 0;
            let m;
            while ((m = DECL_RE.exec(text))) into.add(m[1]);
        }
    }
}

/** { public: Set (offentlige theme-tokens), declared: Set (alle deklarerte) }. */
export function buildTokenCatalog(config) {
    const srcRoot = resolve(process.cwd(), config.componentsDir, "..");
    const publicSet = new Set();
    scanDeclarations(join(srcRoot, "styles", "theme"), publicSet);
    const declared = new Set(publicSet);
    scanDeclarations(srcRoot, declared);
    return { public: publicSet, declared };
}

/** gyldig (offentlig) | privat (intern, skjør) | ukjent (typo/fjernet). */
export function classifyToken(name, catalog) {
    if (catalog.public.has(name)) return "gyldig";
    if (DYNAMIC_PATTERNS.some((re) => re.test(name))) return "gyldig";
    if (catalog.declared.has(name)) return "privat";
    return "ukjent";
}

export function categorizeToken(name) {
    for (const [re, cat] of CATEGORY_RULES) if (re.test(name)) return cat;
    const seg = name.replace(/^--jkl-/, "").split("-")[0];
    return seg || "annet";
}
