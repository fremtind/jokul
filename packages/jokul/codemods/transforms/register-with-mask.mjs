// De frittstående, utgåtte maskefunksjonene er fjernet i Jøkul 6:
//   registerWithFodselsnummerMask
//   registerWithKontonummerMask
//   registerWithKortnummerMask
//   registerWithTelefonnummerMask
//
// De erstattes av metodene på `registerWithMasks(form)`. Signaturen endres fra
//   registerWithXMask(form, name, options)
// til
//   registerWithMasks(form).registerWithXMask(name, options)
//
// Transformen skriver om kallsteder, rydder importene og varsler når et kall
// ikke kan migreres automatisk (mangler form-argument) eller er aliased.

const REMOVED_MASKS = [
    "registerWithFodselsnummerMask",
    "registerWithKontonummerMask",
    "registerWithKortnummerMask",
    "registerWithTelefonnummerMask",
];

const CALL_PATTERN = new RegExp(`(${REMOVED_MASKS.join("|")})\\s*\\(`, "g");

const IMPORT_PATTERN =
    /(import\s+(?:type\s+)?\{)([^}]*)(\}\s*from\s*)(["'])(@fremtind\/jokul\/(?:utilities|core))\4(\s*;?)/g;

function isMemberOrIdentifier(text, nameIndex) {
    const prev = text[nameIndex - 1];
    if (prev === undefined) {
        return false;
    }
    if (/[\w$]/.test(prev)) {
        return true;
    }
    if (prev === ".") {
        const isSpread =
            text[nameIndex - 2] === "." && text[nameIndex - 3] === ".";
        return !isSpread;
    }
    return false;
}

// Leser argumentlisten fra og med `(` på openParenIndex, og deler den i
// argumenter på toppnivå. Håndterer nøstede parenteser/klammer, strenger,
// template-literaler og kommentarer.
function readArguments(text, openParenIndex) {
    const args = [];
    let current = "";
    let i = openParenIndex + 1;
    const stack = ["("];
    let stringChar = null;
    let inLineComment = false;
    let inBlockComment = false;

    while (i < text.length) {
        const char = text[i];
        const next = text[i + 1];

        if (inLineComment) {
            current += char;
            if (char === "\n") {
                inLineComment = false;
            }
            i += 1;
            continue;
        }

        if (inBlockComment) {
            current += char;
            if (char === "*" && next === "/") {
                current += next;
                i += 2;
                inBlockComment = false;
                continue;
            }
            i += 1;
            continue;
        }

        if (stringChar) {
            current += char;
            if (char === "\\") {
                if (next !== undefined) {
                    current += next;
                    i += 2;
                    continue;
                }
            } else if (char === stringChar) {
                stringChar = null;
            }
            i += 1;
            continue;
        }

        if (char === "/" && next === "/") {
            inLineComment = true;
            current += char;
            i += 1;
            continue;
        }

        if (char === "/" && next === "*") {
            inBlockComment = true;
            current += char;
            i += 1;
            continue;
        }

        if (char === '"' || char === "'" || char === "`") {
            stringChar = char;
            current += char;
            i += 1;
            continue;
        }

        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
            current += char;
            i += 1;
            continue;
        }

        if (char === ")" || char === "]" || char === "}") {
            stack.pop();
            if (stack.length === 0) {
                if (current.trim() !== "" || args.length > 0) {
                    args.push(current);
                }
                return { args, endIndex: i + 1 };
            }
            current += char;
            i += 1;
            continue;
        }

        if (char === "," && stack.length === 1) {
            args.push(current);
            current = "";
            i += 1;
            continue;
        }

        current += char;
        i += 1;
    }

    return null;
}

function transformCallSites(text) {
    let count = 0;
    const warnings = [];
    let output = "";
    let lastIndex = 0;

    CALL_PATTERN.lastIndex = 0;
    for (
        let match = CALL_PATTERN.exec(text);
        match !== null;
        match = CALL_PATTERN.exec(text)
    ) {
        const name = match[1];
        const nameIndex = match.index;

        if (isMemberOrIdentifier(text, nameIndex)) {
            continue;
        }

        const openParenIndex = CALL_PATTERN.lastIndex - 1;
        const parsed = readArguments(text, openParenIndex);
        if (!parsed) {
            break;
        }

        const { args, endIndex } = parsed;
        const form = args.length > 0 ? args[0].trim() : "";

        if (form === "") {
            warnings.push(
                `Kunne ikke migrere \`${name}\` automatisk: fant ikke form-argumentet. Migrer manuelt til \`registerWithMasks(form).${name}(...)\`.`,
            );
            CALL_PATTERN.lastIndex = endIndex;
            continue;
        }

        const restArgs = args
            .slice(1)
            .map((arg) => arg.trim())
            .filter((arg) => arg !== "");

        const replacement = `registerWithMasks(${form}).${name}(${restArgs.join(", ")})`;

        output += text.slice(lastIndex, nameIndex) + replacement;
        lastIndex = endIndex;
        count += 1;
        CALL_PATTERN.lastIndex = endIndex;
    }

    output += text.slice(lastIndex);

    return { text: output, count, warnings };
}

function transformImports(text) {
    let count = 0;
    const warnings = [];

    const next = text.replace(
        IMPORT_PATTERN,
        (full, open, body, mid, quote, specifierPath, tail) => {
            const specifiers = body
                .split(",")
                .map((entry) => entry.trim())
                .filter((entry) => entry !== "");

            let removedAny = false;
            let hasRegisterWithMasks = false;
            const kept = [];

            for (const specifier of specifiers) {
                const baseName = specifier.split(/\s+as\s+/)[0].trim();

                if (baseName === "registerWithMasks") {
                    hasRegisterWithMasks = true;
                    kept.push(specifier);
                    continue;
                }

                if (REMOVED_MASKS.includes(baseName)) {
                    removedAny = true;
                    count += 1;
                    if (/\s+as\s+/.test(specifier)) {
                        warnings.push(
                            `\`${baseName}\` importeres med alias (\`${specifier}\`). Importen er fjernet, men kallstedene bruker aliaset og må migreres manuelt til \`registerWithMasks(form).${baseName}(...)\`.`,
                        );
                    }
                    continue;
                }

                kept.push(specifier);
            }

            if (!removedAny) {
                return full;
            }

            if (!hasRegisterWithMasks) {
                kept.unshift("registerWithMasks");
            }

            return `${open} ${kept.join(", ")} ${mid}${quote}${specifierPath}${quote}${tail}`;
        },
    );

    return { text: next, count, warnings };
}

export function applyRegisterWithMaskTransforms(text) {
    const calls = transformCallSites(text);
    const imports = transformImports(calls.text);

    return {
        text: imports.text,
        count: calls.count + imports.count,
        warnings: [...calls.warnings, ...imports.warnings],
    };
}
