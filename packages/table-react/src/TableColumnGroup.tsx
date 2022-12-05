import React, { forwardRef, ColgroupHTMLAttributes } from "react";

export interface TableColumnGroupProps extends ColgroupHTMLAttributes<HTMLTableColElement> {}

const TableColumnGroup = forwardRef<HTMLTableColElement, TableColumnGroupProps>((props, ref) => {
    return <colgroup {...props} ref={ref} />;
});

TableColumnGroup.displayName = "TableColumnGroup";

export { TableColumnGroup };
