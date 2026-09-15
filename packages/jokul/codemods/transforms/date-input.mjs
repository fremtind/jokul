// DatePicker er omdøpt til DateInput og Calendar er skrevet om til å bygge på det native
// <input type="date">-elementet i Jøkul 6. Denne transformen håndterer de
// mekaniske delene av migreringen og varsler om det som må vurderes manuelt.
//
// Automatiske endringer:
//   - Import path: @fremtind/jokul/datepicker → @fremtind/jokul/date-input
//   - Komponentnavn: DatePicker → DateInput
//   - Props på <DateInput>:
//     disableBeforeDate={...} → min={...}
//     disableAfterDate={...}  → max={...}
//
// Manuell oppfølging (varsler):
//   - value/defaultValue/min/max bruker nå ISO-format (yyyy-mm-dd), ikke dd.mm.yyyy
//   - onChange gir nå et standard React ChangeEvent (les event.target.value)
//   - defaultShow, initialShow, extended, invalid, yearsToShow, days, months,
//     monthLabel, yearLabel, action, showCalendarLabel, hideCalendarLabel og
//     textInputProps er fjernet
//   - hjelpefunksjonen formatInput er fjernet – bruk toValidInputValue

const IMPORT_PATH_RENAMES = [
    [
        /from\s+["']@fremtind\/jokul\/datepicker["']/g,
        'from "@fremtind/jokul/date-input"',
    ],
    [
        /from\s+["']@fremtind\/jokul\/date-inputs["']/g,
        'from "@fremtind/jokul/date-input"',
    ],
    [
        /from\s+["']@fremtind\/jokul\/date-picker["']/g,
        'from "@fremtind/jokul/date-input"',
    ],
];

// Component name replacements (imports + JSX tags)
const COMPONENT_RENAMES = [
    // Import specifiers: `import { DatePicker } ...` -> `import { DateInput } ...`
    [/\bDatePicker\b(?=\s*(?:,|}|as\b))/g, "DateInput"],
    // JSX opening/closing tags
    [/<\s*DatePicker\b/g, "<DateInput"],
    [/<\s*\/\s*DatePicker\b/g, "</DateInput"],
];

// Prop name replacements - Kun JSX-attributter (etterfulgt av `=`) matches
const PROP_RENAMES = [
    [/\bdisableBeforeDate(?=\s*=)/g, "min"],
    [/\bdisableAfterDate(?=\s*=)/g, "max"],
];

// Fjernede props uten direkte erstatning. Codemoden kan ikke gjette intensjonen,
// så vi varsler i stedet for å endre koden. Boolske props brukes ofte uten `=`,
// derfor to lister.
const REMOVED_BOOLEAN_PROPS = [
    ["defaultShow", "Kalenderen åpnes via kalenderknappen (popover)."],
    ["initialShow", "Kalenderen åpnes via kalenderknappen (popover)."],
    ["extended", "Kalenderen har alltid måneds- og årsvelger."],
    [
        "invalid",
        "Bruk `errorLabel`, som setter både `aria-invalid` og feilstilen.",
    ],
];

const REMOVED_VALUE_PROPS = [
    [
        "yearsToShow",
        "Årsvelgeren utledes fra `min`/`max` (±5 år som standard).",
    ],
    ["months", "Månedsnavn hentes fra `Intl` med `nb-NO`."],
    ["days", "Ukedagsnavn hentes fra `Intl` med `nb-NO`."],
    ["monthLabel", "Månedsvelgeren har fast, skjult label «Måned»."],
    ["yearLabel", "Årsvelgeren har fast, skjult label «År»."],
    [
        "showCalendarLabel",
        "Kalenderknappen har fast aria-label «Åpne kalender».",
    ],
    ["hideCalendarLabel", "Kalenderen lukkes med Esc eller klikk utenfor."],
    ["action", "Egne handlinger må plasseres utenfor feltet."],
    [
        "textInputProps",
        'Send attributtene direkte på <DateInput>; de videresendes til <input type="date">.',
    ],
];

const USES_DATE_COMPONENT = /<\s*(?:DateInput|DatePicker)\b/;

// Kun JSX-attributter: hopp over `aria-invalid`, `obj.invalid`, `isInvalid`,
// variabeldeklarasjoner (`const months = ...`) og sammenligninger (`days === 3`).
const NOT_PART_OF_IDENTIFIER = "(?<![-\\w.$])";
const NOT_A_DECLARATION = "(?<!\\b(?:const|let|var)\\s+)";

const DATE_COMPONENT_TAG_START = /<\s*(?:DateInput|DatePicker)\b/g;

// Leser en JSX-tag fra `<DateInput` til matchende `>`. Hopper over `>` inne i
// uttrykk (`onChange={(e) => ...}`), strenger og template-literaler.
function replaceInDateComponentTags(text, replaceTag) {
    let output = "";
    let lastIndex = 0;
    DATE_COMPONENT_TAG_START.lastIndex = 0;

    for (
        let match = DATE_COMPONENT_TAG_START.exec(text);
        match !== null;
        match = DATE_COMPONENT_TAG_START.exec(text)
    ) {
        const start = match.index;
        let i = DATE_COMPONENT_TAG_START.lastIndex;
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
        DATE_COMPONENT_TAG_START.lastIndex = end;
    }

    return output + text.slice(lastIndex);
}

export function applyDateInputTransforms(text) {
    let next = text;
    let count = 0;

    // Replace import paths
    for (const [pattern, replacement] of IMPORT_PATH_RENAMES) {
        next = next.replace(pattern, () => {
            count += 1;
            return replacement;
        });
    }

    // Replace component names in JSX
    for (const [pattern, replacement] of COMPONENT_RENAMES) {
        const matches = next.match(pattern);
        if (matches) {
            next = next.replace(pattern, replacement);
            count += matches.length;
        }
    }

    // Replace prop names
    for (const [pattern, replacement] of PROP_RENAMES) {
        next = replaceInDateComponentTags(next, (tag) => {
            let replacedTag = tag;
            for (const [pattern, replacement] of PROP_RENAMES) {
                replacedTag = replacedTag.replace(pattern, () => {
                    count += 1;
                    return replacement;
                });
            }
            return replacedTag;
        });
    }

    const warnings = [];

    if (USES_DATE_COMPONENT.test(next)) {
        warnings.push(
            "Manuell vurdering: DateInput `onChange`, `onFocus` og `onBlur` er nå vanlige React-handlere som kun får `event`. Les datoen fra `event.target.value` i stedet for `(event, date, { error, value })`.",
        );
        warnings.push(
            "Manuell vurdering: DateInput bruker nå ISO-datoformat (yyyy-mm-dd) for `value`, `defaultValue`, `min` og `max`. Konverter eventuelle `dd.mm.yyyy`-strenger.",
        );
        warnings.push(
            "Manuell vurdering: DateInput `onChange` gir nå et standard React change-event. Les datoen fra `event.target.value` i stedet for `(event, date, { error, value })`.",
        );

        for (const [prop, hint] of REMOVED_BOOLEAN_PROPS) {
            const pattern = new RegExp(
                `${NOT_PART_OF_IDENTIFIER}${prop}\\b(?=[\\s/>=}])`,
            );
            if (pattern.test(next)) {
                warnings.push(
                    `Manuell vurdering: \`${prop}\` er fjernet fra DateInput. ${hint}`,
                );
            }
        }

        for (const [prop, hint] of REMOVED_VALUE_PROPS) {
            const pattern = new RegExp(
                `${NOT_PART_OF_IDENTIFIER}${NOT_A_DECLARATION}${prop}\\s*=(?!=)`,
            );
            if (pattern.test(next)) {
                warnings.push(
                    `Manuell vurdering: \`${prop}\` er fjernet fra DateInput. ${hint}`,
                );
            }
        }
    }

    if (/\bformatInput\b/.test(next)) {
        warnings.push(
            "Manuell vurdering: hjelpefunksjonen `formatInput` er fjernet. Bruk `toValidInputValue` for å normalisere datostrenger til ISO-format.",
        );
    }

    return { text: next, count, warnings };
}
