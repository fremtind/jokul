import { PolymorphicPropsWithRef } from "@fremtind/jkl-core";

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
