import React, { useContext } from "react";
import { useScreen, initialScreenState } from "../src";

interface State {
    isSmallDevice: boolean;
    isMediumDevice: boolean;
    isLargeDevice: boolean;
    isXlDevice: boolean;
    isLandscape: boolean;
    isPortrait: boolean;
    inner: {
        height: number;
        width: number;
    };
}

const ScreenContext = React.createContext<State>(initialScreenState);

const ScreenExample = () => {
    const {
        isSmallDevice,
        isMediumDevice,
        isLargeDevice,
        isXlDevice,
        isLandscape,
        isPortrait,
        inner: { width, height },
    } = useContext(ScreenContext);

    const getDeviceName = () => {
        switch (true) {
            case isSmallDevice:
                return "liten";
            case isMediumDevice:
                return "litt større";
            case isLargeDevice:
                return "ganske stor";
            case isXlDevice:
                return "stor";
            default:
                return "";
        }
    };

    return (
        <section className="hooks-example key-listener-example jkl-spacing--bottom-3">
            <h2 className="jkl-h2 jkl-spacing--bottom-2">Din dings har en {getDeviceName()} skjerm</h2>
            <h3 className="jkl-h3 jkl-spacing--bottom-2">{`Den er i ${isLandscape ? "landskaps" : ""}${
                isPortrait ? "portrett" : ""
            }modus`}</h3>
            <p className="jkl-p jkl-spacing--bottom-2">
                {width} x {height}
            </p>
        </section>
    );
};

const Provider = () => {
    const screen = useScreen();

    return (
        <ScreenContext.Provider value={screen}>
            <ScreenExample />
        </ScreenContext.Provider>
    );
};

export default Provider;
