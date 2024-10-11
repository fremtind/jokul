import React, { FC, useState } from "react";
import { Tooltip, TooltipContent, type TooltipPlacement, TooltipTrigger } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../doc-utils";
import { formatKontonummer } from "../../../utilities/formatters";
import { getPlacement } from "./getPlacement";

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const initialPlacement: TooltipPlacement = getPlacement(choiceValues?.["Plassering"]);
    const delay = choiceValues?.["Forsinkelse (ms)"] ? parseInt(choiceValues?.["Forsinkelse (ms)"]) : undefined;
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
            <Tooltip placement={initialPlacement} delay={delay}>
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
        {
            name: "Forsinkelse (ms)",
            values: ["0", "150", "250", "500", "1000"],
            defaultValue: 2,
        },
    ],
};
