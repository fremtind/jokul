import clsx from "clsx";
import React, { forwardRef, useEffect, useState } from "react";
import { useAnimatedHeight, useId } from "../../hooks";
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
    /**
     * Om du ønsker en controlled komponent. Hvis du ikke setter denne vil komponenten håndtere state selv.
     */
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
}

const ExpandableTableRow = forwardRef<HTMLTableRowElement, ExpandableTableRowProps>((props, ref) => {
    const {
        className,
        clickable,
        children,
        expandedChildren,
        onToggle,
        colSpan = 100,
        isOpen: isOpenProp,
        ...rest
    } = props;

    const [isOpen, setIsOpen] = useState(isOpenProp ?? false);
    useEffect(() => {
        if (typeof isOpenProp === "undefined") {
            return;
        }
        setIsOpen(isOpenProp);
    }, [isOpenProp]);

    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen, { timing: "expressive" });

    const toggleOpen = () => {
        const newIsOpen = !isOpen;

        if (onToggle) {
            onToggle(newIsOpen);
        }

        setIsOpen(newIsOpen);
    };

    const tableRowClassName = clsx("jkl-table-row--expandable", className, {
        ["jkl-table-row--expanded"]: isOpen,
        ["jkl-expandable-table-row--clickable-external"]: clickable,
    });
    const childWrapperClassName = clsx("jkl-expandable-table-row__expanded-row", {
        ["jkl-expandable-table-row__expanded-row--expanded"]: isOpen,
    });

    const tableRowId = useId("jkl-expandable-table-row");
    const expandableTableRowControllerId = useId("jkl-expandable-table-row-controller");

    return (
        <>
            <TableRow
                className={tableRowClassName}
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
            <tr aria-hidden={!isOpen}>
                <td colSpan={colSpan}>
                    <div
                        ref={animationRef}
                        className={childWrapperClassName}
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
});

ExpandableTableRow.displayName = "ExpandableTableRow";

export { ExpandableTableRow };
