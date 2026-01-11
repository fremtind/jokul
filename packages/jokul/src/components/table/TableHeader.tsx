import clsx from "clsx";
import React, { forwardRef, type MouseEventHandler } from "react";
import { ChevronDownIcon, ChevronUpIcon, Icon } from "../icon/index.js";
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
            sortable,
            className,
            scope = "col",
            srOnly,
            align = "left",
            children,
            onClick,
            ...rest
        } = props;

        const handleClick: MouseEventHandler<HTMLTableCellElement> = (e) => {
            onClick?.(e);
            sortable?.onClick();
        };

        return (
            <th
                className={clsx("jkl-table-header", className, {
                    "jkl-table-header--bold": bold,
                    "jkl-table-header--sr-only": srOnly,
                    "jkl-table-header--sortable":
                        typeof sortable !== "undefined",
                })}
                scope={scope}
                onClick={handleClick}
                {...rest}
                ref={ref}
            >
                <div className="jkl-table-header__arrows" data-align={align}>
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
