import { DataTestAutoId, Label, LabelProps, SupportLabel } from "@fremtind/jkl-core";
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
import React, {
    ChangeEvent,
    FocusEvent,
    forwardRef,
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
} from "react";
import { flushSync } from "react-dom";
import { Calendar } from "./internal/Calendar";
import { useCalendarId, useDisableDate } from "./internal/hooks";
import { createReducer } from "./internal/reducer";
import {
    DatePickerBlurEventHandler,
    DatePickerChangeEventHandler,
    DatePickerFocusEventHandler,
    DatePickerKeyDownEventHandler,
} from "./types";
import { formatDate, getInitialDate, DateInfo } from "./internal/utils";

interface Props extends DataTestAutoId {
    /** Settes på rotnivå. */
    id?: string;
    /** Settes på rotnivå. */
    className?: string;
    /**
     * @default "Velg dato"
     */
    label?: string;
    /**
     * Bruk labelProps for å sette props som `variant` og `srOnly`.
     */
    labelProps?: Omit<LabelProps, "children" | "forceCompact">;
    /**
     * Dersom komponenten ikke er _controlled_, send inn ønsket standardverdi her (hvis noen).
     * @default undefined // tomt skjemafelt
     */
    defaultValue?: Date;
    /**
     * Styr om du vil at kalenderen skal starte åpen.
     * @default false
     */
    defaultShow?: boolean;
    /**
     * Verdien til inputfeltet.
     */
    value?: string;
    /**
     * Skru av knapper i kalenderen før denne datoen,
     * og gi valideringsfeil om dato som har blitt skrevet inn er utenfor.
     */
    disableBeforeDate?: Date;
    /**
     * Skru av knapper i kalenderen etter denne datoen,
     * og gi valideringsfeil om dato som har blitt skrevet inn er utenfor.
     */
    disableAfterDate?: Date;
    /**
     * Settes på inputfeltet.
     */
    name?: string;
    /**
     * Hjelpetekst som vises under inputfeltet.
     */
    helpLabel?: string;
    /**
     * Hvis datovelgeren har valideringsfeil må dette feltet settes. Inputfeltet
     * merkes som ugyldig og teksten erstatter en eventuell hjelpetekst.
     */
    errorLabel?: string;
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
    /**
     * Bruk kompakt layout på skjemafeltet.
     */
    forceCompact?: boolean;
    /**
     * Vis et inputfelt og en select for å navigere mellom år og måneder, i stedet for piler frem og tilbake.
     * Kan være nyttig om brukeren forventes å hoppe langt frem eller tilbake i tid.
     * @default false
     */
    extended?: boolean;
    /**
     * Vises i inputfeltet hvis det ikke har noen input, som hint for datoformat.
     * @default "dd.mm.åååå"
     */
    placeholder?: string;
    /**
     * Bredden på inputfeltet, tilpasset typisk bredde for en dato i formatet `dd.mm.åååå`.
     * @default "11.5rem"
     */
    width?: string;
    /**
     * Kalles ved change-event fra datovelgerens inputfelt.
     *
     * Verdien fra selve eventet vil alltid være teksten fra inputfeltet.
     * Det er _ikke_ garantert at verdien fra `event.target.value` er en
     * gyldig dato, eller i datoformat.
     *
     * Kalles når brukeren velger en dato fra kalendervisningen. Kallet kommer
     * i form av et programatisk trigget change-event, så du vil ikke se noen
     * forskjell.
     *
     * Bruk meta-objektet for å se om det er valideringsfeil, og i så fal hvilken type feil:
     *
     *  - ugyldig format på tekst
     *  - dato utenfor minimum tillatte dato (satt med `disableBeforeDate`)
     *  - dato utenfor maksimum tillatte dato (satt med `disableAfterDate`)
     *
     * @example
     *  // TODO
     */
    onChange?: DatePickerChangeEventHandler;
    /**
     * Kalles ved focus-event fra datovelgerens inputfelt.
     *
     * @example
     *  // TODO
     */
    onFocus?: DatePickerFocusEventHandler;
    /**
     * Kalles ved blur-event fra datovelgerens inputfelt, og kommer når fokus flyttes ut
     * av skjemaelementet.
     *
     * @example
     *  // TODO
     */
    onBlur?: DatePickerBlurEventHandler;
    /**
     * Kalles ved onKeyDown på datovelgerens inputfelt. Dersom du trenger å fange opp
     * alle tastetrykk, inkludert Tab videre til knappen for å åpne/lukke kalenderen,
     * så kan du bruke dette eventet.
     *
     * @deprecated Eventet har mye overlapp med onChange, men var tidligere eneste metode for å
     * få tilbakemelding ved tastetrykk i inputfeltet. Foretrekk onChange for ny kode.
     */
    onKeyDown?: DatePickerKeyDownEventHandler;
}

export const DatePicker = forwardRef<HTMLInputElement, Props>((props, forwardedInputRef) => {
    const {
        "data-testautoid": testAutoId,
        id,
        className = "",
        label = "Velg dato",
        labelProps,
        defaultValue,
        defaultShow = false,
        value,
        disableBeforeDate,
        disableAfterDate,
        name,
        helpLabel,
        errorLabel,
        invalid,
        forceCompact,
        extended,
        placeholder = "dd.mm.åååå",
        width = "11.5rem",
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        ...rest
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
        calendarHidden: defaultShow,
        dateString: initialDateState ? formatDate(initialDateState) : "",
        error: undefined,
    });

    const wrapperRef = useRef<HTMLDivElement>(null);
    const defaultInputRef = useRef<HTMLInputElement>(null);
    const inputRef = (forwardedInputRef as RefObject<HTMLInputElement>) || defaultInputRef;
    const [calendarRef] = useAnimatedHeight<HTMLDivElement>(!state.calendarHidden, {
        onFirstVisible: () => {
            const calendarEl = calendarRef.current;
            const button = calendarEl && (calendarEl.querySelector('[aria-pressed="true"]') as HTMLButtonElement);
            button && button.focus();
        },
    });

    const onClickCalendarDay = useCallback(
        ({ date }: DateInfo) => {
            flushSync(() => {
                dispatch({ type: "TOGGLE" });
                dispatch({ type: "SELECT_DATE_IN_CALENDAR", payload: date });
            });
            inputRef.current && inputRef.current.focus();
        },
        [dispatch],
    );

    const handleFocusChange = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            const nextFocusIsInside = wrapperRef.current && wrapperRef.current.contains(e.relatedTarget as Node);
            if (onFocus && !nextFocusIsInside) {
                onFocus(e, state.date ?? null, { error: state.error, value: state.dateString });
            }
        },
        [onFocus, state.date, state.error, state.dateString],
    );

    const handleOnClick = useCallback(() => {
        dispatch({ type: "TOGGLE" });
    }, [dispatch]);

    const handleOnBlurChange = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            dispatch({ type: "SET_VALUE_ON_BLUR", payload: e.target.value });
            if (onBlur) {
                onBlur(e, state.date ?? null, { error: state.error, value: state.dateString });
            }
        },
        [onBlur, state.date, state.error, state.dateString],
    );

    const handleOnChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "INPUT_CHANGE", payload: e.target.value });
        },
        [dispatch],
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (onKeyDown) {
                onKeyDown(e, state.date ?? null, { error: state.error, value: state.dateString });
            }
        },
        [onKeyDown, state.date, state.error, state.dateString],
    );

    useClickOutside(wrapperRef, () => !state.calendarHidden && dispatch({ type: "TOGGLE" }));

    useFocusOutside(wrapperRef, () => !state.calendarHidden && dispatch({ type: "TOGGLE" }));

    useKeyListener(calendarRef, ["Escape"], () => {
        !state.calendarHidden && dispatch({ type: "TOGGLE" });
        inputRef.current && inputRef.current.focus();
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
            // onChange(state.date, undefined, { error: state.error, value: state.dateString });
            // TODO: trigger change event on input field
            // inputRef.current && inputRef.current.dispatchEvent();
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
            dispatch({ type: "VALUE_PROP_CHANGED", payload: value || "" });
        }
    }, [value, previousValue]);

    return (
        <div
            id={id}
            className={cn("jkl-datepicker", className, {
                "jkl-datepicker--open": !state.calendarHidden,
            })}
            {...rest}
        >
            <Label standAlone {...labelProps} forceCompact={forceCompact} htmlFor={inputId}>
                {label}
            </Label>
            <div
                ref={wrapperRef}
                data-testid="jkl-datepicker__input-wrapper"
                className={cn("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper", {
                    "jkl-text-input--compact": forceCompact,
                })}
            >
                <BaseInputField
                    id={inputId}
                    ref={inputRef}
                    name={name}
                    describedBy={helpLabel || errorLabel ? supportLabelId : undefined}
                    invalid={!!errorLabel || invalid}
                    className="jkl-datepicker__input jkl-text-input__input"
                    data-testid="jkl-datepicker__input"
                    value={state.dateString}
                    onFocus={handleFocusChange}
                    onBlur={handleOnBlurChange}
                    onKeyDown={handleKeyDown}
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
                />
                <div className="jkl-datepicker__calendar-wrapper">
                    <Calendar
                        ref={calendarRef}
                        defaultSelected={defaultSelected}
                        date={state.date}
                        minDate={minDate}
                        maxDate={maxDate}
                        hidden={state.calendarHidden}
                        extended={extended}
                        forceCompact={forceCompact}
                        onDateSelected={onClickCalendarDay}
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
