import type { Meta, StoryObj } from "@storybook/nextjs";
import { useForm } from "react-hook-form";
import { fn } from "storybook/test";
import { Button } from "../../../components/button/index.js";
import { Flex } from "../../../components/flex/index.js";
import { TextInput } from "../../../components/text-input/index.js";
import { registerWithMasks } from "../util/registerWithMask.js";

const meta = {
    title: "Utilities/Masker/Options",
    component: TextInput,
    tags: ["forms", "!autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OptionRequired: Story = {
    name: "Required",
    render: (args) => {
        const form = useForm<{ kontonummer: string }>();
        const { registerWithKontonummerMask } = registerWithMasks(form);

        return (
            <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{ maxWidth: "24rem" }}>
                    <TextInput
                        {...args}
                        {...registerWithKontonummerMask("kontonummer", {
                            required: "Du må oppgi et kontonummer",
                        })}
                        errorLabel={form.formState.errors.kontonummer?.message}
                    />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>
        );
    },
    args: {
        label: "Kontonummer",
        maxLength: 13,
        inputMode: "numeric",
        placeholder: "0000 00 00000",
    },
};

export const OptionMinLength: Story = {
    name: "Min Length",
    render: (args) => {
        const form = useForm<{ fodselsnummer: string }>();
        const { registerWithFodselsnummerMask } = registerWithMasks(form);

        return (
            <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{ maxWidth: "24rem" }}>
                    <TextInput
                        {...args}
                        {...registerWithFodselsnummerMask("fodselsnummer", {
                            minLength: {
                                value: 11,
                                message: "Fødselsnummer må ha 11 siffer",
                            },
                        })}
                        errorLabel={
                            form.formState.errors.fodselsnummer?.message
                        }
                    />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>
        );
    },
    args: {
        label: "Fødselsnummer",
        maxLength: 12,
        inputMode: "numeric",
        placeholder: "000000 00000",
    },
};

export const OptionMaxLength: Story = {
    name: "Max Length",
    render: (args) => {
        const form = useForm<{ organisasjonsnummer: string }>();
        const { registerWithOrganisasjonsnummerMask } = registerWithMasks(form);

        return (
            <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{ maxWidth: "24rem" }}>
                    <TextInput
                        {...args}
                        {...registerWithOrganisasjonsnummerMask(
                            "organisasjonsnummer",
                            {
                                maxLength: {
                                    value: 9,
                                    message:
                                        "Organisasjonsnummer har maks 9 siffer",
                                },
                            },
                        )}
                        errorLabel={
                            form.formState.errors.organisasjonsnummer?.message
                        }
                    />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>
        );
    },
    args: {
        label: "Organisasjonsnummer",
        maxLength: 11,
        inputMode: "numeric",
        placeholder: "000 000 000",
    },
};

export const OptionPattern: Story = {
    name: "Pattern",
    render: (args) => {
        const form = useForm<{ fodselsnummer: string }>();
        const { registerWithFodselsnummerMask } = registerWithMasks(form);

        return (
            <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{ maxWidth: "24rem" }}>
                    <TextInput
                        {...args}
                        {...registerWithFodselsnummerMask("fodselsnummer", {
                            pattern: {
                                value: /^\d{11}$/,
                                message:
                                    "Fødselsnummer må være nøyaktig 11 siffer",
                            },
                        })}
                        errorLabel={
                            form.formState.errors.fodselsnummer?.message
                        }
                    />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>
        );
    },
    args: {
        label: "Fødselsnummer",
        maxLength: 12,
        inputMode: "numeric",
        placeholder: "000000 00000",
    },
};

export const OptionValidate: Story = {
    name: "Validate",
    render: (args) => {
        const form = useForm<{ mobilnummer: string }>();
        const { registerWithTelefonnummerMask } = registerWithMasks(form);

        return (
            <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{ maxWidth: "24rem" }}>
                    <TextInput
                        {...args}
                        {...registerWithTelefonnummerMask("mobilnummer", {
                            validate: (value) =>
                                /^(4|9)/.test(value.replace(/\s/g, "")) ||
                                "Oppgi et norsk mobilnummer",
                        })}
                        errorLabel={form.formState.errors.mobilnummer?.message}
                    />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>
        );
    },
    args: {
        label: "Mobilnummer",
        maxLength: 11,
        inputMode: "tel",
        placeholder: "000 00 000",
    },
};

export const OptionDisabled: Story = {
    name: "Disabled",
    render: (args) => {
        const form = useForm<{ kontonummer: string }>();
        const { registerWithKontonummerMask } = registerWithMasks(form);

        return (
            <TextInput
                {...args}
                {...registerWithKontonummerMask("kontonummer", {
                    disabled: true,
                })}
            />
        );
    },
    args: {
        label: "Kontonummer",
        defaultValue: "1234 56 78903",
        maxLength: 13,
    },
};

export const OptionOnChange: Story = {
    name: "onChange",
    parameters: {
        docs: {
            description: {
                story: "Egen onChange-callback kjøres i tillegg til maskeringen. Se «Actions»-panelet.",
            },
        },
    },
    render: (args) => {
        const form = useForm<{ kortnummer: string }>();
        const { registerWithKortnummerMask } = registerWithMasks(form);

        return (
            <TextInput
                {...args}
                {...registerWithKortnummerMask("kortnummer", {
                    onChange: fn(),
                })}
            />
        );
    },
    args: {
        label: "Kortnummer",
        maxLength: 19,
        inputMode: "numeric",
        placeholder: "0000 0000 0000 0000",
    },
};
