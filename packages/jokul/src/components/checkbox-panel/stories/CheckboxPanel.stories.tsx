import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxPanel as CheckboxPanelComponent } from "../CheckboxPanel.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Checkbox Panel",
    component: CheckboxPanelComponent,
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
    args: {
        label: "Livsforsikring",
        children:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        alwaysOpen: false,
        extraLabel: "xxx kr/mnd",
    },
} satisfies Meta<typeof CheckboxPanelComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxPanel: Story = {};
