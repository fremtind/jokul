import React, {
    type ChangeEvent,
    type FC,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { isValidEpost } from "../../../utilities/validators/isValidEpost/isValidEpost.js";
import { isValidTelefonnummer } from "../../../utilities/validators/isValidTelefonnummer/isValidTelefonnummer.js";
import { PrimaryButton, TertiaryButton } from "../../button/Button.js";
import { TextInput } from "../../text-input/TextInput.js";
import { useFeedbackContext } from "../feedbackContext.js";
import { FeedbackSuccess } from "../FeedbackSuccess.js";
import type { ContactQuestionProps } from "../types.js";

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

const defaultSuccessMessage = {
    title: "Takk for tiden din!",
    children:
        "Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
};

export const ContactQuestion: FC<ContactQuestionProps> = ({
    label = "Kan vi kontakte deg for flere innspill?",
    sendButtonLabel = "Sett meg på lista!",
    withPhone = false,
    onSubmit,
    successMessage = defaultSuccessMessage,
    children,
}) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<{ email?: string; phone?: string }>(
        {},
    );
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [shouldValidate, setShouldValidate] = useState(false);

    const [noThanks, setNoThanks] = useState(false);
    const { contactSubmitted, setContactSubmitted, landmarkLabel } =
        useFeedbackContext();

    const ChildrenWrapper = typeof children === "string" ? "p" : "div";

    const validate = useCallback((email: string, phone: string) => {
        const emailError = validateEmail(email);
        const phoneError = validatePhone(phone);
        setErrors({ email: emailError, phone: phoneError });
        return { emailError, phoneError };
    }, []);

    useEffect(() => {
        if (shouldValidate) {
            const { emailError, phoneError } = validate(email, phone);

            if (!emailError && (!withPhone || !phoneError)) {
                setShouldValidate(false);
            }
        }
    }, [email, phone, shouldValidate, withPhone, validate]);

    const handleChange =
        (consumer: (value: string) => void) =>
        (e: ChangeEvent<HTMLInputElement>) =>
            consumer(e.target.value);

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

    if (noThanks) {
        return null;
    }

    if (contactSubmitted) {
        return <FeedbackSuccess {...successMessage} />;
    }

    return (
        <form
            className="jkl-spacing-xl--top"
            onSubmit={handleSubmit}
            aria-label={landmarkLabel}
        >
            <p className="jkl-heading-4 jkl-spacing-xs--bottom">{label}</p>
            {children && (
                <ChildrenWrapper className="jkl-body">
                    {children}
                </ChildrenWrapper>
            )}

            <TextInput
                ref={emailRef}
                className="jkl-spacing-l--top"
                label="E-post"
                labelProps={{ variant: "small" }}
                autoComplete="email"
                name="email"
                value={email}
                onChange={handleChange(setEmail)}
                errorLabel={errors.email}
            />
            {withPhone && (
                <TextInput
                    ref={phoneRef}
                    className="jkl-spacing-l--top"
                    label="Telefonnummer"
                    labelProps={{ variant: "small" }}
                    autoComplete="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange(setPhone)}
                    errorLabel={errors.phone}
                />
            )}

            <div className="jkl-spacing-xl--top">
                <PrimaryButton type="submit" className="jkl-spacing-xl--right">
                    {sendButtonLabel}
                </PrimaryButton>
                <TertiaryButton onClick={() => setNoThanks(true)}>
                    Nei takk
                </TertiaryButton>
            </div>
        </form>
    );
};
