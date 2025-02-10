import {
    HTMLProps,
    InputHTMLAttributes,
    MouseEventHandler,
    ReactNode,
    TextareaHTMLAttributes,
} from "react";
import { Density } from "../../core/types.js";
import { IconProps } from "../icon/types.js";
import { InputGroupProps } from "../input-group/types.js";

export interface BaseTextInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "children" | "maxLength"
    > {
    /**
     * Brukes til inputfelter hvor det brukes maskering, for formatering av store tall. Brukes typisk bare til valuta.
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * @deprecated Bruk heller actionButton
     *
     */
    action?: Action;
    density?: Density;
    /**
     * Benevnelse for feltet. Unngå å bruke både benevnelse og handling samtidig
     * @example "kr"
     * */
    unit?: ReactNode;
    width?: string;
    /**
     * Element som vises til høyre for inputfeltet. Brukes typisk til å trigge en handling som f.eks. å vise/skjule passord.
     */
    actionButton?: React.ReactElement;
    /**
     * Setter maxlength attributtet og justerer bredden på feltet til å passe det tallet som settes
     *
     * Merk: I noen Android-browsere vil dette ikke fungere som forventet. Det er gjort sånn
     * pga begrensninger med hvordan software-tastaturet fungerer og er ikke en bug. Dersom
     * man er veldig avhengig av at maxLength håndteres på alle plattformer anbefales det
     * å bruke input-feltet som en controlled input og selv begrense lengden på verdien.
     */
    maxLength?: number | undefined;
}

export interface TextInputProps
    extends Omit<InputGroupProps, "children">,
        BaseTextInputProps {
    "data-testautoid"?: string;
    inline?: boolean;
    inputClassName?: string;
}

interface ActionBaseProps
    extends Exclude<HTMLProps<HTMLButtonElement>, "disabled"> {
    icon: React.ReactElement<IconProps>;
    label: string;
    buttonRef?: React.Ref<HTMLButtonElement>;
}

export interface ActionButton extends ActionBaseProps {
    type?: "button" | "reset";
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ActionSubmit extends ActionBaseProps {
    type: "submit";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type Action = ActionButton | ActionSubmit;

export type Counter = {
    /** Antall tegn før telleren når maksimum og vi viser en feilmelding */
    maxLength: number;
    /**
     * Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
     * ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
     * Om du vil skjule den, sett denne propen til true.
     *
     * @default false
     */
    hideProgress?: boolean;
};

export interface BaseTextAreaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
    /**
     * Viser en teller i tekstfeltet når det har fokus.
     */
    counter?: Counter;
    /** Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til. */
    rows?: number;
    inline?: boolean;
    startOpen?: boolean;
    /** Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle */
    autoExpand?: boolean;
}

export interface TextAreaProps
    extends Omit<InputGroupProps, "children">,
        BaseTextAreaProps {}
