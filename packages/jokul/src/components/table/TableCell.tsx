import clsx from "clsx";
import React, { forwardRef } from "react";
import { useTableContext } from "./tableContext.js";
import type { TableCellProps } from "./types.js";

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
    (
        { align = "left", verticalAlign = "top", className, density, ...rest },
        ref,
    ) => {
        const { density: contextDensity } = useTableContext();
        return (
            <td
                className={clsx("jkl-table-cell", className, {
                    ["jkl-table-cell--align-right"]: align === "right",
                    ["jkl-table-cell--align-center"]: align === "center",
                    ["jkl-table-cell--vertical-align-center"]:
                        verticalAlign === "center",
                })}
                {...rest}
                data-density={density || contextDensity}
                ref={ref}
            />
        );
    },
);

TableCell.displayName = "TableCell";

export { TableCell };
