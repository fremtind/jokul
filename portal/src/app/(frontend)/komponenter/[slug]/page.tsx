import { PageFooter } from "@/components/PageFooter";
import { ComponentCard } from "@/components/component-card/ComponentCard";
import { PortableText } from "@/components/portable-text/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { componentBySlugQuery } from "@/sanity/queries/component";
import { Flex } from "@fremtind/jokul/flex";
import { logger } from "logger";
import { ComponentConsiderations } from "./components/ComponentConsiderations";
import { ComponentEmptyState } from "./components/ComponentEmptyState";
import { ComponentHeader } from "./components/ComponentHeader";
import { ComponentHeaderLink } from "./components/ComponentHeaderLink";
import { ComponentNav } from "./components/ComponentNav";

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
    const { data: component, tags } = await sanityFetch({
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

    return (
        <article className={styles.article}>
            <div>
                <ComponentHeader
                    name={component?.name}
                    description={component?.short_description}
                    links={{
                        figma: component?.external_links?.figma_link,
                        storybook: component?.external_links?.storybook_link,
                        github: component?.external_links?.github_link,
                    }}
                />

                {component.documentation_article && (
                    <ComponentNav blocks={component.documentation_article} />
                )}
            </div>

            {component.name && (
                <div className={styles.wrapper}>
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
                                    <ul className={styles.relatedComponents}>
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
