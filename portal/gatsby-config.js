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

module.exports = {
    pathPrefix: "/jokul",
    siteMetadata: {
        title: `Jøkul`,
        description: `Jøkul er designsystemet til Fremtind`,
        author: `Fremtind`,
    },
    flags: {
        FAST_DEV: true,
        PARALLEL_SOURCING: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
    },
    plugins: [
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
    ],
};
