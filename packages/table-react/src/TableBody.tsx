import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TableSectionContextProvider } from "./tableSectionContext";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;

export const TableBody: FC<Props> = (props) => {
    return (
        <TableSectionContextProvider state={{ isTableHead: false, isTableBody: true, isTableFooter: false }}>
            <tbody {...props} />
        </TableSectionContextProvider>
    );
};
