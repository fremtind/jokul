import Component from "./component";
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

    return <Component component={component} />;
}
