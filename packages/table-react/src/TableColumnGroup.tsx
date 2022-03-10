import React, { DetailedHTMLProps, forwardRef, ColgroupHTMLAttributes } from "react";

export interface TableColumnGroupProps
    extends DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement> {}

const TableColumnGroup = forwardRef<HTMLTableColElement, TableColumnGroupProps>((props, ref) => {
    return <colgroup {...props} ref={ref} />;
});

TableColumnGroup.displayName = "TableColumnGroup";

export { TableColumnGroup };
