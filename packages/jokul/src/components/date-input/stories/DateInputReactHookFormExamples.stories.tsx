import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import {
    DateInput,
    toNorwegianDateFormat,
    toValidInputValue,
} from "../index.js";
import "../styles/_index.scss";
import { fn } from "storybook/test";
import { FieldGroup } from "../../input-group/index.js";

const meta = {
    title: "Komponenter/Date Input/React Hook Form",
    component: DateInput,
    args: {
        label: "Når skal du reise?",
        name: "hei",
        labelProps: {
            srOnly: false,
        },
        onChange: fn(),
    },
    tags: ["forms", "!autodocs", "react-hook-form"],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MedRegister: Story = {
    name: "Med register",
    render: () => {
        const { register, handleSubmit, reset } = useForm<{ dato: string }>({
            defaultValues: { dato: "" },
        });
        const [sendt, setSendt] = useState<string>();

        return (
            <form onSubmit={handleSubmit((data) => setSendt(data.dato))}>
                <Flex direction="column" gap="m" alignItems="start">
                    <DateInput label="Startdato" {...register("dato")} />
                    <Flex gap="s">
                        <Button type="submit">Lagre</Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                reset({ dato: "" });
                                setSendt(undefined);
                            }}
                        >
                            Nullstill
                        </Button>
                    </Flex>
                    {sendt !== undefined && (
                        <p>Sendt inn: {sendt || "(tom)"}</p>
                    )}
                </Flex>
            </form>
        );
    },
};

/**
 * Valg av startdato i en kjøpsflyt. Følger kjøpsflyt-mønsteret med `FieldGroup`-spørsmål
 * og «Fortsett»-knapp. En ny avtale kan tidligst starte i dag, så `min` gråer ut datoer
 * bakover i kalenderen, og en valideringsregel fanger opp manuell inntasting.
 */
export const StartdatoIKjøpsflyt: Story = {
    name: "Startdato i kjøpsflyt",
    render: () => {
        const iDag = toValidInputValue(new Date());
        const { control, handleSubmit } = useForm<{ startdato: string }>({
            defaultValues: { startdato: "" },
        });
        const [bekreftet, setBekreftet] = useState<string>();

        return (
            <form
                onSubmit={handleSubmit((data) => setBekreftet(data.startdato))}
            >
                <Flex direction="column" gap="l" alignItems="center">
                    <Controller
                        name="startdato"
                        control={control}
                        rules={{
                            required: "Du må velge en startdato",
                            validate: (verdi) =>
                                verdi >= iDag ||
                                "Avtalen kan tidligst starte i dag",
                        }}
                        render={({ field, fieldState }) => (
                            <FieldGroup
                                legend="Når skal forsikringen starte?"
                                description="Avtalen kan tidligst starte i dag."
                            >
                                <DateInput
                                    label="Startdato"
                                    labelProps={{ srOnly: true }}
                                    min={iDag}
                                    value={field.value}
                                    name={field.name}
                                    ref={field.ref}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    errorLabel={fieldState.error?.message}
                                />
                            </FieldGroup>
                        )}
                    />
                    <Button type="submit" variant="primary">
                        Fortsett
                    </Button>
                    {bekreftet !== undefined && (
                        <p>
                            Forsikringen starter:{" "}
                            {bekreftet
                                ? toNorwegianDateFormat(bekreftet)
                                : "(ingen dato valgt)"}
                        </p>
                    )}
                </Flex>
            </form>
        );
    },
};

export const Fødselsdato: Story = {
    render: () => {
        const nå = new Date();
        const eldsteDato = toValidInputValue(
            new Date(nå.getFullYear() - 120, nå.getMonth(), nå.getDate()),
        );
        const yngsteDato = toValidInputValue(
            new Date(nå.getFullYear() - 18, nå.getMonth(), nå.getDate()),
        );

        const { control, handleSubmit } = useForm<{ fodselsdato: string }>({
            defaultValues: { fodselsdato: yngsteDato },
        });
        const [bekreftet, setBekreftet] = useState<string>();

        return (
            <form
                onSubmit={handleSubmit((data) =>
                    setBekreftet(data.fodselsdato),
                )}
            >
                <Flex direction="column" gap="l" alignItems="center">
                    <Controller
                        name="fodselsdato"
                        control={control}
                        rules={{
                            required: "Du må fylle inn fødselsdatoen din",
                            validate: (verdi) =>
                                verdi <= yngsteDato || "Du må være minst 18 år",
                        }}
                        render={({ field, fieldState }) => (
                            <FieldGroup legend="Hva er fødselsdatoen din?">
                                <DateInput
                                    label="Fødselsdato"
                                    labelProps={{ srOnly: true }}
                                    min={eldsteDato}
                                    max={yngsteDato}
                                    value={field.value}
                                    name={field.name}
                                    ref={field.ref}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    errorLabel={fieldState.error?.message}
                                />
                            </FieldGroup>
                        )}
                    />

                    <Button type="submit" variant="primary">
                        Fortsett
                    </Button>

                    {bekreftet !== undefined && (
                        <p>
                            Fødselsdato:{" "}
                            {bekreftet
                                ? toNorwegianDateFormat(bekreftet)
                                : "(ingen dato valgt)"}
                        </p>
                    )}
                </Flex>
            </form>
        );
    },
};
