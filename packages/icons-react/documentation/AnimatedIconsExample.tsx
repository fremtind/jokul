import React, { useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { TextInput } from "../../text-input-react/src";
import { ArrowVerticalAnimated, PlusRemoveAnimated, ArrowHorizontalAnimated } from "../src";
import { IconVariant } from "../src/icons/types";
import { AnimatedIcon } from "./internal/AnimatedIcon";
import { IconsExampleGrid } from "./internal/IconsExampleGrid";

export const animatedIconsExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Bold"],
    choiceProps: [
        {
            name: "Variant",
            values: ["inherit", "medium", "small"],
            defaultValue: 1,
        },
    ],
};

export const AnimatedIconsExample: React.FC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const variant = choiceValues ? (choiceValues["Variant"] as IconVariant) : "small";
    const bold = boolValues?.["Bold"] || false;

    const [fontSize, setFontSize] = useState("1rem");

    return (
        <div style={{ width: "100%" }}>
            {variant === "inherit" && (
                <TextInput
                    label="Fontstørrelse"
                    className="jkl-spacing-24--bottom"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    width="10ch"
                />
            )}
            <IconsExampleGrid style={{ fontSize }} columns="two">
                <AnimatedIcon
                    renderIcon={(isDown) => (
                        <ArrowVerticalAnimated bold={bold} pointingDown={isDown} variant={variant} />
                    )}
                    iconName={ArrowVerticalAnimated.displayName}
                />
                <AnimatedIcon
                    renderIcon={(isRight) => (
                        <ArrowHorizontalAnimated bold={bold} pointingRight={isRight} variant={variant} />
                    )}
                    iconName={ArrowHorizontalAnimated.displayName}
                />
                <AnimatedIcon
                    renderIcon={(isPlus) => <PlusRemoveAnimated bold={bold} isPlus={isPlus} variant={variant} />}
                    iconName={PlusRemoveAnimated.displayName}
                />
            </IconsExampleGrid>
        </div>
    );
};

export const animatedIconsExampleCode: CodeExample = ({ choiceValues }) => `
<ArrowVerticalAnimated variant="${choiceValues?.["Variant"]}" pointingDown={false} />
`;
