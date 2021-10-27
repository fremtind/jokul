import React, { FC } from "react";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;

export const TableColumnGroup: FC<Props> = (props) => {
    return <colgroup {...props} />;
};
