import { ComponentCard } from "@/components/component-card/ComponentCard";
import { ComponentGrid } from "@/components/component-grid/ComponentGrid";
import { PreferencesMenu } from "@/components/preferences-menu/PreferencesMenu";
import { sanityFetch } from "@/sanity/lib/live";
import { componentsQuery } from "@/sanity/queries/component";
import {
    COMPONENT_KEYWORDS,
    parseUserPreferences,
} from "@/utils/user-preferences";
import { Flex } from "@fremtind/jokul/flex";
import { getCookie } from "cookies-next";
import { logger } from "logger";
import { cookies } from "next/headers";
import { FilterChip } from "./FilterChip";
import styles from "./komponenter.module.scss";

export default async function Components({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    logger.info("Rendering component overview page");

    let { data: components } = await sanityFetch({
        query: componentsQuery,
        requestTag: "component-overview",
    });

    if (!components) {
        logger.warn("No components found");
        return (
            <>
                <h1 className={styles.pageTitle}>Komponenter</h1>
                <p>Fant ingen komponenter :(</p>
            </>
        );
    }

    const userPreferences = parseUserPreferences(
        await getCookie("userPreferences", { cookies }),
    );

    const { keywords } = await searchParams;
    const selectedKeywords = (keywords || "").split(",");

    if (keywords) {
        logger.info(`Filtering components by keywords: ${keywords}`);

        components = components.filter(({ keywords }) => {
            return keywords?.some((keyword) =>
                selectedKeywords.includes(keyword),
            );
        });
    }

    return (
        <>
            <h1 className={styles.pageTitle}>Komponenter</h1>
            <Flex
                as="search"
                alignItems="center"
                justifyContent="space-between"
                title="komponenter"
                className="jkl-spacing-40--bottom"
            >
                <Flex wrap gap={8}>
                    {COMPONENT_KEYWORDS.map((keyword) => (
                        <FilterChip
                            key={keyword}
                            keyword={keyword}
                            selectedKeywords={selectedKeywords || []}
                        />
                    ))}
                </Flex>
                <PreferencesMenu />
            </Flex>
            <ComponentGrid initialPreferences={userPreferences}>
                {components.map((component) => (
                    <li key={component.slug}>
                        <ComponentCard
                            component={component}
                            initialPreferences={userPreferences}
                        />
                    </li>
                ))}
            </ComponentGrid>
        </>
    );
}
