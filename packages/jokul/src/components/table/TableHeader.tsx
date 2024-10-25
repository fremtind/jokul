import clsx from "clsx";
import React, { forwardRef, MouseEventHandler, ThHTMLAttributes } from "react";
import { Density } from "../../core/types.js";
import { ArrowVerticalAnimated } from "../icon/index.js";
import { useTableContext } from "./tableContext.js";
import { TableSortProps } from "./utils.js";

export type TableSortDirection = "asc" | "desc";

export interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
    bold?: boolean;
    density?: Density;
    /**
     * Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal header følge innholdet i radene.
     * @default "left"
     */
    align?: "left" | "center" | "right";
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
            className={clsx("jkl-table-header", className, {
                ["jkl-table-header--bold"]: bold,
                ["jkl-table-header--align-right"]: align === "right",
                ["jkl-table-header--align-center"]: align === "center",
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
                    className={clsx("jkl-table-header__arrows", {
                        "jkl-table-header__arrows--active": Boolean(sortable.direction),
                    })}
                >
                    {sortable.direction && <ArrowVerticalAnimated pointingDown={sortable.direction === "desc"} bold />}
                </div>
            )}
        </th>
    );
});

TableHeader.displayName = "TableHeader";

export { TableHeader };
