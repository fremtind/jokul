import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";
import { RadioPanel as RadioPanelComponent } from "../RadioPanel.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/RadioPanel",
    component: RadioPanelComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        label: "Livsforsikring",
        description:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        amount: "xxx kr/mnd",
        value: "Livsforsikring",
        name: "Forsikring",
        alwaysOpen: true,
    },
    decorators: [
        (Story) => (
            <form name="test">
                <Story />
            </form>
        ),
    ],
} satisfies Meta<typeof RadioPanelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RadioPanel: Story = {};

export const VelgForsikring: Story = {
    render: (args) => {
        return (
            <Flex
                as={FieldGroup}
                legend="Velg en forsikring"
                name="forsikring"
                defaultValue="Livsforsikring"
                gap="xs"
                direction="column"
            >
                <RadioPanelComponent
                    {...args}
                    name="forsikring"
                    label="Ulykkesforsikring"
                    amount="50 kr/mnd"
                    value="Ulykkesforsikring"
                    description="Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død."
                />

                <RadioPanelComponent
                    {...args}
                    name="forsikring"
                    label="Innboforsikring"
                    amount="100 kr/mnd"
                    value="Innboforsikring"
                    description="Sikrer dine eiendeler mot brann, vannskader og tyveri."
                />
                <RadioPanelComponent
                    {...args}
                    name="forsikring"
                    label="Livsforsikring"
                    amount="200 kr/mnd"
                    value="Livsforsikring"
                    description="Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon."
                />
            </Flex>
        );
    },
};

export const Controlled: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(true);
        return (
            <Flex
                as={FieldGroup}
                legend="Velg en forsikring"
                name="forsikring"
                defaultValue="Livsforsikring"
                gap="xs"
                direction="column"
            >
                <RadioPanelComponent
                    {...args}
                    name="forsikring"
                    label="Ulykkesforsikring"
                    amount="50 kr/mnd"
                    value="Ulykkesforsikring"
                    description="Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død."
                />

                <RadioPanelComponent
                    {...args}
                    name="forsikring"
                    label="Innboforsikring"
                    amount="100 kr/mnd"
                    value="Innboforsikring"
                    description="Sikrer dine eiendeler mot brann, vannskader og tyveri."
                />
                <RadioPanelComponent
                    {...args}
                    name="forsikring"
                    label="Livsforsikring"
                    amount="200 kr/mnd"
                    value="Livsforsikring"
                    checked={checked}
                    description="Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon."
                />
                <Button
                    variant="ghost"
                    onClick={() => setChecked(!checked)}
                    type="button"
                >
                    Toggle radio 3
                </Button>
            </Flex>
        );
    },
};
