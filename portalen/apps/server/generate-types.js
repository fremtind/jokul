/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const fs = require("fs/promises");
const path = require("path");
const glob = require("glob");
const docgen = require("react-docgen-typescript");
const ts = require("typescript");

const docgenOptions = {
    savePropValueAsString: true,
    skipChildrenPropWithoutDoc: false,
    propFilter: (prop, component) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
            const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
                return !declaration.fileName.includes("node_modules/typescript/lib");
            });

            return Boolean(hasPropAdditionalDescription);
        }

        return true;
    },
};

const tsOptions = {
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2017,
    noImplicitAny: true,
    noImplicitReturns: true,
    strictNullChecks: true,
    strictFunctionTypes: true,
    strictBindCallApply: true,
    strictPropertyInitialization: true,
    esModuleInterop: true,
    noImplicitThis: true,
    alwaysStrict: true,
    allowJs: true,
    checkJs: true,
};

function parseFiles(fileNames) {
    const parser = docgen.withDefaultConfig(docgenOptions);
    const host = ts.createCompilerHost(tsOptions);
    const program = ts.createProgram(fileNames, tsOptions, host);
    return parser.parseWithProgramProvider(fileNames, () => program);
}

console.log("Generating type data...");

async function runDocgen() {
    console.log("Cloning fremtind/jokul...");
    execSync("git clone git@github.com:fremtind/jokul.git --depth 1 --branch main --single-branch --filter=blob:none");
    console.log("Cloned fremtind/jokul");
    console.log("Installing dependencies in jokul...");
    execSync("pnpm install", { cwd: "./jokul" });

    const typeRootPaths = glob.sync("./jokul/packages/*/src/index.ts");

    /*
     * parseFiles gir oss en Array med objekter som blant annet har filePath.
     * Tenk `[{ displayName: "TextArea", filePath: "./jokul/packages/text-input-react/src/index.ts" }, osv.]`
     */
    let allTypes = [];
    try {
        allTypes = parseFiles(typeRootPaths);
    } catch (e) {
        console.error(e);
        console.error(
            "One of our type definitions broke React Docgen. Parsing one by one to track down the culprit. This can take a while...",
        );
        for (const entry of typeRootPaths) {
            try {
                console.log(`Parsing ${entry}`);
                const types = parseFiles([entry]);
                allTypes = [...allTypes, ...types];
            } catch (e) {
                console.error(`🚨🚨🚨 Failed to parse ${entry}`);
                console.error(e);
            }
        }
        throw e; // rethrow to fail the build
    }

    /*
     * Vi vil ha et map med filnavnet som første key, med value lik et objekt med alle typene for den keyen.
     * Tenk `{ "./jokul/packages/text-input-react/src/index.ts": { TextArea: { props }, TextInput: { props } } }` osv.
     */
    const structuredTypes = allTypes
        .map((value) => [value.filePath, { [value.displayName]: value }])
        .reduce((acc, [filePath, types]) => {
            if (acc[filePath]) {
                return {
                    ...acc,
                    [filePath]: {
                        ...acc[filePath],
                        ...types,
                    },
                };
            }
            return {
                ...acc,
                [filePath]: {
                    ...types,
                },
            };
        }, {});

    function getTypes(packageName) {
        if (!packageName) return undefined;
        return structuredTypes[`jokul/packages/${packageName}/src/index.ts`];
    }

    /**
     * @param {string | null | undefined} folderName
     * @returns {{ name: string; version: string } | null}
     */
    async function getPackageInfo(folderName) {
        if (!folderName) {
            return null;
        }

        try {
            const pathToPackageJson = path.resolve(__dirname, "jokul", "packages", folderName, "package.json");
            const packageJsonContent = await fs.readFile(pathToPackageJson, "utf-8");
            const packageJson = JSON.parse(packageJsonContent);

            const packageName = packageJson.name;
            if (!packageName) {
                console.error(`Couldn't find a name in package.json for ${packageName}`);
                return null;
            }

            const packageVersion = packageJson.version;

            if (!packageVersion) {
                console.error(`Couldn't find a version number in package.json for ${packageName}`);
                return null;
            }

            return {
                name: packageName,
                version: packageVersion,
            };
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    const packageRootPaths = glob.sync("./jokul/packages/*/package.json");
    for (const entry of packageRootPaths) {
        const prefix = "packages/";
        const packageNameStartIndex = entry.indexOf(prefix) + prefix.length;
        const packageNameEndIndex = entry.indexOf("/", packageNameStartIndex + 1);
        const packagePathName = entry.substring(packageNameStartIndex, packageNameEndIndex);

        const packageInfo = await getPackageInfo(packagePathName);
        if (!packageInfo) {
            continue;
        }

        const scopelessName = packageInfo.name.replace("@fremtind/", "");

        await fs.writeFile(
            path.resolve(__dirname, "public", "types", `${scopelessName}.json`),
            `${JSON.stringify(
                {
                    version: packageInfo.version,
                    types: getTypes(packagePathName),
                },
                null,
                4,
            )}
`,
        );
    }

    console.log("Generated type information");
    console.log("Cleaning up...");

    await fs.rm(path.resolve(__dirname, "jokul"), { recursive: true });
}

runDocgen();
