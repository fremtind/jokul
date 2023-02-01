import { CheckIcon, ChevronDownIcon, DotsIcon, InfoIcon, SearchIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { ContextualMenu } from "../src";

export const contextualMenuExampleKnobs: ExampleKnobsProps = {};
export const ContextualMenuExample: FC<ExampleComponentProps> = () => {
    return (
        <div style={{ width: "500px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3em" }}>
            <ContextualMenu initiatorElement={<DotsIcon bold />}>
                <span>2-Headed Shark Attack (2012)</span>
                <span>Ice Age 2</span>
                <span>Antfarm</span>
                <span>Chairman of the Board</span>
                <span>Cyber Bully</span>
            </ContextualMenu>

            <ContextualMenu initiatorElement={<DotsIcon bold />}>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <SearchIcon />
                    <span>Søk etter noe kult</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <CheckIcon />
                    <span>Dette er en test</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <InfoIcon />
                    <span>Tester her også</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <span>Balenciaga</span>
                </div>
            </ContextualMenu>

            <ContextualMenu initialPlacement="bottom-end" initiatorElement={<ChevronDownIcon bold />}>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <SearchIcon />
                    <span>Søk etter noe kult</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <CheckIcon />
                    <span>Dette er en test</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <InfoIcon />
                    <span>Tester her også qkwjellkqjweqlkwjeqwljke</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <span>Balenciaga</span>
                </div>
            </ContextualMenu>

            <ContextualMenu initiatorElement={<div>Hello</div>}>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <SearchIcon />
                    <span>Søk etter noe kult</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <CheckIcon />
                    <span>Dette er en test</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <InfoIcon />
                    <span>Tester her også</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    <span>Balenciaga</span>
                </div>
                <div>
                    <button>Hello</button>
                </div>
            </ContextualMenu>
        </div>
    );
};

export default ContextualMenuExample;
export const contextualMenuExampleCode: CodeExample = () => `
<ContextualMenu>Edit me!</ContextualMenu>
`;
