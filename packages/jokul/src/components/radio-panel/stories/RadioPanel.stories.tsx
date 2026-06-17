import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { Button } from "../../button/index.js";
import { Card } from "../../card/index.js";
import { ExpandablePanel } from "../../expander/index.js";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";
import { CheckListItem, List } from "../../list/index.js";
import { Tag } from "../../tag/index.js";
import { Text, Title } from "../../typography/index.js";
import { RadioPanel as RadioPanelComponent } from "../RadioPanel.js";

const meta = {
    title: "Komponenter/RadioPanel",
    component: RadioPanelComponent,
    args: {
        label: "Livsforsikring",
        description:
            "Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",
        amount: "xxx kr/mnd",
        value: "Livsforsikring",
        name: "Forsikring",
        alwaysOpen: true,
        "aria-invalid": false,
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

export const Husforsikring: Story = {
    name: "Dekningsvelger husforsikring",
    render: () => (
        <Flex direction="column" gap="s" style={{ maxWidth: "50ch" }}>
            <Title as="h1" size="l">
                Hvilken forsikring passer for deg?
            </Title>
            <Flex
                wrap="wrap"
                gap="xs"
                as={FieldGroup}
                legend="Velg dekning"
                labelProps={{ srOnly: true }}
            >
                <RadioPanelComponent
                    defaultChecked
                    name="dekning"
                    label="Topp hus"
                    value="topp"
                />
                <RadioPanelComponent
                    name="dekning"
                    label="Standard hus"
                    value="standard"
                />
            </Flex>
            <Card as={Flex} padding="l" direction="column">
                <Flex
                    as="hgroup"
                    gap="none"
                    direction="column"
                    alignItems="center"
                >
                    <Text
                        size="l"
                        style={{ color: "var(--jkl-color-text-subdued)" }}
                    >
                        Topp hus
                    </Text>
                    <Title as="h2" size="l" className="jkl-spacing-s--bottom">
                        997 kr/mnd
                    </Title>
                    <Tag variant="success">Inkludert 32 % ansattrabatt</Tag>
                </Flex>
                <Text size="l" style={{ textAlign: "center" }}>
                    Det beste vi kan gi deg. Vi har satt sammen en forsikring så
                    du kan sove litt bedre om natta.
                </Text>
                <ExpandablePanel outlined>
                    <ExpandablePanel.Header>
                        Forsikringen dekker
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        <List>
                            <CheckListItem>Alt du kan tenke deg</CheckListItem>
                            <CheckListItem>Mere til</CheckListItem>
                        </List>
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </Card>
        </Flex>
    ),
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
