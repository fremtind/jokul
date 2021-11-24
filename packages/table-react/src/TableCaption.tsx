import cx from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableCaptionElement>, HTMLTableCaptionElement> {
    /** Skjuler caption visuelt */
    srOnly?: boolean;
}

export const TableCaption: FC<Props> = ({ srOnly = true, ...rest }) => {
    return <caption className={cx("jkl-table-caption", { ["jkl-table-caption--sr-only"]: srOnly })} {...rest} />;
};
