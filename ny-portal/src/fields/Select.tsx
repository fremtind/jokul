"use client";

import { useField } from "@payloadcms/ui";
import { FC } from "react";
import styles from "./select.module.scss";

export type OptionGroups = {
    [key: string]: {
        label: string;
        value: string;
    }[];
};

type Props = {
    optionGroups: string;
    path: string;
    label: string;
};

export const Select: FC<Props> = ({ optionGroups, path, label }) => {
    const { value, setValue } = useField<string>({ path });

    const groups: OptionGroups = JSON.parse(optionGroups);

    return (
        <div className="field-type select">
            <label className="field-label" htmlFor="code-example-select">
                {label}
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
                    {Object.entries(groups).length > 1 &&
                        Object.entries(groups).map(([group, items]) => (
                            <optgroup label={group} key={group}>
                                {items?.map((item) => (
                                    <option value={item.value} key={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    {Object.entries(groups).length === 1 &&
                        Object.entries(groups).flatMap(([_, items]) =>
                            items.map((item) => (
                                <option value={item.value} key={item.value}>
                                    {item.label}
                                </option>
                            )),
                        )}
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
