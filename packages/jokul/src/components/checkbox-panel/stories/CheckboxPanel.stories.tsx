import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { CheckboxPanel as CheckboxPanelComponent } from "../CheckboxPanel.js";
import "../styles/_index.scss";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";

const meta = {
    title: "Komponenter/CheckboxPanel",
    component: CheckboxPanelComponent,
    args: {
        label: "Livsforsikring",
        description:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        amount: "xxx kr/mnd",
        value: "Livsforsikring",
        name: "Dekning",
        alwaysOpen: true,
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
                />
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Avbestilling"
                    value="Avbestilling"
                    description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser."
                />
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Ulykkesdekning"
                    value="Ulykke"
                    description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen."
                />
            </Flex>
        );
    },
};

export const ControlledCheckboxPanel: Story = {
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
                    description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser."
                />
                <CheckboxPanelComponent
                    {...args}
                    name="dekning"
                    label="Ulykkesdekning"
                    amount="40 kr/mnd"
                    value="Ulykke"
                    checked={checked}
                    description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen."
                />
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
