import { sanityFetch } from "@/sanity/live";
import { componentsQuery } from "@/sanity/queries/component";
import { ComponentCard } from "./ComponentCard";
import { ComponentGallery } from "./ComponentGallery";
import styles from "./komponenter.module.scss";

export default async function Components() {
    const { data: components } = await sanityFetch({ query: componentsQuery });

    if (!components) {
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
            <ComponentGallery>
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
