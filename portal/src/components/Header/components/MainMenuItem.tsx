import React from "react";
import cx from "classnames";
import { WithChildren } from "@forbrukerradet/jkl-core";
import { useAnimatedHeight, useId } from "@forbrukerradet/jkl-react-hooks";

interface Props extends WithChildren {
    label: string;
    isOpen: boolean;
    isActive: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const MainMenuItem: React.FC<Props> = ({ children, label, isActive, isOpen, onClick }) => {
    const [menuRef] = useAnimatedHeight<HTMLDivElement>(isOpen);
    const buttonId = useId("jkl-portal-main-menu-button");
    const overlayId = useId("jkl-portal-main-menu-overlay");

    return (
        <>
            <button
                className={cx("jkl-portal-main-menu__root-link", {
                    "jkl-portal-main-menu__root-link--active": isActive,
                })}
                aria-haspopup="menu"
                aria-expanded={isOpen ? "true" : undefined}
                aria-controls={overlayId}
                id={buttonId}
                onClick={onClick}
            >
                {label}
            </button>
            <div
                ref={menuRef}
                className={cx("jkl-portal-main-menu__overlay", {
                    "jkl-portal-main-menu__overlay--open": isOpen,
                })}
                aria-describedby={buttonId}
                role="group"
                id={overlayId}
                hidden={!isOpen}
            >
                <div className="jkl-portal-main-menu__menu-wrapper">
                    <ul className="jkl-portal-main-menu__menu-items" role="menu">
                        {children}
                    </ul>
                </div>
            </div>
        </>
    );
};
