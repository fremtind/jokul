import { ExampleComponentProps } from "doc-utils";
import React, { FC } from "react";
import { formatValuta } from "../../formatters-util/src";
import { Tooltip, TooltipContent, TooltipPlacement } from "../src";
import { TooltipQuestionTrigger } from "../src/TooltipQuestionTrigger";

function getPlacement(choice?: string): TooltipPlacement {
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

export const TooltipClickExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const initialPlacement: TooltipPlacement = getPlacement(choiceValues?.["Plassering"]);

    return (
        <p>
            Du betaler 348 kr/mnd{" "}
            <Tooltip placement={initialPlacement} triggerOn="click">
                <TooltipQuestionTrigger />
                <TooltipContent>
                    Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er {formatValuta(4176)}.
                </TooltipContent>
            </Tooltip>
        </p>
    );
};

export const tooltipClickExampleCode = ({ choiceValues }: ExampleComponentProps): string => `<p>
    Du betaler 348 kr/mnd{" "}
    <Tooltip placement="${getPlacement(choiceValues?.["Plassering"])}" triggerOn="click">
    <TooltipQuestionTrigger />
    <TooltipContent>
        Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er {formatValuta(4176)}.
    </TooltipContent>
    </Tooltip>
</p>
);`;
