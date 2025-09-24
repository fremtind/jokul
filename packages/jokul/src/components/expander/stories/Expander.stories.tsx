import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CalendarIcon } from "../../icon/index.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { ExpandablePanelContent } from "../ExpandablePanelContent.js";
import { Expander } from "../Expander.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Expander",
    component: ExpandablePanel,
    parameters: {
        layout: "centered",
    },
    args: {
        expandDirection: "down",
        icon: <CalendarIcon />,
    },
    argTypes: {
        expandDirection: {
            control: "select",
            options: ["up", "down"],
        },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Expander>;

export const ExpanderStory: Story = {
    name: "Expander",
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <>
                <Expander
                    {...args}
                    open={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Klikk på meg for å {isOpen ? "lukke" : "åpne"}!
                </Expander>
                {isOpen && (
                    <div>Hei, jeg er innholdet som vises når du åpner meg!</div>
                )}
            </>
        );
    },
};

/**
 * Expander brukes i ExpandablePanel, men kan også brukes alene dersom du ønsker et annet uttrykk.
 */
export const ExpanderInPanel: Story = {
    args: {
        expandDirection: "down",
    },
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        ),
    ],
    render: (args) => (
        <ExpandablePanel style={{ width: "50cqi" }}>
            <Expander {...args}>Når er det vi faktisk er åpne?</Expander>
            <ExpandablePanelContent>Hei</ExpandablePanelContent>
        </ExpandablePanel>
    ),
};

export const ExpanderFlipped: Story = {
    parameters: {
        layout: "fullscreen",
    },
    args: {
        expandDirection: "up",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    height: "100dvh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <Story />
            </div>
        ),
    ],
    render: (args) => (
        <ExpandablePanel style={{ width: "100cqi" }}>
            <Expander {...args}>Når er det vi faktisk er åpne?</Expander>
            <ExpandablePanelContent>Hei</ExpandablePanelContent>
        </ExpandablePanel>
    ),
};
