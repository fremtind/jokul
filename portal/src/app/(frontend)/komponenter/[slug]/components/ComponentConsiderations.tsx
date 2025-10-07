"use client";

import type { Jokul_component } from "@/sanity/types";

import styles from "../component.module.scss";

type ComponentConsiderationsProps = {
    considerations: Jokul_component["considerations"];
};

export const ComponentConsiderations = ({
    considerations,
}: ComponentConsiderationsProps) => {
    return (
        <>
            <h2>Ting å tenke på</h2>
            <ul className={styles.componentConsiderations}>
                {considerations?.map((consideration) => (
                    <li key={consideration.title}>
                        <p className={styles.title}>{consideration.title}</p>
                        <p>{consideration.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};
