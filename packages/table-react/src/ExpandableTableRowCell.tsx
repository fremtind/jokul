import React from "react";
import cx from "classnames";
import { ExpandButton } from "@fremtind/jkl-expand-button-react";
import { TableCell, TableCellProps } from ".";

interface ExpandableTableRowCellProps extends TableCellProps {
    isOpen?: boolean;
    onClick?: () => void;
}

export const ExpandableTableRowCell: React.FC<ExpandableTableRowCellProps> = ({
    isOpen,
    onClick,
    children,
    className,
    ...rest
}) => {
    if (isOpen === undefined || typeof onClick !== "function") {
        throw new Error("ExpandableTableRowCell must have ExpandableTableRow as parent");
    }

    return (
        <TableCell className={cx("jkl-table-cell--expand", className)} {...rest}>
            <ExpandButton
                className={cx("jkl-table-row-expand-button", {
                    ["jkl-table-row-expand-button--expanded"]: isOpen,
                })}
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
