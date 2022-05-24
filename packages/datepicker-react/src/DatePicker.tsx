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
import startOfDay from "date-fns/startOfDay";
import React, { ChangeEvent, FocusEvent, forwardRef, RefObject, useEffect, useMemo, useReducer, useRef } from "react";
import { flushSync } from "react-dom";
import { Calendar } from "./internal/Calendar";
import { useCalendarId, useDisableDate } from "./internal/hooks";
import { createReducer, DateValidationError } from "./internal/reducer";
import { formatDate, getInitialDate, DateInfo } from "./internal/utils";

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
    /**
     * @default "dd.mm.åååå"
     */
    placeholder?: string;
    labelProps?: Omit<LabelProps, "children" | "forceCompact">;
    defaultValue?: Date;
    /**
     * Styr om du vil at kalenderen skal starte åpen
     * @default false
     */
    defaultShow?: boolean;
    value?: Date;
    extended?: boolean;
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
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
}

export const DatePicker = forwardRef<HTMLElement, Props>((props, ref) => {
    const {
        name,
        label = "Velg dato",
        labelProps,
        placeholder = "dd.mm.åååå",
        defaultValue,
        value,
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        defaultShow: initialShow = false,
        className = "",
        forceCompact,
        disableBeforeDate,
        disableAfterDate,
        variant,
        helpLabel,
        errorLabel,
        invalid,
        width = "11.5rem",
        "data-testautoid": testAutoId,
        ...calendarProps
    } = props;

    const [inputId, supportLabelId] = useCalendarId();

    const minDate = disableBeforeDate ? startOfDay(disableBeforeDate) : undefined;
    const maxDate = disableAfterDate ? startOfDay(disableAfterDate) : undefined;
    const reducer = useMemo(() => createReducer(minDate, maxDate), [minDate, maxDate]);

    const disableDate = useDisableDate(minDate, maxDate);
    const initialDateState = getInitialDate(value, defaultValue, disableDate);
    const defaultSelected = startOfDay(new Date());

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
    const [calendarRef] = useAnimatedHeight<HTMLDivElement>(!state.calendarHidden, {
        onFirstVisible: () => {
            const calendarEl = calendarRef.current;
            const button = calendarEl && (calendarEl.querySelector('[aria-pressed="true"]') as HTMLButtonElement);
            button && button.focus();
        },
    });

    const onClickCalendarDay = ({ date }: DateInfo) => {
        flushSync(() => {
            dispatch({ type: "TOGGLE" });
            dispatch({ type: "SELECT_DATE_IN_CALENDAR", payload: date });
        });
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

        const dateHasChanged =
            (previousState?.date || state.date) && state.date?.getTime() !== previousState?.date?.getTime();
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
                    invalid={!!errorLabel || invalid}
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
                    buttonTitle={state.calendarHidden ? "Vis kalender" : "Skjul kalender"}
                    onClick={() => {
                        dispatch({ type: "TOGGLE" });
                    }}
                    onFocus={handleFocusChange(onFocus)}
                    onBlur={handleFocusChange(onBlur)}
                />
                <div className="jkl-datepicker__calendar-wrapper">
                    <Calendar
                        ref={calendarRef}
                        date={state.date}
                        defaultSelected={defaultSelected}
                        hidden={state.calendarHidden}
                        minDate={minDate}
                        maxDate={maxDate}
                        onDateSelected={onClickCalendarDay}
                        forceCompact={forceCompact}
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
});
DatePicker.displayName = "DatePicker";
