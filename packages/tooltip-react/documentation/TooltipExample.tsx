// eslint-disable-next-line import/no-unresolved
import { Placement } from "@floating-ui/core/src/types";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Tooltip } from "../src/Tooltip";

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    let initialPlacement: Placement = "top";
    if (choiceValues && choiceValues["initialPlacement"]) {
        initialPlacement = choiceValues["initialPlacement"] as Placement;
    }

    return (
        <>
            <p>
                Peekaboo
                <Tooltip
                    content={
                        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."
                    }
                    buttonClassName="jkl-spacing-s--left"
                    {...(initialPlacement && { initialPlacement })}
                />
            </p>
        </>
    );
};

export const tooltipExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "initialPlacement",
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
