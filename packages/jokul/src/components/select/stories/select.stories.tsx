import type { Meta, StoryObj } from "@storybook/nextjs";
import { Select } from "../Select.js";
import { userEvent } from "storybook/test";
import { selectOptions } from "./shared.data.js";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Select/Select",
    component: Select,
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        description: "Du kan kun velge ett merke",
        items: selectOptions,
        defaultPrompt: "Velg merke",
        inline: false,
        invalid: false,
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        maxShownOptions: 12,
        width: "20ch",
        searchable: false,
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

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
