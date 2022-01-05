import cx from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { ExpandableTableRowCell } from "./ExpandableTableRowCell";
import { useTableContext } from "./tableContext";
import { useTableSectionContext } from "./tableSectionContext";

export interface ClickableRowProps {
    markClickedRows?: boolean;
    /** Lar deg kontrollere radens tilstand untenfra */
    isClicked?: boolean;
    onClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent> | React.KeyboardEvent<HTMLTableRowElement>) => void;
}

export interface ExpandableTableRowProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    /**
     * Gir raden interaktivitet og en click-handler.
     */
    clickable?: ClickableRowProps;
    expandedChildren: React.ReactNode;
}

export const ExpandableTableRow: FC<ExpandableTableRowProps> = ({
    className,
    clickable,
    children,
    expandedChildren,
    ...rest
}) => {
    const { compact } = useTableContext();
    const { isTableBody } = useTableSectionContext();

    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(clickable?.isClicked || false);

    if (isTableBody && clickable) {
        return (
            <>
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
                    className={cx("jkl-table-row", "jkl-table-row--clickable", "jkl-table-row--expandable", className, {
                        ["jkl-table-row--compact"]: compact,
                        ["jkl-table-row--clicked"]: clickable?.markClickedRows && clicked,
                        ["jkl-table-row--expanded"]: isOpen,
                    })}
                    aria-label="Klikkbar rad"
                    aria-pressed={clickable?.markClickedRows ? (clicked ? "true" : "false") : undefined}
                    tabIndex={0}
                    {...rest}
                >
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child) && child.type == ExpandableTableRowCell) {
                            return React.cloneElement(child, {
                                isOpen,
                                onClick: () => setIsOpen(!isOpen),
                            });
                        } else {
                            return child;
                        }
                    })}
                </tr>
                {isOpen &&
                    React.Children.map(expandedChildren, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                className: "jkl-expandable-table-row__expanded-row",
                            });
                        }
                        return child;
                    })}
            </>
        );
    }

    return (
        <>
            <tr
                className={cx("jkl-table-row", "jkl-table-row--expandable", "jkl-table-row--clickable", className, {
                    ["jkl-table-row--compact"]: compact,
                    ["jkl-table-row--expanded"]: isOpen,
                })}
                onClick={() => setIsOpen(!isOpen)}
                {...rest}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type == ExpandableTableRowCell) {
                        return React.cloneElement(child, {
                            isOpen,
                            onClick: () => setIsOpen(!isOpen),
                        });
                    } else {
                        return child;
                    }
                })}
            </tr>
            {isOpen &&
                React.Children.map(expandedChildren, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            className: "jkl-expandable-table-row__expanded-row",
                        });
                    }
                    return child;
                })}
        </>
    );
};
