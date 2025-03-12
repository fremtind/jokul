import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CopyIcon } from "../../icon/index.js";
import { IconButton } from "../../icon-button/IconButton.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
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
        helpLabel: {
            control: "text",
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
        helpLabel: "Din hjelpetekst",
    },
};

export const Error: Story = {
    name: "Feilhåndtering",
    args: {
        label: "Hva heter du?",
        placeholder: "Kai Jakk",
        errorLabel: "Dette feltet må fylles ut",
    },
};

/**
 * Valgfrie felter burde markeres med valgfritt i label.
 */
export const ValgfrittFelt: Story = {
    name: "Valgfritt felt",
    args: {
        label: "Hva liker du å spise til middag? (Valgfritt)",
        placeholder: "Hamburger",
        maxLength: 30,
    },
};

/**
 * Ved å bruke unit og align sammen vil du få et godt utgangspunkt for
 * nummer-baserte svar.
 */
export const UnitAlign: Story = {
    name: "Unit + Align",
    args: {
        label: "Alder på sjåfør",
        align: "right",
        maxLength: 12,
        placeholder: "23",
        unit: "år",
    },
};

/**
 * Tooltip kan brukes dersom du har informasjon som er overflødig for mange brukere.
 *
 * Merk at tooltip ikke arver disabled attributten fra TextInput, og derfor må settes selvstendig.
 */
export const Tooltip: Story = {
    name: "Tooltip",
    args: {
        label: "Hva er buttoarealet til boligen?",
        maxLength: 20,
        align: "right",
        unit: "kvm",
        tooltip: (
            <PopupTip
                content="Bruttoareal er arealet av hele boligen. 
            Er du usikker finner du dette i bolgens takst- eller salgsrapport."
            />
        ),
    },
};

/**
 * Deaktiverte felter kan være med å få ned mengden layout shift samtidig som du gir et hint om mulighetene
 * i systemet brukeren sitter i.
 *
 * Merk at disse feltene:
 * - ikke vil bli lest opp av skjermlesere
 * - ikke blir tatt med i skjemaet brukeren fyller ut, dersom du bruker vanlig skjemaoppførsel
 *
 * Dersom brukeren trenger denne funksjonaliteten bruk heller et avlesningsfelt (read only).
 */
export const Disabled: Story = {
    name: "Disabled",
    args: {
        label: "Avkortning",
        align: "right",
        maxLength: 8,
        placeholder: "50",
        unit: "%",
        disabled: true,
    },
};

/**
 * Avlesningsfelt er nyttig når brukeren trenger å se verdien i et felt uten å kunne endre den.
 * Hvis verdien ikke skal bli tatt med i skjemaet bruk heller disabled state.
 */
export const ReadOnly: Story = {
    name: "Read only",
    args: {
        label: "Saksbehandler",
        maxLength: 20,
        value: "kai.jakk@fremtind.no",
        readOnly: true,
    },
};

/**
 * Dersom du har felter med handlinger knytta til seg kan du legge til en `actionButton` for å koble dem sammen
 * visuelt. Funksjonaliteten for å kopiere må teamene lage selv.
 *
 * Merk at actionButton ikke arver disabled attributten fra TextInput, og derfor må settes selvstendig.
 */
export const ActionButton: Story = {
    name: "Handling",
    args: {
        label: "Saksbehandler",
        maxLength: 20,
        defaultValue: "kai.jakk@fremtind.no",
        readOnly: true,
        actionButton: (
            <IconButton
                onClick={() => {
                    navigator.clipboard.writeText("kai.jakk@fremtind.no");
                }}
            >
                <CopyIcon />
            </IconButton>
        ),
    },
};
