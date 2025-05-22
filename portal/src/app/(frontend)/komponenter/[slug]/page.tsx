import clsx from "clsx";
import styles from "./component.module.scss";
import { ComponentEmptyState } from "./components/ComponentEmptyState";
import { ComponentFooter } from "./components/ComponentFooter";
import { ComponentHeader } from "./components/ComponentHeader";
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

    if (!component) return null;

    return (
        <article className={styles.article}>
            <ComponentHeader
                name={component?.name}
                description={component?.short_description}
                links={{
                    figma: component?.external_links?.figma_link,
                    storybook: component?.external_links?.storybook_link,
                    github: component?.external_links?.github_link,
                }}
            />

            {component.name && (
                <div className={clsx("prose", styles.wrapper)}>
                    {component.documentation_article ? (
                        <>
                            <PortableText
                                blocks={component.documentation_article}
                            />
                            <ComponentFooter name={component.name} />
                        </>
                    ) : (
                        <ComponentEmptyState name={component.name} />
                    )}
                </div>
            )}
        </article>
    );
}
