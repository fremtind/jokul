import React, { type FC, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { formatKontonummer } from "../../../utilities/formatters/kontonummer/formatKontonummer.js";
import { Button } from "../../button/Button.js";
import { CopyIcon } from "../../icon/index.js";
import { Tooltip } from "../Tooltip.js";
import { TooltipContent } from "../TooltipContent.js";
import { TooltipTrigger } from "../TooltipTrigger.js";
import type { TooltipPlacement } from "../types.js";
import { getPlacement } from "./getPlacement.js";

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const initialPlacement: TooltipPlacement = getPlacement(
        choiceValues?.["Plassering"],
    );
    const delay = choiceValues?.["Forsinkelse (ms)"]
        ? Number.parseInt(choiceValues?.["Forsinkelse (ms)"])
        : undefined;
    const [copied, setCopied] = useState(false);
    const kontonummer = "16024454979";

    function logState(open: boolean) {
        console.log(`Tooltip er ${open ? "åpen" : "lukket"}`);
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(kontonummer);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <p style={{ marginTop: 40 }}>
            Kontonummer: {formatKontonummer(kontonummer)}
            <Tooltip
                onOpenChange={logState}
                placement={initialPlacement}
                delay={delay}
            >
                <TooltipTrigger onClick={copyToClipboard}>
                    <Button
                        className="jkl-spacing-8--left"
                        data-density="compact"
                        variant="ghost"
                        icon={<CopyIcon />}
                    />
                </TooltipTrigger>
                <TooltipContent data-layout-density="comfortable">
                    {copied ? (
                        <span aria-live="assertive">Kopiert</span>
                    ) : (
                        "Klikk for å kopiere til utklippstavlen"
                    )}
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
