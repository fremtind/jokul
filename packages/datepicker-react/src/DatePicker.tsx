import { DataTestAutoId, Label, LabelProps, SupportLabel } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { useAnimatedHeight, useClickOutside, useFocusOutside, useId, useKeyListener } from "@fremtind/jkl-react-hooks";
import { BaseInputField } from "@fremtind/jkl-text-input-react";
import cn from "classnames";
import startOfDay from "date-fns/startOfDay";
import React, {
    ButtonHTMLAttributes,
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    forwardRef,
    useCallback,
    useRef,
    useState,
} from "react";
import { Calendar } from "./internal/Calendar";
import {
    DatePickerBlurEventHandler,
    DatePickerChangeEventHandler,
    DatePickerFocusEventHandler,
    DatePickerKeyDownEventHandler,
    DateValidationError,
} from "./types";
import { getInitialDate, DateInfo } from "./internal/utils";
import { formatInput, parseDateString } from "./utils";
import { isWithinLowerBound, isWithinUpperBound } from "./validation";
import { flushSync } from "react-dom";

export interface DatePickerProps extends DataTestAutoId {
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
     *
     * @example
     *  ```tsx
     *  <DatePicker
     *      labelProps={{ srOnly: true }}
     *  />
     *  ```
     */
    labelProps?: Omit<LabelProps, "children" | "forceCompact">;
    /**
     * dd.mm.åååå
     *
     * Dersom komponenten ikke er _controlled_, send inn ønsket standardverdi her (hvis noen).
     *
     * @default undefined // tomt skjemafelt
     */
    defaultValue?: string;
    /**
     * Styr om du vil at kalenderen skal starte åpen.
     * @default false
     */
    defaultShow?: boolean;
    /**
     * dd.mm.åååå
     *
     * Verdien til inputfeltet.
     */
    value?: string;
    /**
     * dd.mm.åååå
     *
     * Skru av knapper i kalenderen før denne datoen,
     * og gi valideringsfeil om dato som har blitt skrevet inn er utenfor.
     */
    disableBeforeDate?: string;
    /**
     * dd.mm.åååå
     *
     * Skru av knapper i kalenderen etter denne datoen,
     * og gi valideringsfeil om dato som har blitt skrevet inn er utenfor.
     */
    disableAfterDate?: string;
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
     * Om du ønsker andre labels for ukedagene kan du gi de her.
     */
    days?: string[];
    /**
     * Om du ønsker andre labels for måneder kan du gi de her.
     */
    months?: string[];
    /**
     * Overstyr hvordan vi omtaler "Måned".
     * @default "Måned"
     */
    monthLabel?: string;
    /**
     * Overstyr hvordan vi omtaler "År".
     * @default "År"
     */
    yearLabel?: string;
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
     * Kalles ved change-event fra datovelgerens inputfelt. Verdien fra selve eventet vil
     * alltid være teksten fra inputfeltet.
     *
     * Det er _ikke_ garantert at verdien fra `event.target.value` er en
     * gyldig dato, eller i datoformat. Andre parameter vil enten være en gyldig
     * `Date` eller `null`. Tredje parameter har informasjon om validering,
     * men du kan også gjøre validering selv rett på `event.target.value`
     * med utility-funksjoner som eksporteres fra pakka (se eksempel lenger ned).
     *
     * Kalles også når brukeren velger en dato fra kalendervisningen. Kallet
     * prøver å simulere et vanlig change-event så nært som mulig.
     *
     * Bruk meta-objektet for å se om det er valideringsfeil, og i så fal hvilken type feil:
     *
     *  - ugyldig format på tekst
     *  - dato utenfor minimum tillatte dato (satt med `disableBeforeDate`)
     *  - dato utenfor maksimum tillatte dato (satt med `disableAfterDate`)
     *
     * @example
     *
     *  ```tsx
     *  <DatePicker
     *      value={value}
     *      onChange={(e, date, meta) => {
     *          setValue(e.target.value);
     *
     *          console.log("onChange", {
     *              event: e,
     *              date,
     *              meta,
     *          });
     *      }}
     *  />
     *  ```
     *
     * @example
     *
     *  ```tsx
     *  import {
     *      DatePicker,
     *      formatInput,
     *      isCorrectFormat,
     *      isWithinUpperBound,
     *      isWithinLowerBound,
     *      parseDateString
     *  } from "@fremtind/jkl-datepicker-react";
     *  import { formatDate } from "@fremtind/jkl-formatters-util";
     *
     *  <DatePicker
     *      label="Fødselsdato"
     *      errorLabel={formState.errors.fodselsdato?.message}
     *      disableBefore="01.01.1970"
     *      disableAfter={formatInput(new Date())}
     *      {...register("fodselsdato", {
     *          required: "Du må fylle ut fødselsdato",
     *          validate: {
     *              isCorrectFormat: (v) =>
     *                  isCorrectFormat(v) ||
     *                  `Datoen må være skrevet i formen ${formatDate(new Date())} eller kortformat`,
     *              withinLowerBound: (v) =>
     *                  isWithinLowerBound(v, parseDateString("01.01.1970") || "Datoen må være før 01.01.1970"",
     *              withinUpperBound: (v) =>
     *                  isWithinUpperBound(v, new Date()) || `Datoen må være før ${formatDate(new Date())}`,
     *          },
     *      })}
     *  />
     *  ```
     */
    onChange?: DatePickerChangeEventHandler;
    /**
     * Kalles ved focus-event fra datovelgerens inputfelt.
     *
     * @example
     *  ```tsx
     *  <DatePicker
     *      onFocus={(e, date, meta) => {
     *          console.log("onFocus", {
     *              event: e,
     *              date,
     *              meta,
     *          });
     *      }}
     *  />
     *  ```
     */
    onFocus?: DatePickerFocusEventHandler;
    /**
     * Kalles ved blur-event fra datovelgerens inputfelt, og kommer når fokus flyttes ut
     * av skjemaelementet.
     *
     * **NB!** Dette inkluderer når fokus flyttes inn i kalenderen, eller til kalenderknappen!
     *
     * Om du ønsker å gjøre ting når brukeren går videre fra hele DatePicker:
     *   1. Ha en onBlur på DatePicker, men ignorere events når fokus er inni DatePicker
     *   2. Ha en onBlur på DatePicker sin action-prop (kalenderknappen), og gjøre det samme
     *
     * Hjelpefunksjonen isBlurTargetOutside hjelper med detaljene.
     *
     * @example
     *  ```tsx
     *  import { DatePicker, isBlurTargetOutside } from "@fremtind/jkl-datepicker-react";
     *
     *  <DatePicker
     *      onBlur={(e, date, meta) => {
     *          // Ignorer blurs som går til kalenderknapper
     *          if (isBlurTargetOutside(e)) {
     *              console.log("onBlur");
     *          }
     *      }}
     *      action={{
     *          onBlur: (e) => {
     *              // Ignorer blurs som går tilbake til inputfeltet
     *              if (isBlurTargetOutside(e)) {
     *                  console.log("action.onBlur");
     *              }
     *          },
     *      }}
     *  />
     *  ```
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
    /**
     * Lar deg sette lyttere på kalenderknappen i skjemafeltet.
     */
    action?: DatePickerAction;
    showCalendarLabel?: string;
    hideCalendarLabel?: string;
}

export interface DatePickerAction extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {}

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
        forceCompact,
        extended,
        days,
        months,
        monthLabel,
        yearLabel,
        placeholder = "dd.mm.åååå",
        width = "11.5rem",
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

    const inputWrapperRef = useRef<HTMLDivElement>(null);
    const handleFocus = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            if (!onFocus || !inputWrapperRef.current) {
                return;
            }

            const nextFocusIsInside = inputWrapperRef.current.contains(e.relatedTarget as Node);
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

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (onKeyDown) {
                let nextValue = e.currentTarget.value;
                if (/[\d.]/.test(e.key)) {
                    nextValue += e.key;
                }
                onKeyDown(e, date, { error, value: nextValue });
            }
        },
        [onKeyDown, date, error],
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

    useClickOutside(inputWrapperRef, hideCalendar);
    useFocusOutside(inputWrapperRef, hideCalendar);
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
        >
            <Label standAlone {...labelProps} forceCompact={forceCompact} htmlFor={inputId}>
                {label}
            </Label>
            <div
                ref={inputWrapperRef}
                data-testid="jkl-datepicker__input-wrapper"
                className={cn("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper", {
                    "jkl-text-input--compact": forceCompact,
                })}
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
                    className="jkl-datepicker__action-button jkl-text-input__action-button"
                    iconType="calendar"
                    buttonTitle={showCalendar ? hideCalendarLabel : showCalendarLabel}
                    {...action}
                    onClick={clickCalendar}
                />
                <div className="jkl-datepicker__calendar-wrapper">
                    <Calendar
                        ref={calendarRef}
                        defaultSelected={defaultSelectedInCalendar}
                        date={date}
                        minDate={minDate}
                        maxDate={maxDate}
                        days={days}
                        months={months}
                        monthLabel={monthLabel}
                        yearLabel={yearLabel}
                        hidden={!showCalendar}
                        extended={extended}
                        forceCompact={forceCompact}
                        onDateSelected={handleClickCalendarDay}
                        onTabOutside={handleTabOutsideCalendar}
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
