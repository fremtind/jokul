import cx from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

export interface TableHeadProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
    srOnly?: boolean;
}

export const TableHead: FC<TableHeadProps> = ({ className, srOnly, ...rest }) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: true, isTableBody: false, isTableFooter: false }}>
            <thead
                className={cx("jkl-table-head", className, {
                    ["jkl-table-head--sr-only"]: srOnly,
                })}
                {...rest}
            />
        </TableSectionContextProvider>
    );
};
