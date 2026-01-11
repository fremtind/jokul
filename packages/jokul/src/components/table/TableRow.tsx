import clsx from "clsx";
import React, { forwardRef, useEffect, useState } from "react";
import { useTableSectionContext } from "./tableSectionContext.js";
import type { TableRowProps } from "./types.js";

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ className, clickable, children, ...rest }, ref) => {
        const { isTableBody } = useTableSectionContext();

        const [clicked, setClicked] = useState(clickable?.isClicked || false);

        useEffect(() => {
            setClicked((prev) =>
                clickable?.isClicked !== undefined ? clickable.isClicked : prev,
            );
        }, [clickable?.isClicked]);

        if (isTableBody && clickable) {
            return (
                <tr
                    onClick={function handleOnClick(e) {
                        setClicked(!clicked);
                        clickable.onClick(e);
                    }}
                    onKeyPress={function handleKeyPress(e) {
                        if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            setClicked(!clicked);
                            clickable.onClick(e);
                        }
                    }}
                    data-testid="jkl-clickable-table-row"
                    className={clsx(
                        "jkl-table-row",
                        "jkl-table-row--clickable",
                        className,
                        {
                            ["jkl-table-row--clicked"]:
                                clickable?.markClickedRows && clicked,
                        },
                    )}
                    aria-label="Klikkbar rad"
                    aria-pressed={
                        clickable?.markClickedRows
                            ? clicked
                                ? "true"
                                : "false"
                            : undefined
                    }
                    tabIndex={0}
                    {...rest}
                    ref={ref}
                >
                    {children}
                </tr>
            );
        }

        return (
            <tr
                className={clsx("jkl-table-row", className)}
                {...rest}
                ref={ref}
            >
                {children}
            </tr>
        );
    },
);

TableRow.displayName = "TableRow";

export { TableRow };
