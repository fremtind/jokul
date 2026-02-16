import clsx from "clsx";
import { type ComponentPropsWithRef, useContext } from "react";
import { useAnimatedHeightBetween } from "../../hooks/useAnimatedHeight/useAnimatedHeightBetween.js";
import { mergeRefs } from "../../utilities/mergeRefs.js";
import { ExpanderContext } from "./context.js";
import type { ExpandableContext } from "./types.js";

export const ExpandablePanelContent = ({
    className,
    children,
    ref: componentRef,
    ...rest
}: ComponentPropsWithRef<"div">): React.JSX.Element => {
    const { open, onTransitionStart, onTransitionEnd } =
        useContext<ExpandableContext>(ExpanderContext);

    const [animationRef] = useAnimatedHeightBetween<HTMLDivElement>(open, {
        timing: "snappy",
        onTransitionStart,
        onTransitionEnd,
    });

    const ref = mergeRefs(
        componentRef,
        animationRef,
        (node: HTMLDivElement | null) =>
            open
                ? node?.removeAttribute("inert")
                : node?.setAttribute("inert", "true"),
    );

    return (
        <div
            ref={ref}
            className={clsx("jkl-expandable__content", className)}
            {...rest}
            data-expanded={open}
        >
            <div className="jkl-expandable__content-wrapper">{children}</div>
        </div>
    );
};

ExpandablePanelContent.displayName = "ExpandablePanel.Content";
