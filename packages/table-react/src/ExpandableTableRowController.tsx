import { ExpandButton } from "@fremtind/jkl-expand-button-react";
import cx from "classnames";
import React, { forwardRef } from "react";
import type { TableCellProps } from "./TableCell";
import { TableCell } from "./TableCell";
import { useTableContext } from "./tableContext";

export interface ExpandableTableRowControllerProps extends TableCellProps {
    /** Settes automatisk av ExpandableTableRow */
    isOpen?: boolean;
    /** Settes automatisk av ExpandableTableRow */
    onClick?: () => void;
}

const ExpandableTableRowController = forwardRef<HTMLTableCellElement, ExpandableTableRowControllerProps>(
    ({ isOpen, onClick, children, className, id, "aria-controls": ariaControls, ...rest }, ref) => {
        if (isOpen === undefined || typeof onClick !== "function") {
            throw new Error("ExpandableTableRowController must have ExpandableTableRow as parent");
        }

        const { compact, collapseToList } = useTableContext();

        // pick text from data-th if possible, but only if it's a list
        const showTextFromTh: string | undefined = collapseToList
            ? (rest as Record<string, string>)["data-th"]
            : undefined;

        return (
            <TableCell
                className={cx(
                    "jkl-table-cell--expand",
                    { ["jkl-table-cell--expand-without-text"]: !children },
                    className,
                )}
                {...rest}
                ref={ref}
            >
                <ExpandButton
                    className={cx("jkl-table-row-expand-button", {
                        ["jkl-table-row-expand-button--expanded"]: isOpen,
                    })}
                    id={id}
                    compact={compact}
                    isExpanded={isOpen}
                    aria-controls={ariaControls}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.stopPropagation();
                            e.preventDefault();
                            onClick();
                        }
                    }}
                >
                    {/* show children. or try to use data-th if children is undefined */}
                    {children ?? showTextFromTh}
                </ExpandButton>
            </TableCell>
        );
    },
);

ExpandableTableRowController.displayName = "ExpandableTableRowController";

export { ExpandableTableRowController };
