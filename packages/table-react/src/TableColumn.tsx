import React, { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export interface TableColumnProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement> {}

const TableColumn = forwardRef<HTMLTableColElement, TableColumnProps>((props, ref) => {
    return <col {...props} ref={ref} />;
});

TableColumn.displayName = "TableColumn";

export { TableColumn };
