import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface TableColumnGroupProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement> {}

export const TableColumnGroup: FC<TableColumnGroupProps> = (props) => {
    return <colgroup {...props} />;
};
