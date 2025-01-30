"use client";

import { useField } from "@payloadcms/ui";
import { FC } from "react";

type Props = {
    optionGroups: string;
    path: string;
};

export const CodeExampleSelect: FC<Props> = ({ optionGroups, path }) => {
    const { value, setValue } = useField<string>({ path });

    const groups: {
        [key: string]: {
            label: string;
            value: string;
        }[];
    } = JSON.parse(optionGroups);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                gap: 6,
            }}
        >
            <label htmlFor="code-example-select">Kodeeksempel</label>
            <select
                id="code-example-select"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            >
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
        </div>
    );
};
