"use client";

import { useField } from "@payloadcms/ui";
import { FC } from "react";
import styles from "./code-example.module.scss";

export type OptionGroups = {
    [key: string]: {
        label: string;
        value: string;
    }[];
};

type Props = {
    optionGroups: string;
    path: string;
};

export const CodeExampleSelect: FC<Props> = ({ optionGroups, path }) => {
    const { value, setValue } = useField<string>({ path });

    const groups: OptionGroups = JSON.parse(optionGroups);

    return (
        <div className="field-type select">
            <label className="field-label" htmlFor="code-example-select">
                Velg fil
                <span className="required">*</span>
            </label>
            <div className={styles.wrapper}>
                <select
                    className={styles.select}
                    id="code-example-select"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                >
                    <option value={""}>Select a value</option>
                    {Object.entries(groups).map(([group, items]) => (
                        <optgroup label={group} key={group}>
                            {items?.map((item) => (
                                <option value={item.value} key={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                </select>
                <svg
                    className={`icon icon--chevron dropdown-indicator__icon ${styles.icon}`}
                    height="100%"
                    viewBox="0 0 22 12"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden={true}
                >
                    <path
                        className="stroke"
                        d="M1 1.12109L11 11.1211L21 1.12109"
                        strokeLinecap="square"
                    ></path>
                </svg>
            </div>
        </div>
    );
};
