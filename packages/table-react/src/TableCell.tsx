import cx from "classnames";
import React, { FC } from "react";
import { useTableContext } from "./tableContext";

interface Props extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    compact?: boolean;
    /** Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal innholdet være venstrejustert, men for eksempel summer er høyrejustert. */
    align?: "left" | "right";
    /** Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være sentrert, men dersom én eller flere kolonner typisk har mye mer innhold enn naboene kan toppjustering være bedre. */
    verticalAlign?: "center" | "top";
}

export const TableCell: FC<Props> = ({ align = "left", verticalAlign = "center", className, compact, ...rest }) => {
    const { compact: contextCompact } = useTableContext();
    return (
        <td
            className={cx("jkl-table-cell", className, {
                ["jkl-table-cell--compact"]: typeof compact === "undefined" ? contextCompact : compact,
                ["jkl-table-cell--align-right"]: align === "right",
                ["jkl-table-cell--align-top"]: verticalAlign === "top",
            })}
            {...rest}
        />
    );
};
