// FileInput er forenklet i Jøkul 7: den kompakte visningen brukes alltid, og
// filvelgeren bruker nettleserens egen dra-og-slipp. Denne transformen
// håndterer de mekaniske delene av migreringen og varsler om det som må
// vurderes manuelt.
//
// Automatiske endringer:
//   - <FileInput variant="small" /> → <FileInput />  (variant er fjernet)
//   - onChange-typen snevres inn til ChangeEvent:
//     React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement> →
//     React.ChangeEvent<HTMLInputElement>
//   - .jkl-file-input--has-files → .jkl-file-input:has(.jkl-file)
//
// Manuell oppfølging (varsler):
//   - HandleFiles er fjernet
//   - jkl-file-input--has-files brukt utenfor en CSS-selektor
//   - data-track-* settes bare på filvelgeren, ikke dropsonen
//   - upload() gir null for svar som ikke er JSON, og kaster Error med HTTP-status

const FILE_INPUT_TAG_START = /<\s*FileInput\b/g;

// Leser en JSX-tag fra `<FileInput` til matchende `>`. Hopper over `>` inne i
// uttrykk (`onChange={(e) => ...}`), strenger og template-literaler.
function replaceInFileInputTags(text, replaceTag) {
    let output = "";
    let lastIndex = 0;
    FILE_INPUT_TAG_START.lastIndex = 0;

    for (
        let match = FILE_INPUT_TAG_START.exec(text);
        match !== null;
        match = FILE_INPUT_TAG_START.exec(text)
    ) {
        const start = match.index;
        let i = FILE_INPUT_TAG_START.lastIndex;
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
                // Anførselstegn utenfor `{...}` er JSX-strenger uten escape
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
        FILE_INPUT_TAG_START.lastIndex = end;
    }

    return output + text.slice(lastIndex);
}

// Finner slutten av en balansert `{...}`-blokk. `startIndex` peker på tegnet
// etter den åpne `{`.
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

// `variant` etter mellomrom, så `fileVariant` og `data-track-variant` ikke treffes
const VARIANT_PROP_START = /\s+variant=/g;

function removeVariantProp(tag) {
    VARIANT_PROP_START.lastIndex = 0;
    const match = VARIANT_PROP_START.exec(tag);
    if (!match) return { tag, removed: false };

    const valueStart = VARIANT_PROP_START.lastIndex;
    const first = tag[valueStart];
    let valueEnd = -1;

    if (first === '"' || first === "'") {
        const closing = tag.indexOf(first, valueStart + 1);
        if (closing !== -1) valueEnd = closing + 1;
    } else if (first === "{") {
        const closing = findMatchingBrace(tag, valueStart + 1);
        if (closing !== -1) valueEnd = closing + 1;
    }

    if (valueEnd === -1) return { tag, removed: false };

    return {
        tag: tag.slice(0, match.index) + tag.slice(valueEnd),
        removed: true,
    };
}

const CHANGE_EVENT = "((?:React\\.)?ChangeEvent<HTMLInputElement>)";
const DRAG_EVENT = "(?:React\\.)?DragEvent<HTMLDivElement>";
const EVENT_UNION_CHANGE_FIRST = new RegExp(
    `${CHANGE_EVENT}\\s*\\|\\s*${DRAG_EVENT}`,
    "g",
);
const EVENT_UNION_DRAG_FIRST = new RegExp(
    `${DRAG_EVENT}\\s*\\|\\s*${CHANGE_EVENT}`,
    "g",
);

const HAS_FILES_SELECTOR = /\.jkl-file-input--has-files\b/g;

const UPLOAD_IMPORT =
    /import\s*(?:type\s*)?\{[^}]*\bupload\b[^}]*\}\s*from\s*["']@fremtind\/jokul(?:\/file-input)?["']/;

const USES_FILE_INPUT = /\b(?:FileInput|UploadedFile)\b|jkl-file-input/;

export function applyFileInputTransforms(text) {
    let next = text;
    let count = 0;

    next = replaceInFileInputTags(next, (tag) => {
        const { tag: withoutVariant, removed } = removeVariantProp(tag);
        if (removed) count += 1;
        return withoutVariant;
    });

    if (USES_FILE_INPUT.test(next)) {
        for (const pattern of [
            EVENT_UNION_CHANGE_FIRST,
            EVENT_UNION_DRAG_FIRST,
        ]) {
            next = next.replace(pattern, (_, changeEvent) => {
                count += 1;
                return changeEvent;
            });
        }
    }

    next = next.replace(HAS_FILES_SELECTOR, () => {
        count += 1;
        return ".jkl-file-input:has(.jkl-file)";
    });

    const warnings = [];

    if (/\bHandleFiles\b/.test(next)) {
        warnings.push(
            "Manuell vurdering: typen `HandleFiles` er fjernet fra FileInput. `onChange` får alltid `(event: ChangeEvent<HTMLInputElement>, files: UploadedFile[])`.",
        );
    }

    if (/jkl-file-input--has-files/.test(next)) {
        warnings.push(
            "Manuell vurdering: klassen `jkl-file-input--has-files` er fjernet. Bruk `:has(.jkl-file)` i CSS i stedet.",
        );
    }

    if (/jkl-file-input__dropzone/.test(next) && /data-track/.test(next)) {
        warnings.push(
            'Manuell vurdering: `data-track-*` settes nå bare på filvelgeren (`<input type="file">`), ikke på `.jkl-file-input__dropzone`.',
        );
    }

    if (UPLOAD_IMPORT.test(next)) {
        warnings.push(
            "Manuell vurdering: `upload()` gir nå `null` for svar som ikke er gyldig JSON, og kaster `Error` med HTTP-status i meldingen i stedet for `statusText`.",
        );
    }

    return { text: next, count, warnings };
}
