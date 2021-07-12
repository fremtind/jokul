import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { TransitionEventHandler } from "react";
import { MouseEventHandler } from "react";

interface Props {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    /** @deprecated use data-theme["dark|light"] where possible in stead. this prop is to support IE11 */
    inverted?: boolean;
    description?: string;
    openLabel?: string;
    closeLabel?: string;
}

// state order definition
const states = [
    ["in-done", "out"],
    ["out", "out-done"],
    ["out-done", "in"],
    ["in", "in-done"],
];

/**
 * Initial
 * isOpen: false, "Meny"
 * *click* isOpen: true, "Meny" -> "Lukk"
 * isOpen: true, "Lukk"
 * *click* isOpen: false, "Lukk" -> "Meny"
 */

export const Hamburger = ({
    isOpen,
    onClick,
    inverted = false,
    description = "Hovedmeny",
    className = "",
    openLabel = "",
    closeLabel = "",
}: Props) => {
    const componentClassname = classnames(
        "jkl-hamburger",
        {
            "jkl-hamburger--is-open": isOpen,
            "jkl-hamburger--inverted": inverted,
        },
        className,
    );

    const [transitionState, setTransitionState] = useState({
        isOpen,
        state: states[0],
    });

    // useEffect(() => {
    //     if (isOpen && transitionState.isOpen !== isOpen) {
    //         setTransitionState({
    //             isOpen: transitionState.isOpen,
    //             state: states[1],
    //         });
    //     } else if (!isOpen && transitionState.isOpen !== isOpen) {
    //         setTransitionState({
    //             isOpen: transitionState.isOpen,
    //             state: states[3],
    //         });
    //     }
    // }, [setTransitionState, isOpen]);

    // const handleTransitionEnd: TransitionEventHandler<HTMLSpanElement> = (e) => {
    //     if (e.propertyName !== "opacity") {
    //         return;
    //     }

    //     const nextState = states.find((s) => s[0] === transitionState.state[1]);
    //     setTransitionState({
    //         isOpen,
    //         state: nextState!,
    //     });
    // };

    // const handleClick = () => {
    //     // only allow click if the state change is done
    //     if (transitionState.state[0] === states[0][0] || transitionState.state[0] === states[2][0]) {
    //         onClick();
    //     }
    // };

    return (
        <button
            type="button"
            aria-label={description}
            onClick={onClick}
            className={componentClassname}
            data-testid="jkl-hamburger"
        >
            <span className="jkl-hamburger__inner"></span>
            {openLabel && closeLabel && (
                <span
                    className={`jkl-hamburger__label jkl-hamburger__label--${transitionState.state[0]}`}
                    aria-live="polite"
                    // onTransitionEnd={handleTransitionEnd}
                >
                    <span className="jkl-hamburger__label--open" aria-hidden={isOpen}>
                        {openLabel}
                    </span>
                    <span className="jkl-hamburger__label--close" aria-hidden={!isOpen}>
                        {closeLabel}
                    </span>
                </span>
            )}
        </button>
    );
};
