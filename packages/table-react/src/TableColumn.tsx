import React, { FC } from "react";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;

export const TableColumn: FC<Props> = (props) => {
    return <col {...props} />;
};
