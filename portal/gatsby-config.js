const ignore = [
    "**/.*", // filer som starter med .
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
    plugins: [
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
                ignore: ignore,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "docs",
                path: `${__dirname}/src/texts`,
                ignore: ignore,
            },
        },
        "gatsby-plugin-typescript",
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    quality: 70,
                    formats: ["auto", "webp", "avif"],
                    placeholder: "blurred",
                },
            },
        },
        "gatsby-transformer-sharp",
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
