import { client } from "@/sanity/client";
import { componentPageBySlugQuery } from "@/sanity/queries/componentPage";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const data = await client.fetch(componentPageBySlugQuery, { slug });

    return (
        <>
            <div>Hei jeg er {data?.title || "ikke i databasen"}</div>
        </>
    );
}
