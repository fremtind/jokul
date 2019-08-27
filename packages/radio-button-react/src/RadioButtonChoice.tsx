import React, { ChangeEvent } from "react";
import { RadioButton } from "./RadioButton";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    name: string;
    legend?: string;
    choices: string[];
    selectedValue: string;
    inline?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    helpLabel?: string;
    errorLabel?: string;
}

export const RadioButtonChoice = ({
    name,
    legend,
    choices,
    selectedValue,
    onChange,
    inline = true,
    errorLabel,
    helpLabel,
}: Props) => (
    <fieldset className="jkl-radio-button-choice">
        <legend>{legend || name}</legend>
        {choices.map((choice) => (
            <RadioButton
                key={choice}
                name={name}
                value={choice}
                inline={inline}
                checked={choice === selectedValue}
                onChange={onChange}
                invalid={!!errorLabel}
            />
        ))}
        {(helpLabel || errorLabel) && <SupportLabel errorLabel={errorLabel} helpLabel={helpLabel} />}
    </fieldset>
);
