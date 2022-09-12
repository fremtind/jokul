// eslint-disable-next-line import/no-unresolved
import { Placement } from "@floating-ui/core/src/types";
import { NON_BREAKING_SPACE } from "@fremtind/jkl-constants-util/src/unicode";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { formatValuta } from "../../formatters-util/src";
import { Tooltip } from "../src/Tooltip";

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues, displayValues }) => {
    let initialPlacement: Placement = "top";
    if (choiceValues && choiceValues["Plassering"]) {
        initialPlacement = choiceValues["Plassering"] as Placement;
    }

    const typo: string = displayValues?.density === "compact" ? "small" : choiceValues?.["Typografinivå"] || "body";
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
            values: [
                "top",
                "right",
                "bottom",
                "left",
                "top-start",
                "top-end",
                "right-start",
                "right-end",
                "bottom-start",
                "bottom-end",
                "left-start",
                "left-end",
            ],
            defaultValue: 0,
        },
        {
            name: "Typografinivå",
            values: [
                "Title",
                "Title Small",
                "Heading 1",
                "Heading 2",
                "Heading 3",
                "Heading 4",
                "Heading 5",
                "Body",
                "Bold",
                "Small",
            ],
            defaultValue: 7,
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
