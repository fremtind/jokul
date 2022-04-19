import React, { createContext, ReactNode, useContext } from "react";

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

export interface TableSectionContextProviderProps {
    state: TableSectionContext;
    children?: ReactNode;
}

export const TableSectionContextProvider: React.FC<TableSectionContextProviderProps> = ({ state, children }) => (
    <tableSectionContext.Provider value={state}>{children}</tableSectionContext.Provider>
);
