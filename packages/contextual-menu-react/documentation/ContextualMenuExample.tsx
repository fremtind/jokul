import { CopyIcon, DotsIcon, InfoIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { ContextualMenu } from "../src";
import { ContextualMenuItem } from "../src/ContextualMenuItem";
import { ContextualMenuTriggerIcon } from "../src/ContextualMenuTriggerIcon";

export const contextualMenuExampleKnobs: ExampleKnobsProps = {};
export const ContextualMenuExample: FC<ExampleComponentProps> = () => {
    return (
        <div style={{ width: "500px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3em" }}>
            <ContextualMenu triggerElement={<ContextualMenuTriggerIcon icon={<DotsIcon bold />} />}>
                <ContextualMenuItem description="Menyvalg 1" icon={<InfoIcon />} />
                <ContextualMenuItem description="Menyvalg 2" />
                <ContextualMenuItem description="Menyvalg med en lengre beskrivende tekst" />
                <ContextualMenu
                    openOnHover
                    initialPlacement="right-start"
                    triggerElement={<ContextualMenuItem divider expandable description="Ekspanderende menyvalg" />}
                >
                    <ContextualMenuItem description="Ekspandert menyvalg" icon={<InfoIcon />} />
                    <ContextualMenuItem description="Ekspandert menyvalg med mer tekst" />
                </ContextualMenu>
                <ContextualMenu
                    openOnHover
                    initialPlacement="right-start"
                    triggerElement={<ContextualMenuItem expandable description="Ekspanderende menyvalg" />}
                >
                    <ContextualMenuItem description="Ekspandert menyvalg" icon={<CopyIcon />} />
                    <ContextualMenuItem description="Ekspandert menyvalg med mer tekst" />
                </ContextualMenu>
            </ContextualMenu>
        </div>
    );
};

export default ContextualMenuExample;
export const contextualMenuExampleCode: CodeExample = () => `
    <ContextualMenu triggerElement={<ContextualMenuTriggerIcon icon={<CheckIcon bold />} />}>
        <ContextualMenuItem description="Menyvalg 1" icon={<InfoIcon />} />
        <ContextualMenuItem description="Menyvalg 2" />
        <ContextualMenuItem 
            description="Menyvalg med en lengre beskrivende tekst" 
        />
        <ContextualMenu
            openOnHover
            initialPlacement="right-start"
            triggerElement={
                <ContextualMenuItem 
                    description="Ekspanderende menyvalg"
                    divider 
                    expandable  
                />
            }
        >
            <ContextualMenuItem description="Ekspandert menyvalg" icon={<CopyIcon />} />
            <ContextualMenuItem description="Ekspandert menyvalg med mer tekst" />
        </ContextualMenu>
        <ContextualMenu
            openOnHover
            initialPlacement="right-start"
            triggerElement={
                <ContextualMenuItem 
                    icon={<InfoIcon />} 
                    description="Ekspanderende menyvalg" 
                    expandable 
                />
            }
        >
            <ContextualMenuItem description="Ekspandert menyvalg" icon={<CopyIcon />} />
            <ContextualMenuItem description="Ekspandert menyvalg med mer tekst" />
        </ContextualMenu>
    </ContextualMenu>
`;
