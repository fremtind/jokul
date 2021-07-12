import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import classnames from "classnames";

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
                <SwitchTransition>
                    <CSSTransition
                        key={!isOpen ? openLabel : closeLabel}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames="jkl-hamburger__label"
                    >
                        <span className="jkl-hamburger__label" aria-live="polite">
                            {!isOpen ? openLabel : closeLabel}
                        </span>
                    </CSSTransition>
                </SwitchTransition>
            )}
        </button>
    );
};
