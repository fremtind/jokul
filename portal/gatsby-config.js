require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

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
    pathPrefix: process.env.PREVIEW_PATH ? `/${process.env.PREVIEW_PATH}` : "/",
    siteMetadata: {
        title: `Jøkul Designsystem`,
        description: `Jøkul er designsystemet til Fremtind`,
        author: `Fremtind`,
        siteUrl: "https://jokul.fremtind.no",
    },
    flags: {
        DEV_SSR: true,
        FAST_DEV: true,
        PARALLEL_SOURCING: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
    },
    plugins: [
        {
            resolve: "gatsby-source-package",
            options: {
                only: ["version"],
            },
        },
        "gatsby-plugin-pnpm",
        "gatsby-plugin-typescript",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/layout/Layout.tsx"),
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: { path: "./static/assets" },
        },
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
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "static/assets/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                        }
                    }
                }
                `,
                feeds: [
                    {
                        title: "Jøkul Designsystem",
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.publishDate,
                                    url: site.siteMetadata.siteUrl + node.fields.path,
                                    guid: site.siteMetadata.siteUrl + node.fields.path,
                                });
                            });
                        },
                        query: `
                        {
                            allMdx(
                                sort: { fields: [frontmatter___publishDate], order: DESC },
                                filter: { internal: {
                                    contentFilePath: {regex: "/\/portal\/src\/texts\/blog\/.*\.mdx$/"}
                                } },
                            ) {
                                nodes {
                                    excerpt(pruneLength: 280)
                                    fields {
                                        path
                                    }
                                    frontmatter {
                                        title
                                        publishDate
                                    }
                                }
                            }
                        }
                        `,
                        output: "/blog/rss.xml",
                    },
                ],
            },
        },
    ],
};
