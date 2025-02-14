import React from "react";
import { FC } from "react";

import styles from "./prop-docs.module.scss";
import { StrictInputType } from "storybook/internal/types";
import { Type } from "./Type";

type Props = {
    name: string;
    details: StrictInputType;
};

export const Prop: FC<Props> = ({ name, details }) => (
    <li className={styles["prop-list__row-wrapper"]}>
        <ul className={styles["prop-list__row"]}>
            <li>{name}</li>
            <li>{details.description}</li>
            <li>{details.type?.required ? "Ja" : "Nei"}</li>
            <li>
                <Type details={details} />
            </li>
        </ul>
    </li>
);
