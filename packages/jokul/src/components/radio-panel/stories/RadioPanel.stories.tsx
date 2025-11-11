import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioPanel as RadioPanelComponent } from "../RadioPanel.js";
import { RadioPanelGroup } from "../RadioPanelGroup.jsx";
import "../styles/_index.scss";
import { Flex } from "../../flex/index.js";

const meta = {
    title: "Komponenter/RadioPanel",
    component: RadioPanelComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
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
} satisfies Meta<typeof RadioPanelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RadioPanel: Story = {};

export const VelgForsikring: Story = {
    name: "Velg forsikring",
    render: () => {
        return (
            <Flex
                as={RadioPanelGroup}
                legend="Velg en forsikring"
                name="forsikring"
                defaultValue="Livsforsikring"
                gap="xs"
                direction="column"
            >
                <RadioPanelComponent
                    name="forsikring"
                    label="Ulykkesforsikring"
                    extraLabel="50 kr/mnd"
                    value="Ulykkesforsikring"
                >
                    Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.
                </RadioPanelComponent>
                <RadioPanelComponent
                    name="forsikring"
                    label="Innboforsikring"
                    extraLabel="100 kr/mnd"
                    value="Innboforsikring"
                >
                    Sikrer dine eiendeler mot brann, vannskader og tyveri.
                </RadioPanelComponent>
                <RadioPanelComponent
                    name="forsikring"
                    label="Livsforsikring"
                    extraLabel="200 kr/mnd"
                    value="Livsforsikring"
                >
                    Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.
                </RadioPanelComponent>
            </Flex>
        );
    },
};
