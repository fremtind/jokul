import { PortableText } from "@/components/portable-text/PortableText";
import { client } from "@/sanity/client";
import { componentBySlugQuery } from "@/sanity/queries/component";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const slug = (await params).slug;

    const data = await client.fetch(componentBySlugQuery, { slug });

    return { title: data?.name || "Jøkul" };
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;

    const data = await client.fetch(componentBySlugQuery, { slug });

    return (
        <>
            <h1 className="jkl-title">{data?.name || "ikke i databasen"}</h1>

            {data?.short_description && <p>{data?.short_description}</p>}

            {data?.documentation_article && (
                <PortableText blocks={data.documentation_article} />
            )}
        </>
    );
}
