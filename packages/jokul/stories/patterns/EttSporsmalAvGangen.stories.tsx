import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../src/components/button/Button.js";
import { Expander } from "../../src/components/expander/index.js";
import { Flex } from "../../src/components/flex/Flex.js";
import { FieldGroup } from "../../src/components/input-group/FieldGroup.js";
import { Select } from "../../src/components/select/Select.js";
import { TextInput } from "../../src/components/text-input/TextInput.js";

const meta = {
    title: "Mønstre/Ett spørsmål av gangen",
    parameters: {
        layout: "centered",
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlereFelt: Story = {
    name: "Flere felt (legend)",
    render: () => {
        const [isOpen, setIsOpen] = React.useState(true);

        return (
            <Flex
                direction="column"
                gap="l"
                style={{ inlineSize: "min(100%, 28rem)" }}
            >
                <FieldGroup
                    legend="Hvilken bil vil du forsikre?"
                    description="Du finner opplysningene i vognkortet."
                    labelProps={{ pageHeading: true }}
                >
                    <Flex direction="column" gap="m">
                        <Select
                            label="Merke"
                            placeholder="Velg merke"
                            items={["Audi", "Toyota", "Volkswagen"]}
                        />
                        <TextInput label="Modell" />
                        <TextInput label="Årsmodell" inputMode="numeric" />
                    </Flex>
                </FieldGroup>
                <div>
                    <Expander
                        open={isOpen}
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        Hvilke krav stiller vi til bilen?
                    </Expander>
                    {isOpen ? (
                        <ul>
                            <li>
                                Bilen kan ikke brukes i næring, for eksempel som
                                drosje, budbil eller utleiebil.
                            </li>
                            <li>Motoreffekten må stemme med vognkortet.</li>
                            <li>
                                Er bilen importert, må den være fortollet i
                                Norge.
                            </li>
                        </ul>
                    ) : null}
                </div>
                <Flex justifyContent="center">
                    <Button variant="primary">Fortsett</Button>
                </Flex>
            </Flex>
        );
    },
};

export const EttFelt: Story = {
    name: "Ett felt (label)",
    render: () => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <Flex
                direction="column"
                gap="l"
                style={{ inlineSize: "min(100%, 28rem)" }}
            >
                <TextInput
                    label="Hvilken forsikringssum vil du endre til?"
                    description="Du kan ikke øke summen. I dag er den 60 000 kr."
                    labelProps={{ pageHeading: true }}
                    inputMode="numeric"
                    defaultValue="50 000"
                    unit="kr"
                    align="right"
                />
                <div>
                    <Expander
                        open={isOpen}
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        Hva er forsikringssum?
                    </Expander>
                    {isOpen ? (
                        <p>
                            Forsikringssummen er det høyeste beløpet vi kan
                            betale ut. En lavere sum gir lavere pris.
                        </p>
                    ) : null}
                </div>
                <Flex direction="column" gap="s" alignItems="center">
                    <Button variant="primary">Fortsett</Button>
                    <Button variant="ghost">Avbryt</Button>
                </Flex>
            </Flex>
        );
    },
};
