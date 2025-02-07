import clsx from "clsx";
import React, { forwardRef } from "react";
import { TableCaptionProps } from "./types.js";

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
    ({ srOnly = true, ...rest }, ref) => {
        return (
            <caption
                className={clsx("jkl-table-caption", {
                    ["jkl-table-caption--sr-only"]: srOnly,
                })}
                {...rest}
                ref={ref}
            />
        );
    },
);

TableCaption.displayName = "TableCaption";

export { TableCaption };
