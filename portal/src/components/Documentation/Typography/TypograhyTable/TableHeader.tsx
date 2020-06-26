import React from "react";

export const TableHeader: React.FC = () => {
    return (
        <thead>
            <tr>
                <th className="jkl-typography-table__header">Stilnavn</th>
                <th className="jkl-typography-table__header">Vekt</th>
                <th className="jkl-typography-table__header">Størrelse</th>
                <th className="jkl-typography-table__header">Linjeavstand</th>
            </tr>
        </thead>
    );
};
