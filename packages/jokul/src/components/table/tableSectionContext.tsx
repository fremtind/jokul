import type React from "react";
import { createContext, useContext } from "react";
import type {
    TableSectionContext,
    TableSectionContextProviderProps,
} from "./types.js";

const tableSectionContext = createContext<TableSectionContext>({
    isTableHead: false,
    isTableBody: false,
    isTableFooter: false,
});

export const useTableSectionContext = (): TableSectionContext =>
    useContext(tableSectionContext);

export const TableSectionContextProvider: React.FC<
    TableSectionContextProviderProps
> = ({ state, children }) => (
    <tableSectionContext.Provider value={state}>
        {children}
    </tableSectionContext.Provider>
);
