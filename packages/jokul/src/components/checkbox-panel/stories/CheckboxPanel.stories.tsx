import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { CheckboxPanel as CheckboxPanelComponent } from "../CheckboxPanel.js";
import "../styles/_index.scss";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";

const meta = {
    title: "Komponenter/CheckboxPanel",
    component: CheckboxPanelComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs", "forms"],
    args: {
        label: "Livsforsikring",
        children:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        amount: "xxx kr/mnd",
        value: "Livsforsikring",
        name: "Dekning",
    },
    decorators: [
        (Story) => (
            <form name="test">
                <Story />
            </form>
        ),
    ],
} satisfies Meta<typeof CheckboxPanelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxPanelStory: Story = {};

export const VelgDekningForReiseforsikring: Story = {
    name: "Velg dekning for reiseforsikring",
    render: (args) => {
        return (
            <Flex
                gap="xs"
                direction="column"
                as={FieldGroup}
                legend="Velg dekninger"
            >
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Reisegods"
                    value="Reisegods"
                >
                    Dekker tap, tyveri eller skade på bagasje og personlige
                    eiendeler med inntil 30 000 kr.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Avbestilling"
                    value="Avbestilling"
                >
                    Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Ulykkesdekning"
                    value="Ulykke"
                >
                    Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.
                </CheckboxPanelComponent>
            </Flex>
        );
    },
};

export const ControlledCheckboxPanel: Story = {
    tags: ["dev"],
    name: "Controlled",
    render: (args) => {
        const [checked, setChecked] = useState(true);
        return (
            <Flex
                gap="xs"
                direction="column"
                as={FieldGroup}
                legend="Velg dekninger"
            >
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Reisegods"
                    amount="35 kr/mnd"
                    value="Reisegods"
                    checked={checked}
                >
                    Dekker tap, tyveri eller skade på bagasje og personlige
                    eiendeler med inntil 30 000 kr.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Avbestilling"
                    amount="55 kr/mnd"
                    value="Avbestilling"
                    checked={checked}
                >
                    Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Ulykkesdekning"
                    amount="40 kr/mnd"
                    value="Ulykke"
                    checked={checked}
                >
                    Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.
                </CheckboxPanelComponent>
                <Button
                    variant="ghost"
                    onClick={() => setChecked(!checked)}
                    type="button"
                >
                    Check
                </Button>
            </Flex>
        );
    },
};
