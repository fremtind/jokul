import type { LabelVariant } from "@fremtind/jkl-core";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { InputGroup } from "../src";
import { InputProps } from "../src/InputGroup";

const Input = ({ id, describedBy }: InputProps) => <input type="text" id={id} aria-describedby={describedBy} />;

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
            <Input />
        </InputGroup>
    );
};

export default InputGroupExample;

export const inputGroupExampleCode: CodeExample = () => `
<InputGroup label="Hello">
    <Input />
</InputGroup>
`;
