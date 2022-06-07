import cx from "classnames";
import { navigate } from "gatsby";
import React, { useCallback, useRef, useEffect, FC } from "react";
import { useFullscreenMenuContext } from "../../contexts/fullscreenMenuContext";
import { ContentLink } from "../ContentLink/ContentLink";
import { MainMenu } from "./components/MainMenu";
import { useNavigationLinks } from "./useNavigationLinks";

import "./header.scss";

type Props = {
    className?: string;
};

export const Header: FC<Props> = ({ className }) => {
    const headerRef = useRef<HTMLElement>(null);
    const collapseMenu = useCallback(() => {
        const shouldCollapse = window.scrollY > 96;
        if (shouldCollapse) {
            headerRef.current?.classList.add("jkl-portal-header--collapsed");
        } else {
            headerRef.current?.classList.remove("jkl-portal-header--collapsed");
        }
    }, []);
    useEffect(() => {
        window && window.addEventListener("scroll", collapseMenu);
        return () => window && window.removeEventListener("scroll", collapseMenu);
    }, [collapseMenu]);
    const { menuItems } = useNavigationLinks();
    const { setIsOpen, setCurrentItem } = useFullscreenMenuContext();

    const componentClassName = cx("jkl-portal-header", className);

    return (
        <header ref={headerRef} className={componentClassName}>
            <ContentLink>Hopp til innhold</ContentLink>
            <button
                role="link"
                className="jkl-portal-header__title"
                onClick={() => {
                    setCurrentItem(null);
                    setIsOpen(false);
                    navigate("/");
                }}
            >
                Jøkul
            </button>
            <MainMenu className="jkl-portal-header__menu" items={menuItems} />
        </header>
    );
};
