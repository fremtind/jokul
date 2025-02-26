import React from "react";
import { TextInput } from "../src/TextInput";

export const DisabledTextInputExample = () => {
    return (
        <TextInput
            disabled
            disabledReason="Du blir automatisk satt som kundeansvarlig når du opprettet tilbudet."
            helpLabel="Du kan endre ansvarlig etter du har opprettet tilbudet."
            label="Kundeansvarlig"
            maxLength={30}
            value="Gro H. Brundtland"
        />
    );
};

export const disabledTextInputExampleCode = (): string => {
    return `
    <TextInput
        disabled
        disabledReason="Du blir automatisk satt som kundeansvarlig når du opprettet tilbudet."
        helpLabel="Du kan endre ansvarlig etter du har opprettet tilbudet."
        label="Kundeansvarlig"
        maxLength={30}
        value="Gro H. Brundtland"
    />`;
};
