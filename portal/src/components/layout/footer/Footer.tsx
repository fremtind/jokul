import { sanityFetch } from "@/sanity/lib/live";
import { siteDataQuery } from "@/sanity/queries/siteData";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { List, ListItem } from "@fremtind/jokul/list";
import jokul from "@fremtind/jokul/package.json";
import { logger } from "../../../../logger";

import styles from "../global-layout.module.scss";

export const Footer = async () => {
    logger.info("Rendering footer");

    const { data } = await sanityFetch({
        query: siteDataQuery,
        requestTag: "site-data",
    });

    const footer = data?.footer;

    if (!footer) {
        return null;
    }

    return (
        <Flex as="footer" gap="l" direction="column" className={styles.footer}>
            <Flex as="ul" gap="l" wrap="wrap">
                {footer.linkGroups?.map((linkGroup) => (
                    <Flex
                        as="li"
                        direction="column"
                        gap="xs"
                        key={linkGroup.title}
                    >
                        <p className={styles.linkGroupTitle}>
                            <b>{linkGroup.title}</b>
                        </p>
                        <List>
                            {linkGroup.linkList?.map((link) => (
                                <ListItem key={link.text}>
                                    <Link
                                        href={link.url || ""}
                                        target={
                                            link.url?.includes("https")
                                                ? "_blank"
                                                : undefined
                                        }
                                    >
                                        {link.text}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Flex>
                ))}
            </Flex>
            <p>
                Jøkul{" "}
                <Link
                    href={`https://github.com/fremtind/jokul/releases/tag/@fremtind/jokul@${jokul.version}`}
                >
                    versjon {jokul.version}
                </Link>
                .
            </p>
            <p>{footer.text}</p>
        </Flex>
    );
};
