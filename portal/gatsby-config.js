/* eslint-disable */
module.exports = {
    pathPrefix: "/jokul",
    siteMetadata: {
        title: `Jøkul`,
        description: `Jøkul er designsystemet til Fremtind`,
        author: `Fremtind`,
    },
    plugins: [
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-plugin-sass",
            options: { implementation: require("sass") },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                name: `components`,
                path: `${__dirname}/../packages`,
                ignore: [`!**/documentation/*.mdx`],
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                name: `docs`,
                path: `${__dirname}/src/texts`,
                ignore: [`!**/*.mdx`],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve("./src/components/Layout/DocPageLayout.tsx"),
                },
            },
        },
    ],
};
