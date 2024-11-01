import type {
    ButtonHTMLAttributes,
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
} from "react";
import { DataTestAutoId, Density } from "../../core/types.js";
import { InputGroupProps } from "../input-group/InputGroup.js";
import { LabelProps } from "../input-group/Label.js";

export type DateValidationError =
    | "WRONG_FORMAT"
    | "OUTSIDE_LOWER_BOUND"
    | "OUTSIDE_UPPER_BOUND";

export type DatePickerChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
    date: Date | null,
    meta: DatePickerMetadata,
) => void;

export type DatePickerBlurEventHandler = (
    e: FocusEvent<HTMLInputElement>,
    date: Date | null,
    meta: DatePickerMetadata,
) => void;

export type DatePickerFocusEventHandler = DatePickerBlurEventHandler;

export type DatePickerKeyDownEventHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    date: Date | null,
    meta: DatePickerMetadata,
) => void;

export type DatePickerMetadata = {
    error: DateValidationError | null;
    /** Samme som event.target.value */
    value: string;
};

export type YearsToShow = number | "all" | { previous: number; coming: number };

export interface DatePickerProps
    extends Omit<InputGroupProps, "label" | "children">,
        DataTestAutoId {
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
    labelProps?: Omit<LabelProps, "children">;
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
     * Angir hvor mange år som skal vises i nedtrekkslisten i kalenderen. Du kan angi samme verdi
     * for kommende og foregående år ved å sende inn et tall, eller sende inn et objekt med separate
     * verdier for kommende og foregående år. Hvis du sender inn "all" vil alle år mellom min. og
     * maks. dato vises i listen (eller default antall år hvis ikke min./maks. dato er angitt).
     * @default 3
     */
    yearsToShow?: YearsToShow;
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
    density?: Density;
    /**
     * @deprecated Kalenderen viser nå alltid kontroller for å navigere mellom år og måneder. Denne prop'en gjør ikke lenger noe og kan fjernes.
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
     * @default "10ch"
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

export interface DatePickerAction
    extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {}

export type ComparisonOptions = {
    /**
     * Kontroller om testen skal godkjennes om verdien er lik
     * @default false
     */
    inclusive: boolean;
};
