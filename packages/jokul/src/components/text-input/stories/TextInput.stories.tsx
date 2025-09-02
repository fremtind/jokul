import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/index.js";
import { IconButton } from "../../icon-button/index.js";
import { CloseIcon } from "../../icon/index.js";
import { FieldGroup } from "../../input-group/index.js";
import { TextInput as TextInputComponent } from "../TextInput.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/TextInput/TextInput",
    component: TextInputComponent,
    parameters: {
        layout: "centered",
        controls: {
            expanded: true,
            sort: "alpha",
        },
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "text",
        },
        maxLength: {
            type: "number",
        },
        unit: {
            type: "string",
        },
        actionButton: {
            control: "select",
            options: ["Uten action", "Med action"],
            mapping: {
                "Uten action": undefined,
                "Med action": (
                    <IconButton onClick={(_) => ""}>
                        <CloseIcon />
                    </IconButton>
                ),
            },
        },
    },
    args: {
        label: "E-post",
        align: "left",
        inline: false,
        placeholder: "E-post",
        maxLength: 25,
        unit: "",
        disabled: false,
        readOnly: false,
        defaultValue: "",
    },
} satisfies Meta<typeof TextInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
    args: {},
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
        maxLength: 10,
        placeholder: "0",
        unit: "kvm",
    },
};

/**
 * Når du spør om datoer brukerne har et veldig aktivt forhold til,
 * som for eksempel sin egen fødselsdato kan det være til hjelp å dele opp tekstfeltet
 * i dato, måned, år.
 */
export const Datovelger: Story = {
    args: {
        labelProps: {
            srOnly: false,
        },
    },
    render: (args) => {
        return (
            <FieldGroup
                legend="Når er du født?"
                labelProps={{ variant: "medium" }}
            >
                <Flex gap={8}>
                    <TextInputComponent
                        {...args}
                        maxLength={2}
                        label="Dag"
                        placeholder="dd"
                        autoComplete="bday-day"
                        aria-label={"Fødselsdato dag"}
                    />
                    <TextInputComponent
                        {...args}
                        maxLength={2}
                        label="Måned"
                        placeholder="mm"
                        autoComplete="bday-month"
                        aria-label={"Fødselsdato måned"}
                    />
                    <TextInputComponent
                        {...args}
                        maxLength={4}
                        label="År"
                        placeholder="åååå"
                        autoComplete="bday-year"
                        aria-label={"Fødselsdato år"}
                    />
                </Flex>
            </FieldGroup>
        );
    },
};
