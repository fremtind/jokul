import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { DatePicker, formatInput, isCorrectFormat, isWithinUpperBound } from "@fremtind/jkl-datepicker-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { formatDate } from "@fremtind/jkl-formatters-util";
import { RadioButton, RadioButtonGroup } from "@fremtind/jkl-radio-button-react";
import { Select } from "@fremtind/jkl-select-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { BoolProp, ExampleComponentProps } from "../../../../doc-utils";

export const formComponentsExampleBoolProps: BoolProp[] = [
    { prop: "Radioknapper", defaultValue: true },
    { prop: "Tekstfelt", defaultValue: true },
    { prop: "Datovelgere", defaultValue: false },
    { prop: "Nedtrekksfelt", defaultValue: true },
    { prop: "Avmerkingsbokser", defaultValue: true },
];

type FormValues = {
    kjonn: undefined | string;
    fodselsdato: undefined | string;
    fodselsnummer: undefined | string;
    navn: undefined | string;
    stilling: undefined | string;
    klient: undefined | string[];
};

export const FormComponentsExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const radioButtonGroup = boolValues?.["Radioknapper"];
    const textInputs = boolValues?.["Tekstfelt"];
    const datePickers = boolValues?.["Datovelgere"];
    const checkboxes = boolValues?.["Avmerkingsbokser"];
    const select = boolValues?.["Nedtrekksfelt"];

    const { formState, handleSubmit, register, watch } = useForm<FormValues>();
    const formData = watch();
    console.table(formData);

    return (
        <form className="jkl-spacing-40--left" onSubmit={handleSubmit((valid) => console.table(valid))}>
            <p className="jkl-heading-4 jkl-spacing-16--bottom">Hvem er eier av forsikringen?</p>
            {radioButtonGroup && (
                <RadioButtonGroup
                    className="jkl-spacing-24--bottom"
                    labelProps={{ variant: "small" }}
                    legend="Kjønn"
                    errorLabel={formState.errors.kjonn?.message}
                >
                    <RadioButton
                        {...register("kjonn", { required: "Du må oppgi kjønn på eieren av forsikringen" })}
                        label="Kvinne"
                        value="kvinne"
                    />
                    <RadioButton
                        {...register("kjonn", { required: "Du må oppgi kjønn på eieren av forsikringen" })}
                        label="Mann"
                        value="mann"
                    />
                </RadioButtonGroup>
            )}
            {textInputs && (
                <>
                    <TextInput
                        {...register("fodselsnummer", {
                            required: "Du må fylle ut eierens fødselsnummer",
                            pattern: {
                                value: /^\d{11}$/,
                                message: "Fødselsnummeret må bestå av 11 siffer",
                            },
                        })}
                        className="jkl-spacing-24--bottom"
                        label="Fødselsnummer"
                        errorLabel={formState.errors.fodselsnummer?.message}
                    />
                    <TextInput
                        {...register("navn", { required: "Du må fylle ut eierens for- og etternavn" })}
                        className="jkl-spacing-24--bottom"
                        label="For- og etternavn"
                        errorLabel={formState.errors.navn?.message}
                    />
                </>
            )}
            {datePickers && (
                <DatePicker
                    className="jkl-spacing-24--bottom"
                    disableAfterDate={formatInput(new Date())}
                    errorLabel={formState.errors.fodselsdato?.message}
                    label="Fødselsdato"
                    {...register("fodselsdato", {
                        required: "Du må fylle ut fødselsdato",
                        validate: {
                            isCorrectFormat: (v) =>
                                isCorrectFormat(v) ||
                                `Datoen må være skrevet i formen ${formatDate(new Date())} eller kortformat`,
                            withinUpperBound: (v) =>
                                isWithinUpperBound(v, new Date()) || `Datoen må være før ${formatDate(new Date())}`,
                        },
                    })}
                />
            )}
            {select && (
                <Select
                    {...register("stilling", { required: "Du må oppgi eierens stilling" })}
                    className="jkl-spacing-40--bottom"
                    errorLabel={formState.errors.stilling?.message}
                    items={["Designer", "Utvikler", "Tester", "Leder", "Annet"]}
                    label="Stilling"
                    width="14rem"
                />
            )}
            {checkboxes && (
                <FieldGroup
                    legend="Er klient"
                    labelProps={{ variant: "small" }}
                    errorLabel={formState.errors.klient?.message}
                >
                    <Checkbox {...register("klient")} value="ja">
                        Ja
                    </Checkbox>
                </FieldGroup>
            )}
        </form>
    );
};
