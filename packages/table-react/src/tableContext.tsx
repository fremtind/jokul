import React, { createContext, useContext } from "react";
import { WithChildren } from "@forbrukerradet/jkl-core";

type TableContext = {
    compact: boolean;
    collapseToList: boolean;
};

const tableContext = createContext<TableContext>({
    compact: false,
    collapseToList: false,
});

export const useTableContext = (): TableContext => useContext(tableContext);

export interface TableContextProviderProps extends WithChildren {
    state: TableContext;
}

export const TableContextProvider: React.FC<TableContextProviderProps> = ({ state, children }) => (
    <tableContext.Provider value={state}>{children}</tableContext.Provider>
);
