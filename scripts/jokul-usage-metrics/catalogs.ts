import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import ts from "typescript";
import {
    COMPONENT_CATALOG_ROOTS,
    DEPRECATED_SYMBOL_SCAN_ROOTS,
} from "./constants.ts";
import { walkFiles } from "./utils.ts";

export function buildCatalogs() {
    const componentCatalog = buildComponentCatalog();
    const propCatalog = buildPropCatalog(componentCatalog);
    const hookCatalog = buildHookCatalog();
    const utilityCatalog = buildUtilityCatalog();
    const coreCatalog = buildCoreCatalog();
    const deprecatedCatalog = buildDeprecatedCatalog({
        componentCatalog,
        hookCatalog,
        utilityCatalog,
    });

    return {
        componentCatalog,
        propCatalog,
        hookCatalog,
        utilityCatalog,
        coreCatalog,
        deprecatedCatalog,
    };
}

function buildComponentCatalog() {
    const rootSymbols = new Set();
    const mergedSubpathSymbols = new Map();
    const entries = [];

    for (const baseDir of COMPONENT_CATALOG_ROOTS) {
        for (const entry of readdirSync(baseDir, { withFileTypes: true })) {
            if (!entry.isDirectory()) {
                continue;
            }

            const subpath = entry.name;
            const directoryPath = join(baseDir, subpath);
            const indexPath = join(directoryPath, "index.ts");

            if (!existsSync(indexPath)) {
                continue;
            }

            const exports = collectRuntimeExportsFromModule(indexPath);
            const componentNames = Array.from(exports).filter(
                isLikelyComponentSymbol,
            );

            if (componentNames.length === 0) {
                continue;
            }

            const symbols = mergedSubpathSymbols.get(subpath) || new Set();

            for (const componentName of componentNames) {
                symbols.add(componentName);
                rootSymbols.add(componentName);
            }

            mergedSubpathSymbols.set(subpath, symbols);
            entries.push({
                subpath,
                directoryPath,
                componentNames,
            });
        }
    }

    return {
        rootSymbols,
        subpathSymbols: new Map(
            Array.from(mergedSubpathSymbols.entries()).map(
                ([subpath, symbols]) => [subpath, Array.from(symbols)],
            ),
        ),
        entries,
    };
}

function buildHookCatalog() {
    const exports = collectRuntimeExportsFromModule(
        "packages/jokul/src/hooks/index.ts",
    );

    return {
        symbols: new Set(
            Array.from(exports).filter((name: string) =>
                /^use[A-Z]/.test(name),
            ),
        ),
    };
}

function buildPropCatalog(componentCatalog) {
    const propsByComponent = new Map();
    const program = createComponentProgram(componentCatalog);

    if (!program) {
        return { propsByComponent };
    }

    const checker = program.getTypeChecker();
    const repoSourcePrefix = `${normalizePath(join(process.cwd(), "packages/jokul/src"))}/`;

    for (const entry of componentCatalog.entries) {
        const indexPath = join(process.cwd(), entry.directoryPath, "index.ts");
        const sourceFile = program.getSourceFile(indexPath);

        if (!sourceFile) {
            continue;
        }

        const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

        if (!moduleSymbol) {
            continue;
        }

        const exportedSymbols = checker.getExportsOfModule(moduleSymbol);

        for (const componentName of entry.componentNames) {
            const exportedSymbol = exportedSymbols.find(
                (symbol) => symbol.name === componentName,
            );

            if (!exportedSymbol) {
                continue;
            }

            const propNames = extractTrackablePropNames(
                exportedSymbol,
                checker,
                repoSourcePrefix,
            );

            if (propNames.size === 0) {
                continue;
            }

            const current = propsByComponent.get(componentName) || new Set();

            for (const propName of propNames) {
                current.add(propName);
            }

            propsByComponent.set(componentName, current);
        }
    }

    return { propsByComponent };
}

function buildUtilityCatalog() {
    return {
        symbols: collectRuntimeExportsFromModule(
            "packages/jokul/src/utilities/index.ts",
        ),
    };
}

function buildCoreCatalog() {
    return {
        symbols: collectRuntimeExportsFromModule(
            "packages/jokul/src/core/index.ts",
        ),
    };
}

function buildDeprecatedCatalog({
    componentCatalog,
    hookCatalog,
    utilityCatalog,
}) {
    return {
        symbols: buildDeprecatedSymbolCatalog({
            componentCatalog,
            hookCatalog,
            utilityCatalog,
        }),
        propsByComponent: buildDeprecatedPropCatalog(componentCatalog),
    };
}

function createComponentProgram(componentCatalog) {
    const configPath = ts.findConfigFile(
        process.cwd(),
        ts.sys.fileExists,
        "tsconfig.json",
    );

    if (!configPath) {
        return null;
    }

    const configFile = ts.readConfigFile(configPath, ts.sys.readFile);

    if (configFile.error) {
        return null;
    }

    const parsedConfig = ts.parseJsonConfigFileContent(
        configFile.config,
        ts.sys,
        dirname(configPath),
        undefined,
        configPath,
    );
    const rootNames: string[] = Array.from(
        new Set(
            componentCatalog.entries.map((entry) =>
                join(process.cwd(), entry.directoryPath, "index.ts"),
            ),
        ),
    );

    return ts.createProgram({
        rootNames,
        options: parsedConfig.options,
    });
}

function extractTrackablePropNames(symbol, checker, repoSourcePrefix) {
    const resolvedSymbol =
        symbol.flags & ts.SymbolFlags.Alias
            ? checker.getAliasedSymbol(symbol)
            : symbol;
    const propType = resolveComponentPropType(resolvedSymbol, checker);
    const propNames = new Set();

    if (!propType) {
        return propNames;
    }

    for (const propSymbol of checker.getPropertiesOfType(propType)) {
        if (!isTrackablePropSymbol(propSymbol, repoSourcePrefix)) {
            continue;
        }

        propNames.add(propSymbol.getName());
    }

    return propNames;
}

function resolveComponentPropType(symbol, checker) {
    const declaration = symbol.valueDeclaration || symbol.declarations?.[0];

    if (declaration) {
        const symbolType = checker.getTypeOfSymbolAtLocation(
            symbol,
            declaration,
        );
        const callSignatureType = resolveSignatureParameterType(
            symbolType,
            checker,
        );

        if (callSignatureType) {
            return callSignatureType;
        }

        const apparentType = checker.getApparentType(symbolType);
        const apparentSignatureType = resolveSignatureParameterType(
            apparentType,
            checker,
        );

        if (apparentSignatureType) {
            return apparentSignatureType;
        }
    }

    for (const candidate of symbol.declarations || []) {
        const declarationType = resolvePropTypeFromDeclaration(
            candidate,
            checker,
        );

        if (declarationType) {
            return declarationType;
        }
    }

    return null;
}

function resolveSignatureParameterType(type, checker) {
    for (const signature of checker.getSignaturesOfType(
        type,
        ts.SignatureKind.Call,
    )) {
        const parameter = signature.getParameters()[0];

        if (!parameter) {
            continue;
        }

        const parameterDeclaration =
            parameter.valueDeclaration || parameter.declarations?.[0];

        if (!parameterDeclaration) {
            continue;
        }

        return checker.getTypeOfSymbolAtLocation(
            parameter,
            parameterDeclaration,
        );
    }

    return null;
}

function resolvePropTypeFromDeclaration(declaration, checker) {
    if (ts.isFunctionLike(declaration) && declaration.parameters.length > 0) {
        return checker.getTypeAtLocation(declaration.parameters[0]);
    }

    if (!ts.isVariableDeclaration(declaration)) {
        return null;
    }

    const initializer = declaration.initializer;

    if (!initializer || !ts.isCallExpression(initializer)) {
        return null;
    }

    const callback = initializer.arguments.find(
        (argument) =>
            ts.isFunctionExpression(argument) || ts.isArrowFunction(argument),
    );

    if (!callback || callback.parameters.length === 0) {
        return null;
    }

    return checker.getTypeAtLocation(callback.parameters[0]);
}

function isTrackablePropSymbol(propSymbol, repoSourcePrefix) {
    return (propSymbol.declarations || []).some((declaration) =>
        normalizePath(declaration.getSourceFile().fileName).startsWith(
            repoSourcePrefix,
        ),
    );
}

function buildDeprecatedSymbolCatalog({
    componentCatalog,
    hookCatalog,
    utilityCatalog,
}) {
    const deprecatedSymbols = new Map();
    const publicSymbols = new Set([
        ...componentCatalog.rootSymbols,
        ...hookCatalog.symbols,
        ...utilityCatalog.symbols,
    ]);

    for (const symbol of publicSymbols) {
        if (symbol.startsWith("BETA_")) {
            deprecatedSymbols.set(symbol, {
                message: "Beta-prefixed API",
            });
        }
    }

    for (const rootDir of DEPRECATED_SYMBOL_SCAN_ROOTS) {
        for (const filePath of walkFiles(rootDir)) {
            if (!shouldScanDeclarationFile(filePath)) {
                continue;
            }

            const source = readFileSync(filePath, "utf8");
            const matches = parseDeprecatedRuntimeExports(source);

            for (const match of matches) {
                if (
                    publicSymbols.has(match.name) ||
                    match.name.startsWith("BETA_") ||
                    isLikelyComponentSymbol(match.name) ||
                    /^use[A-Z]/.test(match.name)
                ) {
                    deprecatedSymbols.set(match.name, {
                        message: match.message,
                    });
                }
            }
        }
    }

    return deprecatedSymbols;
}

function buildDeprecatedPropCatalog(componentCatalog) {
    const propsByComponent = new Map();

    for (const entry of componentCatalog.entries) {
        for (const filePath of walkFiles(entry.directoryPath)) {
            if (!shouldScanDeclarationFile(filePath)) {
                continue;
            }

            const source = readFileSync(filePath, "utf8");
            const deprecatedProps = parseDeprecatedPropDeclarations(source);

            for (const deprecatedProp of deprecatedProps) {
                const owners = resolveDeprecatedPropOwners(
                    deprecatedProp.ownerTypeName,
                    entry.componentNames,
                );

                for (const componentName of owners) {
                    const propMap =
                        propsByComponent.get(componentName) || new Map();
                    const current = propMap.get(deprecatedProp.propName);

                    if (!current || !current.message) {
                        propMap.set(deprecatedProp.propName, {
                            message: deprecatedProp.message,
                            ownerTypeName: deprecatedProp.ownerTypeName,
                            filePath,
                        });
                    }

                    propsByComponent.set(componentName, propMap);
                }
            }
        }
    }

    return propsByComponent;
}

function shouldScanDeclarationFile(filePath) {
    return (
        /\.(ts|tsx)$/.test(filePath) &&
        !filePath.endsWith(".d.ts") &&
        !filePath.endsWith(".test.ts") &&
        !filePath.endsWith(".test.tsx") &&
        !filePath.endsWith(".spec.ts") &&
        !filePath.endsWith(".spec.tsx") &&
        !filePath.endsWith(".stories.ts") &&
        !filePath.endsWith(".stories.tsx") &&
        !filePath.endsWith(".figma.tsx")
    );
}

function collectRuntimeExportsFromModule(
    modulePath,
    visited = new Set<string>(),
) {
    const resolvedPath = resolveLocalModulePath(modulePath);

    if (
        !resolvedPath ||
        visited.has(resolvedPath) ||
        !existsSync(resolvedPath)
    ) {
        return new Set<string>();
    }

    visited.add(resolvedPath);

    const source = readFileSync(resolvedPath, "utf8");
    const names = new Set();

    for (const target of findExportStarTargets(source)) {
        if (target.startsWith("type ")) {
            continue;
        }

        for (const nestedName of collectRuntimeExportsFromModule(
            resolveRelativeModuleSpecifier(resolvedPath, target),
            visited,
        )) {
            names.add(nestedName);
        }
    }

    for (const match of findNamedReExports(source)) {
        for (const exportedName of match.names) {
            names.add(exportedName);
        }
    }

    for (const localName of findLocalNamedExports(source)) {
        names.add(localName);
    }

    for (const declarationName of findRuntimeExportDeclarations(source)) {
        names.add(declarationName);
    }

    return names;
}

function findExportStarTargets(source) {
    const targets = [];
    const regex = /export\s+\*\s+from\s+["']([^"']+)["']/g;
    let match;

    while ((match = regex.exec(source)) !== null) {
        targets.push(match[1]);
    }

    return targets;
}

function findNamedReExports(source) {
    const matches = [];
    const regex = /export\s*\{([^}]+)\}\s*from\s*["']([^"']+)["']/g;
    let match;

    while ((match = regex.exec(source)) !== null) {
        matches.push({
            names: parseExportedSpecifierNames(match[1]),
            target: match[2],
        });
    }

    return matches;
}

function findLocalNamedExports(source) {
    const names = [];
    const regex = /export\s*\{([^}]+)\}\s*;/g;
    let match;

    while ((match = regex.exec(source)) !== null) {
        names.push(...parseExportedSpecifierNames(match[1]));
    }

    return names;
}

function findRuntimeExportDeclarations(source) {
    const names = [];
    const patterns = [
        /\bexport\s+(?:async\s+)?function\s+([A-Za-z0-9_]+)/g,
        /\bexport\s+(?:const|let|var)\s+([A-Za-z0-9_]+)/g,
        /\bexport\s+class\s+([A-Za-z0-9_]+)/g,
    ];

    for (const pattern of patterns) {
        let match;

        while ((match = pattern.exec(source)) !== null) {
            names.push(match[1]);
        }
    }

    return names;
}

function parseExportedSpecifierNames(specifierList) {
    return specifierList
        .split(",")
        .map((specifier) => specifier.trim())
        .filter(Boolean)
        .filter((specifier) => !specifier.startsWith("type "))
        .map((specifier) => {
            const aliasMatch = specifier.match(/\bas\s+([A-Za-z0-9_]+)/);
            return aliasMatch ? aliasMatch[1] : specifier.split(/\s+/)[0];
        })
        .filter(Boolean);
}

function resolveLocalModulePath(modulePath) {
    const candidates = [modulePath];

    if (modulePath.endsWith(".js")) {
        candidates.push(modulePath.replace(/\.js$/, ".ts"));
        candidates.push(modulePath.replace(/\.js$/, ".tsx"));
    }

    if (!extname(modulePath)) {
        candidates.push(`${modulePath}.ts`);
        candidates.push(`${modulePath}.tsx`);
        candidates.push(join(modulePath, "index.ts"));
        candidates.push(join(modulePath, "index.tsx"));
    }

    return candidates.find((candidate) => existsSync(candidate)) || null;
}

function resolveRelativeModuleSpecifier(fromPath, relativeSpecifier) {
    return join(dirname(fromPath), relativeSpecifier);
}

function parseDeprecatedRuntimeExports(source) {
    const matches = [];
    const patterns = [
        /\/\*\*([\s\S]*?)\*\/\s*export\s+(?:async\s+)?function\s+([A-Za-z0-9_]+)/g,
        /\/\*\*([\s\S]*?)\*\/\s*export\s+(?:const|let|var)\s+([A-Za-z0-9_]+)/g,
        /\/\*\*([\s\S]*?)\*\/\s*export\s+class\s+([A-Za-z0-9_]+)/g,
    ];

    for (const pattern of patterns) {
        let match;

        while ((match = pattern.exec(source)) !== null) {
            if (!/@deprecated/.test(match[1])) {
                continue;
            }

            matches.push({
                name: match[2],
                message: extractDeprecatedMessage(match[1]),
            });
        }
    }

    return matches;
}

function parseDeprecatedPropDeclarations(source) {
    const declarations = [];

    for (const typeBlock of findTypeLikeBlocks(source)) {
        const patterns = [
            /\/\*\*([\s\S]*?)\*\/\s*(?:readonly\s+)?([A-Za-z0-9_]+)\??\s*:/g,
            /\/\*\*([\s\S]*?)\*\/\s*(?:readonly\s+)?([A-Za-z0-9_]+)\??\s*\(/g,
        ];

        for (const pattern of patterns) {
            let match;

            while ((match = pattern.exec(typeBlock.body)) !== null) {
                if (!/@deprecated/.test(match[1])) {
                    continue;
                }

                declarations.push({
                    ownerTypeName: typeBlock.name,
                    propName: match[2],
                    message: extractDeprecatedMessage(match[1]),
                });
            }
        }
    }

    return dedupeDeprecatedProps(declarations);
}

function dedupeDeprecatedProps(declarations) {
    const seen = new Set();
    const deduped = [];

    for (const declaration of declarations) {
        const key = `${declaration.ownerTypeName}:${declaration.propName}`;

        if (seen.has(key)) {
            continue;
        }

        seen.add(key);
        deduped.push(declaration);
    }

    return deduped;
}

function findTypeLikeBlocks(source) {
    const blocks = [];
    const typeLikeRegex =
        /\b(?:export\s+)?(?:interface|type)\s+([A-Za-z0-9_]+)/g;
    let match;

    while ((match = typeLikeRegex.exec(source)) !== null) {
        const braceIndex = source.indexOf("{", match.index + match[0].length);

        if (braceIndex === -1) {
            continue;
        }

        const newlineIndex = source.indexOf("\n", match.index);

        if (newlineIndex !== -1 && newlineIndex < braceIndex) {
            const semicolonIndex = source.indexOf(";", match.index);
            if (semicolonIndex !== -1 && semicolonIndex < braceIndex) {
                continue;
            }
        }

        const closingBraceIndex = findMatchingBrace(source, braceIndex);

        if (closingBraceIndex === -1) {
            continue;
        }

        blocks.push({
            name: match[1],
            body: source.slice(braceIndex + 1, closingBraceIndex),
        });

        typeLikeRegex.lastIndex = braceIndex + 1;
    }

    return blocks;
}

function findMatchingBrace(source, openingBraceIndex) {
    let depth = 0;
    let mode = "code";
    let isEscaped = false;

    for (let index = openingBraceIndex; index < source.length; index += 1) {
        const char = source[index];
        const nextChar = source[index + 1];

        if (mode === "line-comment") {
            if (char === "\n") {
                mode = "code";
            }
            continue;
        }

        if (mode === "block-comment") {
            if (char === "*" && nextChar === "/") {
                mode = "code";
                index += 1;
            }
            continue;
        }

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

        if (char === "/" && nextChar === "/") {
            mode = "line-comment";
            index += 1;
            continue;
        }

        if (char === "/" && nextChar === "*") {
            mode = "block-comment";
            index += 1;
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
            depth += 1;
            continue;
        }

        if (char === "}") {
            depth -= 1;

            if (depth === 0) {
                return index;
            }
        }
    }

    return -1;
}

function resolveDeprecatedPropOwners(ownerTypeName, componentNames) {
    if (componentNames.length === 0) {
        return [];
    }

    const exactOwner = ownerTypeName.replace(/Props$/, "");
    const withoutBasePrefix = exactOwner.replace(/^Base/, "");
    const matches = [
        exactOwner,
        withoutBasePrefix,
        `${exactOwner}Group`,
        `${withoutBasePrefix}Group`,
    ].filter((name) => componentNames.includes(name));

    if (matches.length > 0) {
        return matches;
    }

    if (componentNames.length === 1) {
        return componentNames;
    }

    return componentNames;
}

function extractDeprecatedMessage(commentBody) {
    const match = commentBody.match(/@deprecated\s+([^\n*]+)/);
    return match ? match[1].trim() : "";
}

function isLikelyComponentSymbol(symbol) {
    return /^[A-Z][A-Za-z0-9_]*$/.test(symbol);
}

function normalizePath(filePath) {
    return filePath.replace(/\\/g, "/");
}
