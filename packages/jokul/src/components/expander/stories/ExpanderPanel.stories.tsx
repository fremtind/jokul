import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.js";
import { GreenCheckIcon } from "../../icon/index.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { Expander } from "../Expander.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/ExpandablePanel",
    component: ExpandablePanel,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: { control: "select", options: ["stroke", "fill"] },
    },
};

export default meta;

type StoryExpanderPanel = StoryObj<{
    icon?: boolean;
    flipDirection?: boolean;
    variant: "stroke" | "fill";
}>;

export const ExpandablePanelStory: StoryExpanderPanel = {
    name: "ExpandablePanel",
    args: {
        variant: "fill",
        icon: true,
        flipDirection: false,
    },
    render: ({ icon, flipDirection, ...props }) => (
        <Flex style={{ width: "100%" }} direction="column" gap={4}>
            {[...Array(3)].map((_, index) => (
                <ExpandablePanel key={index} {...props}>
                    <Expander
                        icon={icon ? <GreenCheckIcon /> : undefined}
                        expandDirection={flipDirection ? "up" : undefined}
                    >
                        Når er det vi faktisk er åpne?
                    </Expander>
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
