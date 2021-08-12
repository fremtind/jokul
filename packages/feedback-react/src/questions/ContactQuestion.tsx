import React, { ReactNode, useState } from "react";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { useFeedbackContext } from "../feedbackContext";

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
    const [noThanks, setNoThanks] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { contactSubmitted, setContactSubmitted } = useFeedbackContext();

    const ChildrenWrapper = typeof children === "string" ? "p" : "div";

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        onSubmit({ email, phone: withPhone ? phone : undefined });
        setContactSubmitted(true);
    };

    if (noThanks || contactSubmitted) {
        return null;
    }

    return (
        <form className="jkl-layout-spacing--medium-top" onSubmit={handleSubmit}>
            <p className="jkl-heading-4 jkl-component-spacing--small-bottom">{label}</p>
            {children && <ChildrenWrapper className="jkl-body">{children}</ChildrenWrapper>}

            <TextInput
                className="jkl-layout-spacing--small-top"
                variant="small"
                label="E-post"
                autoComplete="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {withPhone && (
                <TextInput
                    className="jkl-layout-spacing--small-top"
                    variant="small"
                    label="Telefonnummer"
                    autoComplete="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
