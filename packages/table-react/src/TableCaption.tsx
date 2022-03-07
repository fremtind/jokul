import cx from "classnames";
import React, { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export interface TableCaptionProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableCaptionElement>, HTMLTableCaptionElement> {
    /** Skjuler caption visuelt */
    srOnly?: boolean;
}

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(({ srOnly = true, ...rest }, ref) => {
    return (
        <caption className={cx("jkl-table-caption", { ["jkl-table-caption--sr-only"]: srOnly })} {...rest} ref={ref} />
    );
});

TableCaption.displayName = "TableCaption";

export { TableCaption };
