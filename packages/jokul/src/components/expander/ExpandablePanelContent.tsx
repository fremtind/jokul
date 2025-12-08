import clsx from "clsx";
import { useContext, useEffect } from "react";
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

    /*
        Setter `inert` manuelt for å støtte både React 18 og 19.

        Dette unngår typefeil i React 18 og advarsler i React 19.
        Se: https://github.com/WICG/inert/issues/58
    */
    useEffect(() => {
        const node = animationRef.current;

        if (!open) {
            node?.setAttribute("inert", "true");
        } else {
            node?.removeAttribute("inert");
        }
    }, [open, animationRef]);

    return (
        <div
            ref={animationRef}
            className={clsx("jkl-expandable__content", className)}
            {...rest}
            data-expanded={open}
        >
            <div className="jkl-expandable__content-wrapper">{children}</div>
        </div>
    );
};

ExpandablePanelContent.displayName = "ExpandablePanel.Content";
