import { WithChildren } from "@fremtind/jkl-core";
import React from "react";

interface Props extends WithChildren {
    title?: string;
}

export const TableCell: React.FC<Props> = ({ title, children }) => (
    <td className="jkl-typography-table__data" data-rowtitle={title}>
        <p className="jkl-small">{children}</p>
    </td>
);
