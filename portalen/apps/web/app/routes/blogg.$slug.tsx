import { type Blog } from "@org/cms";
import type { LoaderArgs } from "@remix-run/node";
import { json, Response } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { type FC } from "react";
import { BlogPageTemplate } from "~/page-templates";

export const loader = async ({ params, context: { payload, user } }: LoaderArgs) => {
    try {
        const blogs = await payload.find({
            collection: "blog",
            user,
            overrideAccess: false,
            where: {
                and: [
                    { slug: { equals: params.slug } },
                    {
                        _status: { equals: "published" },
                    },
                    {
                        published_date: { less_than: new Date().toJSON() },
                    },
                ],
            },
        });

        if (blogs.totalDocs !== 1) {
            throw new Response(`Could not find a blog post with slug ${params.slug}`, { status: 404 });
        }
        const blog = blogs.docs[0];

        return json(blog, { status: 200 });
    } catch {
        throw new Response("Kunne ikke finne bloggposter", { status: 404 });
    }
};

const BlogPage: FC = () => {
    const blog = useLoaderData<typeof loader>();
    return <BlogPageTemplate {...(blog as Blog)} />;
};

export default BlogPage;
