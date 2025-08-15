import { cookies } from "next/headers";

import { sanityFetch } from "@/sanity/lib/live";
import { componentsQuery } from "@/sanity/queries/component";
import { logger } from "logger";
import { ComponentCard } from "./ComponentCard";
import { ComponentGallery } from "./ComponentGallery";
import styles from "./komponenter.module.scss";

export default async function Components() {
    logger.info("Rendering component overview page");

    const { data: components } = await sanityFetch({
        query: componentsQuery,
        requestTag: "component-overview",
    });

    const viewMode = (await cookies()).get("componentGalleryViewMode")?.value;

    if (!components) {
        logger.warn("No components found");
        return (
            <>
                <h1 className={styles.pageTitle}>Komponent&shy;oversikt</h1>
                <p>Fant ingen komponenter :(</p>
            </>
        );
    }

    return (
        <>
            <h1 className={styles.pageTitle}>Komponent&shy;oversikt</h1>
            <ComponentGallery mode={viewMode}>
                {components.map((component) => (
                    <li key={component.slug?.current}>
                        <ComponentCard
                            componentSlug={component.slug?.current || ""}
                        />
                    </li>
                ))}
            </ComponentGallery>
        </>
    );
}
