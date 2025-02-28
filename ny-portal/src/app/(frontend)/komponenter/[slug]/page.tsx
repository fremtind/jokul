import { PortableText } from "@/components/portable-text/PortableText";
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

            {data?.lede && <PortableText blocks={data.lede} />}

            {data?.content && <PortableText blocks={data.content} />}
        </>
    );
}
