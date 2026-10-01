import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import { TableContextProvider } from "./tableContext.js";
import type { TableProps } from "./types.js";

const Table = forwardRef<HTMLTableElement, TableProps>(
    (
        {
            className,
            caption,
            children,
            collapseToList = false,
            fullWidth = false,
            tabIndex,
            tracking,
            ...rest
        },
        ref,
    ) => {
        const [hasStickyHead, setHasStickyHead] = useState<boolean>(false);

        return (
            <TableContextProvider state={{ collapseToList, setHasStickyHead }}>
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
                    data-track-component-name={COMPONENT_NAMES.Table}
                    data-track-id={tracking?.id}
                    data-track-label={
                        typeof caption === "string" ? caption : undefined
                    }
                    data-track-collapse-to-list={collapseToList}
                    {...getExtraTrackingAttributes(tracking?.extra)}
                >
                    {caption}
                    {children}
                </table>
            </TableContextProvider>
        );
    },
);

Table.displayName = "Table";

export { Table };
