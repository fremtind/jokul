import cx from "classnames";
import React, { FC } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

interface Props
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
    srOnly?: boolean;
}

export const TableHead: FC<Props> = ({ className, srOnly, ...rest }) => {
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
