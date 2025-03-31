import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioPanel as RadioPanelComponent } from "../RadioPanel.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/RadioPanel",
    component: RadioPanelComponent,
    parameters: {
        layout: "padded",
    },
    argTypes: {
        extraLabel: {
            control: "text",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof RadioPanelComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioPanel: Story = {
    args: {
        label: "Kasko",
        children: (
            <p>
                En forsikring som passer de fleste biler. Dekker det meste av
                skader, også de du selv er ansvarlig for. Inkluderer Minikasko
                og Ansvar.
            </p>
        ),
        extraLabel: "Anbefalt",
        value: "Kasko",
        alwaysOpen: false,
    },
    render: (args) => <RadioPanelComponent {...args} />,
};
