import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { PopupTip as PopuptipComponent } from "../PopupTip.js";

const meta = {
    title: "Komponenter/Popuptip",
    component: PopuptipComponent,
    tags: ["autodocs"],
    argTypes: {
        delay: { control: "number" },
        initialOpen: { control: "boolean" },
        placement: {
            control: "select",
            options: ["top", "top-start", "top-end", "left", "right"],
        },
    },
} satisfies Meta<typeof PopuptipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Popuptip: Story = {
    args: {
        content: (
            <p>
                Avtalen er betalt av arbeidsgiveren din. Du betaler ingenting.
            </p>
        ),
        delay: 0,
        initialOpen: false,
        placement: "top",
    },
    render: (args) => (
        <p>
            Avtalepris: 0 kr/mnd. <PopuptipComponent {...args} />
        </p>
    ),
};
