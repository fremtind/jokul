"use client";

import { Button } from "@fremtind/jokul/button";
import { Checkbox } from "@fremtind/jokul/checkbox";
import { Flex } from "@fremtind/jokul/flex";
import { RadioButton } from "@fremtind/jokul/radio-button";
import { Tag, type TagProps } from "@fremtind/jokul/tag";
import { ToggleSwitch } from "@fremtind/jokul/toggle-switch";
import { useId } from "react";

/**
 * Statusfargene genereres ikke av temabyggeren — paletten dekker bare
 * `background`, `text` og `border` — så disse varslingsfargene står stille
 * uansett kontrastfarge. Nøytral er med for sammenligning: den er den eneste
 * varianten som følger temaet.
 */
const TAG_VARIANTS: Array<{ variant: TagProps["variant"]; label: string }> = [
    { variant: "neutral", label: "Nøytral" },
    { variant: "info", label: "Info" },
    { variant: "success", label: "Suksess" },
    { variant: "warning", label: "Advarsel" },
    { variant: "error", label: "Feil" },
];

/**
 * Navnene gjøres unike per instans fordi eksempelet vises én gang per
 * fargemodus. Radioknapper med samme `name` i samme dokument danner én gruppe,
 * så uten dette ville bare den siste visningen hatt et valgt alternativ.
 */
export function ContrastExample() {
    const instanceId = useId();

    return (
        <Flex direction="column" alignItems="center" gap="m">
            <Flex
                alignItems="center"
                gap="m"
                wrap="wrap"
                justifyContent="center"
            >
                <Button variant="primary">Knapp</Button>
                <Checkbox
                    name={`kjekkboks-${instanceId}`}
                    value="kjekkboks"
                    defaultChecked
                >
                    Kjekkboks
                </Checkbox>
                <RadioButton
                    name={`radio-${instanceId}`}
                    value="radio"
                    defaultChecked
                >
                    Radio
                </RadioButton>
                <ToggleSwitch aria-label="Bryter" aria-pressed />
            </Flex>
            <Flex
                alignItems="center"
                gap="s"
                wrap="wrap"
                justifyContent="center"
            >
                {TAG_VARIANTS.map(({ variant, label }) => (
                    <Tag key={variant} variant={variant}>
                        {label}
                    </Tag>
                ))}
            </Flex>
        </Flex>
    );
}
