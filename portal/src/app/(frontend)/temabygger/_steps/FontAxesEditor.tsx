"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { TextInput } from "@fremtind/jokul/text-input";
import { useState } from "react";
import { type FontAxes, isFontAxisTag } from "../_shared/customFont";

type AxisRow = { tag: string; value: string };

type FontAxesEditorProps = {
    axes: FontAxes;
    onChange: (axes: FontAxes) => void;
};

/** Bare rader med gyldig navn og tall går videre til utkastet. */
function toAxes(rows: AxisRow[]): FontAxes {
    const axes: FontAxes = {};

    for (const { tag, value } of rows) {
        const number = Number(value);

        if (
            isFontAxisTag(tag) &&
            value.trim() !== "" &&
            Number.isFinite(number)
        ) {
            axes[tag] = number;
        }
    }

    return axes;
}

export function FontAxesEditor({ axes, onChange }: FontAxesEditorProps) {
    const [rows, setRows] = useState<AxisRow[]>(() =>
        Object.entries(axes).map(([tag, value]) => ({
            tag,
            value: String(value),
        })),
    );

    const update = (next: AxisRow[]) => {
        setRows(next);
        onChange(toAxes(next));
    };

    return (
        <Flex direction="column" gap="8">
            {rows.map((row, index) => (
                // Radene har ingen stabil id, og lista endres bare ved å fjerne
                // eller legge til sist.
                // biome-ignore lint/suspicious/noArrayIndexKey: se over
                <Flex key={index} gap="8" alignItems="end">
                    <TextInput
                        label="Akse"
                        description="Fire tegn, for eksempel wdth"
                        name={`axis-tag-${index}`}
                        maxLength={4}
                        value={row.tag}
                        onChange={(event) =>
                            update(
                                rows.map((r, i) =>
                                    i === index
                                        ? { ...r, tag: event.target.value }
                                        : r,
                                ),
                            )
                        }
                    />
                    <TextInput
                        label="Verdi"
                        name={`axis-value-${index}`}
                        inputMode="decimal"
                        value={row.value}
                        onChange={(event) =>
                            update(
                                rows.map((r, i) =>
                                    i === index
                                        ? { ...r, value: event.target.value }
                                        : r,
                                ),
                            )
                        }
                    />
                    <Button
                        variant="ghost"
                        onClick={() =>
                            update(rows.filter((_, i) => i !== index))
                        }
                    >
                        Fjern
                    </Button>
                </Flex>
            ))}
            <div>
                <Button
                    variant="secondary"
                    onClick={() => setRows([...rows, { tag: "", value: "" }])}
                >
                    Legg til akse
                </Button>
            </div>
        </Flex>
    );
}
