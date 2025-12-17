import clsx from "clsx";
import { forwardRef, useEffect } from "react";
import { useTableContext } from "./tableContext.js";
import { TableSectionContextProvider } from "./tableSectionContext.js";
import type { TableHeadProps } from "./types.js";

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
