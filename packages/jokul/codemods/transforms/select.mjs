// Select er skrevet om fra bunnen i Jøkul 6, og bygger nå på det native HTML
// Popover API-et i stedet for en egendefinert listeboks-implementasjon. Denne
// transformen håndterer de mekaniske delene av migreringen og varsler om det
// som må vurderes manuelt.
//
// Automatiske endringer:
//   - Props på <Select>:
//     defaultPrompt={...} → placeholder={...}
//   - searchable som inline-funksjon med to enkle parametere flyttes til
//     filterFunction, med parameterrekkefølgen snudd (funksjonskroppen
//     refererer til parameterne ved navn og trenger ikke endres):
//     searchable={(searchValue, item) => ...} →
//     searchable filterFunction={(item, searchValue) => ...}
//
// Manuell oppfølging (varsler):
//   - NativeSelect er fjernet – migrer til Select
//   - BETA_Select/BETA_SelectProps er fjernet – migrer til stabil Select
//   - searchable som funksjonsreferanse (ikke en inline-funksjon med to enkle
//     parametere) kan ikke skrives om automatisk
//   - maxShownOptions, inline og invalid er fjernet uten direkte erstatning
//     (invalid erstattes av errorLabel)

// Kun JSX-attributter (etterfulgt av `=`) matches
const PROP_RENAMES = [[/\bdefaultPrompt(?=\s*=)/g, "placeholder"]];

const SELECT_TAG_START = /<\s*Select\b/g;

// Leser en JSX-tag fra `<Select` til matchende `>`. Hopper over `>` inne i
// uttrykk (`onChange={(e) => ...}`), strenger og template-literaler.
function replaceInSelectTags(text, replaceTag) {
    let output = "";
    let lastIndex = 0;
    SELECT_TAG_START.lastIndex = 0;

    for (
        let match = SELECT_TAG_START.exec(text);
        match !== null;
        match = SELECT_TAG_START.exec(text)
    ) {
        const start = match.index;
        let i = SELECT_TAG_START.lastIndex;
        let depth = 0;
        let stringChar = null;
        let end = -1;

        while (i < text.length) {
            const char = text[i];

            if (stringChar) {
                if (char === "\\") {
                    i += 2;
                    continue;
                }
                if (char === stringChar) stringChar = null;
                i += 1;
                continue;
            }
            if (char === '"' || char === "'" || char === "`") {
                stringChar = char;
            } else if (char === "{") {
                depth += 1;
            } else if (char === "}") {
                depth -= 1;
            } else if (char === ">" && depth === 0) {
                end = i + 1;
                break;
            }
            i += 1;
        }

        if (end === -1) break;

        output +=
            text.slice(lastIndex, start) + replaceTag(text.slice(start, end));
        lastIndex = end;
        SELECT_TAG_START.lastIndex = end;
    }

    return output + text.slice(lastIndex);
}

// Fanger opp searchable som ser ut som en funksjon: en arrow function, en
// navngitt/anonym function-deklarasjon, eller en identifikator som ikke er
// true/false (antatt å være en referanse til en filtreringsfunksjon).
const SEARCHABLE_FUNCTION_PATTERN =
    /\bsearchable=\{\s*(?:\(|function\b|(?!true\b|false\b)[A-Za-z_$][\w$]*\s*(?:=>|[,)}]))/;

// Matcher starten av en inline-funksjon med nøyaktig to enkle parametere
// (valgfri type-annotasjon uten parenteser/komma), som arrow function eller
// function-uttrykk. Grupperer parameter 1 og 2 hver for seg slik at de kan
// bytte plass uten å røre funksjonskroppen.
const SIMPLE_PARAM = "[A-Za-z_$][\\w$]*(?:\\s*:\\s*[^,()]+)?";
const TWO_PARAM_FUNCTION_HEAD = new RegExp(
    `^\\(\\s*(${SIMPLE_PARAM})\\s*,\\s*(${SIMPLE_PARAM})\\s*\\)\\s*=>|^function\\b[^(]*\\(\\s*(${SIMPLE_PARAM})\\s*,\\s*(${SIMPLE_PARAM})\\s*\\)`,
);

// Finner slutten av en balansert `{...}`-blokk som starter rett etter
// `startIndex` (som peker på tegnet etter den åpne `{`). Hopper over strenger,
// template-literaler og nøstede klammer/paranteser.
function findMatchingBrace(text, startIndex) {
    let depth = 1;
    let i = startIndex;
    let stringChar = null;

    while (i < text.length) {
        const char = text[i];

        if (stringChar) {
            if (char === "\\") {
                i += 2;
                continue;
            }
            if (char === stringChar) stringChar = null;
            i += 1;
            continue;
        }
        if (char === '"' || char === "'" || char === "`") {
            stringChar = char;
        } else if (char === "{") {
            depth += 1;
        } else if (char === "}") {
            depth -= 1;
            if (depth === 0) return i;
        }
        i += 1;
    }

    return -1;
}

const SEARCHABLE_PROP_START = /\bsearchable=\{/g;

// Skriver om `searchable={(a, b) => ...}` til `searchable filterFunction={(b, a) => ...}`
// når funksjonen har nøyaktig to enkle parametere. Funksjonskroppen refererer
// til parameterne ved navn, så den kan stå urørt – bare parameterrekkefølgen
// i signaturen trenger å snus.
function rewriteSearchableFilterFunction(tag) {
    SEARCHABLE_PROP_START.lastIndex = 0;
    const match = SEARCHABLE_PROP_START.exec(tag);
    if (!match) return { tag, rewritten: false };

    const contentStart = SEARCHABLE_PROP_START.lastIndex;
    const braceEnd = findMatchingBrace(tag, contentStart);
    if (braceEnd === -1) return { tag, rewritten: false };

    const content = tag.slice(contentStart, braceEnd);
    const headMatch = TWO_PARAM_FUNCTION_HEAD.exec(content);
    if (!headMatch) return { tag, rewritten: false };

    const [full, arrowA, arrowB, fnA, fnB] = headMatch;
    const paramA = arrowA ?? fnA;
    const paramB = arrowB ?? fnB;
    const swappedHead = full
        .replace(paramA, "\u0000")
        .replace(paramB, paramA)
        .replace("\u0000", paramB);
    const swappedContent = swappedHead + content.slice(full.length);

    const rewrittenTag = `${tag.slice(0, match.index)}searchable filterFunction={${swappedContent}${tag.slice(braceEnd)}`;

    return { tag: rewrittenTag, rewritten: true };
}

const NOT_PART_OF_IDENTIFIER = "(?<![-\\w.$])";

const REMOVED_PROPS = [
    ["maxShownOptions", "Fjernet uten direkte erstatning."],
    ["inline", "Fjernet uten direkte erstatning."],
    [
        "invalid",
        "Bruk `errorLabel`, som setter både `aria-invalid` og feilstilen.",
    ],
];

export function applySelectTransforms(text) {
    let next = text;
    let count = 0;

    next = replaceInSelectTags(next, (tag) => {
        let replacedTag = tag;
        for (const [pattern, replacement] of PROP_RENAMES) {
            replacedTag = replacedTag.replace(pattern, () => {
                count += 1;
                return replacement;
            });
        }

        const { tag: withFilterFunction, rewritten } =
            rewriteSearchableFilterFunction(replacedTag);
        if (rewritten) {
            count += 1;
            replacedTag = withFilterFunction;
        }

        return replacedTag;
    });

    const warnings = [];

    if (/\bNativeSelect\b/.test(next)) {
        warnings.push(
            "Manuell vurdering: `NativeSelect` er fjernet. Migrer til den nye `Select`, som nå bygger på et ekte `<select>`-element.",
        );
    }

    if (/\bBETA_Select(?:Props)?\b/.test(next)) {
        warnings.push(
            "Manuell vurdering: `BETA_Select`/`BETA_SelectProps` er fjernet. Migrer til den stabile `Select`.",
        );
    }

    replaceInSelectTags(next, (tag) => {
        if (SEARCHABLE_FUNCTION_PATTERN.test(tag)) {
            const { rewritten } = rewriteSearchableFilterFunction(tag);
            if (!rewritten) {
                warnings.push(
                    "Manuell vurdering: `searchable` på `Select` er en funksjonsreferanse som ikke kunne skrives om automatisk. Sett `searchable` til `true` og send filtreringslogikken til `filterFunction` (item, searchTerm) => boolean.",
                );
            }
        }

        for (const [prop, hint] of REMOVED_PROPS) {
            const pattern = new RegExp(
                `${NOT_PART_OF_IDENTIFIER}${prop}\\b(?=[\\s/>=}])`,
            );
            if (pattern.test(tag)) {
                warnings.push(
                    `Manuell vurdering: \`${prop}\` er fjernet fra Select. ${hint}`,
                );
            }
        }

        return tag;
    });

    return { text: next, count, warnings };
}
