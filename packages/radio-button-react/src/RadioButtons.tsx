import React, { ChangeEventHandler } from "react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { LabelVariant, ValuePair, getValuePair } from "@fremtind/jkl-core";
import { RadioButtonOption } from "./RadioButtonOption";

interface Props {
    name: string;
    legend: string;
    choices: Array<string | ValuePair>;
    selectedValue?: string;
    inline?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    className?: string;
    /** @deprecated */
    inverted?: boolean;
}

export const RadioButtons = ({
    name,
    legend,
    choices,
    selectedValue,
    onChange,
    inline = false,
    helpLabel,
    errorLabel,
    variant,
    forceCompact,
    className,
    inverted,
}: Props) => (
    <FieldGroup
        legend={legend}
        helpLabel={helpLabel}
        errorLabel={errorLabel}
        variant={variant}
        forceCompact={forceCompact}
        className={className}
        inverted={inverted}
    >
        {choices.map(getValuePair).map(({ label, value }) => (
            <RadioButtonOption
                key={value}
                name={name}
                value={value}
                label={label}
                inline={inline}
                checked={value === selectedValue}
                onChange={onChange}
                invalid={!!errorLabel}
                forceCompact={forceCompact}
                inverted={inverted}
            />
        ))}
    </FieldGroup>
);
