import clsx from "clsx";
import React, { forwardRef, useId, useRef, useState } from "react";
import { useMergeRefs } from "../../utilities/index.js";
import { Button } from "../button/index.js";
import { CalendarIcon } from "../icon/index.js";
import { InputGroup } from "../input-group/index.js";
import { Calendar } from "./calendar/Calendar.js";
import type { DateInputProps } from "./types.js";
import { toValidBoundary } from "./utils.js";

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
    (props, forwardedInputRef) => {
        const {
            max,
            min,
            defaultValue,
            value,
            name,
            onChange,
            onBlur,
            onClick,
            onFocus,
            id,
            "data-testautoid": testAutoId,
            className = "",
            label,
            labelProps,
            helpLabel,
            errorLabel,
            supportLabelProps,
            tooltip,
            description,
            required,
            disabled,
            readOnly,
            autoComplete,
            inputMode,
            ...rest
        } = props;

        // Skiller InputGroup-spesifikke props fra native input-attributter, slik
        // at vi ikke lekker f.eks. inline, data-size og style ned på <input>.
        const {
            inline,
            style,
            "data-size": dataSize,
            ...inputAttributes
        } = rest;

        const generatedCalendarId = useId();
        const calendarId = id
            ? `${id}-calendar`
            : `jkl-calendar-${generatedCalendarId}`;

        const isControlled = value !== undefined;

        // Intern state holder kalenderen i synk. I ukontrollert modus er selve
        // <input> ukontrollert (defaultValue), slik at react-hook-form (register)
        // kan skrive verdien via ref-en – f.eks. ved reset() og setValue().
        const [internalValue, setInternalValue] = useState<string>(
            defaultValue ?? "",
        );
        const currentValue = isControlled ? value : internalValue;

        // min/max kan komme inn som number eller dd.mm.yyyy (bl.a. via
        // react-hook-forms register). Både det native feltet og kalenderen
        // forholder seg til ISO-strenger.
        const minValue = toValidBoundary(min);
        const maxValue = toValidBoundary(max);

        // Samle-ref: forward til forbruker / react-hook-form, og behold internt
        // slik at vi kan lese og skrive verdien fra kalenderen.
        const inputRef = useRef<HTMLInputElement | null>(null);
        const setInputRef = useMergeRefs(inputRef, forwardedInputRef);

        const handleInputChange = (
            event: React.ChangeEvent<HTMLInputElement>,
        ) => {
            if (!isControlled) {
                setInternalValue(event.target.value);
            }
            onChange?.(event);
        };

        // Skriver en ny verdi inn i det native feltet og fyrer et ekte input-event.
        // Da flyter kalendervalg gjennom samme onChange som tastaturinntasting,
        // slik at også react-hook-form fanger endringen.
        const commitFromCalendar = (next: string) => {
            const input = inputRef.current;
            if (!input) {
                return;
            }
            const setNativeValue = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value",
            )?.set;
            if (setNativeValue) {
                setNativeValue.call(input, next);
            } else {
                input.value = next;
            }
            input.dispatchEvent(new Event("input", { bubbles: true }));
        };

        // Leser gjeldende verdi fra feltet når kalenderen åpnes, slik at den
        // reflekterer eventuelle programmatiske skriv (reset/setValue) i
        // ukontrollert modus.
        const syncCalendarFromInput = () => {
            if (!isControlled && inputRef.current) {
                setInternalValue(inputRef.current.value);
            }
        };

        return (
            <InputGroup
                id={id}
                className={clsx("jkl-date-input", className)}
                inline={inline}
                style={style}
                data-size={dataSize}
                label={label}
                labelProps={labelProps}
                helpLabel={helpLabel}
                errorLabel={errorLabel}
                supportLabelProps={supportLabelProps}
                tooltip={tooltip}
                description={description}
                render={(inputProps) => (
                    <div
                        className="jkl-date-input__wrapper"
                        data-invalid={inputProps["aria-invalid"]}
                    >
                        <input
                            ref={setInputRef}
                            data-testid="jkl-date-input__input"
                            data-testautoid={testAutoId}
                            data-empty={currentValue ? undefined : "true"}
                            className="jkl-date-input__input"
                            name={name}
                            type="date"
                            {...(isControlled ? { value } : { defaultValue })}
                            max={maxValue}
                            min={minValue}
                            required={required}
                            disabled={disabled}
                            readOnly={readOnly}
                            autoComplete={autoComplete}
                            inputMode={inputMode}
                            onChange={handleInputChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onClick={(e) => {
                                e.preventDefault();
                                onClick?.(e);
                            }}
                            {...inputAttributes}
                            {...inputProps}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            icon={<CalendarIcon />}
                            aria-label="Åpne kalender"
                            data-testid="jkl-date-input__trigger"
                            className="jkl-date-input__calendar-trigger"
                            disabled={disabled || readOnly}
                            onClick={syncCalendarFromInput}
                            // @ts-expect-error vet ikke hvorfor vi får typefeil her? kanskje på grunn av hvordan vi behandler polymorfisme?
                            popovertarget={calendarId}
                        />
                        <Calendar
                            data-testid="jkl-calendar"
                            id={calendarId}
                            value={currentValue}
                            min={minValue}
                            max={maxValue}
                            onChange={(e) => commitFromCalendar(e.target.value)}
                            label={label}
                            description={description}
                            popover="auto"
                        />
                    </div>
                )}
            />
        );
    },
);

DateInput.displayName = "DateInput";
