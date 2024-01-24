import cx from "classnames";
import React, { forwardRef, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(({ className, ...rest }, ref) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: false, isTableFooter: true }}>
            <tfoot className={cx("jkl-table-foot", className)} {...rest} ref={ref} />
        </TableSectionContextProvider>
    );
});

TableFooter.displayName = "TableFooter";

export { TableFooter };
