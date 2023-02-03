import { DotsIcon, InfoIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { ContextualMenu } from "../src";
import { ContextualMenuIconInitiator } from "../src/ContextualMenuIconInitiator";
import { ContextualMenuItem } from "../src/ContextualMenuItem";
import { ContextualMenuItemExpandable } from "../src/ContextualMenuItemExpandable";

export const contextualMenuExampleKnobs: ExampleKnobsProps = {};
export const ContextualMenuExample: FC<ExampleComponentProps> = () => {
    return (
        <div style={{ width: "500px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3em" }}>
            <ContextualMenu initiatorElement={<ContextualMenuIconInitiator icon={<DotsIcon bold />} />}>
                <ContextualMenuItem description="Helt vanlig menyvalg" icon={<InfoIcon />}></ContextualMenuItem>
                <ContextualMenu
                    initialPlacement="right-start"
                    initiatorElement={<ContextualMenuItemExpandable description="Expandable menyvalg" />}
                >
                    <ContextualMenuItem description="Ekspandert menyvalg 1" icon={<InfoIcon />} />
                    <ContextualMenuItem description="Ekspandert menyvalg 2 med mer tekst" />
                </ContextualMenu>
            </ContextualMenu>

            <ContextualMenu initiatorElement={<ContextualMenuIconInitiator icon={<DotsIcon bold />} />}>
                <ContextualMenuItem description="Tester icon med her" icon={<InfoIcon bold />} />
                <ContextualMenuItem description="Tester uten icon her også men litt lengre Tester" />
                <ContextualMenuItem description="Tester uten icon" />

                <ContextualMenu
                    openOnHover
                    initialPlacement="right-start"
                    initiatorElement={<ContextualMenuItemExpandable description="Hello" />}
                >
                    <ContextualMenuItem description="Ekspandert 1" icon={<InfoIcon />} />
                    <ContextualMenuItem description="Ekspandert 2 med mer tekst" />
                </ContextualMenu>

                <ContextualMenu
                    openOnHover
                    initialPlacement="right-start"
                    initiatorElement={<ContextualMenuItemExpandable icon={<InfoIcon />} description="Deeper" />}
                >
                    <ContextualMenuItem description="Tester med icon her" icon={<InfoIcon />} />
                    <ContextualMenuItem description="Tester uten icon" />
                </ContextualMenu>

                <ContextualMenu
                    openOnHover
                    initialPlacement="right-start"
                    initiatorElement={
                        <ContextualMenuItemExpandable
                            icon={<InfoIcon />}
                            description="Hello dette er en lang item med expand"
                        />
                    }
                >
                    <ContextualMenuItem description="Tester med icon her" icon={<InfoIcon />} />
                    <ContextualMenuItem description="Tester uten icon og lang tekst som overskrider bredden" />
                </ContextualMenu>
            </ContextualMenu>
        </div>
    );
};

export default ContextualMenuExample;
export const contextualMenuExampleCode: CodeExample = () => `
<ContextualMenu>Edit me!</ContextualMenu>
`;
