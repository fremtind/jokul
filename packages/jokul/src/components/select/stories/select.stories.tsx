import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState, type ChangeEvent } from "react";
import { Select } from "../Select.js";
import "../styles/_index.scss";
import * as catImage from "../../../../../../storybook-public/images/cat.jpg";
import * as cowImage from "../../../../../../storybook-public/images/cow.jpg";
import * as dogImage from "../../../../../../storybook-public/images/dog.jpg";
import * as guineaPigImage from "../../../../../../storybook-public/images/guinea.jpg";
import * as horseImage from "../../../../../../storybook-public/images/horse.jpg";
import { Button } from "../../button/Button.jsx";
import { Flex } from "../../flex/Flex.jsx";
import { UnorderedList } from "../../list/List.jsx";
import { ListItem } from "../../list/ListItem.jsx";
import { Title } from "../../typography/Title.jsx";

const options = [
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
    { value: "google", label: "Google" },
    { value: "oneplus", label: "OnePlus" },
    { value: "nothing", label: "Nothing" },
    { value: "nokia", label: "Nokia" },
    { value: "annet", label: "Annet" },
];

function logSelectedValues(event: ChangeEvent<HTMLSelectElement>) {
    const values = Array.from(
        event.target.selectedOptions,
        (option) => option.value,
    );
    console.log(values);
}

const meta: Meta = {
    title: "Komponenter/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        name: {
            table: {
                disable: false,
            },
        },
    },
    args: {
        name: "phone-brand",
        label: "Hvilket merke er telefonen?",
        description: "Du kan kun velge ett merke",
        placeholder: "Velg",
        searchable: false,
        multiple: false,
        required: false,
        disabled: false,
        items: options,
        onChange: logSelectedValues,
    },
    tags: ["autodocs", "forms"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
    name: "Select",
    args: {
        placeholder: undefined,
    },
};

export const Multiple: Story = {
    name: "Select multiple",
    args: {
        name: "multiselect",
        label: "Hvilke dyr liker du?",
        description: "Velg så mange du vil fra listen",
        placeholder: undefined,
        multiple: true,
        items: [
            {
                value: "hund",
                label: "Hund",
                description: "Trofast og glad",
                media: (
                    <img src={dogImage.default} alt="" width="50" height="50" />
                ),
            },
            {
                value: "katt",
                label: "Katt",
                description: "Selvstendig og nysgjerrig",
                media: (
                    <img src={catImage.default} alt="" width="50" height="50" />
                ),
            },
            {
                value: "marsvin",
                label: "Marsvin",
                description: "Vennlig og sjenert",
                media: (
                    <img
                        src={guineaPigImage.default}
                        alt=""
                        width="50"
                        height="50"
                    />
                ),
            },
            {
                value: "hest",
                label: "Hest",
                description: "Kraftig og intelligent",
                media: (
                    <img
                        src={horseImage.default}
                        alt=""
                        width="50"
                        height="50"
                    />
                ),
            },
            {
                value: "ku",
                label: "Ku",
                description: "Stø og rolig",
                media: (
                    <img src={cowImage.default} alt="" width="50" height="50" />
                ),
            },
        ],
    },
    render: (args) => {
        const [selectedOptions, setSelectedOptions] = useState<
            HTMLOptionElement[]
        >([]);

        return (
            <>
                <Select
                    {...args}
                    onChange={(e) =>
                        setSelectedOptions(Array.from(e.target.selectedOptions))
                    }
                />
                <Title className="jkl-spacing-16--top" as="h3" size="xs">
                    Valgte verdier:
                </Title>
                <UnorderedList>
                    {selectedOptions.map((option) => (
                        <ListItem key={option.value}>{option.text}</ListItem>
                    ))}
                </UnorderedList>
            </>
        );
    },
};

export const ISkjema: Story = {
    name: "I skjema",
    tags: ["dev"],
    args: {},
    render: (args) => {
        const [output, setOutput] = useState("");
        return (
            <Flex
                direction="column"
                alignItems="start"
                gap="s"
                as="form"
                onSubmit={(event) => {
                    event.preventDefault();
                    setOutput(
                        `Innsendt verdi for "${args.name || "feltet"}":
                        ${new FormData(event.target as HTMLFormElement).getAll(
                            args.name || "",
                        )}`,
                    );
                }}
            >
                <Select {...args} onChange={() => setOutput("")} />
                <Button variant="primary">Send inn</Button>
                <output>
                    {output === ""
                        ? "Send inn skjemaet for å se verdien(e) til feltet."
                        : output}
                </output>
            </Flex>
        );
    },
};

export const InvalidStory: Story = {
    name: "Invalid Select",
    args: {
        required: true,
        errorLabel: "Du må velge minst ett merke",
    },
    tags: ["dev"],
};
