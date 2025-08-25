import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxPanel } from "../CheckboxPanel.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Checkbox Panel",
    component: CheckboxPanel,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        extraLabel: {
            control: {
                type: "text",
            },
        },
    },
} satisfies Meta<typeof CheckboxPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Checkbox Panel",
    args: {
        label: "Livsforsikring",
        children:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        alwaysOpen: false,
    },
};
