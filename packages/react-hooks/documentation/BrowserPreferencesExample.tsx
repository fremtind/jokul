import React, { useContext } from "react";
import { useBrowserPreferences } from "../src";

const ScreenContext = React.createContext<ReturnType<typeof useBrowserPreferences>>({
    prefersReducedMotion: false,
    prefersColorScheme: "light",
});

const BrowserPreferencesExample = () => {
    const { prefersReducedMotion, prefersColorScheme } = useContext(ScreenContext);

    return (
        <section className="hooks-example key-listener-example jkl-spacing--bottom-3">
            <h2 className="jkl-h2 jkl-spacing--bottom-2">Preferanser fra nettleseren din</h2>
            <dl>
                <dt>Redusert bevegelse</dt>
                <dd>{prefersReducedMotion ? "Ja" : "Ingen preferanse"}</dd>
                <dt>Fargetema</dt>
                <dd>{prefersColorScheme === "light" ? "Lyst" : "Mørkt"}</dd>
            </dl>
        </section>
    );
};

const Provider = () => {
    const { prefersColorScheme, prefersReducedMotion } = useBrowserPreferences();

    return (
        <ScreenContext.Provider value={{ prefersReducedMotion, prefersColorScheme }}>
            <BrowserPreferencesExample />
        </ScreenContext.Provider>
    );
};

export default Provider;
