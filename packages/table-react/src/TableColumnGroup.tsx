import React, { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export interface TableColumnGroupProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement> {}

const TableColumnGroup = forwardRef<HTMLTableColElement, TableColumnGroupProps>((props, ref) => {
    return <colgroup {...props} ref={ref} />;
});

TableColumnGroup.displayName = "TableColumnGroup";

export { TableColumnGroup };
