import React, { ChangeEvent } from "react";
import { RadioButton } from "./RadioButton";

interface Props {
    name: string;
    legend?: string;
    choices: string[];
    selectedValue: string;
    inline?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonChoice = ({ name, legend, choices, selectedValue, onChange, inline = true }: Props) => {
    return (
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
                />
            ))}
        </fieldset>
    );
};
