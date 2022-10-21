import cx from "classnames";
import { navigate } from "gatsby";
import React, { useCallback, useRef, useEffect, FC } from "react";
import { useFullscreenMenuContext } from "../../fullscreenMenuContext";
import { ContentLink } from "./ContentLink";
import { MainMenu } from "./MainMenu";
import { PortalLogo } from "./PortalLogo";
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
            <PortalLogo
                onClick={(e) => {
                    e.preventDefault();
                    setCurrentItem(null);
                    setIsOpen(false);
                    navigate("/");
                }}
            />
            <MainMenu className="jkl-portal-header__menu" items={menuItems} />
        </header>
    );
};
