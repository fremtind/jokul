import PortableTextRenderer from "@/components/portable-text";
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

            {data?.lede && <PortableTextRenderer value={data.lede} />}

            {data?.content && <PortableTextRenderer value={data.content} />}
        </>
    );
}
