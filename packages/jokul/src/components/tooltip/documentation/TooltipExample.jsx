import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "..";
import { formatKontonummer } from "../../../utilities/formatters";

export const knobs = [
    {
        type: "choice",
        label: "Plassering",
        choiceOptions: [
            { label: "Top", value: "top" },
            { label: "Top start", value: "top-start" },
            { label: "Top end", value: "top-end" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
        ],
        defaultValue: 0,
    },
    {
        type: "choice",
        label: "Forsinkelse (ms)",
        choiceOptions: [
            { label: "0", value: "0" },
            { label: "150", value: "150" },
            { label: "250", value: "250" },
            { label: "500", value: "500" },
            { label: "1000", value: "1000" },
        ],
        defaultValue: 0,
    },
];

export const TooltipExample = () => {
    /* -- EXAMPLE CODE START -- */
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
            <Tooltip placement={choiceKnob("Plassering")} delay={choiceKnob("Forsinkelse (ms)")}>
                <TooltipTrigger onClick={copyToClipboard}>{formatKontonummer(kontonummer)}</TooltipTrigger>
                <TooltipContent>
                    {copied ? <span aria-live="assertive">Kopiert</span> : "Klikk for å kopiere til utklippstavlen"}
                </TooltipContent>
            </Tooltip>
        </p>
    );
    /* -- EXAMPLE CODE END -- */
};
