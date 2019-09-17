import React, { ChangeEvent } from "react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { RadioButton } from "./RadioButton";

interface Props {
    name: string;
    legend: string;
    choices: string[];
    selectedValue: string;
    inline?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    helpLabel?: string;
    errorLabel?: string;
    standalone?: boolean;
}

export const RadioButtonChoice = ({
    name,
    legend,
    choices,
    selectedValue,
    onChange,
    inline = true,
    helpLabel,
    errorLabel,
    standalone,
}: Props) => (
    <FieldGroup legend={legend} helpLabel={helpLabel} errorLabel={errorLabel} standalone={standalone}>
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
    </FieldGroup>
);
