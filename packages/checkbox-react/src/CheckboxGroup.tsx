import React from "react";
import { Checkbox } from "./Checkbox";

interface Props {
    legend: string;
    choices: string[];
    inline?: boolean;
    onChange?: (name: string, value: boolean) => void;
    className?: string;
}

export function CheckboxGroup({ legend, choices, onChange, className, inline = true }: Props) {
    return (
        <fieldset className={`jkl-checkbox-group ${className ? className : ""}`}>
            <legend>{legend}</legend>
            {choices.map((choice) => (
                <Checkbox name={choice} inline={inline} key={choice} onChange={onChange} />
            ))}
        </fieldset>
    );
}
