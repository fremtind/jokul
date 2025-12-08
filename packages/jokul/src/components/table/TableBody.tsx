import { forwardRef } from "react";
import { TableSectionContextProvider } from "./tableSectionContext.js";
import type { TableBodyProps } from "./types.js";

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
    (props, ref) => {
        return (
            <TableSectionContextProvider
                state={{
                    isTableHead: false,
                    isTableBody: true,
                    isTableFooter: false,
                }}
            >
                <tbody {...props} ref={ref} />
            </TableSectionContextProvider>
        );
    },
);

TableBody.displayName = "TableBody";

export { TableBody };
