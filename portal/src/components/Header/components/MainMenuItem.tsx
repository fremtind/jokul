// @ts-ignore: wait for nrk to supply types
import CoreToggle from "@nrk/core-toggle/jsx";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import React from "react";
interface Props {
    label: string;
    isOpen: boolean;
    isActive: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const MainMenuItem: React.FC<Props> = ({ children, label, isActive, isOpen, onClick }) => {
    const [menuRef] = useAnimatedHeight(isOpen);

    return (
        <>
            <button
                className={cx("jkl-portal-main-menu__root-link", {
                    "jkl-portal-main-menu__root-link--active": isActive,
                })}
                aria-haspopup="menu"
                aria-expanded={isOpen ? "true" : undefined}
                onClick={onClick}
            >
                {label}
            </button>
            <CoreToggle
                ref={menuRef}
                className={cx("jkl-portal-main-menu__overlay", {
                    "jkl-portal-main-menu__overlay--open": isOpen,
                })}
                popup={true}
                hidden={!isOpen}
            >
                <div className="jkl-portal-main-menu__menu-wrapper">
                    <ul className="jkl-portal-main-menu__menu-items" role="menu">
                        {children}
                    </ul>
                </div>
            </CoreToggle>
        </>
    );
};
