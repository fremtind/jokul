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
    const { register, handleSubmit, formState } = useForm();

    const handleChange = () => {
        setShowNext(true);
        onSubmit(false);
    };

    const submit = () => {
        setShowNext(false);
        onSubmit(true);
    };

    const fornavnInput = register("fornavn", { required: true });
    const etternavnInput = register("etternavn", { required: true });
    const personnummerInput = register("personnummer", {
        required: true,
        maxLength: 11,
        minLength: 11,
        pattern: /^[0-9]*$/,
    });

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Label standAlone variant="large" className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}>
                Første steg
            </Label>
            <TextInput
                className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                label="Fornavn"
                errorLabel={formState.errors.fornavn ? "Du må fylle inn fornavn" : ""}
                inverted={darkMode}
                forceCompact={isCompact}
                {...fornavnInput}
                onChange={(e) => {
                    fornavnInput.onChange(e);
                    handleChange();
                }}
                variant="small"
            />
            <TextInput
                className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                label="Etternavn"
                errorLabel={formState.errors.etternavn ? "Du må fylle inn etternavn" : ""}
                inverted={darkMode}
                forceCompact={isCompact}
                {...etternavnInput}
                onChange={(e) => {
                    etternavnInput.onChange(e);
                    handleChange();
                }}
                variant="small"
            />
            <TextInput
                className={isCompact ? "jkl-spacing--bottom-1" : "jkl-spacing--bottom-2"}
                label="Personnummer"
                errorLabel={formState.errors.personnummer ? "Du må fylle inn personnummer" : ""}
                helpLabel="Vi lagrer ikke ditt personnummer"
                inverted={darkMode}
                forceCompact={isCompact}
                maxLength={11}
                type="tel"
                placeholder="11 siffer"
                {...personnummerInput}
                onChange={(e) => {
                    personnummerInput.onChange(e);
                    handleChange();
                }}
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
