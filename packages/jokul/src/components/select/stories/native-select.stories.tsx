import type { Meta, StoryObj } from "@storybook/nextjs";
import { NativeSelect } from "../NativeSelect.js";
import { userEvent } from "storybook/test";
import { selectOptions } from "./shared.data.js";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Select/Select (Native)",
    component: NativeSelect,
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        items: selectOptions,
        placeholder: "Velg merke",
        inline: false,
        invalid: false,
        description: "Du kan kun velge ett merke",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        width: "20ch",
    },
};

export default meta;

type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
    args: {
        value: undefined,
    },
};

export const KeyboardFocusState: Story = {
    play: async () => {
        await userEvent.tab();
    },
};

export const ErrorState: Story = {
    args: {
        errorLabel: "Feilmelding",
    },
};

export const HasValue: Story = {
    args: {
        value: "Apple",
    },
};
