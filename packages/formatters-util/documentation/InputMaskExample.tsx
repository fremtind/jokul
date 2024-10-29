import React, { FC, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { PrimaryButton } from "../../../packages/button-react/src";
import { DatePicker } from "../../../packages/datepicker-react/src";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "../../../packages/description-list-react/src";
import { TextInput } from "../../../packages/text-input-react/src";
import { registerWithMasks } from "../src";
import "./input-mask-example.scss";

interface Skjema {
    dato: string;
    datepicker: string;
    telefonnr: string;
    fodselsnr: string;
    kortnr: string;
    kontonr: string;
    tall: number;
    orgnr: string;
}

export const InputMaskExample: FC<ExampleComponentProps> = () => {
    const form = useForm<Skjema>();
    const [formData, setFormData] = useState<Skjema>();

    const {
        registerWithDateMask,
        registerWithFodselsnummerMask,
        registerWithKontonummerMask,
        registerWithKortnummerMask,
        registerWithTelefonnummerMask,
        registerWithOrganisasjonsnummerMask,
        registerWithNumber,
    } = registerWithMasks(form);

    return (
        <>
            <form
                className="input-mask-example-form"
                onSubmit={form.handleSubmit(setFormData)}
            >
                <TextInput
                    label="Dato"
                    maxLength={10}
                    {...registerWithDateMask("dato")}
                />
                <DatePicker
                    label="Dato brukt i datovelger"
                    {...registerWithDateMask("datepicker")}
                />
                <TextInput
                    label="Telefonnummer"
                    // Husk å gi plass til mellomrommene som settes inn!
                    maxLength={11}
                    {...registerWithTelefonnummerMask("telefonnr", {
                        required: "Du må fylle inn telefonnummeret ditt",
                    })}
                    errorLabel={form.formState.errors.telefonnr?.message}
                />
                <TextInput
                    label="Fødselsnummer"
                    maxLength={12}
                    {...registerWithFodselsnummerMask("fodselsnr")}
                />
                <TextInput
                    label="Kortnummer"
                    maxLength={19}
                    {...registerWithKortnummerMask("kortnr")}
                />
                <TextInput
                    label="Kontonummer"
                    maxLength={13}
                    {...registerWithKontonummerMask("kontonr")}
                />
                <TextInput
                    label="Organisasjonsnummer"
                    maxLength={11}
                    {...registerWithOrganisasjonsnummerMask("orgnr")}
                />
                <TextInput label="Tall" {...registerWithNumber("tall")} />
                <PrimaryButton type="submit">Send inn</PrimaryButton>
                {formData && (
                    <>
                        <p className="jkl-heading-1 jkl-spacing-2xl--top">
                            Innsendt data:
                        </p>
                        <DescriptionList className="jkl-body">
                            {Object.entries(formData).map(([field, value]) => (
                                <Fragment key={field}>
                                    <DescriptionTerm>{field}:</DescriptionTerm>
                                    <DescriptionDetail>
                                        {value}
                                    </DescriptionDetail>
                                </Fragment>
                            ))}
                        </DescriptionList>
                    </>
                )}
            </form>
        </>
    );
};

export default InputMaskExample;

export const inputMaskExampleCode: CodeExample = `
import { registerWithMasks } from "@fremtind/jkl-formatters-util";
import { useForm } from "react-hook-form";

const form = useForm<Skjema>();
const [formData, setFormData] = useState<Skjema>();

const {
    registerWithFodselsnummerMask,
    registerWithKontonummerMask,
    registerWithKortnummerMask,
    registerWithTelefonnummerMask,
} = registerWithMasks(form);

return (
    <>
        <form className="input-mask-example-form" onSubmit={form.handleSubmit(setFormData)}>
            <TextInput
                label="Telefonnummer"
                // Husk å gi plass til mellomrommene som settes inn!
                maxLength={11}
                {...registerWithTelefonnummerMask("telefonnummer", {
                    required: "Du må fylle inn telefonnummeret ditt",
                })}
                errorLabel={form.formState.errors.telefonnummer?.message}
            />
            <TextInput
                label="Fødselsnummer"
                maxLength={12}
                {...registerWithFodselsnummerMask("fodselsnummer")}
            />
            <TextInput label="Kortnummer" maxLength={19} {...registerWithKortnummerMask("kortnummer")} />
            <TextInput label="Kontonummer" maxLength={13} {...registerWithKontonummerMask("kontonummer")} />
            <PrimaryButton type="submit">Send inn</PrimaryButton>
        </form>
        {formData && (
            <>
                <p className="jkl-heading-1 jkl-spacing-2xl--top">Innsendt data:</p>
                <DescriptionList className="jkl-body jkl-spacing-l--top">
                    {Object.entries(formData).map(([field, value]) => (
                        <>
                            <DescriptionTerm>{field}:</DescriptionTerm>
                            <DescriptionDetail>{value}</DescriptionDetail>
                        </>
                    ))}
                </DescriptionList>
            </>
        )}
    </>
);`;
