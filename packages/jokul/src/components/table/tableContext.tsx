import React, { createContext, useContext } from "react";
import type { TableContext, TableContextProviderProps } from "./types.js";

const tableContext = createContext<TableContext>({
    collapseToList: false,
    setHasStickyHead: () => {},
});

export const useTableContext = (): TableContext => useContext(tableContext);

export const TableContextProvider: React.FC<TableContextProviderProps> = ({
    state,
    children,
}) => <tableContext.Provider value={state}>{children}</tableContext.Provider>;
