import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import React, { FC, useState } from "react";
import { ExpandableTableRowCell } from "./ExpandableTableRowCell";
import { useTableContext } from "./tableContext";
import { useTableSectionContext } from "./tableSectionContext";
import { TableRowProps } from "./TableRow";
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
    const { compact } = useTableContext();
    const { isTableBody } = useTableSectionContext();

    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(clickable?.isClicked || false);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

    if (isTableBody && clickable) {
        return (
            <>
                <tr
                    onClick={function handleOnClick(e) {
                        setClicked(!clicked);
                        clickable.onClick(e);
                    }}
                    onKeyPress={function handleKeyPress(e) {
                        if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            setClicked(!clicked);
                            clickable.onClick(e);
                        }
                    }}
                    className={cx("jkl-table-row", "jkl-table-row--clickable", "jkl-table-row--expandable", className, {
                        ["jkl-table-row--compact"]: compact,
                        ["jkl-table-row--clicked"]: clickable?.markClickedRows && clicked,
                        ["jkl-table-row--expanded"]: isOpen,
                    })}
                    aria-label="Klikkbar rad"
                    aria-pressed={clickable?.markClickedRows ? (clicked ? "true" : "false") : undefined}
                    tabIndex={0}
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
                </tr>
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
            <tr
                className={cx("jkl-table-row", "jkl-table-row--expandable", "jkl-table-row--clickable", className, {
                    ["jkl-table-row--compact"]: compact,
                    ["jkl-table-row--expanded"]: isOpen,
                })}
                onClick={() => setIsOpen(!isOpen)}
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
            </tr>
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
