import type { Placement } from "@floating-ui/react";
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import type { DataTestAutoId, WithChildren } from "../../core/types.js";
import type { SwipeChangeHandler } from "../../hooks/useSwipeGesture/useSwipeGesture.js";

export interface MenuProps
    extends DataTestAutoId,
        WithChildren,
        Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onToggle"> {
    className?: string;
    /**
     * Initiell plassering av menyen. Dersom det ikke er plass på skjermen der du
     * angir at den skal åpnes vil den slyttes automatisk.
     * @default "bottom-start" på toppnivå, "right-start" for undermenyer
     * */
    initialPlacement?: Placement;
    /**
     * Angir om menyen skal åpnes ved hover (uten å måtte klikke)
     * @default false
     */
    openOnHover?: boolean;
    /**
     * Angir om menyen skal holdes åpen når man klikker utenfor menyen
     * @default false
     */
    keepOpenOnClickOutside?: boolean;
    /**
     * Elementet som fungerer som trigger for menyen. Dersom elementet ikke er en `<button type="button">`
     * eller en `forwardRef<HTMLButtonElement>` vil det bli lagt inne i en knapp
     * med forhåndsdefinert stil. For å komme raskt i gang kan du bruke komponenten
     * `MenuTriggerButton` fra denne pakken.
     */
    triggerElement: ReactNode;
    /**
     * Kan brukes til å styre utenfra om menyen skal være åpen eller ikke.
     * @default false
     */
    isOpen?: boolean;
    /**
     * Callback som kalles når menyen åpnes eller lukkes.
     */
    onToggle?: (isOpen: boolean) => void;
}

export interface MenuItemCheckboxProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "aria-checked" | "onChange"> {
    "aria-checked": boolean;
    /**
     * Et ikon som vises før innholdet i menypunktet
     */
    icon?: ReactNode;
    onChange?: SwipeChangeHandler<HTMLDivElement> &
        ((
            event:
                | React.KeyboardEvent<HTMLDivElement>
                | React.PointerEvent<HTMLDivElement>,
            pressed: boolean,
        ) => void);
}
