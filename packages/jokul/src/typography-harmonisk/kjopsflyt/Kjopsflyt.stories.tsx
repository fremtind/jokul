import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Select } from "../../components-beta/select/Select.jsx";
import { Button } from "../../components/button/Button.jsx";
import { Flex } from "../../components/flex/Flex.jsx";
import { FieldGroup } from "../../components/input-group/FieldGroup.jsx";
import { RadioPanel } from "../../components/radio-panel/RadioPanel.jsx";
import { TextInput } from "../../components/text-input/TextInput.jsx";

const meta: Meta = {
    title: "Typography Harmonisk/Kjøpsflyt",
    parameters: {
        layout: "centered",
    },
    args: {
        labelProps: {
            variant: "large",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NårBleBoligenBygget: Story = {
    name: "Når ble boligen bygget?",
    render: (args) => {
        return (
            <Flex direction="column" gap="l" alignItems="center">
                <Flex direction="column" gap="m" asChild>
                    <FieldGroup
                        legend="Når ble boligen bygget?"
                        description="Her kommer det en hjelpetekst"
                        {...args}
                    >
                        <TextInput label="Byggeår" defaultValue={1960} />
                    </FieldGroup>
                </Flex>
                <Button variant="primary">Fortsett</Button>
            </Flex>
        );
    },
};

export const HvaErBoligensAdresse: Story = {
    name: "Hva er boligens adresse?",
    render: (args) => {
        return (
            <Flex direction="column" gap="l" alignItems="center">
                <Flex direction="column" gap="m" asChild>
                    <FieldGroup
                        legend="Hva er boligens adresse?"
                        description="Her kommer det en hjelpetekst"
                        {...args}
                    >
                        <TextInput
                            label="Postnummer"
                            placeholder="Postnummer"
                        />
                        <Select label="Adresse" placeholder="Velg adresse">
                            <option value="Kitterødveien">Kitterødveien</option>
                        </Select>
                        <Select label="Gatenummer" placeholder="Velg nummer">
                            <option value="Kitterødveien">10</option>
                        </Select>
                    </FieldGroup>
                </Flex>
                <Button variant="primary">Fortsett</Button>
            </Flex>
        );
    },
};

export const SkalDuLeieUtBoligen: Story = {
    name: "Skal du leie ut boligen?",
    render: (args) => {
        return (
            <Flex direction="column" gap="l" alignItems="center">
                <Flex direction="column" gap="m" asChild>
                    <FieldGroup legend="Skal du leie ut boligen?" {...args}>
                        <RadioPanel
                            name="boligutleie"
                            label="Ja, hele boligen"
                            value="Ja, hele boligen"
                        />

                        <RadioPanel
                            name="boligutleie"
                            label="Ja, deler av boligen"
                            value="Ja, deler av boligen"
                        />
                        <RadioPanel
                            name="boligutleie"
                            label="Nei"
                            value="Nei"
                        />
                    </FieldGroup>
                </Flex>
                <Button variant="primary">Fortsett</Button>
            </Flex>
        );
    },
};
