import React, { createContext, useContext } from "react";
import { useScreen, initialScreenState } from "@fremtind/jkl-react-hooks";

type ScreenInfo = ReturnType<typeof useScreen>;
const screenContext = createContext<ScreenInfo>(initialScreenState);

export function useScreenContext() {
    return useContext<ScreenInfo>(screenContext);
}

export const ScreenContextProvider: React.FC = ({ children }) => {
    const screen = useScreen();

    return <screenContext.Provider value={screen}>{children}</screenContext.Provider>;
};
