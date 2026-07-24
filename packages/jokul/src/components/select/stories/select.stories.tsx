import type { Meta, StoryObj } from "@storybook/nextjs";
import { type ChangeEvent, useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { landkoder } from "../../../../../../storybook-public/data/landkoder.js";
import * as catImage from "../../../../../../storybook-public/images/cat.jpg";
import * as cowImage from "../../../../../../storybook-public/images/cow.jpg";
import * as dogImage from "../../../../../../storybook-public/images/dog.jpg";
import * as guineaPigImage from "../../../../../../storybook-public/images/guinea.jpg";
import * as horseImage from "../../../../../../storybook-public/images/horse.jpg";
import { getValuePair, type ValuePair } from "../../../utilities/valuePair.js";
import { Button } from "../../button/Button.js";
import { Flex } from "../../flex/Flex.js";
import { Text } from "../../typography/index.js";
import { Select } from "../Select.js";
import "../styles/_index.scss";

const telefonprodusenter = [
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
    { value: "google", label: "Google" },
    { value: "oneplus", label: "OnePlus" },
    { value: "nothing", label: "Nothing" },
    { value: "nokia", label: "Nokia" },
    { value: "annet", label: "Annet" },
];

const dyr = [
    {
        value: "hund",
        label: "Hund",
        description: "Trofast og glad",
        media: <img src={dogImage.default} alt="" width="50" height="50" />,
    },
    {
        value: "katt",
        label: "Katt",
        description: "Selvstendig og nysgjerrig",
        media: <img src={catImage.default} alt="" width="50" height="50" />,
    },
    {
        value: "marsvin",
        label: "Marsvin",
        description: "Vennlig og sjenert",
        media: (
            <img src={guineaPigImage.default} alt="" width="50" height="50" />
        ),
    },
    {
        value: "hest",
        label: "Hest",
        description: "Kraftig og intelligent",
        media: <img src={horseImage.default} alt="" width="50" height="50" />,
    },
    {
        value: "ku",
        label: "Ku",
        description: "Stø og rolig",
        media: <img src={cowImage.default} alt="" width="50" height="50" />,
    },
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
        items: {
            table: {
                disable: true,
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
        items: telefonprodusenter,
        onChange: logSelectedValues,
    },
    tags: ["autodocs", "forms"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
    name: "Select",
};

export const ManyOptions: Story = {
    name: "Select med mange valg",
    args: {
        label: "Hvilket land skjedde skaden i?",
        placeholder: "Velg land",
        description: undefined,
        items: landkoder.map(({ navn, kode }) => ({
            label: navn,
            value: kode,
        })),
    },
};

export const CustomFilter: Story = {
    name: "Egendefinert filterfunksjon",
    args: {
        label: "Hvilket land skjedde skaden i?",
        placeholder: "Velg land",
        description: "Søker i både navn og landkode",
        items: landkoder.map(({ navn, kode }) => ({
            label: navn,
            value: kode,
        })),
        searchable: true,
        filterFunction: (item, filter) =>
            item.label.toLowerCase().includes(filter.toLowerCase()) ||
            item.value.toLowerCase().includes(filter.toLowerCase()),
    },
};

export const Controlled: Story = {
    name: "Kontrollert Select",
    render: (args) => {
        const [value, setValue] = useState<string>("samsung");

        return (
            <>
                <label>
                    <Text>
                        Sett <code>value</code> for kontrollert Select:
                    </Text>
                    <select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <option value="" />
                        {args.items.map((item) => {
                            const { value } = getValuePair(item);
                            return (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            );
                        })}
                    </select>
                </label>
                <Select
                    {...args}
                    multiple={false}
                    value={value}
                    onChange={(e) => {
                        args.onChange?.(e);
                        setValue(e.target.value);
                    }}
                    className="jkl-spacing-24--top"
                />
            </>
        );
    },
};

export const Multiple: Story = {
    name: "Select multiple",
    args: {
        name: "multiselect",
        id: "min-select",
        label: "Hvilke dyr liker du?",
        description: "Velg så mange du vil fra listen",
        placeholder: undefined,
        multiple: true,
        items: dyr,
    },
};

export const ISkjema: Story = {
    name: "I skjema",
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

export const ReactHookForm: Story = {
    name: "Bruk med react-hook-form",
    render: (args) => {
        type Form = {
            telefonmerke: string;
            dyr: string[];
        };
        const { register, handleSubmit, formState } = useForm<Form>();
        const [data, setData] = useState<Form | undefined>(undefined);
        const logData: SubmitHandler<Form> = (data) => setData(data);

        return (
            <Flex
                direction="column"
                alignItems="start"
                gap="s"
                as="form"
                onSubmit={handleSubmit(logData)}
            >
                <Select
                    {...args}
                    {...register("telefonmerke", {
                        required: "Du må velge merke",
                    })}
                    errorLabel={formState.errors.telefonmerke?.message}
                />
                <Select
                    label="Hvilke dyr liker du?"
                    description="Velg minst 2"
                    multiple
                    items={dyr}
                    {...register("dyr", {
                        validate: (values) =>
                            values.length < 2 ? "Velg minst to dyr" : undefined,
                    })}
                    errorLabel={formState.errors.dyr?.message}
                />
                <Button variant="primary">Send inn</Button>
                <output>
                    <Text>
                        <strong>telefonmerke</strong>: {data?.telefonmerke}
                    </Text>
                    <Text>
                        <strong>dyr</strong>: [{data?.dyr.join(", ")}]
                    </Text>
                </output>
            </Flex>
        );
    },
};

export const SlowLoad: Story = {
    name: "Utsatt innlasting av valg",
    args: {
        placeholder: undefined,
        name: "land",
        label: "Hvilket land skjedde skaden i?",
        description: "Valgene hentes etter 3 sekunder",
    },
    render: (args) => {
        const [items, setItems] = useState<ValuePair[]>([]);

        useEffect(() => {
            const timeout = setTimeout(() => setItems(landkoder.map(({ navn, kode }) => ({
                label: navn,
                value: kode,
            }))), 3000);

            return () => {
                clearTimeout(timeout);
            }
        }, [])

        return (
            <Select
                {...args}
                items={items}
            />
        )
    }
}

export const AsyncSearch: Story = {
    name: "Asynkront søk",
    args: {
        label: "Hvilket land skjedde skaden i?",
        placeholder: "Søk etter land",
        description: "Søkeresultater hentes asynkront",
    },
    render: (args) => {
        const allItems = landkoder.map(({ navn, kode }) => ({
            label: navn,
            value: kode,
        }));

        const [items, setItems] = useState<ValuePair[]>([]);

        const handleSearch = (searchTerm: string) => {
            if (!searchTerm) {
                setItems([]);
                return;
            }
            setTimeout(() => {
                const filtered = allItems.filter((item) =>
                    item.label
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                );
                setItems(filtered);
            }, 300);
        };

        return (
            <Flex direction="column" gap="16">
            <Select
                {...args}
                items={items}
                searchable
                onSearch={handleSearch}
                />
                <Text>Vurder heller å bruke <code>Search</code>-komponenten enn å søke asynkront i <code>Select</code></Text>
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
