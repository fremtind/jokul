import { sanityFetch } from "@/sanity/lib/live";
import { componentsQuery } from "@/sanity/queries/component";
import { logger } from "logger";
import { ComponentGallery } from "./ComponentGallery";
import styles from "./komponenter.module.scss";

export default async function Components() {
    logger.info("Rendering component overview page");

    const { data: components } = await sanityFetch({
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

    return (
        <>
            <h1 className={styles.pageTitle}>Komponenter</h1>
            <ComponentGallery components={components} />
        </>
    );
}
