import { WithChildren } from "@fremtind/jkl-core";
import React, { createContext, useContext } from "react";

type TabsContext = {
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact: boolean;
};

const tabsContext = createContext<TabsContext>({
    compact: false,
});

export const useTabsContext = (): TabsContext => useContext(tabsContext);

interface Props extends WithChildren {
    state: TabsContext;
}

export const TabsContextProvider: React.FC<Props> = ({ state, children }) => (
    <tabsContext.Provider value={state}>{children}</tabsContext.Provider>
);
