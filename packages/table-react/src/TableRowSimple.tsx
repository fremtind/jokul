import React, { ReactNode } from "react";
import { TableData } from "./TableData";

interface Props {
    row: ReactNode[]; // Endret fra string. Greit?
}

export function TableRowSimple({ row }: Props) {
    return (
        <tr className={"jkl-table__row jkl-table__row--data-row"}>
            {row.map((data, j) => (
                <TableData key={j} data={data} row={row} isFirstCell={j === 0} />
            ))}
        </tr>
    );
}
