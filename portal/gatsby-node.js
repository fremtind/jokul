/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const slugify = require("@sindresorhus/slugify");
const { createFilePath } = require("gatsby-source-filesystem");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const docgen = require("react-docgen-typescript");
const ts = require("typescript");

const docgenOptions = {
    savePropValueAsString: true,
    skipChildrenPropWithoutDoc: false,
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

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
    if (stage === "build-javascript") {
        // Skru av source maps i produksjon. Sparer byggtid, artifact-størrelse.
        actions.setWebpackConfig({
            devtool: false,
        });
    }

    if (stage === "develop" || stage === "build-javascript") {
        const config = getConfig();

        const packagesDir = fs.readdirSync(
            path.join(__dirname, "..", "packages"),
            {
                encoding: "utf-8",
                withFileTypes: true,
            },
        );
        const packageAliases = {};
        for (const entry of packagesDir) {
            if (!entry.isDirectory()) {
                continue;
            }
            if (entry.name === ".DS_Store") {
                continue;
            }

            const packagePath = path.join(
                __dirname,
                "..",
                "packages",
                entry.name,
            );
            try {
                const packageJson = fs.readFileSync(
                    path.join(packagePath, "package.json"),
                    "utf-8",
                );
                const parsed = JSON.parse(packageJson);

                // Alias til Gatsbys node_modules for importer i documentation-mapper i pakkene.
                packageAliases[parsed.name] = path.resolve(
                    __dirname,
                    "node_modules",
                    parsed.name,
                );

                // Alias CSSen til React-pakkens node_modules
                if (parsed.name.endsWith("-react")) {
                    const cssName = parsed.name.replace("-react", "");
                    packageAliases[cssName] = path.resolve(
                        __dirname,
                        "node_modules",
                        parsed.name,
                        "node_modules",
                        cssName,
                    );
                }
            } catch {
                // Ingen package.json
                continue;
            }
        }

        config.resolve.alias = {
            ...config.resolve.alias,
            ...packageAliases,
            // "@mdx-js/react": path.resolve(__dirname, "node_modules", "@mdx-js", "react"),
            "@sindresorhus/slugify": path.resolve(
                __dirname,
                "node_modules",
                "@sindresorhus",
                "slugify",
            ),
        };

        // Skru av hashing. Cachingen på GitHub Pages er ikke evigvarende.
        // Måten vi gjør branch previews på gjør også at vi ender opp med en uendelig voksende samling ubrukte filer, siden ingenting overskrives hvis det hashes.
        config.output.filename = "[name].js";
        config.output.chunkFilename = "[name].js";
        config.output.assetModuleFilename = "[name].[ext][query]";

        const plugins = config.plugins.filter(
            (plugin) => !plugin instanceof MiniCssExtractPlugin,
        );
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[name].css",
            }),
        );

        const miniCssExtractPlugin = config.plugins.find(
            (p) => p.constructor.name === "MiniCssExtractPlugin",
        );
        if (miniCssExtractPlugin) {
            // På grunn av Gatsby internals får vi warnings om rekkefølgen på CSS-filer som er i konflikt.
            // Rekkefølgen har ikke noe å si for oss når vi bruker BEM, så vi kan trygt ignorere dem.
            // https://github.com/webpack-contrib/mini-css-extract-plugin#remove-order-warnings
            // https://github.com/gatsbyjs/gatsby/discussions/30169
            // https://github.com/gatsbyjs/gatsby/discussions/30083
            miniCssExtractPlugin.options.ignoreOrder = true;

            // Skru av hashing. Cachingen på GitHub Pages er ikke evigvarende.
            // Måten vi gjør branch previews på gjør også at vi ender opp med en uendelig voksende samling ubrukte filer, siden ingenting overskrives hvis det hashes.
            miniCssExtractPlugin.options.filename = "[name].css";
            miniCssExtractPlugin.options.chunkFilename = "[name].css";
        }

        actions.replaceWebpackConfig(config);
    }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const filePath = createFilePath({ node, getNode });

        const componentPageMatch = filePath.match(
            /\/.*react.*\/documentation\/(.*)\//,
        );
        const corePageMatch = filePath.match(/\/core\/documentation\/(.*)\//);
        const utilPageMatch = filePath.match(
            /\/.*util.*\/documentation\/(.*)\//,
        );

        let pathField = filePath;
        if (componentPageMatch) {
            pathField = `/komponenter/${componentPageMatch[1].toLowerCase()}`;
        }
        if (corePageMatch) {
            pathField = `/komponenter/${corePageMatch[1].toLowerCase()}`;
        }
        if (utilPageMatch) {
            pathField = `/komponenter/${utilPageMatch[1].toLowerCase()}`;
        }

        createNodeField({
            name: "path",
            node,
            value: pathField,
        });

        createNodeField({
            node,
            name: "slug",
            value: `/${slugify(node.frontmatter.title || pathField)}`,
        });
    }
};

exports.createPagesStatefully = async ({ graphql, actions, reporter }) => {
    const result = await graphql(`
        {
            components: allMdx(
                filter: {
                    internal: {
                        contentFilePath: {
                            regex: "//.*react.*/documentation/.*.mdx$/"
                        }
                    }
                }
            ) {
                edges {
                    node {
                        id
                        fields {
                            path
                        }
                        frontmatter {
                            react
                            scss
                            title
                            displayTypes
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
            core: allMdx(
                filter: {
                    internal: {
                        contentFilePath: {
                            regex: "//core/documentation/.*.mdx$/"
                        }
                    }
                }
            ) {
                edges {
                    node {
                        id
                        fields {
                            path
                        }
                        frontmatter {
                            react
                            scss
                            title
                            displayTypes
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
            utils: allMdx(
                filter: {
                    internal: {
                        contentFilePath: {
                            regex: "//.*util.*/documentation/.*.mdx$/"
                        }
                    }
                }
            ) {
                edges {
                    node {
                        id
                        fields {
                            path
                        }
                        frontmatter {
                            react
                            scss
                            title
                            displayTypes
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
            docs: allMdx(
                filter: {
                    internal: {
                        contentFilePath: {
                            regex: "//portal/src/texts/.*.mdx$/"
                        }
                    }
                }
            ) {
                edges {
                    node {
                        id
                        fields {
                            path
                        }
                        frontmatter {
                            path
                            title
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(`
🚨 ERROR: Loading "createPages" query

${JSON.stringify(result.errors, null, 2)}
`);
        return;
    }

    const componentsLength = result.data.components.edges.length;
    const coreLength = result.data.core.edges.length;
    const utilsLength = result.data.utils.edges.length;
    const docsLength = result.data.docs.edges.length;

    reporter.info(`Will create pages from found files:

- Components: ${componentsLength}
- Core: ${coreLength}
- Utils: ${utilsLength}
- Docs: ${docsLength}`);

    function getRootPaths(edges) {
        const rootPaths = [];
        for (const data of edges) {
            if (data.node.frontmatter.react) {
                rootPaths.push(
                    `../packages/${data.node.frontmatter.react}/src/index.ts`,
                );
            }
        }
        return rootPaths;
    }

    const rootPaths = [
        ...getRootPaths(result.data.components.edges),
        ...getRootPaths(result.data.core.edges),
        ...getRootPaths(result.data.utils.edges),
    ];

    /*
     * parseFiles gir oss en Array med objekter som blant annet har filePath.
     * Tenk `[{ displayName: "TextArea", filePath: "../packages/text-input-react/src/index.ts" }, osv.]`
     */
    const allTypes = parseFiles(rootPaths, { collectSourceInfo: true });
    /*
     * Vi vil ha et map med filnavnet som første key, med value lik et objekt med alle typene for den keyen.
     * Tenk `{ "../packages/text-input-react/src/index.ts": { TextArea: { props }, TextInput: { props } } }` osv.
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
        return structuredTypes[`../packages/${packageName}/src/index.ts`];
    }

    /**
     * @param {*} types
     * @param {string | string[]} displayTypes
     */
    function getComponentTypes(types, displayTypes) {
        return Object.entries(types)
            .filter(([displayName]) => displayTypes.includes(displayName))
            .reduce(
                (acc, [displayName, types]) => ({
                    ...acc,
                    [displayName]: types,
                }),
                {},
            );
    }

    /**
     * @param {string | null | undefined} packageName
     * @returns {string | null}
     */
    function getPackageVersion(packageName) {
        if (!packageName) {
            return null;
        }

        try {
            const pathToPackageJson = path.resolve(
                __dirname,
                "..",
                "packages",
                packageName,
                "package.json",
            );
            const packageJsonContent = fs.readFileSync(
                pathToPackageJson,
                "utf-8",
            );
            const packageJson = JSON.parse(packageJsonContent);
            const packageVersion = packageJson.version;

            if (!packageVersion) {
                reporter.error(
                    `Couldn't find a version number in package.json for ${packageName}`,
                );
                return null;
            }

            return packageVersion;
        } catch (e) {
            reporter.error(e);
            return null;
        }
    }

    const { createPage } = actions;
    const documentationTemplate = require.resolve(
        "./src/templates/DocPageLayout.jsx",
    );

    result.data.components.edges.forEach(({ node }) => {
        const versions = {
            react: getPackageVersion(node.frontmatter.react),
            scss: getPackageVersion(node.frontmatter.scss),
        };
        const packageTypes = getTypes(node.frontmatter.react);
        const pageTypes = node.frontmatter.displayTypes
            ? getComponentTypes(packageTypes, node.frontmatter.displayTypes)
            : packageTypes;

        createPage({
            path: node.fields.path,
            component: `${documentationTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id,
                types: pageTypes,
                title: node.frontmatter.title,
                versions,
            },
        });
    });
    result.data.core.edges.forEach(({ node }) => {
        const coreVersion = getPackageVersion(node.frontmatter.react);
        const versions = {
            react: coreVersion,
            scss: coreVersion,
        };
        const coreTypes = getTypes(node.frontmatter.react);
        const pageTypes = node.frontmatter.displayTypes
            ? getComponentTypes(coreTypes, node.frontmatter.displayTypes)
            : coreTypes;

        createPage({
            path: node.fields.path,
            component: `${documentationTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id,
                types: pageTypes,
                title: node.frontmatter.title,
                versions,
            },
        });
    });
    result.data.utils.edges.forEach(({ node }) => {
        const versions = {
            react: getPackageVersion(node.frontmatter.react),
            scss: getPackageVersion(node.frontmatter.scss),
        };
        const utilTypes = getTypes(node.frontmatter.react);
        const pageTypes = node.frontmatter.displayTypes
            ? getComponentTypes(utilTypes, node.frontmatter.displayTypes)
            : utilTypes;

        createPage({
            path: node.fields.path,
            component: `${documentationTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id,
                types: pageTypes,
                title: node.frontmatter.title,
                versions,
            },
        });
    });

    result.data.docs.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path || node.fields.path,
            component: `${documentationTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id, title: node.frontmatter.title },
        });
    });
};
