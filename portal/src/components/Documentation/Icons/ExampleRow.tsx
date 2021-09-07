import React, { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    text: string;
}
export const ExampleRow: React.FC<Props> = ({ icon, text }) => {
    return (
        <tr className={"jkl-icon-table__row"}>
            <td className="jkl-icon-table__data">
                <span className="jkl-icon-table__img">{icon}</span>
            </td>
            <td className="jkl-icon-table__data">
                <p className="jkl-small">{text}</p>
            </td>
        </tr>
    );
};
