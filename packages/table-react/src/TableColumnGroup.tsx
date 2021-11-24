import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;

export const TableColumnGroup: FC<Props> = (props) => {
    return <colgroup {...props} />;
};
