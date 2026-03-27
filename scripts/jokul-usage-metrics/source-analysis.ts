import { JOKUL_PACKAGE_PATTERN } from "./constants.ts";
import {
    determinePackageFamilyFromModulePath,
    escapeRegex,
    normalizeComponentKey,
    normalizeHookKey,
    normalizeUtilityKey,
    toPascalCase,
} from "./utils.ts";

export function extractSignalsFromSource(source, catalogs) {
    const refs = extractModuleReferences(source);
    const components = [];
    const props = extractPropSignals(source, refs, catalogs);
    const tokens = extractCssVariableTokenSignals(source);
    const hooks = [];
    const utilities = [];
    const themes = [];

    for (const ref of refs) {
        components.push(...extractComponentSignals(ref, catalogs));
        hooks.push(...extractHookSignals(ref, catalogs));
        utilities.push(...extractUtilitySignals(ref, catalogs));
        tokens.push(...extractTokenImportSignals(ref, catalogs));
        themes.push(...extractThemeImportSignals(ref, catalogs));
    }

    const deprecated = extractDeprecatedSignals({
        source,
        refs,
        components,
        hooks,
        utilities,
        catalogs,
    });

    return {
        components,
        props,
        tokens,
        hooks,
        utilities,
        themes,
        deprecated,
    };
}

export function accumulateUsage(summaryMap, usage, filePath, keyParts) {
    const key = keyParts.join(":");
    const current = summaryMap.get(key) || {
        ...usage,
        files: new Set(),
        importOccurrences: 0,
    };

    current.files.add(filePath);
    current.importOccurrences += usage.importOccurrences || 1;
    summaryMap.set(key, current);
}

function extractModuleReferences(source) {
    const refs = [];
    const importFromRegex =
        /\b(?:import|export)\s+([\s\S]*?)\s+from\s+["']([^"']+)["']/g;
    const sideEffectImportRegex = /\bimport\s+["']([^"']+)["']/g;
    const destructuredRequireRegex =
        /\b(?:const|let|var)\s+\{([^}]+)\}\s*=\s*require\(\s*["']([^"']+)["']\s*\)/g;
    const assignedRequireRegex =
        /\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*require\(\s*["']([^"']+)["']\s*\)/g;
    const styleDirectiveRegex = /@(use|forward|import)\s+["']([^"']+)["']/g;
    let match;

    while ((match = importFromRegex.exec(source)) !== null) {
        refs.push({
            modulePath: match[2],
            specifiers: match[1],
            kind: "import",
        });
    }

    while ((match = sideEffectImportRegex.exec(source)) !== null) {
        refs.push({
            modulePath: match[1],
            specifiers: "*",
            kind: "import",
        });
    }

    while ((match = destructuredRequireRegex.exec(source)) !== null) {
        refs.push({
            modulePath: match[2],
            specifiers: `{${match[1]}}`,
            kind: "require",
        });
    }

    while ((match = assignedRequireRegex.exec(source)) !== null) {
        refs.push({
            modulePath: match[2],
            specifiers: match[1],
            kind: "assigned-require",
        });
    }

    while ((match = styleDirectiveRegex.exec(source)) !== null) {
        refs.push({
            modulePath: match[2],
            specifiers: "*",
            kind: `style-${match[1]}`,
        });
    }

    return refs;
}

function extractComponentSignals(ref, catalogs) {
    if (ref.modulePath.startsWith("@fremtind/jokul/")) {
        const componentSubpath = resolveComponentSubpath(
            ref.modulePath,
            catalogs.componentCatalog,
        );

        if (!componentSubpath) {
            return [];
        }

        const exportedSymbols =
            catalogs.componentCatalog.subpathSymbols.get(componentSubpath) ||
            [];
        const namedSymbols = extractNamedRuntimeSpecifiers(
            ref.specifiers,
        ).filter((symbol) => exportedSymbols.includes(symbol));

        if (namedSymbols.length > 0) {
            return namedSymbols.map((symbol) => ({
                componentName: symbol,
                componentKey: normalizeComponentKey(symbol),
                importSource: ref.modulePath,
                packageFamily: "consolidated",
            }));
        }

        if (!isTypeOnlySpecifier(ref.specifiers)) {
            const fallbackName =
                exportedSymbols[0] || toPascalCase(componentSubpath);

            return [
                {
                    componentName: fallbackName,
                    componentKey: normalizeComponentKey(fallbackName),
                    importSource: ref.modulePath,
                    packageFamily: "consolidated",
                },
            ];
        }
    }

    if (
        JOKUL_PACKAGE_PATTERN.test(ref.modulePath) &&
        ref.modulePath !== "@fremtind/jokul"
    ) {
        const componentKey = extractLegacyComponentKey(ref.modulePath);
        const componentName = toPascalCase(componentKey);

        if (
            !catalogs.componentCatalog.subpathSymbols.has(componentKey) &&
            !catalogs.componentCatalog.rootSymbols.has(componentName)
        ) {
            return [];
        }

        return [
            {
                componentName,
                componentKey: normalizeComponentKey(componentName),
                importSource: ref.modulePath,
                packageFamily: "legacy",
            },
        ];
    }

    return [];
}

function extractHookSignals(ref, catalogs) {
    if (ref.modulePath === "@fremtind/jokul") {
        return extractRootNamedSignals(
            ref,
            catalogs.hookCatalog.symbols,
            "hookName",
            "hookKey",
            normalizeHookKey,
            "consolidated",
        );
    }

    if (ref.modulePath === "@fremtind/jokul/hooks") {
        return extractRootNamedSignals(
            ref,
            catalogs.hookCatalog.symbols,
            "hookName",
            "hookKey",
            normalizeHookKey,
            "consolidated",
        );
    }

    const deepHookMatch = ref.modulePath.match(
        /^@fremtind\/jokul\/hooks\/([^/]+)$/,
    );

    if (deepHookMatch) {
        const hookName = deepHookMatch[1];

        if (catalogs.hookCatalog.symbols.has(hookName)) {
            return [
                {
                    hookName,
                    hookKey: normalizeHookKey(hookName),
                    importSource: ref.modulePath,
                    packageFamily: "consolidated",
                },
            ];
        }
    }

    return [];
}

function extractUtilitySignals(ref, catalogs) {
    if (
        ref.modulePath === "@fremtind/jokul" ||
        ref.modulePath === "@fremtind/jokul/utilities"
    ) {
        return extractRootNamedSignals(
            ref,
            catalogs.utilityCatalog.symbols,
            "utilityName",
            "utilityKey",
            normalizeUtilityKey,
            "consolidated",
        );
    }

    const deepUtilityMatch = ref.modulePath.match(
        /^@fremtind\/jokul\/utilities\/(.+)$/,
    );

    if (deepUtilityMatch) {
        const utilityName = deepUtilityMatch[1].split("/").at(-1) || "";

        if (catalogs.utilityCatalog.symbols.has(utilityName)) {
            return [
                {
                    utilityName,
                    utilityKey: normalizeUtilityKey(utilityName),
                    importSource: ref.modulePath,
                    packageFamily: "consolidated",
                },
            ];
        }
    }

    return [];
}

function extractThemeImportSignals(ref, catalogs) {
    const signals = [];

    if (
        ref.modulePath === "@fremtind/jokul/styles" ||
        ref.modulePath === "@fremtind/jokul/tailwind" ||
        ref.modulePath === "@fremtind/jokul/tailwind/v4" ||
        ref.modulePath === "@fremtind/jokul/core/tokens.less" ||
        ref.modulePath.startsWith("@fremtind/jokul/styles/")
    ) {
        signals.push({
            signalKind: "style-import",
            signalName: ref.modulePath,
            importSource: ref.modulePath,
            packageFamily: "consolidated",
        });
    }

    if (ref.modulePath === "@fremtind/jkl-core") {
        signals.push({
            signalKind: "style-import",
            signalName: ref.modulePath,
            importSource: ref.modulePath,
            packageFamily: "legacy",
        });
    }

    return signals;
}

function extractTokenImportSignals(ref, catalogs) {
    if (
        ref.modulePath !== "@fremtind/jokul" &&
        ref.modulePath !== "@fremtind/jokul/core"
    ) {
        return [];
    }

    return extractNamedRuntimeSpecifiers(ref.specifiers)
        .filter((symbol) => catalogs.coreCatalog.symbols.has(symbol))
        .map((symbol) => ({
            tokenName: symbol,
            tokenCategory: normalizeTokenCategory(symbol),
            tokenSource: "core-eksport",
            importSource: ref.modulePath,
            packageFamily: "consolidated",
        }));
}

function extractCssVariableTokenSignals(source) {
    const occurrences = new Map();

    for (const tokenName of source.match(/--jkl-[a-z0-9-]+/g) || []) {
        const current = occurrences.get(tokenName) || 0;
        occurrences.set(tokenName, current + 1);
    }

    return Array.from(occurrences.entries()).map(([tokenName, count]) => ({
        tokenName,
        tokenCategory: normalizeTokenCategory(tokenName),
        tokenSource: "css-variabel",
        importSource: "",
        packageFamily: "consolidated",
        importOccurrences: count,
    }));
}

function extractPropSignals(source, refs, catalogs) {
    const signals = [];
    const bindings = extractComponentImportBindings(refs, catalogs);

    for (const binding of bindings) {
        const componentProps = catalogs.propCatalog.propsByComponent.get(
            binding.componentName,
        );

        if (!componentProps || componentProps.size === 0) {
            continue;
        }

        for (const openingTag of findOpeningTagsForBinding(source, binding)) {
            for (const propName of extractOpeningTagPropNames(openingTag)) {
                if (!componentProps.has(propName)) {
                    continue;
                }

                signals.push({
                    componentName: binding.componentName,
                    componentKey: normalizeComponentKey(binding.componentName),
                    propName,
                    importSource: binding.importSource,
                    packageFamily: binding.packageFamily,
                    importOccurrences: 1,
                });
            }
        }
    }

    return signals;
}

function normalizeTokenCategory(tokenName) {
    const parts = tokenName.replace(/^--jkl-/, "").split("-");
    return parts[0] || "other";
}

function extractDeprecatedSignals({
    source,
    refs,
    components,
    hooks,
    utilities,
    catalogs,
}) {
    const signals = [];
    const seen = new Set();

    const pushDeprecated = (usage) => {
        const key = [
            usage.apiKind,
            usage.apiName,
            usage.importSource || "",
            usage.componentName || "",
        ].join(":");

        if (seen.has(key)) {
            return;
        }

        seen.add(key);
        signals.push(usage);
    };

    for (const usage of components) {
        const deprecation = catalogs.deprecatedCatalog.symbols.get(
            usage.componentName,
        );

        if (deprecation) {
            pushDeprecated({
                apiName: usage.componentName,
                apiKind: "component",
                importSource: usage.importSource,
                packageFamily: usage.packageFamily,
                deprecationMessage: deprecation.message,
            });
        }
    }

    for (const usage of hooks) {
        const deprecation = catalogs.deprecatedCatalog.symbols.get(
            usage.hookName,
        );

        if (deprecation) {
            pushDeprecated({
                apiName: usage.hookName,
                apiKind: "hook",
                importSource: usage.importSource,
                packageFamily: usage.packageFamily,
                deprecationMessage: deprecation.message,
            });
        }
    }

    for (const usage of utilities) {
        const deprecation = catalogs.deprecatedCatalog.symbols.get(
            usage.utilityName,
        );

        if (deprecation) {
            pushDeprecated({
                apiName: usage.utilityName,
                apiKind: "utility",
                importSource: usage.importSource,
                packageFamily: usage.packageFamily,
                deprecationMessage: deprecation.message,
            });
        }
    }

    for (const ref of refs) {
        for (const symbol of extractNamedRuntimeSpecifiers(ref.specifiers)) {
            const deprecation = catalogs.deprecatedCatalog.symbols.get(symbol);

            if (!deprecation) {
                continue;
            }

            pushDeprecated({
                apiName: symbol,
                apiKind: determineDeprecatedApiKind(symbol, catalogs),
                importSource: ref.modulePath,
                packageFamily: determinePackageFamilyFromModulePath(
                    ref.modulePath,
                ),
                deprecationMessage: deprecation.message,
            });
        }
    }

    for (const usage of extractDeprecatedPropSignals(source, refs, catalogs)) {
        signals.push(usage);
    }

    return signals;
}

function extractDeprecatedPropSignals(source, refs, catalogs) {
    const signals = [];
    const bindings = extractComponentImportBindings(refs, catalogs);

    for (const binding of bindings) {
        const deprecatedProps = catalogs.deprecatedCatalog.propsByComponent.get(
            binding.componentName,
        );

        if (!deprecatedProps || deprecatedProps.size === 0) {
            continue;
        }

        for (const openingTag of findOpeningTagsForBinding(source, binding)) {
            for (const [propName, deprecation] of deprecatedProps.entries()) {
                if (!openingTagHasProp(openingTag, propName)) {
                    continue;
                }

                signals.push({
                    apiName: propName,
                    apiKind: "prop",
                    componentName: binding.componentName,
                    componentKey: normalizeComponentKey(binding.componentName),
                    propName,
                    importSource: binding.importSource,
                    packageFamily: binding.packageFamily,
                    deprecationMessage: deprecation.message,
                    importOccurrences: 1,
                });
            }
        }
    }

    return signals;
}

function extractComponentImportBindings(refs, catalogs) {
    const bindings = [];

    for (const ref of refs) {
        const consolidatedSubpath = ref.modulePath.startsWith(
            "@fremtind/jokul/",
        )
            ? resolveComponentSubpath(ref.modulePath, catalogs.componentCatalog)
            : null;

        if (consolidatedSubpath) {
            const exportedSymbols =
                catalogs.componentCatalog.subpathSymbols.get(
                    consolidatedSubpath,
                ) || [];

            bindings.push(
                ...extractBindingsForComponentModule({
                    ref,
                    exportedSymbols,
                    importSource: ref.modulePath,
                    packageFamily: "consolidated",
                }),
            );
            continue;
        }

        if (
            JOKUL_PACKAGE_PATTERN.test(ref.modulePath) &&
            ref.modulePath !== "@fremtind/jokul"
        ) {
            const componentKey = extractLegacyComponentKey(ref.modulePath);
            const componentName = toPascalCase(componentKey);

            if (
                !catalogs.componentCatalog.subpathSymbols.has(componentKey) &&
                !catalogs.componentCatalog.rootSymbols.has(componentName)
            ) {
                continue;
            }

            bindings.push(
                ...extractBindingsForComponentModule({
                    ref,
                    exportedSymbols: [componentName],
                    importSource: ref.modulePath,
                    packageFamily: "legacy",
                }),
            );
        }
    }

    return dedupeBindings(bindings);
}

function extractBindingsForComponentModule({
    ref,
    exportedSymbols,
    importSource,
    packageFamily,
}) {
    const bindings = [];

    for (const binding of extractNamedRuntimeSpecifierBindings(
        ref.specifiers,
    )) {
        if (!exportedSymbols.includes(binding.imported)) {
            continue;
        }

        bindings.push({
            componentName: binding.imported,
            localName: binding.local,
            importSource,
            packageFamily,
        });
    }

    const namespaceAlias = extractNamespaceBinding(ref.specifiers);

    if (namespaceAlias) {
        for (const componentName of exportedSymbols) {
            bindings.push({
                componentName,
                namespaceAlias,
                importSource,
                packageFamily,
            });
        }
    }

    const defaultBinding = extractDefaultBinding(ref.specifiers);

    if (
        defaultBinding &&
        exportedSymbols.length === 1 &&
        !isTypeOnlySpecifier(ref.specifiers)
    ) {
        bindings.push({
            componentName: exportedSymbols[0],
            localName: defaultBinding,
            importSource,
            packageFamily,
        });
    }

    if (
        ref.kind === "assigned-require" &&
        exportedSymbols.length === 1 &&
        !isTypeOnlySpecifier(ref.specifiers)
    ) {
        bindings.push({
            componentName: exportedSymbols[0],
            localName: ref.specifiers.trim(),
            importSource,
            packageFamily,
        });
    }

    return bindings;
}

function dedupeBindings(bindings) {
    const seen = new Set();
    const deduped = [];

    for (const binding of bindings) {
        const key = [
            binding.componentName,
            binding.localName || "",
            binding.namespaceAlias || "",
            binding.importSource,
        ].join(":");

        if (seen.has(key)) {
            continue;
        }

        seen.add(key);
        deduped.push(binding);
    }

    return deduped;
}

function findOpeningTagsForBinding(source, binding) {
    const patterns: RegExp[] = [];

    if (binding.localName) {
        patterns.push(new RegExp(`<${escapeRegex(binding.localName)}\\b`, "g"));
    }

    if (binding.namespaceAlias) {
        patterns.push(
            new RegExp(
                `<${escapeRegex(binding.namespaceAlias)}\\.${escapeRegex(binding.componentName)}\\b`,
                "g",
            ),
        );
    }

    return patterns.flatMap((pattern) =>
        Array.from(source.matchAll(pattern))
            .map((match: RegExpExecArray) =>
                readJsxOpeningTag(
                    source,
                    match.index ?? -1,
                    (match.index ?? -1) + match[0].length,
                ),
            )
            .filter(Boolean),
    );
}

function extractOpeningTagPropNames(openingTag) {
    const propNames = new Set();
    const attributeSource = openingTag.replace(/^<[^>\s/]+/, "");
    const attributeRegex = /(?:\s|^)([A-Za-z_$][\w$-]*)(?:\s*=|(?=[\s/>]))/g;
    let match;

    while ((match = attributeRegex.exec(attributeSource)) !== null) {
        propNames.add(match[1]);
    }

    return propNames;
}

function openingTagHasProp(openingTag, propName) {
    return new RegExp(
        `(?:\\s|^)${escapeRegex(propName)}(?:\\s*=|(?=[\\s/>]))`,
    ).test(openingTag);
}

function readJsxOpeningTag(source, startIndex, cursorIndex) {
    let braceDepth = 0;
    let mode = "code";
    let isEscaped = false;

    for (let index = cursorIndex; index < source.length; index += 1) {
        const char = source[index];

        if (mode === "single-quote") {
            if (!isEscaped && char === "'") {
                mode = "code";
            }
            isEscaped = !isEscaped && char === "\\";
            continue;
        }

        if (mode === "double-quote") {
            if (!isEscaped && char === '"') {
                mode = "code";
            }
            isEscaped = !isEscaped && char === "\\";
            continue;
        }

        if (mode === "template-string") {
            if (!isEscaped && char === "`") {
                mode = "code";
            }
            isEscaped = !isEscaped && char === "\\";
            continue;
        }

        if (char === "'") {
            mode = "single-quote";
            isEscaped = false;
            continue;
        }

        if (char === '"') {
            mode = "double-quote";
            isEscaped = false;
            continue;
        }

        if (char === "`") {
            mode = "template-string";
            isEscaped = false;
            continue;
        }

        if (char === "{") {
            braceDepth += 1;
            continue;
        }

        if (char === "}" && braceDepth > 0) {
            braceDepth -= 1;
            continue;
        }

        if (char === ">" && braceDepth === 0) {
            return source.slice(startIndex, index + 1);
        }
    }

    return null;
}

function determineDeprecatedApiKind(symbol, catalogs) {
    if (catalogs.componentCatalog.rootSymbols.has(symbol)) {
        return "component";
    }

    if (catalogs.hookCatalog.symbols.has(symbol)) {
        return "hook";
    }

    if (catalogs.utilityCatalog.symbols.has(symbol)) {
        return "utility";
    }

    return "api";
}

function extractRootNamedSignals(
    ref,
    symbolSet,
    nameField,
    keyField,
    normalizeKey,
    packageFamily,
) {
    return extractNamedRuntimeSpecifiers(ref.specifiers)
        .filter((symbol) => symbolSet.has(symbol))
        .map((symbol) => ({
            [nameField]: symbol,
            [keyField]: normalizeKey(symbol),
            importSource: ref.modulePath,
            packageFamily,
        }));
}

function extractNamedRuntimeSpecifierBindings(specifiers) {
    const trimmed = specifiers.trim();
    const match = trimmed.match(/\{([^}]+)\}/);

    if (!match || isTypeOnlySpecifier(trimmed)) {
        return [];
    }

    return match[1]
        .split(",")
        .map((specifier) => specifier.trim())
        .filter(Boolean)
        .filter((specifier) => !specifier.startsWith("type "))
        .map((specifier) => {
            const [imported, local] = specifier
                .split(/\s+as\s+/)
                .map((part) => part.trim());

            return {
                imported,
                local: local || imported,
            };
        })
        .filter((binding) => binding.imported);
}

function extractNamedRuntimeSpecifiers(specifiers) {
    return extractNamedRuntimeSpecifierBindings(specifiers).map(
        (binding) => binding.imported,
    );
}

function extractNamespaceBinding(specifiers) {
    const trimmed = specifiers.trim();
    const match = trimmed.match(/(?:^|,\s*)\*\s+as\s+([A-Za-z_$][\w$]*)$/);
    return match ? match[1] : null;
}

function extractDefaultBinding(specifiers) {
    const trimmed = specifiers.trim();

    if (!trimmed || trimmed === "*" || isTypeOnlySpecifier(trimmed)) {
        return null;
    }

    if (trimmed.startsWith("{") || trimmed.startsWith("*")) {
        return null;
    }

    const [defaultPart] = trimmed.split(",");
    const candidate = defaultPart?.trim();

    return /^[A-Za-z_$][\w$]*$/.test(candidate || "") ? candidate : null;
}

function isTypeOnlySpecifier(specifiers) {
    return specifiers.trim().startsWith("type ");
}

function resolveComponentSubpath(modulePath, componentCatalog) {
    const subpath = modulePath
        .slice("@fremtind/jokul/".length)
        .replace(/\/index$/, "");

    if (componentCatalog.subpathSymbols.has(subpath)) {
        return subpath;
    }

    const directComponent = subpath.match(/^components\/([^/]+)/)?.[1];

    if (
        directComponent &&
        componentCatalog.subpathSymbols.has(directComponent)
    ) {
        return directComponent;
    }

    const styleComponent = subpath.match(/^styles\/components\/([^/]+)/)?.[1];

    if (styleComponent && componentCatalog.subpathSymbols.has(styleComponent)) {
        return styleComponent;
    }

    return null;
}

function extractLegacyComponentKey(modulePath) {
    return modulePath
        .replace(/^@fremtind\/jkl-/, "")
        .replace(/-(react|css|scss)$/, "");
}
