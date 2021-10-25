import cx from "classnames";
import React, { FC } from "react";
import { useTableContext } from "./tableContext";

interface Props extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    compact?: boolean;
    /** Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal innholdet være venstrejustert, men for eksempel summer er høyrejustert. */
    align?: "left" | "right";
}

export const TableCell: FC<Props> = ({ align = "left", className, compact, ...rest }) => {
    const { compact: contextCompact } = useTableContext();
    return (
        <td
            className={cx("jkl-table-cell", className, {
                ["jkl-table-cell--compact"]: typeof compact === "undefined" ? contextCompact : compact,
                ["jkl-table-cell--align-right"]: align === "right",
            })}
            {...rest}
        />
    );
};
