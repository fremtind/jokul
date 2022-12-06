import type { LabelVariant } from "@fremtind/jkl-core";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { InputGroup } from "../src";

export const inputGroupExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const InputGroupExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const helpLabel = boolValues?.["Med hjelpetekst"] ? "Fødselsnummer består av 11 siffer" : undefined;
    const errorLabel = boolValues?.["Med feil"] ? "Du må fylle ut fødselsnummer, 11 siffer" : undefined;
    const labelProps = {
        variant: choiceValues?.["Variant"] as LabelVariant,
    };

    return (
        <InputGroup label="Hello" errorLabel={errorLabel} helpLabel={helpLabel} labelProps={labelProps}>
            <input type="text" />
        </InputGroup>
    );
};

export default InputGroupExample;

export const inputGroupExampleCode: CodeExample = () => `
<InputGroup label="Hello">
    <Input />
</InputGroup>
`;
