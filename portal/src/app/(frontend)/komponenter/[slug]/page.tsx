import { ComponentCard } from "@/components/component-card/ComponentCard";
import { ComponentConsiderations } from "@/app/(frontend)/komponenter/[slug]/components/ComponentConsiderations";
import { ComponentExampleCard } from "@/app/(frontend)/komponenter/[slug]/components/ComponentExampleCard";
import { PageFooter } from "@/components/PageFooter";
import { PortableText } from "@/components/portable-text/PortableText";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { componentBySlugQuery } from "@/sanity/queries/component";
import imageUrlBuilder from "@sanity/image-url";
import { logger } from "logger";
import { ComponentEmptyState } from "./components/ComponentEmptyState";
import { ComponentHeader } from "./components/ComponentHeader";

import { ComponentGrid } from "@/components/component-grid/ComponentGrid";
import styles from "./component.module.scss";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const { data: component } = await sanityFetch({
        query: componentBySlugQuery,
        params: { slug },
        requestTag: "component-page",
    });

    return { title: component?.name || "Jøkul" };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;

    const initialTime = performance.now();
    const { data: component } = await sanityFetch({
        query: componentBySlugQuery,
        params: { slug },
        requestTag: "component-page",
    });

    if (!component) {
        logger.warn("Component not found", { slug });
        return null;
    }

    logger.info("Fetched component", {
        slug,
        time: `${Math.round(performance.now() - initialTime)}ms`,
    });

    const builder = imageUrlBuilder(client);

    function urlFor(source?: { asset?: { _ref: string } }) {
        return source?.asset?._ref ? builder.image(source).url() : undefined;
    }

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
            {component?.example_card && (
                <ComponentExampleCard
                    name={component.name}
                    imageUrl={urlFor(component.example_card) ?? ""}
                />
            )}
            {component.name && (
                <div className="prose">
                    {component.considerations && (
                        <>
                            <h2 className={"jkl-sr-only"}>Ting å tenke på</h2>
                            <ComponentConsiderations
                                considerations={component.considerations}
                            />
                        </>
                    )}
                    {component.documentation_article ? (
                        <>
                            <PortableText
                                blocks={component.documentation_article}
                            />
                            {component.related_components ? (
                                <>
                                    <h2>Relaterte komponenter</h2>
                                    <ComponentGrid>
                                        {component.related_components?.components?.map(
                                            (relatedComponent) => (
                                                <li key={relatedComponent.slug}>
                                                    <ComponentCard
                                                        component={
                                                            relatedComponent
                                                        }
                                                    />
                                                </li>
                                            ),
                                        )}
                                    </ComponentGrid>
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
