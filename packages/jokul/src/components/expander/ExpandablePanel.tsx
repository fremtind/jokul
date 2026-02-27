import clsx from "clsx";
import {
    type ElementType,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import type { Polymorphic } from "../../utilities/index.js";
import { ExpandablePanelContent } from "./ExpandablePanelContent.js";
import { Expander } from "./Expander.jsx";
import { ExpanderContext } from "./context.js";

export type ExpandablePanelProps = {
    variant?: "fill" | "stroke";
    open?: boolean;
    /*
     * Initiell state av content.
     */
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
};

export function ExpandablePanel<T extends ElementType = "details">(
    props: Polymorphic<ExpandablePanelProps, T>,
): React.JSX.Element {
    const {
        ref,
        children,
        as = "details",
        variant = "fill",
        open: controlledOpen,
        defaultOpen,
        onOpenChange,
        className,
        ...rest
    } = props;

    const [uncontrolledOpen, setUncontrolledOpen] = useState(
        defaultOpen || false,
    );
    const [contentIsVisible, setContentIsVisible] = useState(false);
    const [expanderHeight, setExpanderHeight] = useState(0);

    const internalRef = useRef<HTMLDetailsElement>(null);
    useImperativeHandle(ref, () => internalRef.current, []);

    const El = as;
    const isControlled = typeof controlledOpen !== "undefined";
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const setVisibleIfOpening = (isOpening: boolean) => {
        if (isOpening) {
            setContentIsVisible(true);
        }
    };

    const syncUncontrolledState = () => {
        if (isControlled) {
            return;
        }
        setUncontrolledOpen((previousValue) => {
            onOpenChange?.(!previousValue);
            return !previousValue;
        });
    };

    useEffect(() => {
        const callback = (e: ToggleEvent & { newState: string }) => {
            setUncontrolledOpen(e.newState === "open");
        };

        const element = internalRef.current;

        element?.addEventListener("toggle", callback as EventListener);

        return () =>
            element?.removeEventListener("toggle", callback as EventListener);
    }, []);

    return (
        <div className="jkl-expandable__wrapper">
            <div
                /*
                        Setter `inert` manuelt for å støtte både React 18 og 19.

                        Dette unngår typefeil i React 18 og advarsler i React 19.
                        Se: https://github.com/WICG/inert/issues/58
                    */
                ref={(node) => node?.setAttribute("inert", "true")}
                className="jkl-expandable__focus-container"
                style={{ height: expanderHeight }}
            />
            <El
                ref={internalRef}
                data-testid={"jkl-expand-section"}
                className={clsx(
                    "jkl-expandable",
                    `jkl-expandable--${variant}`,
                    className,
                )}
                open={
                    /* for the animation to work in Safari we must ensure that
                     * the element is open *before* the transition starts */
                    as === "details" ? isOpen || contentIsVisible : undefined
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
}

ExpandablePanel.Content = ExpandablePanelContent;
ExpandablePanel.Header = Expander;
