# Migrasjonsguide for Jøkul React hooks

## Til `jkl-react-hooks@v8.0.0`

-   `useScreen` gir ikke lenger dimensjoner til vinduet, bare typen skjerm
-   `initialScreenState` eksporteres ikke som en egen prop
-   `useReucedMotion` (som har vært deprecated) er fjernet - bruk `useBrowserPreferences`

### `useScreen`

`useScreen` leverer ikke lenger dimensjonene til nettleservinduet i piksler, og det eksporteres ingen `initialState` siden denne nå regnes ut ved første render. Resten av APIet fungerer som tidligere.

Hvis du vil bruke `useScreen` i en `context`, og vil initialisere med fallback-verdier for skjermstørrelse (f.eks. for bruk i server side rendering), kan du lage et eget objekt med `ScreenState`-typen som eksporteres fra `@fremtind/jkl-react-hooks`:

```tsx
import { createContext, FC } from "react";
import { useScreen } from "@fremtind/jkl-react-hooks";
import type { ScreenState } from "@fremtind/jkl-react-hooks";

const myInitialScreenState: ScreenState = {
    isSmallDevice: false,
    isMediumDevice: true,
    //...
    isLandscape: true,
};

export const screenContext = createContext<ScreenState>(myInitialScreenState);

export const ScreenContextWrapper: FC = ({ children }) => {
    const screen = useScreen();

    return (
        <screenContext.Provider value={screen}>
            {children}
        </screenContext.Provider>
    );
};
```

Dersom du trenger oppdaterte dimensjoner på nettleservinduet kan du enkelt få dette [gjennom en event listener](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event#window_size_logger) etter `resize` på `window`-objektet.

**NB!** Vær forsiktig med å oppdatere dimensjonene for ofte dersom du lagrer dem vha `useState` eller tilsvarende, siden enhver oppdatering av verdien vil føre til en rerender av komponenten. Husk også å rydde opp event listeners når komponenten unmountes.

### `useReducedMotion`

Denne har vært merket deprecated en stund, så det var på tide å fjerne den. Hvis du trenger å vite om noen ønsker reduser bevegelse kan du bruke `useBrowserPreferences`, som gir blant annet `prefersReducedMotion` som resultat.

```diff
- const prefersReducedMotion = useReducedMotion();
+ const { prefersReducedMotion } = useBrowserPreferences();
```
