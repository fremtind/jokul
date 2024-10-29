import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import {
    isValidEpost,
    isValidTelefonnummer,
} from "@fremtind/jkl-validators-util";
import React, {
    ChangeEvent,
    FC,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import { useFeedbackContext } from "../feedbackContext";
import { FeedbackSuccess } from "../FeedbackSuccess";

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

interface Props {
    /**
     * Lar deg tilpasse spørsmålsteksten.
     * @default "Kan vi kontakte deg for flere innspill?"
     * */
    label?: string;
    /**
     * Lar deg tilpasse teksten på knappen for innsending.
     * @default "Sett meg på lista!"
     * */
    sendButtonLabel?: string;
    /** Sett til true om du også vil spørre om brukjerens telefonnummer i tillegg til epost */
    withPhone?: boolean;
    /** Her kan du legge inn eventuelt annet innhold du vil ha med. Kommer mellom overskriften og feltene for utfylling */
    children?: ReactNode;
    onSubmit: (values: { email: string; phone?: string }) => void;
    /** Lar deg tilpasse meldingen som kommer når brukeren sender inn skjemaet.  */
    successMessage?: {
        title: string;
        children: ReactNode;
    };
}

export const ContactQuestion: FC<Props> = ({
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
