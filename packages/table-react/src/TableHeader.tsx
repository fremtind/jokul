import cx from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { useTableContext } from "./tableContext";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    bold?: boolean;
    compact?: boolean;
    /**
     * Si om headeren gjelder for en kolonne eller en rad
     * @default "col"
     */
    scope?: "col" | "row";
    srOnly?: boolean;
}

export const TableHeader: FC<Props> = ({ bold = true, compact, className, scope = "col", srOnly, ...rest }) => {
    const { compact: contextCompact } = useTableContext();
    return (
        <th
            className={cx("jkl-table-header", className, {
                ["jkl-table-header--bold"]: bold,
                ["jkl-table-header--compact"]: typeof compact === "undefined" ? contextCompact : compact,
                ["jkl-table-header--sr-only"]: srOnly,
            })}
            scope={scope}
            {...rest}
        />
    );
};
