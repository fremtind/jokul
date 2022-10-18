import { easings, timingsMillis } from "@fremtind/jkl-core";
import { useForwardedRef } from "@fremtind/jkl-react-hooks";
import React, { ReactElement } from "react";
import { CSSTransition } from "react-transition-group";
import { EasingProps, TimingProps, TransitionProps } from "./transition";

export interface FadeProps extends TransitionProps {
    /**
     * Komponenten animeres inn hvis `in` starter som `true`. Om du vil skru av denne første animasjonen, sett `appear` til `false`.
     * @default true
     */
    appear?: boolean;
    /**
     * Støtter kun én direkte child, som må være et HTML-element (ikke Fragment).
     */
    children: ReactElement<any, any>;
    /**
     * @default {
     *  enter: easings.entrance,
     *  exit: easings.exit,
     * }
     */
    easing?: EasingProps["easing"];
    /**
     * @default {
     *  enter: timingsMillis.productive,
     *  exit: timingsMillis.productive,
     * }
     */
    timing?: TimingProps["timing"];
}

export const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {
        appear = true,
        in: inProp,
        easing = {
            enter: easings.entrance,
            exit: easings.exit,
        },
        timing = {
            enter: timingsMillis.productive,
            exit: timingsMillis.productive,
        },
        children,
        ...rest
    } = props;

    const [nodeRef, setNodeRef] = useForwardedRef(ref);

    return (
        <CSSTransition
            appear={appear}
            in={inProp}
            nodeRef={nodeRef}
            easing={easing}
            timeout={timing}
            {...rest}
            classNames="jkl-fade"
        >
            {(status) =>
                React.cloneElement(children, {
                    className: `${children.props.className} jkl-fade jkl-fade-${status}`,
                    style: {
                        ...children.props.style,
                        visibility: status === "exited" && !inProp ? "hidden" : undefined,
                        "--jkl-fade-enter-timing": typeof timing === "number" ? timing : `${timing.enter}ms`,
                        "--jkl-fade-exit-timing": typeof timing === "number" ? timing : `${timing.exit}ms`,
                        "--jkl-fade-enter-easing": typeof easing === "string" ? easing : easing.enter,
                        "--jkl-fade-exit-easing": typeof easing === "string" ? easing : easing.exit,
                    },
                    ref: setNodeRef, // https://github.com/reactjs/react-transition-group/issues/779
                })
            }
        </CSSTransition>
    );
});
