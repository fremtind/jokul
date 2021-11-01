/* eslint-disable */
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
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "components",
                path: `${__dirname}/../packages`,
                ignore: ["!**/documentation/*.mdx"],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "docs",
                path: `${__dirname}/src/texts`,
                ignore: ["!**/*.mdx"],
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
