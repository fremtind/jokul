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
//   - defaultShow er fjernet
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

const USES_DATE_COMPONENT = /<\s*(?:DateInput|DatePicker)\b/;

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
        next = next.replace(pattern, () => {
            count += 1;
            return replacement;
        });
    }

    const warnings = [];

    if (USES_DATE_COMPONENT.test(next)) {
        warnings.push(
            "Manuell vurdering: DateInput bruker nå ISO-datoformat (yyyy-mm-dd) for `value`, `defaultValue`, `min` og `max`. Konverter eventuelle `dd.mm.yyyy`-strenger.",
        );
        warnings.push(
            "Manuell vurdering: DateInput `onChange` gir nå et standard React change-event. Les datoen fra `event.target.value` i stedet for `(event, date, { error, value })`.",
        );

        if (/\bdefaultShow\b/.test(next)) {
            warnings.push(
                "Manuell vurdering: `defaultShow` er fjernet fra DateInput. Kalenderen åpnes via kalenderknappen (Popover).",
            );
        }
    }

    if (/\bformatInput\b/.test(next)) {
        warnings.push(
            "Manuell vurdering: hjelpefunksjonen `formatInput` er fjernet. Bruk `toValidInputValue` for å normalisere datostrenger til ISO-format.",
        );
    }

    return { text: next, count, warnings };
}
