import { useAnimatedHeight, useId } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import React, { forwardRef, useState } from "react";
import { ExpandableTableRowController, ExpandableTableRowControllerProps } from "./ExpandableTableRowController";
import type { TableRowProps } from "./TableRow";
import { TableRow } from "./TableRow";

export interface ExpandableTableRowProps extends TableRowProps {
    expandedChildren: React.ReactNode;
    /**
     * Setter bredden på raden som blir åpnet
     * @default 100
     */
    colSpan?: number;
    onToggle?: (isOpen: boolean) => void;
}

const ExpandableTableRow = forwardRef<HTMLTableRowElement, ExpandableTableRowProps>(
    ({ className, clickable, children, expandedChildren, onToggle, colSpan = 100, ...rest }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [hidden, setHidden] = useState(true);
        const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen, {
            onTransitionEnd: (isOpen) => {
                // Sett hidden til true når animasjonen er ferdig, dersom raden lukkes
                if (!isOpen) {
                    setHidden(true);
                }
            },
        });

        const toggleOpen = () => {
            const newIsOpen = !isOpen;

            if (onToggle) {
                onToggle(newIsOpen);
            }

            // Sett hidden til false dersom raden er i ferd med å åpnes
            if (newIsOpen) {
                setHidden(false);
            }

            setIsOpen(newIsOpen);
        };

        const tableRowId = useId("jkl-expandable-table-row");
        const expandableTableRowControllerId = useId("jkl-expandable-table-row-controller");

        return (
            <>
                <TableRow
                    className={cx("jkl-table-row--expandable", className, {
                        ["jkl-table-row--expanded"]: isOpen,
                        ["jkl-expandable-table-row--clickable-external"]: clickable,
                    })}
                    clickable={
                        clickable ?? {
                            onClick: () => toggleOpen(),
                        }
                    }
                    {...rest}
                    ref={ref}
                >
                    {React.Children.map(children, (child) => {
                        if (
                            React.isValidElement<ExpandableTableRowControllerProps>(child) &&
                            child.type == ExpandableTableRowController
                        ) {
                            return React.cloneElement<ExpandableTableRowControllerProps>(child, {
                                isOpen,
                                onClick: () => toggleOpen(),
                                "aria-controls": tableRowId,
                                id: expandableTableRowControllerId,
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
                <tr aria-hidden={!isOpen} hidden={hidden}>
                    <td colSpan={colSpan}>
                        <div
                            ref={animationRef}
                            className={cx("jkl-expandable-table-row__expanded-row", {
                                ["jkl-expandable-table-row__expanded-row--expanded"]: isOpen,
                            })}
                            id={tableRowId}
                            aria-labelledby={expandableTableRowControllerId}
                            hidden={!isOpen}
                            role="group"
                        >
                            {expandedChildren}
                        </div>
                    </td>
                </tr>
            </>
        );
    },
);

ExpandableTableRow.displayName = "ExpandableTableRow";

export { ExpandableTableRow };
