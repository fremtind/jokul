import {
    CheckListItem,
    CrossListItem,
    List,
} from "@fremtind/jokul/components/list";
import { PortableTextTypeComponentProps } from "@portabletext/react";
import { FC } from "react";
import { PortableText } from "../PortableText";
import styles from "./kortFortalt.module.scss";
import { Jokul_componentKortFortalt } from "@/sanity/types";

export const KortFortalt: FC<
    PortableTextTypeComponentProps<Jokul_componentKortFortalt>
> = ({ value }) => {
    if (!value.bruk && !value.ikke_bruk) return null;

    return (
        <section className={styles.kortFortalt}>
            <h2 className={styles.kortFortaltTitle}>Kort fortalt</h2>
            {!!value.bruk && (
                <div>
                    <h3>Bruk</h3>
                    <List aria-label="Når egnes komponenten">
                        {value.bruk?.map((item) => (
                            <CheckListItem key={item._key}>
                                <PortableText blocks={item.bruk_punkt || []} />
                            </CheckListItem>
                        ))}
                    </List>
                </div>
            )}

            {!!value.ikke_bruk && (
                <div>
                    <h3>Ikke bruk</h3>
                    <List aria-label="Når egnes ikke komponenten">
                        {value.ikke_bruk?.map((item) => (
                            <CrossListItem key={item._key}>
                                <PortableText
                                    blocks={item.ikke_bruk_punkt || []}
                                />
                            </CrossListItem>
                        ))}
                    </List>
                </div>
            )}
        </section>
    );
};
