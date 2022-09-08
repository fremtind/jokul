import { TextInput } from "@fremtind/jkl-text-input-react";
import React, { useState } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { ArrowUpRight, ArrowUp, ArrowDown, ArrowRight, ArrowLeft } from "../src";
import { IconVariant } from "../src/icons/types";
import { IconExample } from "./internal/IconExample";
import { IconsExampleGrid } from "./internal/IconsExampleGrid";

export const choiceProps = [
    {
        name: "Variant",
        values: ["inherit", "small", "medium", "large"],
        defaultValue: 1,
    },
    {
        name: "Farge",
        values: ["inherit", "feil", "suksess"],
        defaultValue: 0,
    },
];

export const BoldIconsExample: React.FC<ExampleComponentProps> = ({ choiceValues }) => {
    const allIcons = [ArrowUpRight, ArrowUp, ArrowDown, ArrowRight, ArrowLeft];

    const colorValue = choiceValues ? choiceValues["Farge"] : "inherit";
    const color = colorValue === "inherit" ? undefined : colorValue;
    const variant = choiceValues ? (choiceValues["Variant"] as IconVariant) : "small";

    const [fontSize, setFontSize] = useState("1rem");

    return (
        <div style={{ width: "100%" }}>
            {variant === "inherit" && (
                <TextInput
                    label="Sett fontstørrelse"
                    variant="small"
                    className="jkl-spacing-l--top jkl-spacing-l--bottom"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                />
            )}
            <IconsExampleGrid style={{ fontSize }} columns="four" color={color}>
                {allIcons.map((Ico) => (
                    <IconExample
                        key={Ico.name}
                        renderIcon={() => <Ico variant={variant} bold />}
                        name={Ico.displayName}
                    />
                ))}
            </IconsExampleGrid>
        </div>
    );
};

export const boldIconsExampleCode: CodeExample = ({ choiceValues }) => `
<ArrowDown variant="${choiceValues?.["Variant"]}" bold />
`;
