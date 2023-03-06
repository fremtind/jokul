import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CopyIcon, DotsIcon, InfoIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { ContextualMenu } from "../src/ContextualMenu";
import { ContextualMenuDivider } from "../src/ContextualMenuDivider";
import { ContextualMenuItem } from "../src/ContextualMenuItem";

export const contextualMenuExampleKnobs: ExampleKnobsProps = {};
export const ContextualMenuExample: FC<ExampleComponentProps> = () => {
    return (
        <div
            style={{
                width: "500px",
            }}
        >
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={
                    <IconButton title="En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten">
                        <DotsIcon bold />
                    </IconButton>
                }
            >
                <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>
                <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>
                <ContextualMenuItem disabled>Menyvalg med en lengre beskrivende tekst</ContextualMenuItem>
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
export const contextualMenuExampleCode: CodeExample = () => `
<ContextualMenu
    initialPlacement="bottom-start"
    triggerElement={
        <IconButton title="En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten">
            <DotsIcon bold />
        </IconButton>
    }
>
    <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>
    <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>
    <ContextualMenuItem disabled>Menyvalg med en lengre beskrivende tekst</ContextualMenuItem>
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
