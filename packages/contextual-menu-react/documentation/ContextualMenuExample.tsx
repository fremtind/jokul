import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CopyIcon, DotsIcon, InfoIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { ContextualMenu } from "../src/ContextualMenu";
import { ContextualMenuDivider } from "../src/ContextualMenuDivider";
import { ContextualMenuItem } from "../src/ContextualMenuItem";

export const contextualMenuExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "isOpen",
            values: ["true", "false", "tom"],
            defaultValue: 2,
        },
    ],
    boolProps: ["Ikke lukk ved klikk utenfor"],
};
export const ContextualMenuExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues, displayValues }) => {
    const isOpen = choiceValues?.["isOpen"] !== "tom" ? choiceValues?.["isOpen"] === "true" : undefined;

    /* Force a re-render whenever theme or density changes */
    const key = displayValues?.theme || "none" + displayValues?.density || "none";

    return (
        <div
            style={{
                width: "500px",
            }}
        >
            <ContextualMenu
                id={key}
                initialPlacement="bottom-start"
                isOpen={isOpen}
                keepOpenOnClickOutside={boolValues?.["Ikke lukk ved klikk utenfor"]}
                triggerElement={
                    <IconButton
                        data-testid="trigger-contextual-menu"
                        title="En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten"
                    >
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>
                <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>
                <ContextualMenuDivider />
                <ContextualMenu
                    openOnHover
                    triggerElement={
                        <ContextualMenuItem expandable>Ekspanderende menyvalg med veldig lang tekst</ContextualMenuItem>
                    }
                >
                    <ContextualMenuItem icon={<InfoIcon />}>Ekspandert menyvalg</ContextualMenuItem>
                    <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>
                </ContextualMenu>
                <ContextualMenu
                    openOnHover
                    triggerElement={<ContextualMenuItem expandable>Ekspanderende menyvalg</ContextualMenuItem>}
                >
                    <ContextualMenuItem icon={<CopyIcon />}>Ekspandert menyvalg</ContextualMenuItem>
                    <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>
                </ContextualMenu>
            </ContextualMenu>
        </div>
    );
};

export default ContextualMenuExample;
export const contextualMenuExampleCode: CodeExample = ({ boolValues, choiceValues }) => {
    const isOpen = !choiceValues || choiceValues["isOpen"] === "tom" ? `` : `\n    isOpen={${choiceValues["isOpen"]}}`;
    const keepOpen = choiceValues?.["Ikke lukk ved klikk utenfor"] ? `\n    keepOpenOnClickOutside` : ``;

    return `
<ContextualMenu
    initialPlacement="bottom-start"${isOpen}${keepOpen}
    triggerElement={
        <IconButton title="En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten">
            <DotsIcon bold />
        </IconButton>
    }
>
    <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>
    <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>
    <ContextualMenuDivider />
    <ContextualMenu
        openOnHover
        triggerElement={
            <ContextualMenuItem expandable>Ekspanderende menyvalg med veldig lang tekst</ContextualMenuItem>
        }
    >
        <ContextualMenuItem icon={<InfoIcon />}>Ekspandert menyvalg</ContextualMenuItem>
        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>
    </ContextualMenu>
    <ContextualMenu
        openOnHover
        triggerElement={<ContextualMenuItem expandable>Ekspanderende menyvalg</ContextualMenuItem>}
    >
        <ContextualMenuItem icon={<CopyIcon />}>Ekspandert menyvalg</ContextualMenuItem>
        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>
    </ContextualMenu>
</ContextualMenu>
`;
};
