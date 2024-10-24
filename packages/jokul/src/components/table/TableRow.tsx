import clsx from "clsx";
import React, { forwardRef, HTMLAttributes, useEffect, useState } from "react";
import { useTableContext } from "./tableContext.js";
import { useTableSectionContext } from "./tableSectionContext.js";

export interface ClickableRowProps {
    markClickedRows?: boolean;
    /** Lar deg kontrollere radens tilstand untenfra */
    isClicked?: boolean;
    onClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent> | React.KeyboardEvent<HTMLTableRowElement>) => void;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    /**
     * Gir raden interaktivitet og en click-handler.
     */
    clickable?: ClickableRowProps;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ className, clickable, children, ...rest }, ref) => {
    const { density } = useTableContext();
    const { isTableBody } = useTableSectionContext();

    const [clicked, setClicked] = useState(clickable?.isClicked || false);

    useEffect(() => {
        setClicked((prev) => (clickable?.isClicked !== undefined ? clickable.isClicked : prev));
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
                className={clsx("jkl-table-row", "jkl-table-row--clickable", className, {
                    ["jkl-table-row--clicked"]: clickable?.markClickedRows && clicked,
                })}
                aria-label="Klikkbar rad"
                aria-pressed={clickable?.markClickedRows ? (clicked ? "true" : "false") : undefined}
                tabIndex={0}
                {...rest}
                data-density={density}
                ref={ref}
            >
                {children}
            </tr>
        );
    }

    return (
        <tr className={clsx("jkl-table-row", className)} {...rest} ref={ref} data-density={density}>
            {children}
        </tr>
    );
});

TableRow.displayName = "TableRow";

export { TableRow };
