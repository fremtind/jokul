import { DataTestAutoId, Label, LabelProps, LabelVariant, SupportLabel } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import {
    useAnimatedHeight,
    useClickOutside,
    useFocusOutside,
    useKeyListener,
    usePreviousValue,
} from "@fremtind/jkl-react-hooks";
import { BaseInputField } from "@fremtind/jkl-text-input-react";
import cn from "classnames";
import React, { ChangeEvent, FocusEvent, forwardRef, RefObject, useEffect, useMemo, useReducer, useRef } from "react";
import { Calendar } from "./Calendar";
import { formatDate, getInitialDate } from "./dateFunctions";
import { useCalendarId, useDisableDate } from "./internal/hooks";
import { createReducer, DateValidationError } from "./internal/reducer";

export interface ChangeDate {
    date: Date;
}

type DatePickerMetadata = {
    error: DateValidationError | undefined;
    value: string;
};

type onChangeEventHandler =
    | ((date?: Date, e?: ChangeEvent) => void)
    | ((date: Date | undefined, e: ChangeEvent | undefined, meta: DatePickerMetadata) => void);

type onBlurEventHandler = (date?: Date, e?: React.FocusEvent) => void;
type onFocusEventHandler = (date?: Date, e?: React.FocusEvent) => void;
type onKeyDownEventHandler = (date?: Date, e?: React.KeyboardEvent<HTMLInputElement>) => void;

interface Props extends DataTestAutoId {
    name?: string;
    label?: string;
    labelProps?: Omit<LabelProps, "children" | "forceCompact">;
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
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    forceCompact?: boolean;
    disableBeforeDate?: Date;
    disableAfterDate?: Date;
    width?: string;
    onChange?: onChangeEventHandler;
    onFocus?: onFocusEventHandler;
    onBlur?: onBlurEventHandler;
    onKeyDown?: onKeyDownEventHandler;
}

export const DatePicker = forwardRef<HTMLElement, Props>(
    (
        {
            name,
            label = "Velg dato",
            labelProps,
            placeholder = "dd.mm.åååå",
            calendarButtonTitle,
            showCalendarLabel = calendarButtonTitle || "Åpne kalender",
            hideCalendarLabel = calendarButtonTitle || "Lukk kalender",
            initialDate,
            value,
            onChange,
            onBlur,
            onFocus,
            onKeyDown,
            initialShow = false,
            className = "",
            forceCompact,
            disableBeforeDate,
            disableAfterDate,
            variant,
            helpLabel,
            errorLabel,
            width = "11.5rem",
            "data-testautoid": testAutoId,
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

        const reducer = useMemo(
            () => createReducer(disableBeforeDate, disableAfterDate),
            [disableBeforeDate, disableAfterDate],
        );
        const initialDateState = getInitialDate(value, initialDate, disableDate);

        const [state, dispatch] = useReducer(reducer, {
            date: initialDateState,
            calendarHidden: !initialShow,
            dateString: initialDateState ? formatDate(initialDateState) : "",
            error: undefined,
        });

        const componentClassName = cn(
            "jkl-datepicker",
            {
                "jkl-datepicker--open": !state.calendarHidden,
            },
            className,
        );
        const inputWrapperClassName = cn("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper", {
            "jkl-text-input--compact": forceCompact,
        });
        const wrapperRef = useRef<HTMLDivElement>(null);
        const inputRef = useRef<HTMLInputElement>(null);
        const textboxRef = (ref as RefObject<HTMLInputElement>) || inputRef;
        const [calendarRef] = useAnimatedHeight(!state.calendarHidden);

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

        const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "INPUT_CHANGE", payload: e.target.value });
        };

        const handleKeyDown = (fn?: onKeyDownEventHandler) => (e: React.KeyboardEvent<HTMLInputElement>) => {
            fn?.(state.date, e);
        };

        useClickOutside(wrapperRef, () => !state.calendarHidden && dispatch({ type: "TOGGLE" }));

        useFocusOutside(wrapperRef, () => !state.calendarHidden && dispatch({ type: "TOGGLE" }));

        useKeyListener(calendarRef, ["Escape"], () => {
            !state.calendarHidden && dispatch({ type: "TOGGLE" });
            textboxRef.current && textboxRef.current.focus();
        });

        const previousState = usePreviousValue(state);
        useEffect(() => {
            if (!onChange) {
                return;
            }

            const dateHasChanged = (previousState?.date || state.date) && state.date !== previousState?.date;
            const dateStringHasChanged =
                (previousState?.dateString || state.dateString) && state.dateString !== previousState?.dateString;
            const errorHasChanged = (previousState?.error || state.error) && state.error !== previousState?.error;

            if (dateHasChanged || dateStringHasChanged || errorHasChanged) {
                onChange(state.date, undefined, { error: state.error, value: state.dateString });
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            state.date,
            state.dateString,
            state.error,
            previousState?.date,
            previousState?.dateString,
            previousState?.error,
        ]);

        const previousValue = usePreviousValue(value);
        useEffect(() => {
            if (value !== previousValue) {
                dispatch({ type: "VALUE_PROP_CHANGED", payload: value });
            }
        }, [value, previousValue]);

        return (
            <div className={componentClassName}>
                <Label standAlone variant={variant} {...labelProps} forceCompact={forceCompact} htmlFor={inputId}>
                    {label}
                </Label>
                <div className={inputWrapperClassName} ref={wrapperRef} data-testid="jkl-datepicker__input-wrapper">
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
                        onKeyDown={handleKeyDown(onKeyDown)}
                        onClick={handleOnClick}
                        onChange={handleOnChange}
                        placeholder={placeholder}
                        width={width}
                        type="text"
                        data-testautoid={testAutoId}
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
                            forceCompact={forceCompact}
                            ref={calendarRef}
                            {...calendarProps}
                        />
                    </div>
                </div>
                <SupportLabel
                    forceCompact={forceCompact}
                    id={supportLabelId}
                    helpLabel={helpLabel}
                    errorLabel={errorLabel}
                />
            </div>
        );
    },
);
DatePicker.displayName = "DatePicker";
