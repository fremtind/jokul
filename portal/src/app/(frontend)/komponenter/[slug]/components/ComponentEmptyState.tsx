"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { InfoMessage } from "@fremtind/jokul/message";

type ComponentEmptyStateProps = {
    name: string;
};

export const ComponentEmptyState = ({ name }: ComponentEmptyStateProps) => {
    return (
        <InfoMessage title={`${name} mangler fortsatt innhold`}>
            <Flex as="footer" gap="m" wrap="wrap">
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
        </InfoMessage>
    );
};
