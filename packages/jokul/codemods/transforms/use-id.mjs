// Jøkul 6: `useId` bytter signatur fra
//   useId(id?, { generateSuffix?: boolean })
// til
//   useId(prefix?, id?)
//
// Det vanlige idiomet
//   useId(id || "jkl-prefix", { generateSuffix: !id })
// blir dermed til
//   useId("jkl-prefix", id)
//
// `useId()` og `useId("jkl-prefix")` er uendret og røres ikke – de har samme
// oppførsel i den nye signaturen.

// useId(EXPR || "streng", { generateSuffix: !EXPR }) -> useId("streng", EXPR)
const IDIOM_PATTERN =
    /useId\(\s*([A-Za-z_$][\w$]*)\s*\|\|\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*,\s*\{\s*generateSuffix\s*:\s*!\s*\1\b\s*,?\s*\}\s*\)/g;

// useId(EXPR, { generateSuffix: false }) -> useId(undefined, EXPR)
const VERBATIM_PATTERN =
    /useId\(\s*([^,(){}]+?)\s*,\s*\{\s*generateSuffix\s*:\s*false\s*,?\s*\}\s*\)/g;

// useId(EXPR, { generateSuffix: true }) -> useId(EXPR)
const PREFIX_PATTERN =
    /useId\(\s*([^,(){}]+?)\s*,\s*\{\s*generateSuffix\s*:\s*true\s*,?\s*\}\s*\)/g;

// Rester vi ikke klarte å migrere automatisk (f.eks. generateSuffix: someVar).
const REMAINING_GENERATE_SUFFIX_PATTERN = /useId\s*\([^)]*\bgenerateSuffix\b/;

export function applyUseIdTransforms(text) {
    let count = 0;
    const warnings = [];
    let next = text;

    next = next.replace(IDIOM_PATTERN, (_full, expr, str) => {
        count += 1;
        return `useId(${str}, ${expr})`;
    });

    next = next.replace(VERBATIM_PATTERN, (_full, expr) => {
        count += 1;
        return `useId(undefined, ${expr.trim()})`;
    });

    next = next.replace(PREFIX_PATTERN, (_full, expr) => {
        count += 1;
        return `useId(${expr.trim()})`;
    });

    if (REMAINING_GENERATE_SUFFIX_PATTERN.test(next)) {
        warnings.push(
            "Manuell vurdering: fant `useId(...)` med `generateSuffix` som ikke kunne migreres automatisk. Ny signatur er `useId(prefix?, id?)` – flytt et eventuelt prefiks til første argument og en fast id til andre argument.",
        );
    }

    return { text: next, count, warnings };
}
