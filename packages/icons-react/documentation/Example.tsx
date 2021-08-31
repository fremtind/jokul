import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { TextInput } from "@fremtind/jkl-text-input-react";
import {
    ArrowVerticalAnimated,
    PlusRemoveAnimated,
    ArrowHorizontalAnimated,
    Close,
    CheckMark,
    Plus,
    Search,
    Hamburger,
    Calendar,
    ArrowUpRight,
    ArrowUp,
    ArrowDown,
    ArrowRight,
    ArrowLeft,
    HamburgerCloseAnimated,
    Info,
    Error,
    Warning,
    Success,
} from "../src";
import { AnimatedIcon } from "./internal/AnimatedIcon";
import { IconExample } from "./internal/IconExample";
import { variants } from "../src/icons/types";
import { Grid } from "./internal/Grid";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const allIcons = [
        Close,
        CheckMark,
        Plus,
        Search,
        Hamburger,
        Calendar,
        ArrowUpRight,
        ArrowUp,
        ArrowDown,
        ArrowRight,
        ArrowLeft,
        Info,
        Error,
        Warning,
        Success,
    ];

    const inverted = !!(boolValues && boolValues["Invertert"]);
    const color = choiceValues ? choiceValues["Farge"] : "hvit";
    const variant = choiceValues ? (choiceValues["Variant"] as variants) : "small";

    const [fontSize, setFontSize] = useState("1rem");

    return (
        <div style={{ width: "100%" }} className={`jkl-color-${inverted ? "hvit" : "svart"}`}>
            <p className="jkl-component-spacing--medium-bottom jkl-heading-3">Ikon</p>
            {variant === "inherit" && (
                <TextInput
                    label="Sett fontstørrelse"
                    variant="small"
                    className="jkl-layout-spacing--small-top jkl-layout-spacing--small-bottom"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    inverted={inverted}
                />
            )}
            <Grid style={{ fontSize }} columns="four" color={color}>
                {allIcons.map((Ico) => (
                    <IconExample
                        key={Ico.name}
                        renderIcon={() => <Ico variant={variant} />}
                        name={Ico.displayName}
                        inverted={inverted}
                    />
                ))}
            </Grid>
            <p className="jkl-layout-spacing--large-top jkl-component-spacing--medium-bottom jkl-heading-3">
                Animerte ikon
            </p>
            {variant === "inherit" && (
                <p className="jkl-small jkl-layout-spacing--small-bottom">
                    Animerte ikon støtter ikke inherit-varianten
                </p>
            )}
            <Grid columns="two" color={color}>
                <AnimatedIcon
                    renderIcon={(isDown) => <ArrowVerticalAnimated pointingDown={isDown} variant={variant} />}
                    iconName={ArrowVerticalAnimated.displayName}
                    inverted={inverted}
                />
                <AnimatedIcon
                    renderIcon={(isRight) => <ArrowHorizontalAnimated pointingRight={isRight} variant={variant} />}
                    iconName={ArrowHorizontalAnimated.displayName}
                    inverted={inverted}
                />
                <AnimatedIcon
                    renderIcon={(isPlus) => <PlusRemoveAnimated isPlus={isPlus} variant={variant} />}
                    iconName={PlusRemoveAnimated.displayName}
                    inverted={inverted}
                />
                <AnimatedIcon
                    renderIcon={(isBurger) => <HamburgerCloseAnimated isBurger={isBurger} variant={variant} />}
                    iconName={HamburgerCloseAnimated.displayName}
                    inverted={inverted}
                />
            </Grid>
        </div>
    );
};
