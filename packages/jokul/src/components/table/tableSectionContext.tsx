import React, { createContext, useContext } from "react";
import { WithChildren } from "../../core/types.js";

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

export const useTableSectionContext = (): TableSectionContext =>
    useContext(tableSectionContext);

export interface TableSectionContextProviderProps extends WithChildren {
    state: TableSectionContext;
}

export const TableSectionContextProvider: React.FC<
    TableSectionContextProviderProps
> = ({ state, children }) => (
    <tableSectionContext.Provider value={state}>
        {children}
    </tableSectionContext.Provider>
);
