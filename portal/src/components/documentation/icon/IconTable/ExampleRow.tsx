import React from "react";
import { TableCell } from "./TableCell";

interface Props {
    icon: string;
    text: string;
}
export const ExampleRow: React.FC<Props> = ({ icon, text }) => {
    return (
        <tr className={"jkl-icon-table__row"}>
            <td className="jkl-icon-table__data">
                <img src={icon} alt={`Ikon ${text}`} />
            </td>
            <TableCell>{text}</TableCell>
        </tr>
    );
};
