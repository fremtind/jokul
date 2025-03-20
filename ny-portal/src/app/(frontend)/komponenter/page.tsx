import { Flex } from "@fremtind/jokul/components/flex";
import NextLink from "next/link";
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
                        <Flex
                            as={NextLink}
                            href={`/komponenter/${component.slug?.current}`}
                            gap={8}
                            direction="column"
                            className={styles.component}
                        >
                            <img
                                src={component.imageUrl || ""}
                                alt=""
                                width={200}
                                height={200}
                                className={styles.image}
                            />
                            <p className={styles.name}>{component.name}</p>
                        </Flex>
                    </li>
                ))}
            </ul>
        </>
    );
}
