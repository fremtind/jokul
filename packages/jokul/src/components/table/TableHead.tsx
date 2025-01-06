import clsx from "clsx";
import React, { forwardRef, HTMLAttributes } from "react";
import { useTableContext } from "./tableContext.js";
import { TableSectionContextProvider } from "./tableSectionContext.js";

export interface TableHeadProps
    extends HTMLAttributes<HTMLTableSectionElement> {
    srOnly?: boolean;
    sticky?: boolean;
}

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
    ({ className, srOnly, sticky, ...rest }, ref) => {
        const { setHasStickyHead } = useTableContext();
        setHasStickyHead(sticky);

        return (
            <TableSectionContextProvider
                state={{
                    isTableHead: true,
                    isTableBody: false,
                    isTableFooter: false,
                }}
            >
                <thead
                    className={clsx("jkl-table-head", className, {
                        ["jkl-table-head--sr-only"]: srOnly,
                        ["jkl-table-head--sticky"]: sticky,
                    })}
                    {...rest}
                    ref={ref}
                />
            </TableSectionContextProvider>
        );
    },
);

TableHead.displayName = "TableHead";

export { TableHead };
