import type {
    HTMLProps,
    InputHTMLAttributes,
    MouseEventHandler,
    ReactNode,
} from "react";
import type { Density } from "../../core/types.js";
import type { IconProps } from "../icon/types.js";
import type { InputGroupProps } from "../input-group/types.js";

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
