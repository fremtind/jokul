import { type ValuePair, getValuePair } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import { InputGroup, type InputGroupProps } from "@fremtind/jkl-input-group-react";
import cn from "classnames";
import React, { forwardRef, SelectHTMLAttributes } from "react";

export interface NativeSelectProps extends Omit<InputGroupProps, "children">, SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
    items: Array<string | ValuePair>;
    selectClassName?: string;
    width?: string;
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>((props, ref) => {
    const {
        label,
        className,
        density,
        errorLabel,
        helpLabel,
        inline,
        invalid,
        items,
        labelProps,
        placeholder,
        selectClassName,
        supportLabelProps,
        tooltipProps,
        value,
        width,
        ...rest
    } = props;

    const inputGroupProps = {
        label,
        density,
        errorLabel,
        helpLabel,
        labelProps,
        inline,
        supportLabelProps,
        tooltipProps,
    };

    return (
        <InputGroup
            {...inputGroupProps}
            data-testid="jkl-select"
            className={cn("jkl-select", className, {
                "jkl-select--inline": inline,
                "jkl-select--invalid": !!errorLabel || invalid,
            })}
            render={(inputProps) => (
                <div className="jkl-select__outer-wrapper" style={{ width }}>
                    <select
                        ref={ref}
                        className={cn("jkl-select__button", selectClassName, {
                            "jkl-select__button--active-value": !!value,
                        })}
                        defaultValue={value ? undefined : ""}
                        value={value}
                        {...inputProps}
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
            )}
        />
    );
});

NativeSelect.displayName = "NativeSelect";
