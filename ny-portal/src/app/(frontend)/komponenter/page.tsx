import { ComponentCard } from "./ComponentCard";
import styles from "./komponenter.module.scss";
import { client } from "@/sanity/client";
import { componentsQuery } from "@/sanity/queries/component";

export default async function Components() {
    const components = await client.fetch(componentsQuery);

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
            <ul className={styles.componentGallery}>
                {components.map((component) => (
                    <li key={component.slug?.current}>
                        <ComponentCard
                            componentSlug={component.slug?.current || ""}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
