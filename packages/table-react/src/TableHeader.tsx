import { Density } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { forwardRef, MouseEventHandler, ThHTMLAttributes } from "react";
import { useTableContext } from "./tableContext";

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
    direction?: TableSortDirection;
    onClick?: MouseEventHandler<HTMLTableCellElement>;
}

const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>((props, ref) => {
    const {
        bold = true,
        density,
        direction,
        className,
        scope = "col",
        srOnly,
        align = "left",
        children,
        onClick,
        ...rest
    } = props;
    const { density: contextDensity } = useTableContext();

    return (
        <th
            className={cn("jkl-table-header", className, {
                ["jkl-table-header--bold"]: bold,
                ["jkl-table-header--align-right"]: align === "right",
                ["jkl-table-header--sr-only"]: srOnly,
                ["jkl-table-header--sortable"]: typeof onClick !== "undefined",
            })}
            scope={scope}
            onClick={onClick}
            {...rest}
            data-density={density || contextDensity}
            ref={ref}
        >
            {children}
            {onClick && (
                <div
                    className={cn("jkl-table-header__arrows", {
                        "jkl-table-header__arrows--active": Boolean(direction),
                    })}
                >
                    {direction && <ArrowVerticalAnimated pointingDown={direction === "desc"} />}
                </div>
            )}
        </th>
    );
});

TableHeader.displayName = "TableHeader";

export { TableHeader };
