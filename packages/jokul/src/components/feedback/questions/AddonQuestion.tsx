import React, { ChangeEventHandler, useEffect, useState } from "react";
import { TextArea } from "../../text-input/TextArea.js";
import { useFeedbackContext } from "../feedbackContext.js";
import { useMainQuestionContext } from "../main-question/mainQuestionContext.js";

interface Props {
    label?: string;
    helpLabel?: string;
}

export const AddonQuestion: React.FC<Props> = ({
    helpLabel = "Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",
    label,
}) => {
    const { counter } = useFeedbackContext();
    const context = useMainQuestionContext();
    const [dynamicLabel, setDynamicLabel] = useState<string>();

    useEffect(() => {
        const labelFromValue = Array.isArray(context?.currentValue)
            ? context?.currentValue[0].textAreaLabel?.toString()
            : context?.currentValue?.textAreaLabel?.toString();
        setDynamicLabel(labelFromValue || label);
    }, [context?.currentValue, label]);

    if (!context) {
        console.error("Addon question must be used inside a MainQuestion context provider");
        return null;
    }

    const { message, setMessage } = context;
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => setMessage(e.target.value);

    return (
        <>
            {context.currentValue !== undefined && (
                <div className="jkl-sr-only" aria-live="polite">
                    {dynamicLabel} {helpLabel}
                </div>
            )}
            <TextArea
                startOpen
                rows={4}
                data-testid="jkl-feedback__open-question"
                className="jkl-spacing-xl--bottom jkl-spacing-xl--top"
                label={dynamicLabel}
                labelProps={{ srOnly: true }}
                placeholder={dynamicLabel}
                helpLabel={helpLabel}
                value={message || ""}
                onChange={handleChange}
                counter={counter}
            />
        </>
    );
};
