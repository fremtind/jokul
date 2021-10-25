import React, { FC } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;

export const TableFooter: FC<Props> = (props) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: false, isTableFooter: true }}>
            <tfoot {...props} />
        </TableSectionContextProvider>
    );
};
