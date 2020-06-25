import React from "react";

export const TableCell: React.FC = ({ children }) => (
    <td className="jkl-icon-table__data">
        <p className="jkl-small">{children}</p>
    </td>
);
