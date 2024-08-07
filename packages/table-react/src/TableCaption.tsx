import clsx from "clsx";
import React, { forwardRef, HTMLAttributes } from "react";

export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {
    /** Skjuler caption visuelt */
    srOnly?: boolean;
}

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(({ srOnly = true, ...rest }, ref) => {
    return (
        <caption
            className={clsx("jkl-table-caption", { ["jkl-table-caption--sr-only"]: srOnly })}
            {...rest}
            ref={ref}
        />
    );
});

TableCaption.displayName = "TableCaption";

export { TableCaption };
