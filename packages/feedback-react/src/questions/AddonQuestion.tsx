import React, { ChangeEventHandler, useEffect, useState } from "react";
import { TextArea } from "@fremtind/jkl-text-input-react";

import { useMainQuestionContext } from "../main-question/mainQuestionContext";

interface Props {
    label: string;
    helpLabel?: string;
}

export const AddonQuestion: React.VFC<Props> = ({
    label,
    helpLabel = "Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",
}) => {
    const context = useMainQuestionContext();
    const [dynamicLabel, setDynamicLabel] = useState(label);

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
        <TextArea
            inline
            startOpen
            rows={4}
            data-testid="jkl-feedback__open-question"
            className="jkl-spacing-xl--bottom jkl-spacing-xl--top"
            label={dynamicLabel}
            placeholder={dynamicLabel}
            helpLabel={helpLabel}
            value={message || ""}
            onChange={handleChange}
        />
    );
};
