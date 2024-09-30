import React, { createContext, useContext } from "react";
import { Density, WithChildren } from "../..";

type TableContext = {
    density?: Density;
    collapseToList: boolean;
};

const tableContext = createContext<TableContext>({
    density: undefined,
    collapseToList: false,
});

export const useTableContext = (): TableContext => useContext(tableContext);

export interface TableContextProviderProps extends WithChildren {
    state: TableContext;
}

export const TableContextProvider: React.FC<TableContextProviderProps> = ({ state, children }) => (
    <tableContext.Provider value={state}>{children}</tableContext.Provider>
);
