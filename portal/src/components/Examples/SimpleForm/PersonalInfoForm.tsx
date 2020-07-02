import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { ExampleContext } from "@fremtind/jkl-portal-components";
import { Label } from "@fremtind/jkl-core";

interface Props {
    onSubmit: (arg0: boolean) => void;
}

const PersonalInfoForm: React.FC<Props> = ({ onSubmit }) => {
    const [showNext, setShowNext] = useState(true);
    const { darkMode, isCompact } = useContext(ExampleContext);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = () => {
        setShowNext(true);
        onSubmit(false);
    };
    const submit = () => {
        setShowNext(false);
        onSubmit(true);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Label standAlone variant="large" className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}>
                Første steg
            </Label>
            <TextInput
                name="fornavn"
                className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                label="Fornavn"
                errorLabel={errors.fornavn ? "Du må fylle inn fornavn" : ""}
                inverted={darkMode}
                forceCompact={isCompact}
                ref={register({ required: true })}
                onChange={handleChange}
                variant="small"
            />
            <TextInput
                name="etternavn"
                className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                label="Etternavn"
                errorLabel={errors.etternavn ? "Du må fylle inn etternavn" : ""}
                inverted={darkMode}
                forceCompact={isCompact}
                ref={register({ required: true })}
                onChange={handleChange}
                variant="small"
            />
            <TextInput
                name="personnummer"
                className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                label="Personnummer"
                errorLabel={errors.personnummer ? "Du må fylle inn personnummer" : ""}
                helpLabel="Vi lagrer ikke ditt personnummer"
                inverted={darkMode}
                forceCompact={isCompact}
                maxLength={11}
                type="tel"
                placeholder="11 siffer"
                ref={register({ required: true, maxLength: 11, minLength: 11, pattern: /^[0-9]*$/ })}
                onChange={handleChange}
                variant="small"
            />
            {showNext && (
                <PrimaryButton
                    forceCompact={isCompact}
                    inverted={darkMode}
                    className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                >
                    Gå videre
                </PrimaryButton>
            )}
        </form>
    );
};

export default PersonalInfoForm;
