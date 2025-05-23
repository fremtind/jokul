import { useOf } from "@storybook/blocks";
import clsx from "clsx";
import React, { type FC } from "react";
import { Prop } from "./Prop";

import styles from "./prop-docs.module.scss";

type Props = {
    of?: any;
};

export const PropDocs: FC<Props> = ({ of }) => {
    const resolvedOf = useOf(of || "story", ["story", "meta"]);

    if (resolvedOf.type !== "story") {
        return null;
    }

    return (
        <div className={clsx("sb-unstyled", styles["prop-list"])}>
            <div className={styles["prop-list__header"]} aria-hidden={true}>
                <div>Navn</div>
                <div>Beskrivelse</div>
                <div>Påkrevd</div>
                <div>Type</div>
            </div>
            <ul className={styles["prop-list__subgrid"]}>
                {Object.entries(resolvedOf.story.argTypes)
                    .filter(([name]) => name !== "children")
                    .map(([name, details], index) => {
                        return (
                            <Prop name={name} details={details} key={index} />
                        );
                    })}
            </ul>
        </div>
    );
};
