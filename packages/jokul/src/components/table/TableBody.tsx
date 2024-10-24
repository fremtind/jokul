import React, { forwardRef, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext.js";

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: true, isTableFooter: false }}>
            <tbody {...props} ref={ref} />
        </TableSectionContextProvider>
    );
});

TableBody.displayName = "TableBody";

export { TableBody };
