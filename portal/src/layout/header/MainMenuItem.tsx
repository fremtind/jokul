import { WithChildren } from "@fremtind/jkl-core";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import React from "react";

interface Props extends WithChildren {
    label: string;
    isOpen: boolean;
    isActive: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const MainMenuItem: React.FC<Props> = ({
    children,
    label,
    isActive,
    isOpen,
    onClick,
}) => {
    const [menuRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

    return (
        <>
            <button
                className={cx("jkl-portal-main-menu__root-link", {
                    "jkl-portal-main-menu__root-link--active": isActive,
                })}
                aria-haspopup="menu"
                aria-expanded={isOpen ? "true" : undefined}
                aria-controls="jkl-portal-main-menu-overlay"
                id="jkl-portal-main-menu-button"
                onClick={onClick}
            >
                {label}
            </button>
            <div
                ref={menuRef}
                className={cx("jkl-portal-main-menu__overlay", {
                    "jkl-portal-main-menu__overlay--open": isOpen,
                })}
                aria-describedby="jkl-portal-main-menu-button"
                role="group"
                id="jkl-portal-main-menu-overlay"
                hidden={!isOpen}
            >
                <div className="jkl-portal-main-menu__menu-wrapper">
                    <ul
                        className="jkl-portal-main-menu__menu-items"
                        role="menu"
                    >
                        {children}
                    </ul>
                </div>
            </div>
        </>
    );
};
