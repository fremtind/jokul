import { Label, LabelVariant, SupportLabel } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { useAnimatedHeight, useClickOutside, useFocusOutside, useKeyListener } from "@fremtind/jkl-react-hooks";
import { BaseInputField } from "@fremtind/jkl-text-input-react";
import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, forwardRef, RefObject, useEffect, useMemo, useReducer, useRef } from "react";
import { Calendar } from "./Calendar";
import { formatDate, getInitialDate } from "./dateFunctions";
import { useCalendarId, useDisableDate } from "./internal/hooks";
import { createReducer } from "./internal/reducer";

export interface ChangeDate {
    date: Date;
}

type onChangeEventHandler = (date?: Date, e?: ChangeEvent) => void;
type onBlurEventHandler = (date?: Date, e?: FocusEvent) => void;
type onFocusEventHandler = (date?: Date, e?: FocusEvent) => void;

interface Props {
    name?: string;
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
    width?: string;
    onChange?: onChangeEventHandler;
    onFocus?: onFocusEventHandler;
    onBlur?: onBlurEventHandler;
}

export const DatePicker = forwardRef<HTMLElement, Props>(
    (
        {
            name,
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
            width = "11.5rem",
            ...calendarProps
        },
        ref,
    ) => {
        if (calendarButtonTitle && process.env.NODE_ENV !== "production") {
            console.warn(
                "WARNING: For better usability, please supply separate button titles for showing/hiding the calendar, using the showCalendarLabel and hideCalendarLabel props respectively. The calendarButtonTitle prop is deprecated and will be removed in a future update.",
            );
        }

        const disableDate = useDisableDate(disableBeforeDate, disableAfterDate);
        const [inputId, supportLabelId] = useCalendarId();

        const reducer = useMemo(() => createReducer(disableBeforeDate, disableAfterDate), [
            disableBeforeDate,
            disableAfterDate,
        ]);
        const initialDateState = getInitialDate(value, initialDate, disableDate);

        const [state, dispatch] = useReducer(reducer, {
            date: initialDateState,
            calendarHidden: !initialShow,
            dateString: initialDateState ? formatDate(initialDateState) : "",
        });

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
        const wrapperRef = useRef<HTMLDivElement>(null);
        const inputRef = useRef<HTMLInputElement>(null);
        const textboxRef = (ref as RefObject<HTMLInputElement>) || inputRef;
        const [calendarRef] = useAnimatedHeight(!state.calendarHidden);
        const isFirstRenderRef = useRef(true);

        const onClickCalendarDay = (e: ChangeEvent<ChangeDate>) => {
            dispatch({ type: "SELECT_DATE_IN_CALENDAR", payload: e.target.date });
            textboxRef.current && textboxRef.current.focus();
        };

        const handleFocusChange = (fn?: onFocusEventHandler) => (e: FocusEvent) => {
            const nextFocusIsInside = wrapperRef.current && wrapperRef.current.contains(e.relatedTarget as Node);
            if (fn && !nextFocusIsInside) {
                fn(state.date, e);
            }
        };

        const handleOnClick = () => {
            dispatch({ type: "TOGGLE" });
        };

        const handleOnBlurChange = (fn?: onFocusEventHandler) => (e: FocusEvent<HTMLInputElement>) => {
            dispatch({ type: "SET_VALUE_ON_BLUR", payload: e.target.value });
            handleFocusChange(fn)(e);
        };

        const handleOnChange = (e: FocusEvent<HTMLInputElement>) => {
            dispatch({ type: "INPUT_CHANGE", payload: e.target.value });
        };

        useClickOutside(wrapperRef, () => !state.calendarHidden && dispatch({ type: "TOGGLE" }));

        useFocusOutside(wrapperRef, () => !state.calendarHidden && dispatch({ type: "TOGGLE" }));

        useKeyListener(calendarRef, ["Escape"], () => {
            !state.calendarHidden && dispatch({ type: "TOGGLE" });
            textboxRef.current && textboxRef.current.focus();
        });

        useEffect(() => {
            if (!isFirstRenderRef.current && onChange) {
                onChange(state.date);
            }
        }, [state.date, onChange]);

        useEffect(() => {
            if (!isFirstRenderRef.current) {
                dispatch({ type: "VALUE_PROP_CHANGED", payload: value });
            }
        }, [value]);

        useEffect(() => {
            isFirstRenderRef.current = false;
        }, []);

        return (
            <div className={componentClassName}>
                <Label standAlone htmlFor={inputId} variant={variant}>
                    {label}
                </Label>
                <div className={inputWrapperClassName} ref={wrapperRef}>
                    <BaseInputField
                        id={inputId}
                        ref={textboxRef}
                        name={name}
                        describedBy={helpLabel || errorLabel ? supportLabelId : undefined}
                        invalid={!!errorLabel}
                        className="jkl-datepicker__input jkl-text-input__input"
                        data-testid="jkl-datepicker__input"
                        value={state.dateString}
                        onFocus={handleFocusChange(onFocus)}
                        onBlur={handleOnBlurChange(onBlur)}
                        onClick={handleOnClick}
                        onChange={handleOnChange}
                        placeholder={placeholder}
                        width={width}
                        type="text"
                    />
                    <IconButton
                        className="jkl-text-input__action-button"
                        iconType="calendar"
                        buttonTitle={state.calendarHidden ? showCalendarLabel : hideCalendarLabel}
                        onClick={() => {
                            dispatch({ type: "TOGGLE" });
                            const wasHidden = state.calendarHidden;
                            if (wasHidden) {
                                const calendarEl = calendarRef.current;
                                const button =
                                    calendarEl && (calendarEl.querySelector("[autofocus]") as HTMLButtonElement);
                                button && setTimeout(() => button.focus(), 100);
                            }
                        }}
                        onFocus={handleFocusChange(onFocus)}
                        onBlur={handleFocusChange(onBlur)}
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
    },
);
