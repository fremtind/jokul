// eslint-disable-next-line
require("dotenv").config();

const ignoreNonMdx = [
    "**/.*", // filer som starter med .
    "**/*.png",
    "**/*.md",
    "**/*.scss",
    "**/*.js",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
    "**/*.json",
    "**/node_modules/**",
];

const plugins = [
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    { resolve: "gatsby-source-filesystem", options: { path: "./static/assets" } },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            // Det ligger bilder her av historiske årsaker
            path: "./src/components/Documentation/Picture/Assets",
        },
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "components",
            path: `${__dirname}/../packages`,
            ignore: ignoreNonMdx,
        },
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "docs",
            path: `${__dirname}/src/texts`,
            ignore: ignoreNonMdx,
        },
    },
    "gatsby-plugin-mdx",
    {
        resolve: "gatsby-plugin-sass",
        options: { implementation: require("sass") },
    },
    {
        resolve: "gatsby-plugin-manifest",
        options: {
            icon: "static/assets/icon.png",
        },
    },
    {
        resolve: "gatsby-plugin-layout",
        options: {
            component: require.resolve("./src/components/Layout/Layout.tsx"),
        },
    },
];

const hasAlgoliaEnv = process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_API_KEY && process.env.ALGOLIA_INDEX_NAME;

if (hasAlgoliaEnv) {
    plugins.push({
        // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
        resolve: "gatsby-plugin-algolia",
        options: {
            appId: process.env.ALGOLIA_APP_ID,
            // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
            // Tip: use Search API key with GATSBY_ prefix to access the service from within components
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
            queries: require("./algolia-queries"),
            skipIndexing: Boolean(process.env.PREVIEW_PATH), // default: false, useful for e.g. preview deploys or local development
        },
    });
}

module.exports = {
    pathPrefix: process.env.PREVIEW_PATH ? `/${process.env.PREVIEW_PATH}` : "/",
    siteMetadata: {
        title: `Jøkul Designsystem`,
        description: `Jøkul er designsystemet til Fremtind`,
        author: `Fremtind`,
    },
    flags: {
        FAST_DEV: true,
        PARALLEL_SOURCING: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
    },
    plugins,
};
