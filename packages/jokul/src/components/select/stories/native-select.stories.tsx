import type { Meta, StoryObj } from "@storybook/nextjs";
import { NativeSelect } from "../NativeSelect.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Select/Native",
    component: NativeSelect,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        id: {
            table: {
                disable: true,
            },
        },
        "data-testautoid": {
            table: {
                disable: true,
            },
        },
        density: {
            table: {
                disable: true,
            },
        },
        onBlur: {
            table: {
                disable: true,
            },
        },
        onFocus: {
            table: {
                disable: true,
            },
        },
        onChange: {
            table: {
                disable: true,
            },
        },
        searchable: {
            control: "boolean",
        },
    },
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        items: [
            { value: "Apple", label: "Apple" },
            { value: "Samsung", label: "Samsung" },
            { value: "Google", label: "Google" },
            { value: "OnePlus", label: "OnePlus" },
            { value: "Nokia", label: "Nokia" },
        ],
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

export const Native: Story = {
    name: "Native Select",
};
