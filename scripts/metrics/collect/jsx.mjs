/** Rene JSX-parsing-primitiver for Jøkul-komponenter (ingen I/O, lett å teste). */

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const IMPORT_RE =
    /import\s+(?:type\s+)?([^;]+?)\s+from\s*["']@fremtind\/jokul\/([A-Za-z0-9/_-]+)["']/g;

/** Lokale JSX-navn → komponent-subpath (håndterer named + `as`-alias). */
export function parseComponentImports(content, componentSet) {
    const map = new Map();
    for (const m of content.matchAll(IMPORT_RE)) {
        const sub = m[2];
        if (!componentSet.has(sub)) continue;
        const clause = m[1];
        const braces = clause.match(/\{([^}]*)\}/);
        if (braces) {
            for (const part of braces[1].split(",")) {
                const seg = part.trim().replace(/^type\s+/, "");
                if (!seg) continue;
                const as = seg.match(/^(\w+)\s+as\s+(\w+)$/);
                const local = as ? as[2] : seg;
                if (/^[A-Za-z_]\w*$/.test(local)) map.set(local, sub);
            }
        } else {
            const def = clause.split(",")[0].trim();
            if (/^[A-Za-z_]\w*$/.test(def)) map.set(def, sub);
        }
    }
    return map;
}

/** Tekst i en åpnende tag, fra rett etter komponentnavnet til `>`/`/>`. Klamme-/quote-bevisst. */
function openingTagText(content, start) {
    let i = start;
    let depth = 0;
    let quote = null;
    for (; i < content.length; i++) {
        const c = content[i];
        if (quote) {
            if (c === quote) quote = null;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            quote = c;
            continue;
        }
        if (c === "{") {
            depth++;
            continue;
        }
        if (c === "}") {
            if (depth > 0) depth--;
            continue;
        }
        if (depth === 0 && c === ">") return content.slice(start, i);
        if (depth === 0 && c === "/" && content[i + 1] === ">")
            return content.slice(start, i);
    }
    return content.slice(start, i);
}

/** Itererer over åpnende tagger for Jøkul-komponenter i en fil. */
export function* jokulTags(content, componentSet) {
    const imports = parseComponentImports(content, componentSet);
    for (const [local, sub] of imports) {
        const re = new RegExp(`<${escapeRe(local)}(?=[\\s/>])`, "g");
        let m;
        while ((m = re.exec(content))) {
            const tagText = openingTagText(content, m.index + m[0].length);
            yield { sub, local, tagText };
        }
    }
}

/** Tokeniserer en tag og returnerer settet med attributt-navn.
 *  `{...spread}` registreres som «…spread» så vi kan rapportere blindsoner. */
function readTagAttrs(content, i) {
    const attrs = new Set();
    let depth = 0;
    let quote = null;
    let name = "";
    for (; i < content.length; i++) {
        const c = content[i];
        if (quote) {
            if (c === quote) quote = null;
            continue;
        }
        if (depth > 0) {
            if (c === "{") depth++;
            else if (c === "}") depth--;
            continue;
        }
        if (c === '"' || c === "'") {
            if (name) {
                attrs.add(name);
                name = "";
            }
            quote = c;
            continue;
        }
        if (c === "{") {
            if (name) {
                attrs.add(name);
                name = "";
            }
            // Spread ({...x}) skjuler reell prop-bruk – marker som blindsone.
            let j = i + 1;
            while (j < content.length && /\s/.test(content[j])) j++;
            if (content.startsWith("...", j)) attrs.add("…spread");
            depth++;
            continue;
        }
        if (c === ">") {
            if (name) attrs.add(name);
            break;
        }
        if (c === "/" && content[i + 1] === ">") {
            if (name) attrs.add(name);
            break;
        }
        if (c === "=" || /\s/.test(c)) {
            if (name) {
                attrs.add(name);
                name = "";
            }
            continue;
        }
        if (/[A-Za-z0-9_-]/.test(c)) name += c;
        else if (name) {
            attrs.add(name);
            name = "";
        }
    }
    return attrs;
}

export const attrNames = (tagText) => readTagAttrs(`${tagText}>`, 0);

/** Normaliser et `{…}`-uttrykk til en verdi for gruppering. */
function normalizeExpr(expr) {
    const t = expr.trim();
    const lit = t.match(/^["'`]([\s\S]*)["'`]$/);
    if (lit) return lit[1];
    if (/^(true|false|null|undefined)$/.test(t)) return t;
    if (/^-?\d+(?:\.\d+)?$/.test(t)) return t;
    return `{${t.length > 30 ? `${t.slice(0, 27)}…` : t}}`;
}

/** Alle verdier for `propName` i en tag-tekst.
 *  Returnerer { value, kind } der kind ∈ literal | boolean | dynamic | unknown. */
export function propValuesInTag(tagText, propName) {
    const values = [];
    const re = new RegExp(`(?:^|\\s)${escapeRe(propName)}(?=[\\s=/>]|$)`, "g");
    let m;
    while ((m = re.exec(tagText))) {
        let i = m.index + m[0].length;
        while (i < tagText.length && /\s/.test(tagText[i])) i++;
        if (tagText[i] !== "=") {
            values.push({ value: "true", kind: "boolean" }); // boolsk shorthand
            continue;
        }
        i++;
        while (i < tagText.length && /\s/.test(tagText[i])) i++;
        const q = tagText[i];
        if (q === '"' || q === "'") {
            let v = "";
            i++;
            while (i < tagText.length && tagText[i] !== q) v += tagText[i++];
            values.push({ value: v, kind: "literal" });
        } else if (q === "{") {
            let depth = 0;
            let expr = "";
            let qt = null;
            for (; i < tagText.length; i++) {
                const ch = tagText[i];
                if (qt) {
                    expr += ch;
                    if (ch === qt) qt = null;
                    continue;
                }
                if (ch === '"' || ch === "'" || ch === "`") {
                    qt = ch;
                    expr += ch;
                    continue;
                }
                if (ch === "{") {
                    depth++;
                    if (depth === 1) continue;
                    expr += ch;
                    continue;
                }
                if (ch === "}") {
                    depth--;
                    if (depth === 0) break;
                    expr += ch;
                    continue;
                }
                expr += ch;
            }
            const norm = normalizeExpr(expr);
            const dynamic = norm.startsWith("{") && norm.endsWith("}");
            values.push({ value: norm, kind: dynamic ? "dynamic" : "literal" });
        } else {
            values.push({ value: "(ukjent)", kind: "unknown" });
        }
    }
    return values;
}

/** Alle prop-navn på `<localName …>`-tagger (aggregert, uten verdier). */
export function scanProps(content, localName) {
    const props = new Set();
    const re = new RegExp(`<${localName}(?=[\\s/>])`, "g");
    let m;
    while ((m = re.exec(content))) {
        for (const a of readTagAttrs(content, m.index + m[0].length))
            props.add(a);
    }
    return props;
}
