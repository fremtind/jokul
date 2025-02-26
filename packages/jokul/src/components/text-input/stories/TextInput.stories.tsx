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
        disabled: {
            control: "boolean",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        tip: {
            control: "text",
            if: {
                arg: "disabled",
                truthy: true,
            },
            table: {
                defaultValue: {
                    summary: "Dette feltet er utilgjengelig",
                },
            },
        },
        readOnly: {
            control: "boolean",
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

/**
 * Dersom du trenger å vise et felt som kun kan leses kan du bruke
 * readonly.
 *
 * Skjermlesere vil ikke hoppe over feltet, men lese at det er deaktivert
 * til brukerne.
 */
export const ReadOnlyState: Story = {
    name: "Read only state",
    args: {
        label: "Fødselsnummer",
        maxLength: 12,
        readOnly: true,
        value: "12345 98765",
        tip: "Du kan ikke endre ditt eget fødselsnummer",
    },
};

/**
 * Dersom du ønsker at et felt ikke skal kunne interageres med kan du bruke disabled.
 * Vit at skjermlesere hopper over disse feltene.
 *
 * Et eksempel kan være når du oppretter et nytt tilbud på en kunde, og den automatisk blir satt til personen som lager tilbudet.
 * Det er i dette tilfellet ikke relevant å sende med innholdet i feltet første gang, men for å unngå layout shift kan du
 * vise det.
 */
export const DisabledState: Story = {
    name: "Disabled state",
    args: {
        label: "Kundeansvarlig",
        value: "Gro H. Brundtland",
        disabled: true,
        maxLength: 30,
        tip: "Du blir automatisk satt som kundeansvarlig når du opprettet tilbudet.",
        helpLabel: "Du kan endre ansvarlig etter du har opprettet tilbudet.",
    },
};
