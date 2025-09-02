import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.jsx";
import { ExpandablePanel } from "../ExpandablePanel.jsx";
import { ExpandablePanelContent } from "../ExpandablePanelContent.jsx";
import { Expander } from "../Expander.jsx";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/ExpandablePanel",
    component: ExpandablePanel,
    subcomponents: { Expander, ExpandablePanelContent },
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "50dvw",
                    padding: "24px",
                }}
            >
                <Story />
            </div>
        ),
    ],
    argTypes: {
        variant: {
            control: "radio",
            options: ["fill", "stroke"],
        },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExpandablePanel>;

export const ExpandablePanelFilled: Story = {
    args: {
        variant: "fill",
    },
    render: (args) => (
        <Flex style={{ width: "100%" }} direction="column" gap={4}>
            {[...Array(3)].map((_, index) => (
                <ExpandablePanel key={index} {...args}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            ))}
        </Flex>
    ),
};

/**
 * Stroke varianten skal ikke ha mellomrom mellom panelene.
 * */
export const ExpandablePanelStroke: Story = {
    args: {
        variant: "stroke",
    },
    render: (args) => (
        <>
            {[...Array(3)].map((_, index) => (
                <ExpandablePanel key={index} {...args}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            ))}
        </>
    ),
};
