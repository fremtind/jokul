import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn, userEvent, within } from "storybook/test";
import { Combobox } from "../Combobox.js";
import { comboboxItems } from "./shared.data.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Combobox",
    component: Combobox,
    args: {
        name: "combobox",
        label: "Velg blant mange",
        items: comboboxItems,
        placeholder: "Velg",
        inline: false,
        invalid: false,
        hasTagHover: false,
        errorLabel: undefined,
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        width: "23ch",
        description:
            "Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",
        noMatchingOption: "Ingen regelfunn matcher søket.",
        onChange: fn(),
        onBlur: fn(),
        onFocus: fn(),
        id: "combobox",
        value: [{ ...comboboxItems[0] }],
    },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: undefined,
    },
};

export const FocusState: Story = {
    play: async () => {
        await userEvent.tab();
    },
};

export const OpenState: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByTestId("jkl-combobox__button");
        await userEvent.click(button);
    },
};

export const ErrorState: Story = {
    args: {
        errorLabel: "Feilmelding",
    },
};

export const HasValue: Story = {
    args: {
        value: comboboxItems,
    },
};
