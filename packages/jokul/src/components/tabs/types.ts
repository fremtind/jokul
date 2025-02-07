import { type AnchorHTMLAttributes, type ElementType } from "react";
import { Density, WithChildren } from "../../core/types.js";

export interface NavTabProps<T extends object = Record<string, unknown>>
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Sett til true for den nåværende fanen. False på resten. */
    "aria-selected": boolean;
    className?: string;
    id?: string;
    /**
     * Overstyr hvilken komponent som skal brukes, for eksempel hvis du har en Link-komponent fra en router.
     * @default "a"
     */
    component?: ElementType;
    /** Send inn custom props til `component`. Nyttig om routeren din har noe fancy custom greier. */
    componentProps?: T;
    /** Vanlig alternativ til `href` i routere. */
    to?: string;
    href?: string;
    /**
     * Hook for å kunne stoppe default oppførsel ved tastaturnavigasjon.
     *
     * Om default oppførsel ikke fungerer for deg og du mister tastaturfokus etter
     * navigasjon kan du returnere `false` her og sørge for korrekt oppførsel selv.
     */
    onBeforeKeyboardNavigation?: (
        from: HTMLAnchorElement,
        to: HTMLAnchorElement,
    ) => boolean | void;
}

export interface NavTabsProps extends WithChildren {
    "aria-label"?: string;
    className?: string;
    density?: Density;
    id?: string;
}

export interface TabProps extends WithChildren {
    className?: string;
}

export interface TabListProps extends WithChildren {
    "aria-label"?: string;
    className?: string;
}

export interface TabPanelProps extends WithChildren {
    className?: string;
}

export interface TabsProps extends WithChildren {
    className?: string;
    density?: Density;
    onChange?: (tabIndex: number) => void;
    defaultTab?: number;
}
