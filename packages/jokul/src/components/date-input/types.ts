import type { InputHTMLAttributes } from "react";
import type { DataTestAutoId } from "../../utilities/types.js";
import type { InputGroupProps } from "../input-group/types.js";

/**
 * Props for `DateInput`. Komponenten bygger på et native `<input type="date">`,
 * så verdier inn og ut er alltid ISO-formaterte datostrenger (`YYYY-MM-DD`).
 * Hva brukeren ser i feltet styres av nettleseren og brukerens språk-/regioninnstillinger.
 *
 * Kan brukes både kontrollert (`value` + `onChange`) og ukontrollert (`defaultValue`,
 * eller via react-hook-forms `register`).
 */
export type DateInputProps = Omit<InputGroupProps, "children" | "render"> &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type" | "value" | "defaultValue" | "min" | "max"
    > &
    DataTestAutoId & {
        /**
         * Kontrollert verdi som ISO-datostreng (`YYYY-MM-DD`), f.eks. `"2026-08-13"`.
         * Oppgis sammen med `onChange`. La stå udefinert for ukontrollert bruk.
         */
        value?: string;
        /**
         * Startverdi for ukontrollert bruk, som ISO-datostreng (`YYYY-MM-DD`).
         * Brukes når feltet ikke er kontrollert, f.eks. sammen med `register`.
         */
        defaultValue?: string;
        /**
         * Tidligste valgbare dato som ISO-datostreng (`YYYY-MM-DD`). Datoer før
         * denne gråes ut i kalenderen. `number` godtas for kompatibilitet med
         * react-hook-forms `register`, men ISO-streng anbefales.
         */
        min?: string | number;
        /**
         * Seneste valgbare dato som ISO-datostreng (`YYYY-MM-DD`). Datoer etter
         * denne gråes ut i kalenderen. `number` godtas for kompatibilitet med
         * react-hook-forms `register`, men ISO-streng anbefales.
         */
        max?: string | number;
    };
