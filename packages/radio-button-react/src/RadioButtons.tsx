import React, { ChangeEventHandler } from "react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { LabelVariant, ValuePair, getValuePair, DataTestAutoId } from "@fremtind/jkl-core";
import { RadioButtonOption } from "./RadioButtonOption";

interface Props extends DataTestAutoId {
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
    "data-testautoid": testAutoId,
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
        data-testautoid={testAutoId}
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
