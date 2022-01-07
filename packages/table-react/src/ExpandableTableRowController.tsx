import React from "react";
import cx from "classnames";
import { ExpandButton } from "@fremtind/jkl-expand-button-react";
import { TableCell, TableCellProps, useTableContext } from ".";

export interface ExpandableTableRowControllerProps extends TableCellProps {
    /** Settes automatisk av ExpandableTableRow */
    isOpen?: boolean;
    onClick?: () => void;
}

export const ExpandableTableRowController: React.FC<ExpandableTableRowControllerProps> = ({
    isOpen,
    onClick,
    children,
    className,
    ...rest
}) => {
    if (isOpen === undefined || typeof onClick !== "function") {
        throw new Error("ExpandableTableRowController must have ExpandableTableRow as parent");
    }

    const { compact, collapseToList } = useTableContext();

    // pick text from data-th if possible, but only if it's a list
    const showTextFromTh: string | undefined = collapseToList ? (rest as Record<string, string>)["data-th"] : undefined;

    return (
        <TableCell
            className={cx("jkl-table-cell--expand", { ["jkl-table-cell--expand-without-text"]: !children }, className)}
            {...rest}
        >
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
                {/* show children. or try to use data-th if children is undefined */}
                {children ?? showTextFromTh}
            </ExpandButton>
        </TableCell>
    );
};
