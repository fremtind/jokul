import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

export interface TableFooterProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

export const TableFooter: FC<TableFooterProps> = (props) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: false, isTableFooter: true }}>
            <tfoot {...props} />
        </TableSectionContextProvider>
    );
};
