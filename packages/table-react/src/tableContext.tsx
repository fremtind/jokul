import React, { createContext, useContext } from "react";

type TableContext = {
    compact: boolean;
    collapseToList: boolean;
};

const tableContext = createContext<TableContext>({
    compact: false,
    collapseToList: false,
});

export const useTableContext = (): TableContext => useContext(tableContext);

export interface TableContextProviderProps {
    state: TableContext;
}

export const TableContextProvider: React.FC<TableContextProviderProps> = ({ state, children }) => (
    <tableContext.Provider value={state}>{children}</tableContext.Provider>
);
