import { Density } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { forwardRef, MouseEventHandler, ThHTMLAttributes } from "react";
import { useTableContext } from "./tableContext";
import { TableSortProps } from "./utils";

export type TableSortDirection = "asc" | "desc";

export interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
    bold?: boolean;
    density?: Density;
    /**
     * Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal header følge innholdet i radene.
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * Si om headeren gjelder for en kolonne eller en rad
     * @default "col"
     */
    scope?: "col" | "row";
    srOnly?: boolean;
    sortable?: TableSortProps;
}

const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>((props, ref) => {
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
            className={cn("jkl-table-header", className, {
                ["jkl-table-header--bold"]: bold,
                ["jkl-table-header--align-right"]: align === "right",
                ["jkl-table-header--sr-only"]: srOnly,
                ["jkl-table-header--sortable"]: typeof sortable !== "undefined",
            })}
            scope={scope}
            onClick={handleClick}
            {...rest}
            data-density={density || contextDensity}
            ref={ref}
        >
            {children}
            {sortable && (
                <div
                    className={cn("jkl-table-header__arrows", {
                        "jkl-table-header__arrows--active": Boolean(sortable.direction),
                    })}
                >
                    {sortable.direction && <ArrowVerticalAnimated pointingDown={sortable.direction === "desc"} />}
                </div>
            )}
        </th>
    );
});

TableHeader.displayName = "TableHeader";

export { TableHeader };
