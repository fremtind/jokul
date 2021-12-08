import cx from "classnames";
import React, { DetailedHTMLProps, FC, TdHTMLAttributes } from "react";
import { useTableContext } from "./tableContext";

export interface TableCellProps
    extends DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    compact?: boolean;
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

export const TableCell: FC<TableCellProps> = ({
    align = "left",
    verticalAlign = "top",
    className,
    compact,
    ...rest
}) => {
    const { compact: contextCompact } = useTableContext();
    return (
        <td
            className={cx("jkl-table-cell", className, {
                ["jkl-table-cell--compact"]: typeof compact === "undefined" ? contextCompact : compact,
                ["jkl-table-cell--align-right"]: align === "right",
                ["jkl-table-cell--align-center"]: verticalAlign === "center",
            })}
            {...rest}
        />
    );
};
