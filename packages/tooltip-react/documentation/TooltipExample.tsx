import { NON_BREAKING_SPACE } from "@fremtind/jkl-constants-util/src/unicode";
import { ExampleComponentProps, ExampleKnobsProps } from "@fremtind/jkl-internal-doc-utils";
import React, { FC } from "react";
import { formatValuta } from "../../formatters-util/src";
import { Placement, Tooltip } from "../src";

function getPlacement(choice?: string): Placement {
    switch (choice) {
        case "Right":
            return "right";
        case "Left":
            return "left";
        case "Top end":
            return "top-end";
        case "Top start":
            return "top-start";
        case "Top":
        default:
            return "top";
    }
}

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues, displayValues }) => {
    const initialPlacement: Placement = getPlacement(choiceValues?.["Plassering"]);
    const typo: string = displayValues?.density === "compact" ? "small" : "body";

    return (
        <p className={`jkl-${typo.toLowerCase().replace(/ /g, "-")}`}>
            Du betaler 348 kr/mnd{NON_BREAKING_SPACE}
            <Tooltip
                content={
                    <span>
                        Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er{" "}
                        <strong>{formatValuta(4176, { suffix: "kr" })}</strong>.
                    </span>
                }
                {...(initialPlacement && { initialPlacement })}
            />
        </p>
    );
};

export const tooltipExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Plassering",
            values: ["Top", "Top start", "Top end", "Left", "Right"],
            defaultValue: 0,
        },
    ],
};

export const tooltipExampleCode = ({ choiceValues, displayValues }: ExampleComponentProps): string => {
    let initialPlacement: Placement = "top";
    if (choiceValues && choiceValues["initialPlacement"]) {
        initialPlacement = choiceValues["initialPlacement"] as Placement;
    }

    const typo: string = displayValues?.density === "compact" ? "small" : choiceValues?.["Typografinivå"] || "body";

    return `<p className={jkl-${typo.toLowerCase().replace(/ /g, "-")}}>
    Du betaler 348 kr/mnd{NON_BREAKING_SPACE}
    <Tooltip
        content={
            <span>
                Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er{" "}
                <strong>{formatValuta(4176, { suffix: "kr" })}</strong>.
            </span>
        }
        placement={${initialPlacement}}
    />
</p>>`;
};
