import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { TableContextProvider } from "./tableContext.js";
import { TableProps } from "./types.js";

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
                    className={clsx("jkl-table", className, {
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
