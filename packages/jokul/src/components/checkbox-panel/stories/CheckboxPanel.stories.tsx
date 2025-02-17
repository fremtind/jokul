import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.js";
import { SuccessTag } from "../../tag/Tag.js";
import { CheckboxPanel as CheckboxPanelComponent } from "../CheckboxPanel.js";
import "../styles/_index.scss";
import "./styles.scss";

const meta = {
    title: "Komponenter/CheckboxPanel",
    component: CheckboxPanelComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CheckboxPanelComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxPanel: Story = {
    args: {
        label: "Kasko",
        children: (
            <p>
                En forsikring som passer de fleste biler. Dekker det meste av
                skader, også de du selv er ansvarlig for. Inkluderer Minikasko
                og Ansvar.
            </p>
        ),
        extraLabel: (
            <Flex
                as="span"
                alignItems="center"
                justifyContent="flex-end"
                gap={24}
                className="input-panel-example__custom-label input-panel-example__custom-label--bold"
            >
                <SuccessTag>Anbefalt</SuccessTag>
                300 kr/mnd
            </Flex>
        ),
    },
    decorators: (Story) => (
        <div style={{ maxWidth: 580 }}>
            <Story />
        </div>
    ),
};
