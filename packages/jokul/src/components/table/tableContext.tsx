import React, { createContext, useContext } from "react";
import { Density, WithChildren } from "../../core/types.js";

type TableContext = {
    density?: Density;
    collapseToList: boolean;
    setHasStickyHead: (hasStcikyHead: boolean) => void;
};

const tableContext = createContext<TableContext>({
    density: undefined,
    collapseToList: false,
    setHasStickyHead: () => {},
});

export const useTableContext = (): TableContext => useContext(tableContext);

export interface TableContextProviderProps extends WithChildren {
    state: TableContext;
}

export const TableContextProvider: React.FC<TableContextProviderProps> = ({
    state,
    children,
}) => <tableContext.Provider value={state}>{children}</tableContext.Provider>;
