import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { formatFodselsnummer } from "../../formatters-util/src";
import { Tooltip, TooltipContent, type TooltipPlacement, TooltipTrigger } from "../src";

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

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const initialPlacement: TooltipPlacement = getPlacement(choiceValues?.["Plassering"]);
    const [copied, setCopied] = useState(false);
    const fodselsnummer = "08066215321";

    return (
        <p>
            Fødselsnummer:{" "}
            <Tooltip placement={initialPlacement} delay={250} triggerOn="hover">
                <TooltipTrigger
                    onClick={() => {
                        navigator.clipboard.writeText(fodselsnummer);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    }}
                >
                    {formatFodselsnummer(fodselsnummer)}
                </TooltipTrigger>
                <TooltipContent>{copied ? "Kopiert" : "Klikk for å kopiere til utklippstavlen"}</TooltipContent>
            </Tooltip>
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

export const tooltipExampleCode = ({
    choiceValues,
}: ExampleComponentProps): string => `const [copied, setCopied] = useState(false);
const fodselsnummer = "08066215321";

return (
    <p>
        Fødselsnummer:{" "}
        <Tooltip placement="${getPlacement(choiceValues?.["Plassering"])}" delay={250} triggerOn="hover">
            <TooltipTrigger
                onClick={() => {
                    navigator.clipboard.writeText(fodselsnummer);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                }}
            >
                {formatFodselsnummer(fodselsnummer)}
            </TooltipTrigger>
            <TooltipContent>{copied ? "Kopiert" : "Klikk for å kopiere til utklippstavlen"}</TooltipContent>
        </Tooltip>
    </p>
);`;
