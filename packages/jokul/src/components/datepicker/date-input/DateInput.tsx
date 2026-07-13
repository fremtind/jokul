import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { InputGroup } from "../../input-group/index.js";
import type { DateInputProps } from "../types.js";
import { getInputValidationState, toNativeValue } from "../utils/index.js";

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
    (props, forwardedInputRef) => {
        const {
            "data-testautoid": testAutoId,
            id,
            className = "",
            label = "Velg dato",
            labelProps,
            defaultValue,
            value,
            name,
            helpLabel,
            errorLabel,
            invalid,
            tooltip,
            description,
            onBlur,
            onChange,
            onKeyDown,
            onFocus,
            min,
            max,
            ...rest
        } = props;

        const initialDate = value ?? defaultValue;
        const [selectedDate, setSelectedDate] = useState<string>(
            toNativeValue(initialDate),
        );

        return (
            <InputGroup
                id={id}
                className={clsx("jkl-date-input", className)}
                {...rest}
                label={label}
                labelProps={labelProps}
                helpLabel={helpLabel}
                errorLabel={errorLabel}
                tooltip={tooltip}
                description={description}
                render={(inputProps) => (
                    <input
                        ref={forwardedInputRef}
                        data-testid="jkl-date-input__input"
                        data-testautoid={testAutoId}
                        name={name}
                        value={selectedDate}
                        defaultValue={defaultValue}
                        type="date"
                        {...inputProps}
                        onChange={(e) => {
                            setSelectedDate(e.target.value);
                            onChange?.(
                                e,
                                new Date(e.target.value),
                                getInputValidationState(
                                    e.target.value,
                                    min,
                                    max,
                                ),
                            );
                        }}
                        onBlur={(e) => {
                            onBlur?.(
                                e,
                                new Date(selectedDate),
                                getInputValidationState(selectedDate, min, max),
                            );
                        }}
                        onFocus={(e) => {
                            onFocus?.(
                                e,
                                new Date(selectedDate),
                                getInputValidationState(selectedDate, min, max),
                            );
                        }}
                        onKeyDown={(e) => {
                            onKeyDown?.(
                                e,
                                new Date(selectedDate),
                                getInputValidationState(selectedDate, min, max),
                            );
                        }}
                        aria-invalid={invalid || !!errorLabel}
                    />
                )}
            />
        );
    },
);

DateInput.displayName = "DateInput";
