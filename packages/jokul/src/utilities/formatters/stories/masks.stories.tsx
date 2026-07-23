import type { Meta, StoryObj } from "@storybook/nextjs";
import { useForm } from "react-hook-form";
import { TextInput } from "../../../components/text-input/index.js";
import { registerWithMasks } from "../util/registerWithMask.js";

const meta = {
    title: "Utilities/Masker",
    component: TextInput,
    tags: ["forms", "!autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fodselsnummer: Story = {
    name: "Fødselsnummer",
    render: (args) => {
        const form = useForm<{ fodselsnummer: string }>();
        const { registerWithFodselsnummerMask } = registerWithMasks(form);

        return (
            <TextInput
                {...args}
                {...registerWithFodselsnummerMask("fodselsnummer")}
            />
        );
    },
    args: {
        label: "Fødselsnummer",
        description: "11 siffer",
        maxLength: 12,
        inputMode: "numeric",
        autoComplete: "off",
        placeholder: "000000 00000",
    },
};

export const Kortnummer: Story = {
    name: "Kortnummer",
    render: (args) => {
        const form = useForm<{ kortnummer: string }>();
        const { registerWithKortnummerMask } = registerWithMasks(form);

        return (
            <TextInput
                {...args}
                {...registerWithKortnummerMask("kortnummer")}
            />
        );
    },
    args: {
        label: "Kortnummer",
        maxLength: 19,
        inputMode: "numeric",
        autoComplete: "cc-number",
        placeholder: "0000 0000 0000 0000",
    },
};

export const Kontonummer: Story = {
    name: "Kontonummer",
    render: (args) => {
        const form = useForm<{ kontonummer: string }>();
        const { registerWithKontonummerMask } = registerWithMasks(form);

        return (
            <TextInput
                {...args}
                {...registerWithKontonummerMask("kontonummer")}
            />
        );
    },
    args: {
        label: "Kontonummer for utbetaling",
        description: "Hit betaler vi ut skadeoppgjøret",
        maxLength: 13,
        inputMode: "numeric",
        placeholder: "0000 00 00000",
    },
};

export const Telefonnummer: Story = {
    name: "Telefonnummer",
    render: (args) => {
        const form = useForm<{ telefonnummer: string }>();
        const { registerWithTelefonnummerMask } = registerWithMasks(form);

        return (
            <TextInput
                {...args}
                {...registerWithTelefonnummerMask("telefonnummer")}
            />
        );
    },
    args: {
        label: "Telefonnummer",
        maxLength: 11,
        inputMode: "tel",
        autoComplete: "tel",
        placeholder: "000 00 000",
    },
};

export const Organisasjonsnummer: Story = {
    name: "Organisasjonsnummer",
    render: (args) => {
        const form = useForm<{ organisasjonsnummer: string }>();
        const { registerWithOrganisasjonsnummerMask } = registerWithMasks(form);

        return (
            <TextInput
                {...args}
                {...registerWithOrganisasjonsnummerMask("organisasjonsnummer")}
            />
        );
    },
    args: {
        label: "Organisasjonsnummer",
        description: "For bedriftskunder",
        maxLength: 11,
        inputMode: "numeric",
        placeholder: "000 000 000",
    },
};

export const Dato: Story = {
    name: "Dato",
    render: (args) => {
        const form = useForm<{ skadedato: string }>();
        const { registerWithDateMask } = registerWithMasks(form);

        return <TextInput {...args} {...registerWithDateMask("skadedato")} />;
    },
    args: {
        label: "Skadedato",
        maxLength: 10,
        inputMode: "numeric",
        placeholder: "dd.mm.åååå",
    },
};

export const Tall: Story = {
    name: "Tall",
    render: (args) => {
        const form = useForm<{ sum: string }>();
        const { registerWithNumber } = registerWithMasks(form);

        return <TextInput {...args} {...registerWithNumber("sum")} />;
    },
    args: {
        label: "Forsikringssum",
        maxLength: 12,
        inputMode: "numeric",
        unit: "kr",
        placeholder: "0",
    },
};
