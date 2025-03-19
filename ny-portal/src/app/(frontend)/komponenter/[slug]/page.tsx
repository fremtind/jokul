import { PortableText } from "@/components/portable-text/PortableText";
import { client } from "@/sanity/client";
import { componentBySlugQuery } from "@/sanity/queries/component";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const slug = (await params).slug;

    const component = await client.fetch(componentBySlugQuery, { slug });

    return { title: component?.name || "Jøkul" };
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;

    const component = await client.fetch(componentBySlugQuery, { slug });

    if (!component) {
        return <h1>Ikke i databasen</h1>;
    }

    return (
        <>
            <h1 className="jkl-title">
                {component?.name || "ikke i databasen"}
            </h1>

            {component.short_description && (
                <p>{component?.short_description}</p>
            )}

            {component.documentation_article && (
                <PortableText blocks={component.documentation_article} />
            )}
        </>
    );
}
