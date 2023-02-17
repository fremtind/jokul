import { CopyIcon, DotsIcon, InfoIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { ContextualMenu } from "../src";
import { ContextualMenuItem } from "../src/ContextualMenuItem";
import { ContextualMenuItemDivider } from "../src/ContextualMenuItemDivider";
import { ContextualMenuTriggerIcon } from "../src/ContextualMenuTriggerIcon";

export const contextualMenuExampleKnobs: ExampleKnobsProps = {};
export const ContextualMenuExample: FC<ExampleComponentProps> = () => {
    return (
        <div style={{ width: "500px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3em" }}>
            <ContextualMenu
                initialPlacement="bottom-start"
                triggerElement={<ContextualMenuTriggerIcon icon={<DotsIcon bold />} />}
            >
                <ContextualMenuItem description="Menyvalg 1" icon={<InfoIcon />} />
                <ContextualMenuItem description="Menyvalg 2" />
                <ContextualMenuItem description="Menyvalg med en lengre beskrivende tekst" />
                <ContextualMenuItemDivider />
                <ContextualMenu
                    openOnHover
                    initialPlacement="right-start"
                    triggerElement={<ContextualMenuItem expandable description="Ekspanderende menyvalg" />}
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
    <div style={{ width: "500px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3em" }}>
        <ContextualMenu
            initialPlacement="bottom-start"
            triggerElement={<ContextualMenuTriggerIcon icon={<DotsIcon bold />} />}
        >
            <ContextualMenuItem description="Menyvalg 1" icon={<InfoIcon />} />
            <ContextualMenuItem description="Menyvalg 2" />
            <ContextualMenuItem description="Menyvalg med en lengre beskrivende tekst" />
            <ContextualMenuItemDivider />
            <ContextualMenu
                openOnHover
                initialPlacement="right-start"
                triggerElement={<ContextualMenuItem expandable description="Ekspanderende menyvalg" />}
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
`;
