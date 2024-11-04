import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { type FC } from "react";
import { BlogOverviewTemplate } from "~/page-templates/blog-overview";

export const loader = async ({
    context: { payload, user },
}: LoaderFunctionArgs) => {
    try {
        const blogList = await payload.find({
            collection: "blog",
            depth: 1,
            user,
            where: {
                and: [
                    {
                        _status: { equals: "published" },
                    },
                    {
                        published_date: { less_than: new Date().toJSON() },
                    },
                ],
            },
            sort: "published_date",
            draft: false,
            overrideAccess: false,
        });

        return json(blogList, { status: 200 });
    } catch {
        throw new Response("Kunne ikke finne bloggposter", { status: 404 });
    }
};

const BlogOverview: FC = () => {
    const blogList = useLoaderData<typeof loader>();
    return <BlogOverviewTemplate {...blogList} />;
};
export default BlogOverview;
