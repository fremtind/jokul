import React, { createContext, useContext } from "react";

type TableSectionContext = {
    isTableHead: boolean;
    isTableBody: boolean;
    isTableFooter: boolean;
};

const tableSectionContext = createContext<TableSectionContext>({
    isTableHead: false,
    isTableBody: false,
    isTableFooter: false,
});

export const useTableSectionContext = (): TableSectionContext => useContext(tableSectionContext);

interface Props {
    state: TableSectionContext;
}

export const TableSectionContextProvider: React.FC<Props> = ({ state, children }) => (
    <tableSectionContext.Provider value={state}>{children}</tableSectionContext.Provider>
);
