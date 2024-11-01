"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { getURL } from "next/dist/shared/lib/utils";
import styles from "../app/(frontend)/komponenter/[slug]/component.module.scss";

type ComponentFooterProps = {
    name?: string;
};

export const PageFooter = ({ name }: ComponentFooterProps) => {
    if (!name) {
        return (
            <Flex as="footer" gap="md" wrap="wrap" className={styles.footer}>
                <Link
                    external
                    href="https://github.com/fremtind/jokul/issues/new?&template=dokumentasjon.yml&title=%5BInnspill+til+innhold%5D%3A"
                >
                    Innspill til innholdet
                </Link>
            </Flex>
        );
    }

    return (
        <Flex as="footer" gap="md" wrap="wrap" className={styles.footer}>
            <Link
                external
                href={`https://github.com/fremtind/jokul/issues/new?&template=dokumentasjon.yml&title=%5BBidra+med+innhold%5D%3A+${name}`}
            >
                Bidra med innhold
            </Link>
            <Link
                external
                href={`https://github.com/fremtind/jokul/issues/new?&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+${name}`}
            >
                Innspill til <span lang="en">{name}</span>
            </Link>
        </Flex>
    );
};
