import { autoUpdate, flip, offset as flOffset, shift, useFloating, useMergeRefs } from "@floating-ui/react";
import classNames from "classnames";
import { useClientLayoutEffect } from "packages/react-hooks/src";
import React, { HTMLAttributes } from "react";
import PopoverContent, { PopoverContentProps } from "./PopoverContent";

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Popover content
     */
    children: React.ReactNode;
    /**
     * Popover placement
     */
    placement?: "top" | "right" | "bottom" | "left";
    /**
     * Element popover anchors to
     */
    anchorEl: Element | null;
    /**
     * Open state
     */
    open: boolean;
    /**
     * onClose callback
     */
    onClose: () => void;
    /**
     * Distance from anchor to popover
     * @default 4
     */
    offset?: number;
    /**
     * Changes what CSS position property to use
     * You want to use "fixed" if reference element is inside a fixed container, but popover is not
     * @default "absolute"
     */
    strategy?: "absolute" | "fixed";
    /**
     * Changes placement of the floating element in order to keep it in view.
     * @default true
     */
    flip?: boolean;
}

interface PopoverComponent extends React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>> {
    Content: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(function Popover(
    {
        className,
        children,
        strategy,
        placement = "top",
        offset = 4,
        open,
        onClose,
        anchorEl,
        flip: _flip = true,
        ...rest
    },
    ref,
) {
    const {
        update,
        refs,
        placement: flPlacement,
        floatingStyles,
    } = useFloating({
        strategy,
        placement,
        open,
        middleware: [
            flOffset(offset),
            _flip && flip({ padding: 5, fallbackPlacements: ["bottom", "top"] }),
            shift({ padding: 12 }),
        ],
    });

    useClientLayoutEffect(() => {
        refs.setReference(anchorEl);
    }, [anchorEl]);

    const floatingRef = useMergeRefs([refs.setFloating, ref]);

    useClientLayoutEffect(() => {
        if (!refs.reference.current || !refs.floating.current || !open) return;

        const cleanup = autoUpdate(refs.reference.current, refs.floating.current, update);

        return () => cleanup();
    }, [refs.floating, refs.reference, update, open, anchorEl]);

    return (
        <div
            ref={floatingRef}
            {...rest}
            className={classNames("jkl-popover", className, {
                "jkl-popover--hidden": !open || !anchorEl,
            })}
            style={{ ...rest.style, ...floatingStyles }}
            aria-hidden={!open || !anchorEl}
        >
            {children}
        </div>
    );
}) as PopoverComponent;

Popover.Content = PopoverContent;

export default Popover;
