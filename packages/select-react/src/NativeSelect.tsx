import { Label, LabelVariant, SupportLabel, ValuePair, getValuePair, LabelProps, Density } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { FocusEventHandler, ChangeEventHandler, forwardRef } from "react";

export interface NativeSelectProps {
    id?: string;
    name?: string;
    label: string;
    labelProps?: Omit<LabelProps, "children" | "standAlone">;
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
    density?: Density;
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
            density,
            width,
            selectClassName,
            ...rest
        },
        ref,
    ) => {
        const uid = useId(id || "jkl-select", { generateSuffix: !id });
        const supportId = `${uid}_support-label`;
        const hasSupportText = helpLabel || errorLabel;
        const describedBy = hasSupportText ? supportId : undefined;

        return (
            <div
                data-testid="jkl-select"
                className={cn("jkl-select", className, {
                    "jkl-select--inline": inline,
                    "jkl-select--invalid": !!errorLabel || invalid,
                })}
                data-density={density}
            >
                <Label variant={variant} {...labelProps} standAlone htmlFor={uid} density={density}>
                    {label}
                </Label>
                <div className="jkl-select__outer-wrapper" style={{ width }}>
                    <select
                        ref={ref}
                        id={uid}
                        className={cn("jkl-select__button", selectClassName)}
                        defaultValue={value ? undefined : ""}
                        value={value}
                        aria-describedby={describedBy}
                        aria-invalid={Boolean(errorLabel)}
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
                    <ArrowVerticalAnimated variant="medium" pointingDown className="jkl-select__arrow" />
                </div>
                <SupportLabel id={supportId} helpLabel={helpLabel} errorLabel={errorLabel} density={density} />
            </div>
        );
    },
);

NativeSelect.displayName = "NativeSelect";
