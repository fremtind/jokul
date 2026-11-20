import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from "react";
import type { JokulModes, WithDisabled } from "../../utilities/types.js";
import type { FieldGroupProps } from "../input-group/types.js";
import type { Tracking } from "../types.js";

export type InputCardType = "radio" | "checkbox";

export type InputCardProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children" | "disabled" | "type" | "title"
> &
    JokulModes &
    WithDisabled & {
        /**
         * Om kortet er et enkeltvalg (`radio`) eller et flervalg (`checkbox`).
         */
        type: InputCardType;
        /**
         * Tittelen på valget. Fungerer som navnet på kontrollen for skjermlesere.
         */
        label: ReactNode;
        /**
         * Valgfri tekst som utdyper valget. Leses opp som beskrivelse av kontrollen.
         */
        description?: ReactNode;
        /**
         * Illustrasjon, ikon eller bilde som vises øverst i kortet. Illustrasjonen
         * skjules for skjermlesere. Skal bildet formidle noe som ikke står i
         * tittelen eller beskrivelsen, må det flyttes inn i en av dem.
         */
        illustration?: ReactNode;
        /**
         * Markerer kortet som ugyldig. Settes automatisk av `InputCardGroup` når
         * gruppen har en `errorLabel`.
         */
        invalid?: boolean;
        value?: string;
        trackingProps?: Tracking;
    };

export interface InputCardGroupProps extends Omit<FieldGroupProps, "onChange"> {
    /** Alle kortene i gruppen får dette som name. */
    name?: string;
    /** Gjør en radiogruppe controlled ved å sette den valgte verdien her. */
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Kortene legges ved siden av hverandre og brytes til en kolonne når det
     * ikke er plass. `vertical` legger dem alltid under hverandre.
     * @default "horizontal"
     */
    direction?: "horizontal" | "vertical";
    /**
     * Setter `role="radiogroup"` på gruppen. Sett til `checkbox` når gruppen
     * inneholder flervalg.
     * @default "radio"
     */
    type?: InputCardType;
    /**
     * Erstatter hjelpeteksten (hvis noen) med en feilmelding.
     * Merker samtidig alle kortene i gruppen som ugyldige.
     */
    errorLabel?: string;
}
