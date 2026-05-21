import type { Meta, StoryObj } from "@storybook/nextjs";
import { Accordion } from "../Accordion.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import ExpandablePanelStories from "./ExpandablePanel.stories.js";
import "../styles/_index.scss";
import React from "react";

const meta = {
    title: "Komponenter/Accordion",
    component: Accordion,
    subcomponents: { ExpandablePanel },
    args: {
        outlined: false,
        children: (
            <>
                {["first", "second", "third", "fourth", "fifth", "sixth"].map(
                    (panelKey, index) => (
                        <ExpandablePanel
                            key={panelKey}
                            {...ExpandablePanelStories.args}
                            outlined={index % 2 === 0}
                        >
                            <ExpandablePanel.Header>
                                Klikk på meg for å åpne!
                            </ExpandablePanel.Header>
                            <ExpandablePanel.Content>
                                Velkommen innom når vi faktisk har kaffe! Vi er
                                åpne mandag til fredag fra kl. 09:00 til 18:00.
                                Lørdag kan du besøke oss fra 10:00 til 16:00 (vi
                                liker en rolig start på lørdagen). Søndager
                                hviler vi – og det burde du også!
                            </ExpandablePanel.Content>
                        </ExpandablePanel>
                    ),
                )}
            </>
        ),
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Accordion: Story = {};
