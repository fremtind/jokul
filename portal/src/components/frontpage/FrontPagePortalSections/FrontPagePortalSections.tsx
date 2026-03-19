import { FRONTPAGE_PORTAL_LINKS } from "@/frontpagePortalLinks";
import type { FrontpageQueryResult } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import Link from "next/link";
import styles from "./frontPagePortalSections.module.scss";

type FrontPagePortalLink = NonNullable<
    NonNullable<FrontpageQueryResult["frontpage"]>["portalLinks"]
>[number];
type ResolvedFrontPagePortalLink = {
    title: string;
    description: string;
    href: string;
};

interface FrontPagePortalSectionsProps {
    links?: FrontPagePortalLink[] | null;
}

const resolveLinks = (links?: FrontPagePortalLink[] | null) => {
    const validLinks =
        links?.filter((link): link is ResolvedFrontPagePortalLink =>
            Boolean(link.title && link.description && link.href),
        ) || [];

    if (validLinks.length > 0) {
        return validLinks;
    }

    return [...FRONTPAGE_PORTAL_LINKS];
};

export const FrontPagePortalSections = ({
    links,
}: FrontPagePortalSectionsProps) => {
    const resolvedLinks = resolveLinks(links);

    return (
        <section
            className={styles.portalSections}
            aria-label="Innganger til portalen"
        >
            {resolvedLinks.map((link) => (
                <Card
                    as={Link}
                    key={link.href}
                    href={link.href}
                    clickable
                    padding="xl"
                    className={styles.link}
                >
                    <h2 className={styles.linkTitle}>{link.title}</h2>
                    <p className={styles.linkDescription}>{link.description}</p>
                </Card>
            ))}
        </section>
    );
};
