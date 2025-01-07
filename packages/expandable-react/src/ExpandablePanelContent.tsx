import { useAnimatedHeightBetween } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { useContext } from "react";
import { ExpanderContext } from "./context";
import { ExpandablePanelContentComponent, ExpandableContext } from "./types";

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
            className={cn("jkl-expandable__content", className)}
            {...rest}
            data-expanded={open}
            {...(!open ? { inert: "true" } : {})}
        >
            <div className="jkl-expandable__content-wrapper">{children}</div>
        </div>
    );
};
