import type { Meta, StoryObj } from "@storybook/react";
import type { ComboboxValuePair } from "../../combobox/types.js";
import { Combobox } from "../Combobox.js";

import "../styles/_index.scss";

const items: ComboboxValuePair[] = [
    { value: "a080", label: "A080 - Rotavirusenteritt", tagLabel: "A080" },
    {
        value: "a081",
        label: "A081 - Akutt gastroenteritt som skyldes norovirus",
        tagLabel: "A081",
    },
    { value: "a082", label: "A082 - Adenovirusenteritt", tagLabel: "A082" },
    {
        value: "a083",
        label: "A083 - Annen virusenteritt",
        tagLabel: "A083",
    },
    {
        value: "a084",
        label: "A084 - Uspesifisert virusinfeksjon i mage-tarmkanalen",
        tagLabel: "A084",
    },
    {
        value: "a085",
        label: "A085 - Annen spesifisert mage-tarminfeksjon",
        tagLabel: "A085",
    },
    {
        value: "a090",
        label: "A090 - Annen eller uspesifisert gastroenteritt eller kolitt av infeksiøs årsak",
        tagLabel: "A090",
    },
    {
        value: "a099",
        label: "A099 - Gastroenteritt eller kolitt av uspesifisert årsak",
        tagLabel: "A099",
    },
    {
        value: "a150",
        label: "A150 - Lungetuberkulose bekreftet ved mikroskopi av sputum med eller uten kultur",
        tagLabel: "A150",
    },
];

const meta = {
    title: "Komponenter/Combobox",
    component: Combobox,
    parameters: {
        layout: "centered",
    },
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
        children: {
            table: {
                disable: true,
            },
        },
        "data-testid": {
            table: {
                disable: true,
            },
        },
        style: {
            table: {
                disable: true,
            },
        },
        supportLabelProps: {
            table: {
                disable: true,
            },
        },
        render: {
            table: {
                disable: true,
            },
        },
        tooltip: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        placeholder: "Velg",
        inline: false,
        invalid: false,
        hasTagHover: false,
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        width: "20ch",
        description: "Du kan velge flere, dersom flere passer",
        onChange: () => "",
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComboboxStory: Story = {
    name: "Combobox",
    args: {
        items,
        name: "disease",
        label: "Velg sykdommer",
    },
};
