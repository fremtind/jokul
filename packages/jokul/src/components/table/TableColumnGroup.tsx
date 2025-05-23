import React, { forwardRef } from "react";
import type { TableColumnGroupProps } from "./types.js";

const TableColumnGroup = forwardRef<HTMLTableColElement, TableColumnGroupProps>(
    (props, ref) => {
        return <colgroup {...props} ref={ref} />;
    },
);

TableColumnGroup.displayName = "TableColumnGroup";

export { TableColumnGroup };
