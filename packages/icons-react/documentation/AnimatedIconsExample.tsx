import React from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { ArrowVerticalAnimated, PlusRemoveAnimated, ArrowHorizontalAnimated, HamburgerCloseAnimated } from "../src";
import { IconVariant } from "../src/icons/types";
import { AnimatedIcon } from "./internal/AnimatedIcon";
import { IconsExampleGrid } from "./internal/IconsExampleGrid";

export const choiceProps = [
    {
        name: "Variant",
        values: ["small", "medium", "large"],
        defaultValue: 0,
    },
    {
        name: "Farge",
        values: ["inherit", "feil", "suksess"],
        defaultValue: 0,
    },
];

export const AnimatedIconsExample: React.FC<ExampleComponentProps> = ({ choiceValues }) => {
    const colorValue = choiceValues ? choiceValues["Farge"] : "inherit";
    const color = colorValue === "inherit" ? undefined : colorValue;
    const variant = choiceValues ? (choiceValues["Variant"] as IconVariant) : "small";

    return (
        <div style={{ width: "100%" }}>
            <IconsExampleGrid columns="two" color={color}>
                <AnimatedIcon
                    renderIcon={(isDown) => <ArrowVerticalAnimated pointingDown={isDown} variant={variant} />}
                    iconName={ArrowVerticalAnimated.displayName}
                />
                <AnimatedIcon
                    renderIcon={(isRight) => <ArrowHorizontalAnimated pointingRight={isRight} variant={variant} />}
                    iconName={ArrowHorizontalAnimated.displayName}
                />
                <AnimatedIcon
                    renderIcon={(isPlus) => <PlusRemoveAnimated isPlus={isPlus} variant={variant} />}
                    iconName={PlusRemoveAnimated.displayName}
                />
                <AnimatedIcon
                    renderIcon={(isBurger) => <HamburgerCloseAnimated isBurger={isBurger} variant={variant} />}
                    iconName={HamburgerCloseAnimated.displayName}
                />
            </IconsExampleGrid>
        </div>
    );
};

export const animatedIconsExampleCode: CodeExample = ({ choiceValues }) => `
<ArrowVerticalAnimated variant="${choiceValues?.["Variant"]}" pointingDown={false} />
`;
