"use client";

import { navigationLinks } from "@/components/layout/header/navigation/menu/data";
import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import Link from "next/link";

import styles from "../../navigation.module.scss";

export const NavigationList = () => {
    return (
        <Flex
            as="nav"
            aria-label="Hovednavigasjon"
            alignItems="center"
            justifyContent="center"
            gap="none"
            style={{ listStyleType: "none", padding: 0, margin: 0 }}
            className={styles.list}
        >
            {navigationLinks.map((link) => (
                <Button as={Link} href={`/${link}`} variant="ghost" key={link}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                </Button>
            ))}
        </Flex>
    );
};
