import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import React, { FC, useState } from "react";
import { ExpandableTableRowCell } from "./ExpandableTableRowCell";
import { useTableSectionContext } from "./tableSectionContext";
import { TableRowProps, TableRow } from "./TableRow";
export interface ExpandableTableRowProps extends TableRowProps {
    expandedChildren: React.ReactNode;
}

export const ExpandableTableRow: FC<ExpandableTableRowProps> = ({
    className,
    clickable,
    children,
    expandedChildren,
    ...rest
}) => {
    const { isTableBody } = useTableSectionContext();

    const [isOpen, setIsOpen] = useState(false);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

    if (isTableBody && clickable) {
        return (
            <>
                <TableRow
                    className={cx("jkl-table-row--expandable", className, {
                        ["jkl-table-row--expanded"]: isOpen,
                    })}
                    {...rest}
                    clickable={clickable}
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
                <tr>
                    <td colSpan={100}>
                        <div
                            ref={animationRef}
                            className={cx("jkl-expandable-table-row__expanded-row", {
                                ["jkl-expandable-table-row__expanded-row--expanded"]: isOpen,
                            })}
                        >
                            {React.Children.map(expandedChildren, (child) => {
                                if (React.isValidElement(child)) {
                                    return React.cloneElement(child, {});
                                }
                                return child;
                            })}
                        </div>
                    </td>
                </tr>
            </>
        );
    }

    return (
        <>
            <TableRow
                className={cx("jkl-table-row--expandable", className, {
                    ["jkl-table-row--expanded"]: isOpen,
                })}
                clickable={{
                    onClick: () => setIsOpen(!isOpen),
                }}
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
            <tr>
                <td colSpan={100}>
                    <div
                        ref={animationRef}
                        className={cx("jkl-expandable-table-row__expanded-row", {
                            ["jkl-expandable-table-row__expanded-row--expanded"]: isOpen,
                        })}
                    >
                        {React.Children.map(expandedChildren, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, {});
                            }
                            return child;
                        })}
                    </div>
                </td>
            </tr>
        </>
    );
};
