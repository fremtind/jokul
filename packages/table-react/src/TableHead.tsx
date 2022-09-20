import cx from "classnames";
import React, { forwardRef, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
    srOnly?: boolean;
}

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ className, srOnly, ...rest }, ref) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: true, isTableBody: false, isTableFooter: false }}>
            <thead
                className={cx("jkl-table-head", className, {
                    ["jkl-table-head--sr-only"]: srOnly,
                })}
                {...rest}
                ref={ref}
            />
        </TableSectionContextProvider>
    );
});

TableHead.displayName = "TableHead";

export { TableHead };
