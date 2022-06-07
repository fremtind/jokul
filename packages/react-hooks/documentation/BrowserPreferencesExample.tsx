import React, { createContext, FC, useContext } from "react";
import { useBrowserPreferences } from "../src";

const ScreenContext = createContext<ReturnType<typeof useBrowserPreferences>>({
    prefersReducedMotion: false,
    prefersColorScheme: "light",
    forcedColors: false,
});

const BrowserPreferencesExample: FC = () => {
    const { prefersReducedMotion, prefersColorScheme, forcedColors } = useContext(ScreenContext);

    return (
        <section className="hooks-example key-listener-example jkl-spacing-2xl--bottom">
            <h2 className="jkl-h2 jkl-spacing-xl--bottom">Preferanser fra nettleseren din</h2>
            <dl>
                <dt>Redusert bevegelse</dt>
                <dd>{prefersReducedMotion ? "Ja" : "Ingen preferanse"}</dd>
                <dt>Fargetema</dt>
                <dd>{prefersColorScheme === "light" ? "Lyst" : "Mørkt"}</dd>
                <dt>Høykontrast</dt>
                <dd>{forcedColors ? "Ja" : "Nei"}</dd>
            </dl>
        </section>
    );
};

const Provider: FC = () => {
    const { prefersColorScheme, prefersReducedMotion, forcedColors } = useBrowserPreferences();

    return (
        <ScreenContext.Provider value={{ prefersReducedMotion, prefersColorScheme, forcedColors }}>
            <BrowserPreferencesExample />
        </ScreenContext.Provider>
    );
};

export default Provider;
