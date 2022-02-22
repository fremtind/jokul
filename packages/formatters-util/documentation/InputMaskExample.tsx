import React, { Fragment, useState, VFC } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../packages/button-react/src";
import { TextInput } from "../../../packages/text-input-react/src";
import { DescriptionList, DescriptionTerm, DescriptionDetail } from "../../../packages/description-list-react/src";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";

import "./input-mask-example.scss";
import {
    registerWithFodselsnummerMask,
    registerWithKontonummerMask,
    registerWithKortnummerMask,
    registerWithTelefonnummerMask,
} from "../src";

interface Skjema {
    telefonnummer: string;
    fodselsnummer: string;
    kortnummer: string;
    kontonummer: string;
}

export const InputMaskExample: VFC<ExampleComponentProps> = () => {
    const form = useForm<Skjema>();
    const [formData, setFormData] = useState<Skjema>();

    return (
        <>
            <form className="input-mask-example-form" onSubmit={form.handleSubmit(setFormData)}>
                <TextInput
                    label="Telefonnummer"
                    // Husk å gi plass til mellomrommene som settes inn!
                    maxLength={11}
                    {...registerWithTelefonnummerMask(form, "telefonnummer", {
                        required: "Du må fylle inn telefonnummeret ditt",
                    })}
                    errorLabel={form.formState.errors.telefonnummer?.message}
                />
                <TextInput
                    label="Fødselsnummer"
                    maxLength={12}
                    {...registerWithFodselsnummerMask(form, "fodselsnummer")}
                />
                <TextInput label="Kortnummer" maxLength={19} {...registerWithKortnummerMask(form, "kortnummer")} />
                <TextInput label="Kontonummer" maxLength={13} {...registerWithKontonummerMask(form, "kontonummer")} />
                <PrimaryButton type="submit">Send inn</PrimaryButton>
                {formData && (
                    <>
                        <p className="jkl-heading-1 jkl-spacing-2xl--top">Innsendt data:</p>
                        <DescriptionList className="jkl-body">
                            {Object.entries(formData).map(([field, value]) => (
                                <Fragment key={field}>
                                    <DescriptionTerm>{field}:</DescriptionTerm>
                                    <DescriptionDetail>{value}</DescriptionDetail>
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
import {
    registerWithFodselsnummerMask,
    registerWithKontonummerMask,
    registerWithKortnummerMask,
    registerWithTelefonnummerMask,
} from "@fremtind/jkl-formatters-util";

const form = useForm<Skjema>();
const [formData, setFormData] = useState<Skjema>();

return (
    <>
        <form className="input-mask-example-form" onSubmit={form.handleSubmit(setFormData)}>
            <TextInput
                label="Telefonnummer"
                // Husk å gi plass til mellomrommene som settes inn!
                maxLength={11}
                {...registerWithTelefonnummerMask(form, "telefonnummer", {
                    required: "Du må fylle inn telefonnummeret ditt",
                })}
                errorLabel={form.formState.errors.telefonnummer?.message}
            />
            <TextInput
                label="Fødselsnummer"
                maxLength={12}
                {...registerWithFodselsnummerMask(form, "fodselsnummer")}
            />
            <TextInput label="Kortnummer" maxLength={19} {...registerWithKortnummerMask(form, "kortnummer")} />
            <TextInput label="Kontonummer" maxLength={13} {...registerWithKontonummerMask(form, "kontonummer")} />
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
