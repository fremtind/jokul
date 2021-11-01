import cx from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { useTableContext } from "./tableContext";
import { useTableSectionContext } from "./tableSectionContext";

interface Clickable {
    markClickedRows?: boolean;
    /** Lar deg kontrollere radens tilstand untenfra */
    isClicked?: boolean;
    onClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent> | React.KeyboardEvent<HTMLTableRowElement>) => void;
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    /**
     * Gir raden interaktivitet og en click-handler.
     */
    clickable?: Clickable;
}

export const TableRow: FC<Props> = ({ className, clickable, children, ...rest }) => {
    const { compact } = useTableContext();
    const { isTableBody } = useTableSectionContext();

    const [clicked, setClicked] = useState(clickable?.isClicked || false);

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
                className={cx("jkl-table-row", "jkl-table-row--clickable", className, {
                    ["jkl-table-row--compact"]: compact,
                    ["jkl-table-row--clicked"]: clickable?.markClickedRows && clicked,
                })}
                aria-label="Klikkbar rad"
                aria-pressed={clickable?.markClickedRows ? (clicked ? "true" : "false") : undefined}
                tabIndex={0}
                {...rest}
            >
                {children}
            </tr>
        );
    }

    return (
        <tr
            className={cx("jkl-table-row", className, {
                ["jkl-table-row--compact"]: compact,
            })}
            {...rest}
        >
            {children}
        </tr>
    );
};
