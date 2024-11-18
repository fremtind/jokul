import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Button } from "../../button-react/src";
import { formatKontonummer } from "../../formatters-util/src";
import { CopyIcon } from "../../icons-react/src";
import {
    Tooltip,
    TooltipContent,
    type TooltipPlacement,
    TooltipTrigger,
} from "../src";
import { getPlacement } from "./getPlacement";

export const TooltipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const initialPlacement: TooltipPlacement = getPlacement(
        choiceValues?.["Plassering"],
    );
    const delay = choiceValues?.["Forsinkelse (ms)"]
        ? parseInt(choiceValues?.["Forsinkelse (ms)"])
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
        <p>
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

export const tooltipExampleCode = ({
    choiceValues,
}: ExampleComponentProps): string => `const [copied, setCopied] = useState(false);
const kontonummer = "16024454979";

function logState(open: boolean) {
    console.log(\`Tooltip er \${open ? "åpen" : "lukket"}\`);
}

function copyToClipboard() {
    navigator.clipboard.writeText(kontonummer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
}

return (
    <p>
        Kontonummer:{" "}
        <Tooltip
            onOpenChange={logState}
            placement="${getPlacement(choiceValues?.["Plassering"])}"
            delay={${choiceValues?.["Forsinkelse (ms)"] || 250}}
        >
            <TooltipTrigger onClick={copyToClipboard}>{formatKontonummer(kontonummer)}</TooltipTrigger>
            <TooltipContent>
                {copied ? <span aria-live="assertive">Kopiert</span> : "Klikk for å kopiere til utklippstavlen"}
            </TooltipContent>
        </Tooltip>
    </p>
);`;
