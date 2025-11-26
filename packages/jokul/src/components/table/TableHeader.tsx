import clsx from "clsx";
import React, { forwardRef, type MouseEventHandler } from "react";
import { ChevronDownIcon, ChevronUpIcon, Icon } from "../icon/index.js";
import { useTableContext } from "./tableContext.js";
import type { TableHeaderProps } from "./types.js";

export type TableSortDirection = "asc" | "desc" | "none";

const SortableArrows = ({ direction }: { direction: TableSortDirection }) => {
    if (direction === "desc") return <ChevronDownIcon variant="inherit" />;
    if (direction === "asc") return <ChevronUpIcon variant="inherit" />;

    return <Icon variant="inherit">unfold_more</Icon>;
};

const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
    (props, ref) => {
        const {
            bold = true,
            density,
            sortable,
            className,
            scope = "col",
            srOnly,
            align = "left",
            children,
            onClick,
            ...rest
        } = props;
        const { density: contextDensity } = useTableContext();

        const handleClick: MouseEventHandler<HTMLTableCellElement> = (e) => {
            onClick?.(e);
            sortable?.onClick();
        };

        return (
            <th
                className={clsx("jkl-table-header", className, {
                    "jkl-table-header--bold": bold,
                    "jkl-table-header--align-right": align === "right",
                    "jkl-table-header--align-center": align === "center",
                    "jkl-table-header--sr-only": srOnly,
                    "jkl-table-header--sortable":
                        typeof sortable !== "undefined",
                })}
                scope={scope}
                onClick={handleClick}
                {...rest}
                data-density={density || contextDensity}
                ref={ref}
            >
                <div className="jkl-table-header__arrows">
                    {children}
                    {sortable && (
                        <SortableArrows direction={sortable.direction} />
                    )}
                </div>
            </th>
        );
    },
);

TableHeader.displayName = "TableHeader";

export { TableHeader };
