"use client";

import { Flex } from "@fremtind/jokul/components/flex";
import { Link } from "@fremtind/jokul/components/link";
import styles from "../component.module.scss";

type ComponentFooterProps = {
    name: string;
};

export const ComponentFooter = ({ name }: ComponentFooterProps) => {
    return (
        <Flex as="footer" gap={24} wrap className={styles.footer}>
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
