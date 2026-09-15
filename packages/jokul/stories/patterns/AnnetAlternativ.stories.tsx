import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { type FormEvent, useId, useState } from "react";
import { Button } from "../../src/components/button/index.js";
import { Checkbox } from "../../src/components/checkbox/index.js";
import { Flex } from "../../src/components/flex/index.js";
import { FieldGroup } from "../../src/components/input-group/index.js";
import { TextInput } from "../../src/components/text-input/index.js";

const meta = {
    title: "Mønstre/Hvordan la brukeren oppgi eget svar",
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Hjelp brukeren med å oppgi et eget svar når ingen av alternativene i en liste passer.",
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const otherRoomChoice = "Et annet rom";
const roomChoices = ["Bad", "Kjeller", "Kjøkken", "Soverom", "Stue"] as const;
type RoomChoice = (typeof roomChoices)[number] | typeof otherRoomChoice;

function ListWithCustomAnswerExample() {
    const [selectedRooms, setSelectedRooms] = useState<RoomChoice[]>([]);
    const [otherRoom, setOtherRoom] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const otherRoomFieldId = useId();

    const showOtherRoomField = selectedRooms.includes(otherRoomChoice);
    const hasGroupError = submitted && selectedRooms.length === 0;
    const hasOtherRoomError =
        submitted && showOtherRoomField && !otherRoom.trim();

    const updateSelectedRooms = (choice: RoomChoice, checked: boolean) => {
        setSelectedRooms((currentRooms) => {
            if (checked) {
                return currentRooms.includes(choice)
                    ? currentRooms
                    : [...currentRooms, choice];
            }

            return currentRooms.filter((room) => room !== choice);
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <Flex direction="column" gap="l">
                <FieldGroup
                    legend="Hvilke rom har fått vannskade?"
                    description="Velg alle rom der du kan se skader."
                    errorLabel={hasGroupError ? "Velg minst ett rom" : ""}
                    aria-invalid={hasGroupError}
                >
                    {roomChoices.map((room) => (
                        <Checkbox
                            key={room}
                            name="rom-med-vannskade"
                            value={room}
                            checked={selectedRooms.includes(room)}
                            invalid={hasGroupError}
                            onChange={(event) =>
                                updateSelectedRooms(
                                    room,
                                    event.currentTarget.checked,
                                )
                            }
                        >
                            {room}
                        </Checkbox>
                    ))}

                    <Checkbox
                        name="rom-med-vannskade"
                        value={otherRoomChoice}
                        checked={showOtherRoomField}
                        invalid={hasGroupError}
                        onChange={(event) =>
                            updateSelectedRooms(
                                otherRoomChoice,
                                event.currentTarget.checked,
                            )
                        }
                    >
                        {otherRoomChoice}
                    </Checkbox>

                    {showOtherRoomField ? (
                        <TextInput
                            id={otherRoomFieldId}
                            className="jkl-spacing-m--top"
                            name="annet-rom-med-vannskade"
                            label="Oppgi rommet"
                            value={otherRoom}
                            required
                            errorLabel={hasOtherRoomError ? "Oppgi rommet" : ""}
                            onChange={(event) =>
                                setOtherRoom(event.currentTarget.value)
                            }
                        />
                    ) : null}
                </FieldGroup>

                <Flex>
                    <Button type="submit" variant="primary">
                        Fortsett
                    </Button>
                </Flex>
            </Flex>
        </form>
    );
}

const damagedItemSuggestions = [
    "Datamaskin",
    "Hvitevarer",
    "Mobiltelefon",
    "Møbler",
    "Sykkel",
    "TV",
] as const;

function TextFieldWithSuggestionsExample() {
    const [damagedItem, setDamagedItem] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const suggestionListId = useId();

    const hasError = submitted && !damagedItem.trim();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <Flex direction="column" gap="l">
                <TextInput
                    name="skadet-gjenstand"
                    label="Hvilken gjenstand ble skadet?"
                    description="Skriv inn hva slags gjenstand det er."
                    value={damagedItem}
                    list={suggestionListId}
                    required
                    errorLabel={
                        hasError ? "Oppgi hvilken gjenstand som ble skadet" : ""
                    }
                    onChange={(event) =>
                        setDamagedItem(event.currentTarget.value)
                    }
                />
                <datalist id={suggestionListId}>
                    {damagedItemSuggestions.map((suggestion) => (
                        <option key={suggestion} value={suggestion} />
                    ))}
                </datalist>

                <Flex>
                    <Button type="submit" variant="primary">
                        Fortsett
                    </Button>
                </Flex>
            </Flex>
        </form>
    );
}

export const ListeMedEgetSvar: Story = {
    name: "Liste med eget svar",
    parameters: {
        docs: {
            description: {
                story: "Bruk når listen dekker de fleste behovene, og bare noen få brukere trenger å oppgi et eget svar.",
            },
        },
    },
    render: () => <ListWithCustomAnswerExample />,
};

export const TekstfeltMedForslag: Story = {
    name: "Tekstfelt med forslag",
    parameters: {
        docs: {
            description: {
                story: "Bruk når det finnes mange mulige svar, brukeren vet hva de leter etter, og forslag kan gjøre det raskere å svare.",
            },
        },
    },
    render: () => <TextFieldWithSuggestionsExample />,
};
