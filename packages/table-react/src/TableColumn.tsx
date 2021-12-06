import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface TableColumnProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement> {}

export const TableColumn: FC<TableColumnProps> = (props) => {
    return <col {...props} />;
};
