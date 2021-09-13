import React, { ReactNode, useEffect, useRef, useState } from "react";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { isValidEpost, isValidTelefonnummer } from "@fremtind/jkl-validators-util";
import { useFeedbackContext } from "../feedbackContext";

const validateEmail = (email?: string) => {
    if (!email || email === "") {
        return "Du må oppgi e-postadresse for at vi kan kontakte deg";
    }
    if (!isValidEpost(email)) {
        return "Skriv inn en gyldig e-postadresse";
    }
    return;
};

const validatePhone = (phone?: string) => {
    if (!phone || phone === "") {
        return "Du må oppgi telefonnummer for at vi kan kontakte deg";
    }
    if (!isValidTelefonnummer(phone)) {
        return "Skriv inn et gyldig telefonnummer";
    }
    return;
};

interface Props {
    label?: string;
    sendButtonLabel?: string;
    withPhone?: boolean;
    children?: ReactNode;
    onSubmit: (values: { email: string; phone?: string }) => void;
}

export const ContactQuestion = ({
    label = "Kan vi kontakte deg for flere innspill?",
    sendButtonLabel = "Sett meg på lista!",
    withPhone = false,
    onSubmit,
    children,
}: Props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [shouldValidate, setShouldValidate] = useState(false);

    const [noThanks, setNoThanks] = useState(false);
    const { contactSubmitted, setContactSubmitted } = useFeedbackContext();

    const ChildrenWrapper = typeof children === "string" ? "p" : "div";

    const validate = (email: string, phone: string) => {
        const emailError = validateEmail(email);
        const phoneError = validatePhone(phone);
        setErrors({ email: emailError, phone: phoneError });
        return { emailError, phoneError };
    };

    useEffect(() => {
        if (shouldValidate) {
            const { emailError, phoneError } = validate(email, phone);

            if (!emailError && (!withPhone || !phoneError)) {
                setShouldValidate(false);
            }
        }
    }, [email, phone, shouldValidate, withPhone]);

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();

        const { emailError, phoneError } = validate(email, phone);
        if (emailError) {
            setShouldValidate(true);
            emailRef.current?.focus();
            return;
        }
        if (withPhone && phoneError) {
            setShouldValidate(true);
            phoneRef.current?.focus();
            return;
        }

        onSubmit({ email, phone: withPhone ? phone : undefined });
        setContactSubmitted(true);
    };

    if (noThanks || contactSubmitted) {
        return null;
    }

    return (
        <form className="jkl-layout-spacing--medium-top" onSubmit={handleSubmit} aria-live="off">
            <p className="jkl-heading-4 jkl-component-spacing--small-bottom">{label}</p>
            {children && <ChildrenWrapper className="jkl-body">{children}</ChildrenWrapper>}

            <TextInput
                ref={emailRef}
                className="jkl-layout-spacing--small-top"
                variant="small"
                label="E-post"
                autoComplete="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorLabel={errors.email}
            />
            {withPhone && (
                <TextInput
                    ref={phoneRef}
                    className="jkl-layout-spacing--small-top"
                    variant="small"
                    label="Telefonnummer"
                    autoComplete="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    errorLabel={errors.phone}
                />
            )}

            <div className="jkl-layout-spacing--medium-top">
                <PrimaryButton type="submit" className="jkl-layout-spacing--medium-right">
                    {sendButtonLabel}
                </PrimaryButton>
                <TertiaryButton onClick={() => setNoThanks(true)}>Nei takk</TertiaryButton>
            </div>
        </form>
    );
};
