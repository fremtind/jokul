import type { Density, WithChildren } from "../../core/types.js";
import type { PolymorphicPropsWithRef } from "../../utilities/index.js";

export type NavTabProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
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
    >;

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
