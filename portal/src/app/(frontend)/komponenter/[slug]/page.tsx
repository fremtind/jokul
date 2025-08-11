import { ComponentCard } from "@/app/(frontend)/komponenter/ComponentCard";
import { PageFooter } from "@/components/PageFooter";
import { PortableText } from "@/components/portable-text/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { componentBySlugQuery } from "@/sanity/queries/component";
import clsx from "clsx";
import styles from "./component.module.scss";
import { ComponentEmptyState } from "./components/ComponentEmptyState";
import { ComponentHeader } from "./components/ComponentHeader";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const slug = (await params).slug;

    const { data: component } = await sanityFetch({
        query: componentBySlugQuery,
        params: { slug },
        requestTag: "component-page",
    });

    return { title: component?.name || "Jøkul" };
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;

    const { data: component } = await sanityFetch({
        query: componentBySlugQuery,
        params: { slug },
        requestTag: "component-page",
    });

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
                            {component.related_components ? (
                                <>
                                    <h2>Relaterte komponenter</h2>
                                    <ul className={styles.relatedComponents}>
                                        {component.related_components?.components?.map(
                                            (relatedComponent, index) => (
                                                <li key={index}>
                                                    <ComponentCard
                                                        componentSlug={
                                                            relatedComponent.slug ||
                                                            ""
                                                        }
                                                    />
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </>
                            ) : null}

                            <PageFooter name={component.name} />
                        </>
                    ) : (
                        <ComponentEmptyState name={component.name} />
                    )}
                </div>
            )}
        </article>
    );
}
