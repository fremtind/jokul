import clsx from "clsx";
import React, { forwardRef, useId, useState } from "react";
import { Button } from "../../button/index.js";
import { Icon } from "../../icon/index.js";
import { InputGroup } from "../../input-group/index.js";
import { Calendar } from "../calendar/Calendar.js";
import type { DatePickerProps } from "../types.js";
import { getInputValidationState, toNativeValue } from "../utils/index.js";

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
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
            dateInputProps,
            description,
            calendarProps,
            disableBeforeDate,
            disableAfterDate,
            onChange,
            onBlur,
            onFocus,
            onKeyDown,
            min,
            max,
            ...rest
        } = props;

        const initialDate = value ?? defaultValue;
        const [selectedDate, setSelectedDate] = useState<string>(
            toNativeValue(initialDate),
        );

        const generatedId = useId();

        return (
            <InputGroup
                id={id}
                className={clsx("jkl-datepicker", className)}
                {...rest}
                label={label}
                labelProps={labelProps}
                helpLabel={helpLabel}
                errorLabel={errorLabel}
                tooltip={tooltip}
                description={description}
                render={(inputProps) => (
                    <div className="jkl-datepicker__input">
                        <input
                            ref={forwardedInputRef}
                            data-testid="jkl-datepicker__input"
                            data-testautoid={testAutoId}
                            name={name}
                            value={toNativeValue(selectedDate)}
                            type="date"
                            min={toNativeValue(min || disableBeforeDate)}
                            max={toNativeValue(max || disableAfterDate)}
                            {...dateInputProps}
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
                                    getInputValidationState(
                                        selectedDate,
                                        min,
                                        max,
                                    ),
                                );
                            }}
                            onFocus={(e) => {
                                onFocus?.(
                                    e,
                                    new Date(selectedDate),
                                    getInputValidationState(
                                        selectedDate,
                                        min,
                                        max,
                                    ),
                                );
                            }}
                            onKeyDown={(e) => {
                                onKeyDown?.(
                                    e,
                                    new Date(selectedDate),
                                    getInputValidationState(
                                        selectedDate,
                                        min,
                                        max,
                                    ),
                                );
                            }}
                            aria-invalid={invalid || !!errorLabel}
                        />
                        <Button
                            /* @ts-ignore */
                            popovertarget={`jkl-datepicker__calendar-${generatedId}`}
                            popovertargetaction="toggle"
                            icon={<Icon>calendar_today</Icon>}
                            variant="ghost"
                            aria-label="Åpne kalender"
                        />
                        <div
                            id={`jkl-datepicker__calendar-${generatedId}`}
                            className="jkl-popover"
                            /* @ts-ignore */
                            popover="auto"
                        >
                            <Calendar
                                {...calendarProps}
                                value={selectedDate}
                                min={min || disableBeforeDate}
                                max={max || disableAfterDate}
                                onChange={(e, date, meta) => {
                                    setSelectedDate(e.target.value);
                                    calendarProps?.onChange?.(
                                        e,
                                        new Date(e.target.value),
                                        getInputValidationState(
                                            e.target.value,
                                            min,
                                            max,
                                        ),
                                    );
                                }}
                            />
                        </div>
                    </div>
                )}
            />
        );
    },
);

DatePicker.displayName = "DatePicker";
