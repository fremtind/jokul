import React, { useId } from "react";
import type { FC } from "react";

import styles from "./prop-docs.module.scss";
import type { StrictInputType } from "storybook/internal/types";
import { Type } from "./Type";

type Props = {
    name: string;
    details: StrictInputType;
};

export const Prop: FC<Props> = ({ name, details }) => {
    const id = useId();

    return (
        <li className={styles["prop-list__subgrid"]}>
            <div hidden id={id}>
                Prop
            </div>
            <dl className={styles["prop-list__prop"]} aria-labelledby={id}>
                <dt hidden id={`${id}-name`}>
                    Navn
                </dt>
                <dd aria-labelledby={`${id}-name`}>{name}</dd>

                <dt hidden id={`${id}-description`}>
                    Beskrivelse
                </dt>
                <dd aria-labelledby={`${id}-description`}>
                    {details.description}
                </dd>

                <dt hidden id={`${id}-required`}>
                    Påkrevd
                </dt>
                <dd aria-labelledby={`${id}-required`}>
                    {details.type?.required ? "Ja" : "Nei"}
                </dd>

                <dt hidden id={`${id}-type`}>
                    Type
                </dt>
                <dd aria-labelledby={`${id}-type`}>
                    <Type details={details} />
                </dd>
            </dl>
        </li>
    );
};
