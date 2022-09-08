import { Density } from "@fremtind/jkl-core";
import cx from "classnames";
import React, { DetailedHTMLProps, forwardRef, TdHTMLAttributes } from "react";
import { useTableContext } from "./tableContext";

export interface TableCellProps
    extends DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    density?: Density;
    /**
     * Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal innholdet være venstrejustert, men for eksempel summer er høyrejustert.
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være toppjustert, men dersom raden har knapper kan midtstilling fungere bedre.
     * @default "top"
     */
    verticalAlign?: "center" | "top";
}

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ align = "left", verticalAlign = "top", className, density, ...rest }, ref) => {
        const { density: contextDensity } = useTableContext();
        return (
            <td
                className={cx("jkl-table-cell", className, {
                    ["jkl-table-cell--align-right"]: align === "right",
                    ["jkl-table-cell--align-center"]: verticalAlign === "center",
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
