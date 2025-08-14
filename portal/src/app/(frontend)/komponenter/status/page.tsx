import ComponentStatusTable from "@/app/(frontend)/komponenter/status/ComponentStatusTable";
import { sanityFetch } from "@/sanity/lib/live";
import { componentsQuery } from "@/sanity/queries/component";

import styles from "src/app/(frontend)/blog/blog.module.scss";

export default async function Components() {
    const { data: components } = await sanityFetch({
        query: componentsQuery,
        requestTag: "component-status",
    });

    if (!components) return null;

    return (
        <article className={"prose"}>
            <header className={styles.articleHeader}>
                <h1>Komponentstatus</h1>
            </header>

            <h2>Dette jobber vi med nå</h2>
            <ComponentStatusTable
                components={components.filter(
                    (component) => component.status === "beta",
                )}
            />

            <h2>Stabile komponenter</h2>
            <ComponentStatusTable
                components={components.filter(
                    (component) => component.status !== "beta",
                )}
            />

            <h2>Utgåtte komponenter</h2>
            <ul>
                {components
                    .filter((component) => component.status === "deprecated")
                    .map((component) => (
                        <li key={component.name}>{component.name}</li>
                    ))}
            </ul>
        </article>
    );
}
