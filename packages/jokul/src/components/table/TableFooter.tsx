import clsx from "clsx";
import React, { forwardRef, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext.js";

export interface TableFooterProps
    extends HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
    ({ className, ...rest }, ref) => {
        return (
            <TableSectionContextProvider
                state={{
                    isTableHead: false,
                    isTableBody: false,
                    isTableFooter: true,
                }}
            >
                <tfoot
                    className={clsx("jkl-table-foot", className)}
                    {...rest}
                    ref={ref}
                />
            </TableSectionContextProvider>
        );
    },
);

TableFooter.displayName = "TableFooter";

export { TableFooter };
