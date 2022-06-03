import React, { FocusEventHandler, ChangeEventHandler, forwardRef } from "react";
import { useId } from "@fremtind/jkl-react-hooks";
import { Label, LabelVariant, SupportLabel, ValuePair, getValuePair, LabelProps } from "@fremtind/jkl-core";
import cn from "classnames";
import { ExpandArrow } from "./ExpandArrow";

export interface NativeSelectProps {
    id?: string;
    name?: string;
    label: string;
    labelProps?: Omit<LabelProps, "children" | "forceCompact" | "standAlone">;
    items: Array<string | ValuePair>;
    className?: string;
    selectClassName?: string;
    inline?: boolean;
    helpLabel?: string;
    errorLabel?: string;
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    placeholder?: string;
    value?: string;
    forceCompact?: boolean;
    width?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    onFocus?: FocusEventHandler<HTMLSelectElement>;
    onBlur?: FocusEventHandler<HTMLSelectElement>;
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
    (
        {
            id,
            label,
            labelProps,
            items,
            className = "",
            inline = false,
            helpLabel,
            errorLabel,
            invalid,
            variant,
            placeholder,
            value,
            forceCompact,
            width,
            selectClassName,
            ...rest
        },
        ref,
    ) => {
        const uid = useId(id || "jkl-select", { generateSuffix: !id });

        return (
            <div
                data-testid="jkl-select"
                className={cn("jkl-select", className, {
                    "jkl-select--inline": inline,
                    "jkl-select--compact": forceCompact,
                    "jkl-select--invalid": !!errorLabel || invalid,
                })}
            >
                <Label variant={variant} {...labelProps} standAlone htmlFor={uid} forceCompact={forceCompact}>
                    {label}
                </Label>
                <div className="jkl-select__outer-wrapper" style={{ width }}>
                    <select
                        ref={ref}
                        id={uid}
                        className={cn("jkl-select__button", selectClassName)}
                        defaultValue={value ? undefined : ""}
                        value={value}
                        {...rest}
                    >
                        {placeholder && !value && (
                            <option disabled value="">
                                {placeholder}
                            </option>
                        )}
                        {items.map(getValuePair).map((item) => (
                            <option
                                data-testid="jkl-select__option"
                                className="jkl-select__option"
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>
                        ))}
                    </select>
                    <ExpandArrow className="jkl-select__arrow" />
                </div>
                <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
            </div>
        );
    },
);

NativeSelect.displayName = "NativeSelect";
