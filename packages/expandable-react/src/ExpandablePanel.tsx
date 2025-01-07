import { PolymorphicRef } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
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
        const [expanderHeight, setExpanderHeight] = useState(0);

        const internalRef = useRef<HTMLDetailsElement>();
        useImperativeHandle(ref, () => internalRef.current, [internalRef]);

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

        useEffect(() => {
            const callback = (e: ToggleEvent & { newState: string }) => {
                setUncontrolledOpen(e.newState === "open");
            };

            const element = internalRef.current;

            element?.addEventListener("toggle", callback as EventListener);

            return () =>
                element?.removeEventListener(
                    "toggle",
                    callback as EventListener,
                );
        }, [setContentIsVisible, setUncontrolledOpen]);

        return (
            <div className="jkl-expandable__wrapper">
                <div
                    // React typings don't include inert for some reason,
                    // but destructuring lets us calm down the TS compiler
                    {...{ inert: "true" }}
                    className="jkl-expandable__focus-container"
                    style={{ height: expanderHeight }}
                ></div>
                <El
                    ref={internalRef}
                    data-testid={"jkl-expand-section"}
                    className={cn(
                        "jkl-expandable",
                        `jkl-expandable--${variant}`,
                    )}
                    open={
                        /* for the animation to work in Safari we must ensure that
                         * the element is open *before* the transition starts */
                        as === "details"
                            ? isOpen || contentIsVisible
                            : undefined
                    }
                    /* this attribute is used for styling purposes */
                    data-visible-content={isOpen || contentIsVisible}
                    {...rest}
                >
                    <ExpanderContext.Provider
                        value={{
                            open: isOpen,
                            onToggle: syncUncontrolledState,
                            onTransitionEnd: setContentIsVisible,
                            onTransitionStart: setVisibleIfOpening,
                            setExpanderHeight,
                        }}
                    >
                        {children}
                    </ExpanderContext.Provider>
                </El>
            </div>
        );
    }),
    { Content: ExpandablePanelContent },
) as ExpandablePanelComponent;
