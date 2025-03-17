import { PortableText } from "@/components/portable-text/PortableText";
import { client } from "@/sanity/client";
import { componentPageBySlugQuery } from "@/sanity/queries/componentPage";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const slug = (await params).slug;

    const data = await client.fetch(componentPageBySlugQuery, { slug });

    return { title: data?.title || "Jøkul" };
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;

    const data = await client.fetch(componentPageBySlugQuery, { slug });

    return (
        <>
            <h1 className="jkl-title">{data?.title || "ikke i databasen"}</h1>

            {data?.lede && <PortableText blocks={data.lede} />}

            {data?.content && <PortableText blocks={data.content} />}
        </>
    );
}
