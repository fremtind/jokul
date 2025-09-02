import type { Meta, StoryObj } from "@storybook/react";
import { RadioPanel as RadioPanelComponent } from "../RadioPanel.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/RadioPanel",
    component: RadioPanelComponent,
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Livsforsikring",
        children:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        alwaysOpen: false,
        extraLabel: "xxx kr/mnd",
        value: "Livsforsikring",
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

export const RadioPanel: Story = {};
