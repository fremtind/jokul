import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CheckboxPanel as CheckboxPanelComponent } from "../CheckboxPanel.js";
import "../styles/_index.scss";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";

const meta = {
    title: "Komponenter/CheckboxPanel",
    component: CheckboxPanelComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs", "forms"],
    argTypes: {
        extraLabel: {
            control: "text",
        },
    },
    args: {
        label: "Livsforsikring",
        children:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        alwaysOpen: true,
        extraLabel: "xxx kr/mnd",
        value: "Livsforsikring",
    },
} satisfies Meta<typeof CheckboxPanelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxPanel: Story = {};

export const VelgDekningForReiseforsikring: Story = {
    name: "Velg dekning for reiseforsikring",
    render: () => {
        return (
            <Flex
                gap="xs"
                direction="column"
                as={FieldGroup}
                legend="Velg dekninger"
            >
                <CheckboxPanelComponent
                    name="dekning"
                    label="Reisegods"
                    extraLabel="35 kr/mnd"
                    value="Reisegods"
                >
                    Dekker tap, tyveri eller skade på bagasje og personlige
                    eiendeler med inntil 30 000 kr.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent
                    name="dekning"
                    label="Avbestilling"
                    extraLabel="55 kr/mnd"
                    value="Avbestilling"
                >
                    Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent
                    name="dekning"
                    label="Ulykkesdekning"
                    extraLabel="40 kr/mnd"
                    value="Ulykke"
                >
                    Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.
                </CheckboxPanelComponent>
            </Flex>
        );
    },
};
