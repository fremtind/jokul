import React, { FC, useState } from "react";
import cx from "classnames";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { ExpandableTableRowCell } from "./ExpandableTableRowCell";
import { TableRowProps, TableRow } from "./TableRow";

export interface ExpandableTableRowProps extends TableRowProps {
    expandedChildren: React.ReactNode;
    /**
     * Setter bredden på raden som blir åpnet
     * @default 100
     */
    colSpan?: number;
}

export const ExpandableTableRow: FC<ExpandableTableRowProps> = ({
    className,
    clickable,
    children,
    expandedChildren,
    colSpan = 100,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

    const tableRowClassName = cx("jkl-table-row--expandable", className, {
        ["jkl-table-row--expanded"]: isOpen,
    });
    const childWrapperClassName = cx("jkl-expandable-table-row__expanded-row", {
        ["jkl-expandable-table-row__expanded-row--expanded"]: isOpen,
    });

    return (
        <>
            <TableRow
                className={tableRowClassName}
                clickable={
                    clickable ?? {
                        onClick: () => setIsOpen(!isOpen),
                    }
                }
                {...rest}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type == ExpandableTableRowCell) {
                        return React.cloneElement(child, {
                            isOpen,
                            onClick: () => setIsOpen(!isOpen),
                        });
                    } else {
                        return child;
                    }
                })}
            </TableRow>
            {/*
                Use a table row with a single as wide as possible cell to contain content. This allows
                using useAnimatedHeight to animate the row height.
            */}
            <tr>
                <td colSpan={colSpan}>
                    <div ref={animationRef} className={childWrapperClassName}>
                        {expandedChildren}
                    </div>
                </td>
            </tr>
        </>
    );
};
