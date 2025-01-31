import cx from "classnames";
import React, { forwardRef, HTMLAttributes, useEffect } from "react";
import { useTableContext } from "./tableContext";
import { TableSectionContextProvider } from "./tableSectionContext";

export interface TableHeadProps
    extends HTMLAttributes<HTMLTableSectionElement> {
    srOnly?: boolean;
    sticky?: boolean;
}

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
    ({ className, srOnly, sticky = false, ...rest }, ref) => {
        const { setHasStickyHead } = useTableContext();
        useEffect(() => {
            setHasStickyHead(sticky);
        }, [sticky, setHasStickyHead]);

        return (
            <TableSectionContextProvider
                state={{
                    isTableHead: true,
                    isTableBody: false,
                    isTableFooter: false,
                }}
            >
                <thead
                    className={cx("jkl-table-head", className, {
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
