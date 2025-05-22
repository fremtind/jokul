import React, { forwardRef } from "react";
import type { TableColumnProps } from "./types.js";

const TableColumn = forwardRef<HTMLTableColElement, TableColumnProps>(
    (props, ref) => {
        return <col {...props} ref={ref} />;
    },
);

TableColumn.displayName = "TableColumn";

export { TableColumn };
