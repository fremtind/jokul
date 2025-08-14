"use client";

import type { Jokul_component } from "@/sanity/types";
import { clsx } from "clsx";

import styles from "../component.module.scss";

type ComponentConsiderationsProps = {
    considerations: Jokul_component["considerations"];
};

export const ComponentConsiderations = ({
    considerations,
}: ComponentConsiderationsProps) => {
    return (
        <ul className={styles.componentConsiderations}>
            {considerations?.map((consideration) => (
                <li key={consideration.title}>
                    <p className={clsx("jkl-heading-3", styles.title)}>
                        {consideration.title}
                    </p>
                    <p>{consideration.description}</p>
                </li>
            ))}
        </ul>
    );
};
