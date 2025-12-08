import clsx from "clsx";
import type React from "react";
import { forwardRef } from "react";
import { Expander } from "../expander/Expander.js";
import { TableCell } from "./TableCell.js";
import { useTableContext } from "./tableContext.js";
import type { ExpandableTableRowControllerProps } from "./types.js";

const ExpandableTableRowController = forwardRef<
    HTMLTableCellElement,
    ExpandableTableRowControllerProps
>(
    (
        {
            isOpen,
            onClick,
            children,
            className,
            id,
            "aria-controls": ariaControls,
            ...rest
        },
        ref,
    ) => {
        if (isOpen === undefined || typeof onClick !== "function") {
            throw new Error(
                "ExpandableTableRowController must have ExpandableTableRow as parent",
            );
        }

        const { collapseToList } = useTableContext();

        const dataTh = (rest as Record<string, string>)["data-th"];

        // pick text from data-th if possible, but only if it's a list
        const showTextFromTh: string | undefined = collapseToList
            ? dataTh
            : undefined;

        return (
            <TableCell
                className={clsx(
                    "jkl-table-cell--expand",
                    { ["jkl-table-cell--expand-without-text"]: !children },
                    className,
                )}
                {...rest}
                ref={ref}
            >
                <Expander
                    as="button"
                    className={clsx("jkl-table-row-expand-button", {
                        ["jkl-table-row-expand-button--expanded"]: isOpen,
                    })}
                    id={id}
                    open={isOpen}
                    aria-controls={ariaControls}
                    aria-label={
                        children ? undefined : dataTh || "Ekspander rad"
                    }
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        onClick();
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.stopPropagation();
                            e.preventDefault();
                            onClick();
                        }
                    }}
                >
                    {/* show children. or try to use data-th if children is undefined */}
                    {children ?? showTextFromTh}
                </Expander>
            </TableCell>
        );
    },
);

ExpandableTableRowController.displayName = "ExpandableTableRowController";

export { ExpandableTableRowController };
