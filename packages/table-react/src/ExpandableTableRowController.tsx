import React from "react";
import cx from "classnames";
import { ExpandButton } from "@fremtind/jkl-expand-button-react";
import { TableCell, TableCellProps } from ".";

export interface ExpandableTableRowControllerProps extends TableCellProps {
    /** Settes automatisk av ExpandableTableRow */
    isOpen?: boolean;
    onClick?: () => void;
    compact?: boolean;
}

export const ExpandableTableRowController: React.FC<ExpandableTableRowControllerProps> = ({
    isOpen,
    onClick,
    children,
    className,
    compact,
    ...rest
}) => {
    if (isOpen === undefined || typeof onClick !== "function") {
        throw new Error("ExpandableTableRowController must have ExpandableTableRow as parent");
    }

    return (
        <TableCell className={cx("jkl-table-cell--expand", className)} {...rest}>
            <ExpandButton
                className={cx("jkl-table-row-expand-button", {
                    ["jkl-table-row-expand-button--expanded"]: isOpen,
                })}
                forceCompact={compact}
                isExpanded={isOpen}
                onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}
            >
                {children}
            </ExpandButton>
        </TableCell>
    );
};
