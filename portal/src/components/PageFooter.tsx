import { FooterLink } from "@/components/layout/footer/FooterLink";
import { Flex } from "@fremtind/jokul/flex";
import styles from "../app/(frontend)/komponenter/[slug]/component.module.scss";

type ComponentFooterProps = {
    name?: string;
};

export const PageFooter = ({ name }: ComponentFooterProps) => {
    if (!name) {
        return (
            <Flex as="footer" gap="m" wrap="wrap" className={styles.footer}>
                <FooterLink
                    href="https://github.com/fremtind/jokul/issues/new?&template=dokumentasjon.yml&title=%5BInnspill+til+innhold%5D%3A"
                    text="Innspill til innholdet"
                />
            </Flex>
        );
    }

    return (
        <Flex as="footer" gap="m" wrap="wrap" className={styles.footer}>
            <FooterLink
                href={`https://github.com/fremtind/jokul/issues/new?&template=dokumentasjon.yml&title=%5BBidra+med+innhold%5D%3A+${name}`}
                text="Bidra med innhold"
            />
            <FooterLink
                href={`https://github.com/fremtind/jokul/issues/new?&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+${name}`}
                text={`Innspill til ${name}`}
            />
        </Flex>
    );
};
