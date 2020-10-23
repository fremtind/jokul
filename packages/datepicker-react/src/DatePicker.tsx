import React, { ChangeEvent, useRef, FocusEvent, useReducer } from "react";
import classNames from "classnames";

import { Label, SupportLabel, LabelVariant } from "@fremtind/jkl-core";
import { BaseInputField } from "@fremtind/jkl-text-input-react";
import { useAnimatedHeight, useKeyListener, useClickOutside } from "@fremtind/jkl-react-hooks";
import { IconButton } from "@fremtind/jkl-icon-button-react";

import { Calendar } from "./Calendar";
import { formatDate, parseDateString, dateHasChanged, getInitialDate } from "./dateFunctions";
import {
    reducer,
    init,
    useUpdateInternalStateOnValueChange,
    useSetTimeToDateInRange,
    useDisableDate,
    useToggleCalendar,
    useCalendarId,
} from "./internal";

export interface ChangeDate {
    date: Date;
}

type onChangeEventHandler = (date?: Date, e?: ChangeEvent) => void;
type onBlurEventHandler = (date?: Date, e?: FocusEvent) => void;
type onFocusEventHandler = (date?: Date, e?: FocusEvent) => void;

interface Props {
    label?: string;
    monthLabel?: string;
    yearLabel?: string;
    placeholder?: string;
    months?: string[];
    days?: string[];
    calendarButtonTitle?: string;
    showCalendarLabel?: string;
    hideCalendarLabel?: string;
    initialDate?: Date;
    value?: Date;
    extended?: boolean;
    initialShow?: boolean;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    inverted?: boolean;
    disableBeforeDate?: Date;
    disableAfterDate?: Date;
    onChange?: onChangeEventHandler;
    onFocus?: onFocusEventHandler;
    onBlur?: onBlurEventHandler;
}

export function DatePicker({
    label = "Velg dato",
    placeholder = "dd.mm.åååå",
    calendarButtonTitle,
    showCalendarLabel = calendarButtonTitle || "Åpne kalender",
    hideCalendarLabel = calendarButtonTitle || "Lukk kalender",
    initialDate,
    value,
    onChange,
    onBlur,
    onFocus,
    initialShow = false,
    className = "",
    forceCompact,
    inverted,
    disableBeforeDate,
    disableAfterDate,
    variant,
    helpLabel,
    errorLabel,
    ...calendarProps
}: Props) {
    if (calendarButtonTitle && process.env.NODE_ENV !== "production") {
        console.warn(
            "WARNING: For better usability, please supply separate button titles for showing/hiding the calendar, using the showCalendarLabel and hideCalendarLabel props respectively. The calendarButtonTitle prop is deprecated and will be removed in a future update.",
        );
    }

    const disableDate = useDisableDate(disableBeforeDate, disableAfterDate);
    const [inputId, supportLabelId] = useCalendarId();

    const [state, dispatch] = useReducer(
        reducer,
        { date: getInitialDate(value, initialDate, disableDate), calendarHidden: !initialShow },
        init,
    );

    const componentClassName = classNames(
        "jkl-datepicker",
        {
            "jkl-datepicker--open": !state.calendarHidden,
            "jkl-datepicker--inverted": inverted,
        },
        className,
    );
    const inputWrapperClassName = classNames("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper", {
        "jkl-text-input--compact": forceCompact,
        "jkl-text-input--inverted": inverted,
    });
    const componentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [calendarRef] = useAnimatedHeight(!state.calendarHidden);

    const handleToggleCalendar = useToggleCalendar(dispatch, state, disableDate);

    const toggleCalendar = () => {
        handleToggleCalendar(!state.calendarHidden);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDateString = e.target.value;
        const newDate = parseDateString(newDateString);

        // Only set the date if it is a valid date
        if (newDate && dateHasChanged(state.date, newDate)) {
            dispatch({ type: "SET_DATE", payload: newDate });
            if (onChange) {
                onChange(newDate, e);
            }
        } else if (newDateString === "") {
            dispatch({ type: "SET_DATE", payload: undefined });
            if (onChange) {
                onChange(undefined, e);
            }
        }

        dispatch({ type: "SET_DATE_STRING", payload: newDateString });
    };

    const onClickCalendarDay = (e: ChangeEvent<ChangeDate>) => {
        const newDate = e.target.date;

        if (dateHasChanged(state.date, newDate)) {
            dispatch({ type: "SET_DATE_STRING", payload: formatDate(newDate) });
            dispatch({ type: "SET_DATE", payload: newDate });

            if (onChange) {
                onChange(newDate);
            }
        }

        handleToggleCalendar(true);
        inputRef.current && inputRef.current.focus();
    };

    const handleFocusChange = (fn?: onFocusEventHandler) => (e: FocusEvent) => {
        const nextFocusIsInside = componentRef.current && componentRef.current.contains(e.relatedTarget as Node);
        if (fn && !nextFocusIsInside) {
            fn(state.date, e);
        }
    };

    useClickOutside(componentRef, () => {
        !state.calendarHidden && handleToggleCalendar(true);
    });

    useKeyListener(calendarRef, ["Escape"], () => {
        !state.calendarHidden && handleToggleCalendar(true);
        inputRef.current && inputRef.current.focus();
    });

    useSetTimeToDateInRange(dispatch, disableAfterDate, disableBeforeDate);

    useUpdateInternalStateOnValueChange(dispatch, value);

    return (
        <div className={componentClassName} ref={componentRef}>
            <Label standAlone htmlFor={inputId} variant={variant}>
                {label}
            </Label>
            <div className={inputWrapperClassName}>
                <BaseInputField
                    ref={inputRef}
                    id={inputId}
                    describedBy={supportLabelId}
                    invalid={!!errorLabel}
                    className="jkl-datepicker__input jkl-text-input__input"
                    data-testid="jkl-datepicker__input"
                    value={state.dateString}
                    onFocus={() => handleFocusChange(onFocus)}
                    onBlur={() => handleFocusChange(onBlur)}
                    onClick={() => toggleCalendar()}
                    onChange={handleChange}
                    placeholder={placeholder}
                    width="11.5rem"
                    type="text"
                />
                <IconButton
                    className="jkl-text-input__action-button"
                    iconType="calendar"
                    buttonTitle={state.calendarHidden ? showCalendarLabel : hideCalendarLabel}
                    onClick={() => {
                        toggleCalendar();
                        const wasHidden = state.calendarHidden;
                        if (wasHidden) {
                            const calendarEl = calendarRef.current;
                            const button = calendarEl && (calendarEl.querySelector("[autofocus]") as HTMLButtonElement);
                            button && setTimeout(() => button.focus(), 100);
                        }
                    }}
                    onFocus={() => handleFocusChange(onFocus)}
                    onBlur={() => handleFocusChange(onBlur)}
                />
                <div className="jkl-datepicker__calendar-wrapper">
                    <Calendar
                        currentDate={state.date}
                        onClickDate={onClickCalendarDay}
                        disableDate={disableDate}
                        hidden={state.calendarHidden}
                        inverted={inverted}
                        forceCompact={forceCompact}
                        ref={calendarRef}
                        {...calendarProps}
                    />
                </div>
            </div>
            <SupportLabel inverted={inverted} id={supportLabelId} helpLabel={helpLabel} errorLabel={errorLabel} />
        </div>
    );
}
