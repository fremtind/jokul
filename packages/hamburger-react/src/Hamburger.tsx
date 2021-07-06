import React, { RefObject, useRef, useState } from "react";
import { useClickOutside } from "@fremtind/jkl-react-hooks";

interface Props {
    className?: string;
    onClick?: (isActive: boolean) => void;
    onClickOutside?: (isActive: boolean) => void;
    enableClickOutside?: boolean;
    initialIsActive?: boolean;
    /** @deprecated */
    negative?: boolean;
    description?: string;
    insideRef?: RefObject<HTMLElement>;
}

export const Hamburger = ({
    className = "",
    initialIsActive = false,
    negative = false,
    description = "Hovedmeny",
    onClick,
    onClickOutside,
    enableClickOutside = false,
    insideRef,
}: Props) => {
    const [isActive, toggleIsActive] = useState(initialIsActive);
    const wrapperRef = useRef(null);

    const toggleActive = (fn: ((isActive: boolean) => void) | undefined) => {
        const nextActive = !isActive;
        toggleIsActive(nextActive);
        if (fn) {
            fn(nextActive);
        }
    };

    const onButtonClick = () => toggleActive(onClick);
    const onOutsideClick = () => toggleActive(onClickOutside);
    const getRef = () => insideRef || wrapperRef;

    useClickOutside(enableClickOutside ? getRef() : null, onOutsideClick);

    return (
        <button
            type="button"
            aria-label={description}
            onClick={onButtonClick}
            className={`jkl-hamburger ${isActive ? "jkl-hamburger--is-active" : ""} ${
                negative ? "jkl-hamburger--negative" : ""
            } ${className}`}
            data-testid="jkl-hamburger"
            ref={wrapperRef}
        >
            <span className="jkl-hamburger__inner"></span>
        </button>
    );
};
