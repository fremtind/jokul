import type { Meta, StoryObj } from "@storybook/react";
import { TextInput as TextInputComponent } from "../TextInput.js";
import "../styles/_index.scss";

const meta = {
    title: "Skjemaelementer/TextInput/TextInput",
    component: TextInputComponent,
    parameters: {
        controls: {
            expanded: true,
            sort: "alpha",
        },
    },
    tags: ["autodocs"],
    argTypes: {
        density: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof TextInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
    argTypes: {
        label: {
            type: {
                name: "string",
                required: true,
            },
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        value: {
            control: "text",
            description: "Verdien i feltet",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        unit: {
            control: "text",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        width: {
            control: "text",
            description: "Absolutt verdi for bredden til input-feltet",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        maxLength: {
            control: "number",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        action: {
            type: "function",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        actionButton: {
            type: "function",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        inline: {
            control: "boolean",
            description: "Lar feltet stå som en del av tekstlig innhold",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        name: {
            table: {
                disable: true,
            },
        },
        inputClassName: {
            description: "Klasse for input-feltet",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        density: {
            table: {
                disable: true,
            },
        },
        align: {
            table: {
                defaultValue: {
                    summary: "left",
                },
            },
        },
        placeholder: {
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        defaultValue: {
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        "data-testautoid": {
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
    },
    args: {
        name: "text-input",
        label: "Label",
        align: "left",
        inline: false,
        placeholder: "Ditt innhold",
        maxLength: 35,
        disabled: false,
        readOnly: false,
        defaultValue: "Ditt innhold",
        inputClassName: "input-klasse",
        "data-testautoid": "test-id",
    },
};

/**
 * Ved å bruke unit og align sammen vil du få et godt utgangspunkt for
 * nummer-baserte svar.
 */
export const UnitAlign: Story = {
    name: "Unit + Align",
    args: {
        label: "Boareal",
        align: "right",
        maxLength: 20,
        placeholder: "50",
        unit: "kvadratmeter",
    },
};
