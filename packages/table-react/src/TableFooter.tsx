import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;

export const TableFooter: FC<Props> = (props) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: false, isTableFooter: true }}>
            <tfoot {...props} />
        </TableSectionContextProvider>
    );
};
