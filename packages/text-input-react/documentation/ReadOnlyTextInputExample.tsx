import React from "react";
import { TextInput } from "../src/TextInput";

export const ReadOnlyTextInputExample = () => {
    return (
        <TextInput
            label="Fødselsnummer"
            maxLength={12}
            readOnly
            value="12345 98765"
        />
    );
};

export const readOnlyTextInputExampleCode = (): string => {
    return `
    <TextInput
        label="Fødselsnummer"
        maxLength={12}
        readOnly
        value="12345 98765"
    />`;
};
