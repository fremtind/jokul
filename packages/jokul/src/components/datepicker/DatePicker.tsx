import clsx from "clsx";
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
import { CalendarIcon } from "../icon";
import { IconButton } from "../icon-button";
import { InputGroup } from "../input-group";
import { Popover } from "../popover";
import { BaseTextInput } from "../text-input";
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
        yearsToShow,
        name,
        helpLabel,
        errorLabel,
        invalid,
        density,
        days,
        months,
        monthLabel,
        yearLabel,
        placeholder = "dd.mm.åååå",
        width = "11.25rem",
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        action,
        showCalendarLabel = "Åpne kalender",
        hideCalendarLabel = "Lukk kalender",
        supportLabelProps,
        tooltipProps,
        ...rest
    } = props;

    if (process.env.NODE_ENV !== "production" && value && defaultValue) {
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

    /// Calendar state

    const [showCalendar, setShowCalendar] = useState(defaultShow);

    const calendarRef = useRef<HTMLDivElement>(null);
    const datepickerRef = useRef<HTMLDivElement>(null);

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
                e.preventDefault();
                e.stopPropagation();
            }

            if (action?.onKeyDown) {
                action.onKeyDown(e);
            }
        },
        [setShowCalendar, action],
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

    return (
        <InputGroup
            id={id}
            className={clsx("jkl-datepicker", className, {
                "jkl-datepicker--open": showCalendar,
            })}
            {...rest}
            ref={datepickerRef}
            label={label}
            labelProps={labelProps}
            density={density}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            supportLabelProps={supportLabelProps}
            tooltipProps={tooltipProps}
            render={(inputProps) => (
                <BaseTextInput
                    ref={unifiedInputRef}
                    data-testid="jkl-datepicker__input"
                    data-testautoid={testAutoId}
                    className="jkl-datepicker__input"
                    name={name}
                    defaultValue={defaultValue}
                    density={density}
                    value={value}
                    type="text"
                    placeholder={placeholder}
                    width={width}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    actionButton={
                        <Popover
                            positionReference={inputRef}
                            open={showCalendar}
                            onOpenChange={() => setShowCalendar(!showCalendar)}
                            offset={8}
                        >
                            <Popover.Trigger
                                data-testid="jkl-datepicker__trigger"
                                title={showCalendar ? hideCalendarLabel : showCalendarLabel}
                                className="jkl-text-input-action-button"
                                onClick={clickCalendar}
                                onKeyDown={handleKeyDownAction}
                                tabIndex={0}
                                asChild
                            >
                                <IconButton {...action}>
                                    <CalendarIcon />
                                </IconButton>
                            </Popover.Trigger>
                            <Popover.Content initialFocus={-1} padding={24}>
                                <Calendar
                                    ref={calendarRef}
                                    density={density}
                                    date={date}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    days={days}
                                    months={months}
                                    monthLabel={monthLabel}
                                    yearLabel={yearLabel}
                                    yearsToShow={yearsToShow}
                                    onDateSelected={handleClickCalendarDay}
                                    onTabOutside={handleTabOutsideCalendar}
                                />
                            </Popover.Content>
                        </Popover>
                    }
                    {...inputProps}
                />
            )}
        />
    );
});

DatePicker.displayName = "DatePicker";
