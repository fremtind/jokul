import cx from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TableContextProvider } from "./tableContext";

export interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    compact?: boolean;
    /** Bryt ned til en stablet listevisning på små skjermer. NB: husk å sette `data-th` på hver celle! */
    collapseToList?: boolean;
    /** Setter width: 100% */
    fullWidth?: boolean;
}

export const Table: FC<TableProps> = ({
    className,
    compact = false,
    collapseToList = false,
    fullWidth = false,
    ...rest
}) => {
    return (
        <TableContextProvider state={{ compact, collapseToList }}>
            <table
                className={cx("jkl-table", className, {
                    ["jkl-table--full-width"]: fullWidth,
                    ["jkl-table--collapse-to-list"]: collapseToList,
                })}
                {...rest}
            />
        </TableContextProvider>
    );
};
