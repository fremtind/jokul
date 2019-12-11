/* eslint-disable */
module.exports = {
    pathPrefix: "/jokul",
    siteMetadata: {
        title: `Jokul`,
        description: `Documentation of Jøkul design system`,
        author: `Fremtind`,
    },
    plugins: [
        "gatsby-plugin-typescript",
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `components`,
                path: `${__dirname}/../packages`,
                ignore: [`!**/documentation/**.mdx`],
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/../packages`,
                ignore: [`!**/documentation/**.mdx`],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve("./src/components/Layout/ComponentLayout.tsx"),
                },
            },
        },
    ],
};
