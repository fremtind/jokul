import { Density } from "@fremtind/jkl-core";
import clsx from "clsx";
import React, { forwardRef, TableHTMLAttributes } from "react";
import { TableContextProvider } from "./tableContext";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    density?: Density;
    /** Bryt ned til en stablet listevisning på små skjermer. NB: husk å sette `data-th` på hver celle! */
    collapseToList?: boolean;
    /** Setter width: 100% */
    fullWidth?: boolean;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
    ({ className, density, collapseToList = false, fullWidth = false, ...rest }, ref) => {
        return (
            <TableContextProvider state={{ density, collapseToList }}>
                <table
                    className={clsx("jkl-table", className, {
                        ["jkl-table--full-width"]: fullWidth,
                        ["jkl-table--collapse-to-list"]: collapseToList,
                    })}
                    {...rest}
                    ref={ref}
                />
            </TableContextProvider>
        );
    },
);

Table.displayName = "Table";

export { Table };
