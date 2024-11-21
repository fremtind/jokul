import { PolymorphicRef } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import { ExpanderContext } from "./context";
import { ExpandablePanelContent } from "./ExpandablePanelContent";
import { ExpandablePanelComponent, ExpandablePanelProps } from "./types";

export const ExpandablePanel = Object.assign(
    React.forwardRef(function ExpandablePanel<
        ElementType extends React.ElementType = "details",
    >(
        props: ExpandablePanelProps<ElementType>,
        ref?: PolymorphicRef<ElementType>,
    ) {
        const {
            children,
            as = "details",
            variant = "fill",
            open: controlledOpen,
            onOpenChange,
            ...rest
        } = props;

        const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
        const [contentIsVisible, setContentIsVisible] = useState(false);

        const El = as;
        const isControlled = typeof controlledOpen !== "undefined";
        const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

        useEffect(() => {
            onOpenChange?.(isOpen);
        }, [isOpen, onOpenChange]);

        const setVisibleIfOpening = (isOpening: boolean) => {
            if (isOpening) {
                setContentIsVisible(true);
            }
        };

        const syncUncontrolledState = () => {
            if (isControlled) {
                return;
            }
            setUncontrolledOpen((previousValue) => !previousValue);
        };

        return (
            <El
                ref={ref}
                data-testid={"jkl-expand-section"}
                className={cn("jkl-expandable", `jkl-expandable--${variant}`)}
                open={
                    /* for the animation to work in Safari we must ensure that
                     * the element is open *before* the transition starts */
                    as === "details" ? isOpen || contentIsVisible : undefined
                }
                {...rest}
            >
                <ExpanderContext.Provider
                    value={{
                        open: isOpen,
                        onToggle: syncUncontrolledState,
                        onTransitionEnd: setContentIsVisible,
                        onTransitionStart: setVisibleIfOpening,
                    }}
                >
                    {children}
                </ExpanderContext.Provider>
            </El>
        );
    }),
    { Content: ExpandablePanelContent },
) as ExpandablePanelComponent;
