import { Density } from "@fremtind/jkl-core";
import cx from "classnames";
import React, { forwardRef, TableHTMLAttributes, useState } from "react";
import { TableContextProvider } from "./tableContext";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    density?: Density;
    /** Bryt ned til en stablet listevisning på små skjermer. NB: husk å sette `data-th` på hver celle! */
    collapseToList?: boolean;
    /** Setter width: 100% */
    fullWidth?: boolean;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
    (
        {
            className,
            density,
            collapseToList = false,
            fullWidth = false,
            tabIndex,
            ...rest
        },
        ref,
    ) => {
        const [hasStickyHead, setHasStickyHead] = useState<boolean>(false);

        return (
            <TableContextProvider
                state={{ density, collapseToList, setHasStickyHead }}
            >
                <table
                    className={cx("jkl-table", className, {
                        ["jkl-table--full-width"]: fullWidth,
                        ["jkl-table--collapse-to-list"]: collapseToList,
                    })}
                    {...rest}
                    // For content in a scrollable table to be accessible with keyboard
                    // navigation we need to set tabIndex
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex={hasStickyHead ? 0 : tabIndex}
                    ref={ref}
                />
            </TableContextProvider>
        );
    },
);

Table.displayName = "Table";

export { Table };
