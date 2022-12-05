import React, { forwardRef, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>((props, ref) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: false, isTableFooter: true }}>
            <tfoot {...props} ref={ref} />
        </TableSectionContextProvider>
    );
});

TableFooter.displayName = "TableFooter";

export { TableFooter };
