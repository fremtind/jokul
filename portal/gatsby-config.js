/* eslint-disable */
module.exports = {
    flags: { 
        PRESERVE_WEBPACK_CACHE: true,
        FAST_DEV: true,
        DEV_SSR: true,
        QUERY_ON_DEMAND: true,
        LAZY_IMAGES: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
        FAST_REFRESH: true,
        PARALLEL_SOURCING: true,
      },
    pathPrefix: "/jokul",
    siteMetadata: {
        title: `Jøkul`,
        description: `Jøkul er designsystemet til Fremtind`,
        author: `Fremtind`,
    },
    plugins: [
        "gatsby-plugin-typescript",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        { resolve: `gatsby-source-filesystem`, options: { path: `./src/components/Documentation/` } },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "uu",
                path: `${__dirname}/src/texts/uu`,
            },
        },
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `static/assets/icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout/Layout.tsx`),
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout/Layout.tsx`),
            },
        },
    ],
};
