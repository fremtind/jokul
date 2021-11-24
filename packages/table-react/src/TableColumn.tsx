import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;

export const TableColumn: FC<Props> = (props) => {
    return <col {...props} />;
};
