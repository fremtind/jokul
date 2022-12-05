import { Density } from "@fremtind/jkl-core";
import cx from "classnames";
import React, { forwardRef, ThHTMLAttributes } from "react";
import { useTableContext } from "./tableContext";

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
}

const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
    ({ bold = true, density, className, scope = "col", srOnly, align = "left", ...rest }, ref) => {
        const { density: contextDensity } = useTableContext();
        return (
            <th
                className={cx("jkl-table-header", className, {
                    ["jkl-table-header--bold"]: bold,
                    ["jkl-table-header--align-right"]: align === "right",
                    ["jkl-table-header--sr-only"]: srOnly,
                })}
                scope={scope}
                {...rest}
                data-density={density || contextDensity}
                ref={ref}
            />
        );
    },
);

TableHeader.displayName = "TableHeader";

export { TableHeader };
