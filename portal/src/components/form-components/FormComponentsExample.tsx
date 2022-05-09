import React, { VFC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "@forbrukerradet/jkl-checkbox-react";
import { DatePicker } from "@forbrukerradet/jkl-datepicker-react";
import { FieldGroup } from "@forbrukerradet/jkl-field-group-react";
import { RadioButton, RadioButtonGroup } from "@forbrukerradet/jkl-radio-button-react";
import { Select } from "@forbrukerradet/jkl-select-react";
import { TextInput } from "@forbrukerradet/jkl-text-input-react";
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

export const FormComponentsExample: VFC<ExampleComponentProps> = ({ boolValues }) => {
    const radioButtonGroup = boolValues?.["Radioknapper"];
    const textInputs = boolValues?.["Tekstfelt"];
    const datePickers = boolValues?.["Datovelgere"];
    const checkboxes = boolValues?.["Avmerkingsbokser"];
    const select = boolValues?.["Nedtrekksfelt"];

    const { control, formState, handleSubmit, register, watch } = useForm<FormValues>();
    const formData = watch();
    console.table(formData);

    return (
        <form className="jkl-spacing-xl--left" onSubmit={handleSubmit((valid) => console.table(valid))}>
            <p className="jkl-heading-4 jkl-spacing-m--bottom">Hvem er eier av forsikringen?</p>
            {radioButtonGroup && (
                <RadioButtonGroup
                    className="jkl-spacing-l--bottom"
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
                        className="jkl-spacing-l--bottom"
                        label="Fødselsnummer"
                        errorLabel={formState.errors.fodselsnummer?.message}
                    />
                    <TextInput
                        {...register("navn", { required: "Du må fylle ut eierens for- og etternavn" })}
                        className="jkl-spacing-l--bottom"
                        label="For- og etternavn"
                        errorLabel={formState.errors.navn?.message}
                    />
                </>
            )}
            {datePickers && (
                <Controller
                    control={control}
                    name="fodselsdato"
                    rules={{ required: "Du må fylle ut eierens fødselsdato" }}
                    render={({ field }) => (
                        <DatePicker
                            className="jkl-spacing-l--bottom"
                            disableAfterDate={new Date()}
                            errorLabel={formState.errors.fodselsdato?.message}
                            label="Fødselsdato"
                            {...field}
                            value={field.value ? new Date(field.value) : undefined}
                        />
                    )}
                />
            )}
            {select && (
                <Select
                    {...register("stilling", { required: "Du må oppgi eierens stilling" })}
                    className="jkl-spacing-xl--bottom"
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
                    errorLabel={formState.errors.klient?.map((field) => field.message).join(", ")}
                >
                    <Checkbox {...register("klient")} value="ja">
                        Ja
                    </Checkbox>
                </FieldGroup>
            )}
        </form>
    );
};
