// eslint-disable-next-line import/no-unresolved
import { Placement } from "@floating-ui/core/src/types";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { formatValuta } from "../../formatters-util/src";
import { Tooltip } from "../src/Tooltip";

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    let initialPlacement: Placement = "top";
    if (choiceValues && choiceValues["Plassering"]) {
        initialPlacement = choiceValues["Plassering"] as Placement;
    }

    return (
        <p>
            Du betaler 348 kr/mnd
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
    ],
};

export const tooltipExampleCode = ({ choiceValues }: ExampleComponentProps): string => {
    let initialPlacement: Placement = "top";
    if (choiceValues && choiceValues["initialPlacement"]) {
        initialPlacement = choiceValues["initialPlacement"] as Placement;
    }
    return `<Tooltip content="test" initialPlacement="${initialPlacement}" />`;
};
