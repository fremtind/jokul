import clsx from "clsx";
import React, { forwardRef } from "react";
import type { TableCellProps } from "./types.js";

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ align = "left", verticalAlign = "top", className, ...rest }, ref) => {
        return (
            <td
                className={clsx("jkl-table-cell", className, {
                    ["jkl-table-cell--align-right"]: align === "right",
                    ["jkl-table-cell--align-center"]: align === "center",
                    ["jkl-table-cell--vertical-align-center"]:
                        verticalAlign === "center",
                })}
                {...rest}
                ref={ref}
            />
        );
    },
);

TableCell.displayName = "TableCell";

export { TableCell };
