import { slugify } from "@org/shared";
import { CollectionConfig } from "payload/types";
import { authenticatedAdmins, authenticatedContributors, defaultReadAccess } from "../access";
import { allPageSectionBlocks } from "../blocks/page-sections";
import { pageMeta } from "../fields/meta";
import Users from "./Users";

export const BLOG_POST_SLUG = "blog";

export const BlogPosts: CollectionConfig = {
    slug: BLOG_POST_SLUG,
    admin: {
        group: "Innholdssider",
        useAsTitle: "title",
        // TODO: Finn en bedre måte å unngå typefeil på importer i serveren
        /* eslint-disable @typescript-eslint/ban-ts-comment */
        preview: (doc) => {
            // @ts-ignore typesjekk i serveren klager over window
            if (typeof window !== "undefined") {
                // @ts-ignore
                const { protocol, host } = window.location;

                return `${protocol}//${host}/preview/${BLOG_POST_SLUG}/${doc.id}`;
            } else {
                return "#";
            }
        },
        /* eslint-enable @typescript-eslint/ban-ts-comment */
    },
    versions: {
        drafts: true,
    },
    access: {
        read: defaultReadAccess,
        create: authenticatedContributors,
        delete: authenticatedAdmins,
        update: authenticatedContributors,
    },
    labels: {
        singular: "Bloggpost",
        plural: "Bloggposter",
    },
    fields: [
        {
            name: "published_date",
            label: "Publiseringsdato",
            type: "date",
            admin: {
                date: {
                    displayFormat: "yyyy.MM.dd",
                },
                position: "sidebar",
                description: 'Bloggposten vil ikke vises før denne datoen selv om den har status "Publisert"',
            },
        },
        {
            name: "tag",
            type: "relationship",
            relationTo: "blog-tag",
            required: true,
            index: true,
        },
        {
            name: "title",
            type: "text",
            label: "Tittel",
            required: true,
            admin: {
                description: "Vises som tittel i søkeresultater, og i listen over sider i CMS-et",
            },
        },
        {
            name: "slug",
            type: "text",
            unique: true,
            admin: {
                description:
                    "Brukes i URLen til posten. Genereres automatisk fra tittelen dersom du ikke skriver inn noe",
            },
            hooks: {
                beforeValidate: [
                    async ({ siblingData, value, req }) => {
                        if (!siblingData.title) {
                            // Hvis vi avpubliserer en bloggpost sendes ikke all data inn, så vi vil ikke prøve å generere slug
                            return;
                        }

                        if (value) {
                            return value;
                        }

                        const titleSlug = slugify(siblingData.title);

                        const existingSlugs = (
                            await req.payload.find({
                                collection: "blog",
                                where: {
                                    slug: {
                                        contains: titleSlug,
                                    },
                                },
                            })
                        ).docs.map((blog) => blog.slug);

                        let slug = titleSlug;
                        let counter = 1;

                        while (existingSlugs.includes(slug)) {
                            slug = `${titleSlug}-${counter++}`;
                        }

                        return slug;
                    },
                ],
            },
        },
        {
            name: "ingress",
            type: "textarea",
            label: "Ingress",
            required: true,
        },
        {
            name: "author",
            required: true,
            type: "relationship",
            relationTo: Users.slug,
        },
        {
            type: "tabs",
            tabs: [
                {
                    label: "Innhold",
                    fields: [
                        {
                            name: "sections",
                            label: "Sideseksjoner",
                            type: "blocks",
                            blocks: allPageSectionBlocks,
                            required: true,
                        },
                    ],
                },
                {
                    label: "Metadata",
                    fields: [pageMeta],
                },
            ],
        },
    ],
    hooks: {
        beforeChange: [
            ({ data }) => {
                if (data._status === "published" && !data.published_date) {
                    return {
                        ...data,
                        published_date: new Date(),
                    };
                }
            },
        ],
    },
};
