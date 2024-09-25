import React, { forwardRef, ColHTMLAttributes } from "react";

export interface TableColumnProps extends ColHTMLAttributes<HTMLTableColElement> {}

const TableColumn = forwardRef<HTMLTableColElement, TableColumnProps>((props, ref) => {
    return <col {...props} ref={ref} />;
});

TableColumn.displayName = "TableColumn";

export { TableColumn };
