import React, { createContext, useContext } from "react";
import { Density, WithChildren } from "../../core/types.js";

type TabsContext = {
    density?: Density;
};

const tabsContext = createContext<TabsContext>({
    density: undefined,
});

export const useTabsContext = (): TabsContext => useContext(tabsContext);

interface Props extends WithChildren {
    state: TabsContext;
}

export const TabsContextProvider: React.FC<Props> = ({ state, children }) => (
    <tabsContext.Provider value={state}>{children}</tabsContext.Provider>
);
