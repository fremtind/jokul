import { ComponentCard } from "@/components/component-card/ComponentCard";
import { ComponentGrid } from "@/components/component-grid/ComponentGrid";
import { PreferencesMenu } from "@/components/preferences-menu/PreferencesMenu";
import { sanityFetch } from "@/sanity/lib/live";
import { componentsQuery } from "@/sanity/queries/component";
import {
    COMPONENT_CATEGORIES,
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

    const { categories: paramCategories } = await searchParams;
    const selectedCategories = (paramCategories || "").split(",");

    if (paramCategories) {
        logger.info(`Filtering components by categories: ${paramCategories}`);

        components = components.filter(({ categories }) => {
            return categories?.some((category) =>
                selectedCategories.includes(category),
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
                <Flex wrap="wrap" gap="xs">
                    {COMPONENT_CATEGORIES.map((category) => (
                        <FilterChip
                            key={category}
                            category={category}
                            selectedCategories={selectedCategories || []}
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
