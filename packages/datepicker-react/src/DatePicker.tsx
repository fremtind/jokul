import { Label, SupportLabel } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { useAnimatedHeight, useClickOutside, useFocusOutside, useId, useKeyListener } from "@fremtind/jkl-react-hooks";
import { BaseInputField } from "@fremtind/jkl-text-input-react";
import cn from "classnames";
import startOfDay from "date-fns/startOfDay";
import React, {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    forwardRef,
    useCallback,
    useRef,
    useState,
} from "react";
import { flushSync } from "react-dom";
import { Calendar } from "./internal/Calendar";
import { getInitialDate, DateInfo } from "./internal/utils";
import { DatePickerProps, DateValidationError } from "./types";
import { formatInput, parseDateString } from "./utils";
import { isWithinLowerBound, isWithinUpperBound } from "./validation";

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>((props, forwardedInputRef) => {
    const {
        "data-testautoid": testAutoId,
        id,
        className = "",
        label = "Velg dato",
        labelProps,
        defaultValue,
        defaultShow = false,
        value,
        disableBeforeDate: disableBefore,
        disableAfterDate: disableAfter,
        name,
        helpLabel,
        errorLabel,
        invalid,
        density,
        extended,
        days,
        months,
        monthLabel,
        yearLabel,
        placeholder = "dd.mm.åååå",
        width = "10ch",
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        action,
        showCalendarLabel = "Åpne kalender",
        hideCalendarLabel = "Lukk kalender",
        ...rest
    } = props;

    if (value && defaultValue) {
        console.warn(
            "DatePicker må enten være controlled eller uncontrolled. Hvis du bruker defaultValue og value sammen vil defaultValue bli ignorert.",
        );
    }

    /// Input state

    const disableBeforeDate = parseDateString(disableBefore);
    const minDate = disableBeforeDate ? startOfDay(disableBeforeDate) : undefined;
    const disableAfterDate = parseDateString(disableAfter);
    const maxDate = disableAfterDate ? startOfDay(disableAfterDate) : undefined;

    const [date, setDate] = useState(getInitialDate(value, defaultValue, minDate, maxDate));
    const [error, setError] = useState<DateValidationError | null>(null);

    const inputId = useId("jkl-datepicker");
    const supportLabelId = useId("jkl-datepicker-label");

    /// Calendar state

    const defaultSelectedInCalendar = startOfDay(new Date());

    const [showCalendar, setShowCalendar] = useState(defaultShow);
    const [calendarRef] = useAnimatedHeight<HTMLDivElement>(showCalendar);

    /// Input events

    const iconButtonRef = useRef<HTMLButtonElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Hjelper for å gjøre det enklere å både forwarde refen men også bruke den selv internt
    const unifiedInputRef = useCallback(
        (instance: HTMLInputElement | null) => {
            inputRef.current = instance;
            if (forwardedInputRef) {
                if (typeof forwardedInputRef === "function") {
                    forwardedInputRef(instance);
                } else {
                    forwardedInputRef.current = instance;
                }
            }
        },
        [inputRef, forwardedInputRef],
    );

    const datepickerRef = useRef<HTMLDivElement>(null);
    const handleFocus = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            if (!onFocus || !datepickerRef.current) {
                return;
            }

            const nextFocusIsInside = datepickerRef.current.contains(e.relatedTarget as Node);
            if (!nextFocusIsInside) {
                onFocus(e, date, { error, value: e.target.value });
            }
        },
        [onFocus, date, error],
    );

    const handleBlur = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            if (onBlur) {
                onBlur(e, date, { error, value: e.target.value });
            }
        },
        [onBlur, date, error],
    );

    const handleKeyDownAction = useCallback(
        (e: React.KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === "Escape") {
                setShowCalendar(false);
            }

            if (action?.onKeyDown) {
                action.onKeyDown(e);
            }
        },
        [setShowCalendar, action],
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Escape") {
                setShowCalendar(false);
            }

            if (onKeyDown) {
                let nextValue = e.currentTarget.value;
                if (/[\d.]/.test(e.key)) {
                    nextValue += e.key;
                }
                onKeyDown(e, date, { error, value: nextValue });
            }
        },
        [onKeyDown, setShowCalendar, date, error],
    );

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            let nextDate: Date | null = null;
            let nextError: DateValidationError | null = null;

            if (e.target.value) {
                const val = parseDateString(e.target.value);
                if (!val) {
                    nextError = "WRONG_FORMAT";
                } else if (minDate && !isWithinLowerBound(val, minDate)) {
                    nextError = "OUTSIDE_LOWER_BOUND";
                } else if (maxDate && !isWithinUpperBound(val, maxDate)) {
                    nextError = "OUTSIDE_UPPER_BOUND";
                } else {
                    setShowCalendar(false);
                }
                nextDate = val || null;
            }

            setError(nextError);
            setDate(nextDate);

            if (onChange) {
                onChange(e, nextDate, { error: nextError, value: e.target.value });
            }
        },
        [onChange, setError, setDate, setShowCalendar, minDate, maxDate],
    );

    /// Calendar events

    const clickCalendar = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            flushSync(() => {
                setShowCalendar(!showCalendar);
            });

            const calendarEl = calendarRef.current;
            const button = calendarEl && (calendarEl.querySelector('[aria-pressed="true"]') as HTMLButtonElement);
            button && button.focus();

            if (action?.onClick) {
                action.onClick(e);
            }
        },
        [setShowCalendar, showCalendar, action, calendarRef],
    );

    const clickInput = useCallback(() => {
        setShowCalendar(!showCalendar);
    }, [setShowCalendar, showCalendar]);

    const hideCalendar = useCallback(() => {
        setShowCalendar(false);
    }, [setShowCalendar]);

    const handleClickCalendarDay = useCallback(
        ({ date }: DateInfo) => {
            setShowCalendar(false);
            setDate(date);

            if (inputRef.current) {
                const node = inputRef.current;

                node.value = formatInput(date);

                // Simulér et change-event så APIet blir så likt som mulig en endring av inputfeltet
                const event = document.createEvent("HTMLEvents");
                event.initEvent("input", true, false);
                node.dispatchEvent(event);

                node.focus();

                if (onChange) {
                    // Det er ikke helt sant at dette er et React.SyntheticEvent, men it's fine – probably?
                    // Den har tingene man kan forvente, men hvis du gjør serdeles fancy ting med events
                    // så kan det hende du må utvide denne for å dekke behovet ditt.
                    onChange(event as unknown as ChangeEvent<HTMLInputElement>, date, {
                        error: null,
                        value: node.value,
                    });
                }
            }
        },
        [setShowCalendar, setDate, onChange],
    );

    const handleTabOutsideCalendar = useCallback(
        (e: KeyboardEvent) => {
            e.preventDefault();
            setShowCalendar(false);
            iconButtonRef.current && iconButtonRef.current.focus();
        },
        [setShowCalendar],
    );

    useClickOutside(datepickerRef, hideCalendar);
    useFocusOutside(datepickerRef, hideCalendar);
    useKeyListener(calendarRef, ["Escape"], () => {
        setShowCalendar(false);
        inputRef.current && inputRef.current.focus();
    });

    return (
        <div
            id={id}
            className={cn("jkl-datepicker", className, {
                "jkl-datepicker--open": showCalendar,
            })}
            {...rest}
            ref={datepickerRef}
        >
            <Label standAlone {...labelProps} density={density} htmlFor={inputId}>
                {label}
            </Label>
            <div
                data-testid="jkl-datepicker__input-wrapper"
                className="jkl-datepicker__input-wrapper jkl-text-input-wrapper"
                data-density={density}
                tabIndex={-1} // Må være her for Safari onBlur quirk! https://bugs.webkit.org/show_bug.cgi?id=22261
            >
                <BaseInputField
                    ref={unifiedInputRef}
                    data-testid="jkl-datepicker__input"
                    data-testautoid={testAutoId}
                    className="jkl-datepicker__input jkl-text-input__input"
                    id={inputId}
                    name={name}
                    describedBy={helpLabel || errorLabel ? supportLabelId : undefined}
                    invalid={!!errorLabel || invalid}
                    defaultValue={defaultValue}
                    value={value}
                    type="text"
                    placeholder={placeholder}
                    width={width}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onClick={clickInput}
                    onChange={handleChange}
                />
                <IconButton
                    ref={iconButtonRef}
                    density={density}
                    className="jkl-datepicker__action-button jkl-text-input-action-button"
                    iconType="calendar"
                    buttonTitle={showCalendar ? hideCalendarLabel : showCalendarLabel}
                    {...action}
                    onClick={clickCalendar}
                    onKeyDown={handleKeyDownAction}
                />
                <div className="jkl-datepicker__calendar-wrapper">
                    <Calendar
                        ref={calendarRef}
                        defaultSelected={defaultSelectedInCalendar}
                        density={density}
                        date={date}
                        minDate={minDate}
                        maxDate={maxDate}
                        days={days}
                        months={months}
                        monthLabel={monthLabel}
                        yearLabel={yearLabel}
                        hidden={!showCalendar}
                        extended={extended}
                        onDateSelected={handleClickCalendarDay}
                        onTabOutside={handleTabOutsideCalendar}
                    />
                </div>
            </div>
            <SupportLabel density={density} id={supportLabelId} helpLabel={helpLabel} errorLabel={errorLabel} />
        </div>
    );
});

DatePicker.displayName = "DatePicker";
