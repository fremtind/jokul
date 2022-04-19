import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    title?: string;
}

export const TableCell: React.FC<Props> = ({ title, children }) => (
    <td className="jkl-typography-table__data" data-rowtitle={title}>
        <p className="jkl-small">{children}</p>
    </td>
);
