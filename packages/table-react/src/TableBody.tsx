import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

export interface TableBodyProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

export const TableBody: FC<TableBodyProps> = (props) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: true, isTableFooter: false }}>
            <tbody {...props} />
        </TableSectionContextProvider>
    );
};
