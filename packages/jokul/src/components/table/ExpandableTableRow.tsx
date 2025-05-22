import clsx from "clsx";
import React, { forwardRef, useEffect, useState } from "react";
import { useAnimatedHeight } from "../../hooks/useAnimatedHeight/useAnimatedHeight.js";
import { useId } from "../../hooks/useId/useId.js";
import { ExpandableTableRowController } from "./ExpandableTableRowController.js";
import { TableRow } from "./TableRow.js";
import type {
    ExpandableTableRowControllerProps,
    ExpandableTableRowProps,
} from "./types.js";

const ExpandableTableRow = forwardRef<
    HTMLTableRowElement,
    ExpandableTableRowProps
>((props, ref) => {
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

    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen, {
        timing: "expressive",
    });

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
    const childWrapperClassName = clsx(
        "jkl-expandable-table-row__expanded-row",
        {
            ["jkl-expandable-table-row__expanded-row--expanded"]: isOpen,
        },
    );

    const tableRowId = useId("jkl-expandable-table-row");
    const expandableTableRowControllerId = useId(
        "jkl-expandable-table-row-controller",
    );

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
                        React.isValidElement<ExpandableTableRowControllerProps>(
                            child,
                        ) &&
                        child.type === ExpandableTableRowController
                    ) {
                        return React.cloneElement<ExpandableTableRowControllerProps>(
                            child,
                            {
                                isOpen,
                                onClick: () => toggleOpen(),
                                "aria-controls": tableRowId,
                                id: expandableTableRowControllerId,
                            },
                        );
                    }

                    return child;
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
