import clsx from "clsx";
import React, { useContext } from "react";
import { useAnimatedHeightBetween } from "../../hooks/useAnimatedHeight/useAnimatedHeightBetween.js";
import { ExpanderContext } from "./context.js";
import type {
    ExpandableContext,
    ExpandablePanelContentComponent,
} from "./types.js";

export const ExpandablePanelContent: ExpandablePanelContentComponent = ({
    className,
    children,
    ...rest
}) => {
    const { open, onTransitionStart, onTransitionEnd } =
        useContext<ExpandableContext>(ExpanderContext);

    const [animationRef] = useAnimatedHeightBetween<HTMLDivElement>(open, {
        timing: "snappy",
        onTransitionStart,
        onTransitionEnd,
    });

    return (
        <div
            ref={animationRef}
            className={clsx("jkl-expandable__content", className)}
            {...rest}
            data-expanded={open}
            {...(!open ? { inert: "true" } : {})}
        >
            <div className="jkl-expandable__content-wrapper">{children}</div>
        </div>
    );
};
