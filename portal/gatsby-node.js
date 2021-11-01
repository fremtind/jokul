/* eslint-disable @typescript-eslint/no-var-requires */
const ts = require("typescript");
const docgen = require("react-docgen-typescript");
const { createFilePath } = require("gatsby-source-filesystem");

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

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    if (stage === "build-javascript") {
        // Skru av source maps i produksjon. Sparer byggtid, artifact-størrelse.
        actions.setWebpackConfig({
            devtool: false,
        });
    }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const filePath = createFilePath({ node, getNode });

        const componentPageMatch = filePath.match(/\/.*react.*\/documentation\/(.*)\//);
        const corePageMatch = filePath.match(/\/core\/documentation\/(.*)\//);
        const utilPageMatch = filePath.match(/\/.*util.*\/documentation\/(.*)\//);

        let value = filePath;
        if (componentPageMatch) {
            value = `/komponenter/${componentPageMatch[1].toLowerCase()}`;
        }
        if (corePageMatch) {
            value = `/komponenter/${corePageMatch[1].toLowerCase()}`;
        }
        if (utilPageMatch) {
            value = `/komponenter/${utilPageMatch[1].toLowerCase()}`;
        }

        createNodeField({
            name: "path",
            node,
            value,
        });
    }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const documentationTemplate = require.resolve("./src/templates/DocPageLayout.tsx");

    const result = await graphql(`
        {
            components: allMdx(filter: { fileAbsolutePath: { regex: "//.*react.*/documentation/.*.mdx$/" } }) {
                edges {
                    node {
                        id
                        fields {
                            path
                        }
                        frontmatter {
                            react
                            title
                        }
                    }
                }
            }
            core: allMdx(filter: { fileAbsolutePath: { regex: "//core/documentation/.*.mdx$/" } }) {
                edges {
                    node {
                        id
                        fields {
                            path
                        }
                        frontmatter {
                            react
                            title
                        }
                    }
                }
            }
            utils: allMdx(filter: { fileAbsolutePath: { regex: "//.*util.*/documentation/.*.mdx$/" } }) {
                edges {
                    node {
                        id
                        fields {
                            path
                        }
                        frontmatter {
                            react
                            title
                        }
                    }
                }
            }
            docs: allMdx(filter: { fileAbsolutePath: { regex: "//portal/src/texts/.*.mdx$/" } }) {
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
                rootPaths.push(`../packages/${data.node.frontmatter.react}/src/index.ts`);
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

    result.data.components.edges.forEach(({ node }) => {
        const types = getTypes(node.frontmatter.react);
        createPage({
            path: node.fields.path,
            component: documentationTemplate,
            context: {
                id: node.id,
                types,
                title: node.frontmatter.title,
            },
        });
    });
    result.data.core.edges.forEach(({ node }) => {
        const types = getTypes(node.frontmatter.react);
        createPage({
            path: node.fields.path,
            component: documentationTemplate,
            context: {
                id: node.id,
                types,
                title: node.frontmatter.title,
            },
        });
    });
    result.data.utils.edges.forEach(({ node }) => {
        const types = getTypes(node.frontmatter.react);
        createPage({
            path: node.fields.path,
            component: documentationTemplate,
            context: {
                id: node.id,
                types,
                title: node.frontmatter.title,
            },
        });
    });

    result.data.docs.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path || node.fields.path,
            component: documentationTemplate,
            context: { id: node.id, title: node.frontmatter.title },
        });
    });
};
