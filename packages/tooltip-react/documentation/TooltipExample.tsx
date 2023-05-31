import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { formatKontonummer } from "../../formatters-util/src";
import { Tooltip, TooltipContent, type TooltipPlacement, TooltipTrigger } from "../src";
import { getPlacement } from "./getPlacement";

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const initialPlacement: TooltipPlacement = getPlacement(choiceValues?.["Plassering"]);
    const [copied, setCopied] = useState(false);
    const kontonummer = "16024454979";

    function copyToClipboard() {
        navigator.clipboard.writeText(kontonummer);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <p>
            Kontonummer:{" "}
            <Tooltip placement={initialPlacement} delay={250}>
                <TooltipTrigger onClick={copyToClipboard}>{formatKontonummer(kontonummer)}</TooltipTrigger>
                <TooltipContent>
                    {copied ? <span aria-live="assertive">Kopiert</span> : "Klikk for å kopiere til utklippstavlen"}
                </TooltipContent>
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
const kontonummer = "16024454979";

function copyToClipboard() {
    navigator.clipboard.writeText(kontonummer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
}

return (
    <p>
        Kontonummer:{" "}
        <Tooltip placement="${getPlacement(choiceValues?.["Plassering"])}" delay={250}>
            <TooltipTrigger onClick={copyToClipboard}>{formatKontonummer(kontonummer)}</TooltipTrigger>
            <TooltipContent>
                {copied ? <span aria-live="assertive">Kopiert</span> : "Klikk for å kopiere til utklippstavlen"}
            </TooltipContent>
        </Tooltip>
    </p>
);`;
