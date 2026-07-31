/** Bygger en API-modell per Jøkul-komponent rett fra kildekoden, og
 *  klassifiserer props (og prop-VERDIER) konsumenter bruker.
 *
 *  Modellen bygges per faktisk EKSPORTERT *Props-type (fra komponentens
 *  index.ts) og løser opp arve-/intersection-kjeden (`extends` / `&`) gjennom
 *  både lokale og importerte typer.
 *
 *  I tillegg til prop-NAVN (known/deprecated) hentes prop-TYPER ut, slik at
 *  props som er lukkede literal-unioner (f.eks. `variant?: ButtonVariant`,
 *  `align?: "left" | "right"`, `padding?: 16 | 24 | 40`) får et sett med
 *  tillatte verdier. `as const`-arrays (`const buttonVariants = [...] as const`)
 *  og alias-kjeder løses også opp. Da kan verdi-drilldownen flagge ugyldige
 *  verdier.
 *
 *  Parseren er tekst-basert (ingen TS-avhengighet). Kommentarer blankes ut
 *  (lengde-bevart), så JSDoc-@example ikke ødelegger parsingen, mens
 *  @deprecated fortsatt kan leses fra rå-teksten per medlem. */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const REGISTRY_DEPTH = 4; // antall fil-hopp vi følger relative importer

// Globale/HTML/React-attributter (+ polymorf `as`) vi ikke vil flagge som «ukjent».
const HTML_ATTRS = new Set([
    "className",
    "class",
    "style",
    "id",
    "key",
    "ref",
    "as",
    "role",
    "tabIndex",
    "title",
    "hidden",
    "dir",
    "lang",
    "slot",
    "children",
    "translate",
    "draggable",
    "spellCheck",
    "contentEditable",
    "autoFocus",
    "autoCapitalize",
    "inputMode",
    "enterKeyHint",
    "nonce",
    "is",
    "dangerouslySetInnerHTML",
    "name",
    "value",
    "type",
    "checked",
    "defaultValue",
    "defaultChecked",
    "disabled",
    "required",
    "readOnly",
    "placeholder",
    "maxLength",
    "minLength",
    "min",
    "max",
    "step",
    "pattern",
    "autoComplete",
    "multiple",
    "size",
    "rows",
    "cols",
    "wrap",
    "accept",
    "list",
    "form",
    "htmlFor",
    "noValidate",
    "href",
    "target",
    "rel",
    "download",
    "referrerPolicy",
    "src",
    "srcSet",
    "sizes",
    "alt",
    "width",
    "height",
    "loading",
    "decoding",
    "crossOrigin",
    "media",
    "poster",
    "preload",
    "controls",
    "autoPlay",
    "loop",
    "muted",
    "playsInline",
    "colSpan",
    "rowSpan",
    "scope",
    "headers",
    "span",
    "open",
    "selected",
    "start",
    "reversed",
    "cite",
    "dateTime",
    "method",
    "action",
    "encType",
]);

export function isHtmlAttr(name) {
    if (HTML_ATTRS.has(name)) return true;
    if (name.startsWith("aria-") || name.startsWith("data-")) return true;
    if (/^on[A-Z]/.test(name)) return true; // hendelseshåndterere
    return false;
}

/** Klassifiser én prop mot komponentens API-modell. */
export function classifyProp(api, sub, prop) {
    if (prop === "…spread") return "spread";
    const a = api.get(sub);
    if (!a || a.known.size === 0) return "kjent"; // umodellert → ikke flagg
    if (a.deprecated.has(prop)) return "utfaset";
    if (a.known.has(prop)) return "kjent";
    if (isHtmlAttr(prop)) return "html";
    return "ukjent";
}

/** Sett av tillatte literal-verdier for en prop, eller null (åpen/umodellert). */
export function allowedPropValues(api, sub, prop) {
    return api.get(sub)?.enums?.get(prop) ?? null;
}

// ---- lav-nivå tekst-hjelpere --------------------------------------------

/** Bytt ut kommentar-innhold med mellomrom, men behold streng-innhold,
 *  linjeskift og total lengde (så indekser fra masken peker i rå-teksten). */
function blankComments(s) {
    const out = s.split("");
    let q = null;
    let line = false;
    let block = false;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const n = s[i + 1];
        if (line) {
            if (c === "\n") line = false;
            else out[i] = " ";
            continue;
        }
        if (block) {
            if (c === "*" && n === "/") {
                out[i] = " ";
                out[i + 1] = " ";
                i++;
                block = false;
            } else if (c !== "\n") out[i] = " ";
            continue;
        }
        if (q) {
            if (c === "\\") i++;
            else if (c === q) q = null;
            continue;
        }
        if (c === "/" && n === "/") {
            out[i] = " ";
            out[i + 1] = " ";
            i++;
            line = true;
            continue;
        }
        if (c === "/" && n === "*") {
            out[i] = " ";
            out[i + 1] = " ";
            i++;
            block = true;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") q = c;
    }
    return out.join("");
}

function stripComments(s) {
    return blankComments(s);
}

function stripStrings(s) {
    return s.replace(
        /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g,
        " ",
    );
}

/** Blank ut alt innenfor nøstede grupper ({}, (), [], <>), behold dybde-0. */
function maskNested(s) {
    let out = "";
    let depth = 0;
    let q = null;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (q) {
            out += depth === 0 ? c : " ";
            if (c === q) q = null;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            q = c;
            out += depth === 0 ? c : " ";
            continue;
        }
        if (c === "{" || c === "(" || c === "[" || c === "<") {
            if (depth === 0) out += " ";
            depth++;
            continue;
        }
        if (c === "}" || c === ")" || c === "]" || c === ">") {
            if (depth > 0) depth--;
            out += " ";
            continue;
        }
        out += depth === 0 ? c : " ";
    }
    return out;
}

/** Blank kun innhold i {} og [] (behold <> og () for generics/base-typer). */
function maskObjectBodies(s) {
    let out = "";
    let depth = 0;
    let q = null;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (q) {
            out += depth === 0 ? c : " ";
            if (c === q) q = null;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            q = c;
            out += depth === 0 ? c : " ";
            continue;
        }
        if (c === "{" || c === "[") {
            if (depth === 0) out += " ";
            depth++;
            continue;
        }
        if (c === "}" || c === "]") {
            if (depth > 0) depth--;
            out += " ";
            continue;
        }
        out += depth === 0 ? c : " ";
    }
    return out;
}

const CAP_REF_RE = /(?<![.\w$])[A-Z][A-Za-z0-9_]*/g;

function capitalizedRefs(s) {
    const set = new Set();
    CAP_REF_RE.lastIndex = 0;
    let m;
    while ((m = CAP_REF_RE.exec(s))) set.add(m[0]);
    return set;
}

/** Del en type-tekst på topp-nivå `|` (union). */
function splitTopLevelUnion(s) {
    const parts = [];
    let depth = 0;
    let ang = 0;
    let par = 0;
    let sq = 0;
    let q = null;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (q) {
            if (c === "\\") i++;
            else if (c === q) q = null;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            q = c;
            continue;
        }
        if (c === "{") depth++;
        else if (c === "}") {
            if (depth > 0) depth--;
        } else if (c === "<") ang++;
        else if (c === ">") {
            if (ang > 0) ang--;
        } else if (c === "(") par++;
        else if (c === ")") {
            if (par > 0) par--;
        } else if (c === "[") sq++;
        else if (c === "]") {
            if (sq > 0) sq--;
        } else if (
            c === "|" &&
            depth === 0 &&
            ang === 0 &&
            par === 0 &&
            sq === 0
        ) {
            parts.push(s.slice(start, i));
            start = i + 1;
        }
    }
    parts.push(s.slice(start));
    return parts;
}

/** Tillatte verdier for en literal-union-type, eller null hvis åpen.
 *  ctx: { consts: Map(name->Set), enums: Map(name->{values,closed}) }. */
function literalUnionValues(typeText, ctx) {
    const alts = splitTopLevelUnion(typeText);
    const values = new Set();
    for (let alt of alts) {
        alt = alt.trim();
        if (!alt) continue;
        let mm;
        if (
            (mm = alt.match(/^"([^"]*)"$/)) ||
            (mm = alt.match(/^'([^']*)'$/))
        ) {
            values.add(mm[1]);
        } else if (/^-?\d+(?:\.\d+)?$/.test(alt)) {
            values.add(alt);
        } else if (
            (mm = alt.match(
                /^\(?\s*typeof\s+([A-Za-z_$][\w$]*)\s*\)?\s*\[\s*number\s*\]$/,
            ))
        ) {
            const c = ctx.consts.get(mm[1]);
            if (!c) return null;
            for (const v of c) values.add(v);
        } else if (/^[A-Za-z_$][\w$]*$/.test(alt)) {
            const e = ctx.enums.get(alt);
            if (!e || !e.closed) return null;
            for (const v of e.values) values.add(v);
        } else {
            return null; // objekt/funksjon/generisk → åpen
        }
    }
    return values.size ? values : null;
}

/** Effektivt verdisett for en prop som kan ha flere type-oppføringer.
 *  `never`/`undefined`/`null` ignoreres; er ALLE gjenværende lukkede literal-
 *  unioner unioneres de, ellers regnes prop-en som åpen. */
function enumForTypes(typeSet, ctx) {
    const meaningful = [...typeSet]
        .map((t) => t.trim())
        .filter((t) => t && !/^(never|undefined|null)$/.test(t));
    if (!meaningful.length) return null;
    const all = new Set();
    for (const t of meaningful) {
        const v = literalUnionValues(t, ctx);
        if (!v) return null;
        for (const x of v) all.add(x);
    }
    return all.size ? all : null;
}

// ---- medlemmer i en type-kropp ------------------------------------------

const MEMBER_RE =
    /(?:^|[;,])\s*(?:readonly\s+)?(?:"([^"]+)"|'([^']+)'|([A-Za-z_$][\w$]*))\s*\??\s*:/gm;

function membersOfBody(maskedBody) {
    const clean = maskNested(stripComments(maskedBody));
    const keys = new Set();
    MEMBER_RE.lastIndex = 0;
    let m;
    while ((m = MEMBER_RE.exec(clean))) {
        const k = m[1] ?? m[2] ?? m[3];
        if (k) keys.add(k);
    }
    return keys;
}

const DEPRECATED_RE =
    /@deprecated[\s\S]*?\*\/\s*(?:readonly\s+)?(?:"([^"]+)"|'([^']+)'|([A-Za-z_$][\w$]*))\s*\??\s*:/g;

function deprecatedMembersOfBody(rawBody) {
    const set = new Set();
    DEPRECATED_RE.lastIndex = 0;
    let m;
    while ((m = DEPRECATED_RE.exec(rawBody))) {
        const k = m[1] ?? m[2] ?? m[3];
        if (k) set.add(k);
    }
    return set;
}

function addMembers(members, maskedBody, rawBody) {
    for (const k of membersOfBody(maskedBody))
        if (!members.has(k)) members.set(k, false);
    for (const k of deprecatedMembersOfBody(rawBody)) members.set(k, true);
}

/** Del en type-kropp i medlems-segmenter (på topp-nivå `;`/`,`). */
function* memberSegments(maskedBody) {
    let depth = 0;
    let ang = 0;
    let par = 0;
    let sq = 0;
    let q = null;
    let start = 0;
    const s = maskedBody;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (q) {
            if (c === "\\") i++;
            else if (c === q) q = null;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            q = c;
            continue;
        }
        if (c === "{") depth++;
        else if (c === "}") {
            if (depth > 0) depth--;
        } else if (c === "<") ang++;
        else if (c === ">") {
            if (ang > 0) ang--;
        } else if (c === "(") par++;
        else if (c === ")") {
            if (par > 0) par--;
        } else if (c === "[") sq++;
        else if (c === "]") {
            if (sq > 0) sq--;
        } else if (
            (c === ";" || c === ",") &&
            depth === 0 &&
            ang === 0 &&
            par === 0 &&
            sq === 0
        ) {
            yield s.slice(start, i);
            start = i + 1;
        }
    }
    if (start < s.length) yield s.slice(start);
}

const SEG_RE =
    /^\s*(?:readonly\s+)?(?:"([^"]+)"|'([^']+)'|([A-Za-z_$][\w$]*))\s*\??\s*:\s*([\s\S]*)$/;

/** Fyll `types` (Map(key->Set<typeText>)) fra en type-kropp. */
function collectMemberTypes(types, maskedBody) {
    for (const seg of memberSegments(maskedBody)) {
        const mm = seg.match(SEG_RE);
        if (!mm) continue;
        const key = mm[1] ?? mm[2] ?? mm[3];
        const type = (mm[4] ?? "").trim();
        if (!key || !type) continue;
        let s = types.get(key);
        if (!s) {
            s = new Set();
            types.set(key, s);
        }
        s.add(type);
    }
}

const CONST_ARR_RE =
    /(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*=\s*\[([\s\S]*?)\]\s*as\s+const/g;

/** `const X = [...] as const` → Map(X -> Set<verdier>). */
function parseConstArrays(masked) {
    const map = new Map();
    CONST_ARR_RE.lastIndex = 0;
    let m;
    while ((m = CONST_ARR_RE.exec(masked))) {
        const vals = new Set();
        for (const lit of m[2].split(",")) {
            const t = lit.trim();
            let mm;
            if ((mm = t.match(/^"([^"]*)"$/)) || (mm = t.match(/^'([^']*)'$/)))
                vals.add(mm[1]);
            else if (/^-?\d+(?:\.\d+)?$/.test(t)) vals.add(t);
        }
        if (vals.size) map.set(m[1], vals);
    }
    return map;
}

// ---- deklarasjons-parsing (interface/type) ------------------------------

const TYPE_DECL_RE =
    /(?:export\s+)?(?:declare\s+)?(interface|type)\s+([A-Za-z0-9_]+)/g;

function headerUntilBrace(text, from) {
    let ang = 0;
    let par = 0;
    for (let j = from; j < text.length; j++) {
        const c = text[j];
        if (c === "<") ang++;
        else if (c === ">") {
            if (ang > 0) ang--;
        } else if (c === "(") par++;
        else if (c === ")") {
            if (par > 0) par--;
        } else if (c === "{" && ang === 0 && par === 0) {
            return { header: text.slice(from, j), braceIndex: j };
        } else if (c === ";" && ang === 0 && par === 0) {
            return { header: text.slice(from, j), braceIndex: -1 };
        }
    }
    return { header: text.slice(from), braceIndex: -1 };
}

function typeAliasRhs(text, from) {
    let ang = 0;
    let par = 0;
    let sq = 0;
    let cur = 0;
    let eq = -1;
    for (let i = from; i < text.length; i++) {
        const c = text[i];
        if (c === "<") ang++;
        else if (c === ">") {
            if (ang > 0) ang--;
        } else if (c === "(") par++;
        else if (c === ")") {
            if (par > 0) par--;
        } else if (c === "[") sq++;
        else if (c === "]") {
            if (sq > 0) sq--;
        } else if (c === "{") cur++;
        else if (c === "}") {
            if (cur > 0) cur--;
        } else if (
            c === "=" &&
            text[i + 1] !== ">" &&
            ang === 0 &&
            par === 0 &&
            sq === 0 &&
            cur === 0
        ) {
            eq = i;
            break;
        } else if (
            c === ";" &&
            ang === 0 &&
            par === 0 &&
            sq === 0 &&
            cur === 0
        ) {
            break;
        }
    }
    if (eq === -1) return { text: "", end: -1 };
    ang = par = sq = cur = 0;
    let j = eq + 1;
    for (; j < text.length; j++) {
        const c = text[j];
        if (c === "<") ang++;
        else if (c === ">") {
            if (ang > 0) ang--;
        } else if (c === "(") par++;
        else if (c === ")") {
            if (par > 0) par--;
        } else if (c === "[") sq++;
        else if (c === "]") {
            if (sq > 0) sq--;
        } else if (c === "{") cur++;
        else if (c === "}") {
            if (cur > 0) cur--;
        } else if (
            c === ";" &&
            ang === 0 &&
            par === 0 &&
            sq === 0 &&
            cur === 0
        ) {
            break;
        }
    }
    return { text: text.slice(eq + 1, j), end: j };
}

function typeBodySpans(text, from) {
    const spans = [];
    let ang = 0;
    let par = 0;
    let sq = 0;
    for (let j = from; j < text.length; j++) {
        const c = text[j];
        if (c === "<") ang++;
        else if (c === ">") {
            if (ang > 0) ang--;
        } else if (c === "(") par++;
        else if (c === ")") {
            if (par > 0) par--;
        } else if (c === "[") sq++;
        else if (c === "]") {
            if (sq > 0) sq--;
        } else if (c === "{" && ang === 0 && par === 0 && sq === 0) {
            const close = matchBrace(text, j);
            if (close === -1) break;
            spans.push([j + 1, close]);
            j = close;
        } else if (c === ";" && ang === 0 && par === 0 && sq === 0) {
            break;
        }
    }
    return spans;
}

function matchBrace(text, open) {
    let depth = 0;
    let q = null;
    for (let j = open; j < text.length; j++) {
        const c = text[j];
        if (q) {
            if (c === "\\") j++;
            else if (c === q) q = null;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            q = c;
            continue;
        }
        if (c === "{") depth++;
        else if (c === "}") {
            depth--;
            if (depth === 0) return j;
        }
    }
    return -1;
}

/** Parse alle interface/type-deklarasjoner i en fil (raw + kommentar-masket). */
function parseDeclarations(raw, masked) {
    const decls = [];
    TYPE_DECL_RE.lastIndex = 0;
    let m;
    while ((m = TYPE_DECL_RE.exec(masked))) {
        const kind = m[1];
        const name = m[2];
        const from = TYPE_DECL_RE.lastIndex;
        const members = new Map();
        const parents = new Set();
        const types = new Map();
        let aliasRhs = null;
        if (kind === "interface") {
            const { header, braceIndex } = headerUntilBrace(masked, from);
            for (const ref of capitalizedRefs(stripStrings(header)))
                if (ref !== name) parents.add(ref);
            if (braceIndex !== -1) {
                const close = matchBrace(masked, braceIndex);
                if (close !== -1) {
                    const mbody = masked.slice(braceIndex + 1, close);
                    addMembers(
                        members,
                        mbody,
                        raw.slice(braceIndex + 1, close),
                    );
                    collectMemberTypes(types, mbody);
                    TYPE_DECL_RE.lastIndex = close;
                }
            }
        } else {
            const { text: rhs, end } = typeAliasRhs(masked, from);
            aliasRhs = rhs.trim();
            for (const ref of capitalizedRefs(
                maskObjectBodies(stripStrings(rhs)),
            ))
                if (ref !== name) parents.add(ref);
            for (const [s, e] of typeBodySpans(masked, from)) {
                const mbody = masked.slice(s, e);
                addMembers(members, mbody, raw.slice(s, e));
                collectMemberTypes(types, mbody);
            }
            if (end !== -1) TYPE_DECL_RE.lastIndex = end;
        }
        decls.push({ name, members, parents, types, aliasRhs });
    }
    return decls;
}

// ---- fil-oppslag + register ---------------------------------------------

function resolveModule(fromDir, spec) {
    const base = resolve(fromDir, spec).replace(/\.(jsx?|tsx?)$/, "");
    const candidates = [
        `${base}.ts`,
        `${base}.tsx`,
        join(base, "index.ts"),
        join(base, "index.tsx"),
    ];
    for (const c of candidates) if (existsSync(c)) return c;
    return null;
}

function relativeImports(text, abs) {
    const dir = dirname(abs);
    const out = [];
    const re = /(?:import|export)\b[^;]*?from\s*["'](\.[^"']+)["']/g;
    let m;
    while ((m = re.exec(text))) {
        const resolved = resolveModule(dir, m[1]);
        if (resolved) out.push(resolved);
    }
    return out;
}

function parseFileDecls(abs, cache) {
    if (cache.has(abs)) return cache.get(abs);
    let text = "";
    try {
        text = readFileSync(abs, "utf8");
    } catch {
        /* mangler – tom modell */
    }
    const masked = blankComments(text);
    const parsed = {
        decls: parseDeclarations(text, masked),
        consts: parseConstArrays(masked),
        imports: relativeImports(text, abs),
    };
    cache.set(abs, parsed);
    return parsed;
}

function ownTypeFiles(dir) {
    let entries;
    try {
        entries = readdirSync(dir, { withFileTypes: true });
    } catch {
        return [];
    }
    return entries
        .filter(
            (e) =>
                e.isFile() &&
                /\.(ts|tsx)$/.test(e.name) &&
                !/\.(test|stories|figma)\./.test(e.name),
        )
        .map((e) => join(dir, e.name));
}

/** Bygg navn-indeksert register + const-arrays for én komponents import-lukning. */
function buildRegistry(startFiles, cache, srcRoot) {
    const registry = new Map(); // name -> { members, parents, types, aliasRhs }
    const consts = new Map(); // const-navn -> Set<verdier>
    const seen = new Set();
    const queue = startFiles.map((f) => ({ file: f, depth: REGISTRY_DEPTH }));
    while (queue.length) {
        const { file, depth } = queue.shift();
        if (seen.has(file)) continue;
        seen.add(file);
        const parsed = parseFileDecls(file, cache);
        for (const [n, v] of parsed.consts)
            if (!consts.has(n)) consts.set(n, v);
        for (const d of parsed.decls) {
            let e = registry.get(d.name);
            if (!e) {
                e = {
                    members: new Map(),
                    parents: new Set(),
                    types: new Map(),
                    aliasRhs: null,
                };
                registry.set(d.name, e);
            }
            for (const [k, dep] of d.members)
                e.members.set(k, (e.members.get(k) ?? false) || dep);
            for (const p of d.parents) e.parents.add(p);
            for (const [k, s] of d.types) {
                let cur = e.types.get(k);
                if (!cur) {
                    cur = new Set();
                    e.types.set(k, cur);
                }
                for (const t of s) cur.add(t);
            }
            if (!e.aliasRhs && d.aliasRhs) e.aliasRhs = d.aliasRhs;
        }
        if (depth > 1)
            for (const imp of parsed.imports)
                if (!seen.has(imp) && imp.startsWith(srcRoot))
                    queue.push({ file: imp, depth: depth - 1 });
    }
    return { registry, consts };
}

/** Løs opp en type transitivt via `parents` (extends/&), samle known/deprecated/types. */
function resolveType(name, registry, seen, out) {
    if (seen.has(name)) return;
    seen.add(name);
    const e = registry.get(name);
    if (!e) return;
    for (const [k, dep] of e.members) {
        out.known.add(k);
        if (dep) out.deprecated.add(k);
    }
    for (const [k, s] of e.types) {
        let cur = out.types.get(k);
        if (!cur) {
            cur = new Set();
            out.types.set(k, cur);
        }
        for (const t of s) cur.add(t);
    }
    for (const p of e.parents)
        if (registry.has(p)) resolveType(p, registry, seen, out);
}

/** Løs opp alle type-aliaser som er lukkede literal-unioner (fikspunkt). */
function buildEnumAliases(registry, consts) {
    const enums = new Map(); // name -> { values:Set, closed:true }
    const aliases = [];
    for (const [name, e] of registry)
        if (e.aliasRhs) aliases.push([name, e.aliasRhs]);
    let changed = true;
    let guard = 0;
    while (changed && guard++ < 12) {
        changed = false;
        for (const [name, rhs] of aliases) {
            if (enums.has(name)) continue;
            const vals = literalUnionValues(rhs, { consts, enums });
            if (vals) {
                enums.set(name, { values: vals, closed: true });
                changed = true;
            }
        }
    }
    return enums;
}

const EXPORT_TYPE_RE = /export\s+type\s*\{([\s\S]*?)\}/g;

/** Eksporterte *Props-typer fra en komponents index.ts (de offentlige rot-typene). */
function exportedRootProps(indexFile) {
    let text = "";
    try {
        text = blankComments(readFileSync(indexFile, "utf8"));
    } catch {
        return new Set();
    }
    const roots = new Set();
    EXPORT_TYPE_RE.lastIndex = 0;
    let m;
    while ((m = EXPORT_TYPE_RE.exec(text))) {
        for (const part of m[1].split(",")) {
            const original = part
                .trim()
                .split(/\s+as\s+/)[0]
                .trim();
            if (/Props$/.test(original)) roots.add(original);
        }
    }
    return roots;
}

/** components (subpaths) -> Map(sub -> { known, deprecated, enums }). */
export function buildComponentApi(components, config) {
    const compDir = resolve(process.cwd(), config.componentsDir);
    const srcRoot = resolve(compDir, ".."); // packages/jokul/src
    const cache = new Map();
    const api = new Map();
    for (const sub of components) {
        const dir = join(compDir, sub);
        const { registry, consts } = buildRegistry(
            ownTypeFiles(dir),
            cache,
            srcRoot,
        );

        const indexFile = ["index.ts", "index.tsx"]
            .map((f) => join(dir, f))
            .find((f) => existsSync(f));
        const roots = indexFile ? exportedRootProps(indexFile) : new Set();

        const scoped = {
            known: new Set(),
            deprecated: new Set(),
            types: new Map(),
        };
        for (const root of roots)
            resolveType(root, registry, new Set(), scoped);

        if (scoped.known.size > 0) {
            const ctx = { consts, enums: buildEnumAliases(registry, consts) };
            const enums = new Map();
            for (const [prop, typeSet] of scoped.types) {
                const vals = enumForTypes(typeSet, ctx);
                if (vals) enums.set(prop, vals);
            }
            api.set(sub, {
                known: scoped.known,
                deprecated: scoped.deprecated,
                enums,
            });
            continue;
        }

        // Fallback: over-approksimert union av hele mappas import-lukning.
        const union = {
            known: new Set(),
            deprecated: new Set(),
            enums: new Map(),
        };
        for (const e of registry.values())
            for (const [k, dep] of e.members) {
                union.known.add(k);
                if (dep) union.deprecated.add(k);
            }
        api.set(sub, union);
    }
    return api;
}
