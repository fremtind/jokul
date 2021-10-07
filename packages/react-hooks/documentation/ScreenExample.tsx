import React, { createContext, useContext, VFC } from "react";
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

const ScreenContext = createContext<State>(initialScreenState);

const ScreenExample: VFC = () => {
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
        <>
            <p className="jkl-heading-3 jkl-spacing--bottom-2">{`Din dings har en ${getDeviceName()} skjerm i ${
                isLandscape ? "landskaps" : ""
            }${isPortrait ? "portrett" : ""}modus`}</p>

            <p className="jkl-body jkl-spacing--bottom-2">{`Oppløsningen på nettleservinduet er ${width} x ${height}`}</p>
        </>
    );
};

const Provider: VFC = () => {
    const screen = useScreen();

    return (
        <ScreenContext.Provider value={screen}>
            <ScreenExample />
        </ScreenContext.Provider>
    );
};

export default Provider;
