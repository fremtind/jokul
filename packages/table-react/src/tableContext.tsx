import React, { createContext, useContext } from "react";

type TableContext = {
    compact: boolean;
};

const tableContext = createContext<TableContext>({
    compact: false,
});

export const useTableContext = (): TableContext => useContext(tableContext);

interface Props {
    state: TableContext;
}

export const TableContextProvider: React.FC<Props> = ({ state, children }) => (
    <tableContext.Provider value={state}>{children}</tableContext.Provider>
);
