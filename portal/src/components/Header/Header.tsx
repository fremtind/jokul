import React, { useLayoutEffect, useCallback, useRef } from "react";
import { navigate } from "gatsby";
import classNames from "classnames";

import { Link as JokulLink } from "@fremtind/jkl-core";

import { useLocation } from "../../contexts/locationContext";
import { useFullscreenMenu } from "../../contexts/fullscreenMenuContext";
import { useNavigationLinks } from "./useNavigationLinks";
import { MainMenu, MenuItemList } from "./components/MainMenu";
import "./header.scss";

export const Header = ({ className }: { className?: string }) => {
    const headerRef = useRef<HTMLElement>(null);
    const collapseMenu = useCallback(() => {
        const shouldCollapse = window.scrollY > 96;
        if (shouldCollapse) {
            headerRef.current?.classList.add("jkl-portal-header--collapsed");
        } else {
            headerRef.current?.classList.remove("jkl-portal-header--collapsed");
        }
    }, []);
    useLayoutEffect(() => {
        window && window.addEventListener("scroll", collapseMenu);
        return () => window && window.removeEventListener("scroll", collapseMenu);
    }, [collapseMenu]);
    const { profileDocPages, getStartedDocPages, componentDocPages, blogPages, PageType } = useNavigationLinks();
    const componentClassName = classNames("jkl-portal-header", className);

    const menuItems: MenuItemList = [
        {
            linkText: "Profil",
            content: profileDocPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.PROFIL,
            })),
            basePath: PageType.PROFIL,
        },
        {
            linkText: "Komponenter",
            content: [
                ...componentDocPages
                    .filter((page) => page.group !== "hooks")
                    .map((page) => ({
                        linkText: page.title,
                        content: page.path,
                        basePath: PageType.KOMPONENTER,
                    })),
                {
                    linkText: "React Hooks",
                    content: componentDocPages
                        .filter((page) => page.group === "hooks")
                        .map((page) => ({
                            linkText: page.title,
                            content: page.path,
                            basePath: PageType.KOMPONENTER,
                        })),
                    basePath: PageType.KOMPONENTER,
                },
            ],
            basePath: PageType.KOMPONENTER,
        },
        {
            linkText: "Kom i gang",
            content: [
                ...getStartedDocPages
                    .filter((page) => page.group !== "uu")
                    .map((page) => ({
                        linkText: page.title,
                        content: page.path,
                        basePath: PageType.KOMIGANG,
                    })),
                {
                    linkText: "Universell utforming",
                    content: getStartedDocPages
                        .filter((page) => page.group === "uu")
                        .sort((pA, pB) => {
                            if (pA.order && pB.order) {
                                return Number(pA.order) - Number(pB.order);
                            } else {
                                return 0;
                            }
                        })
                        .map((page) => ({
                            linkText: page.title,
                            content: page.path,
                            basePath: PageType.KOMIGANG,
                        })),
                    basePath: PageType.KOMIGANG,
                },
            ],
            basePath: PageType.KOMIGANG,
        },
        {
            linkText: "Blogg",
            content: blogPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.BLOG,
            })),

            basePath: PageType.BLOG,
        },
    ];
    const { currentSection } = useLocation();
    const { menuIsOpen } = useFullscreenMenu();
    const isActiveFunction = (path: string) => {
        const itemPathMatches = currentSection !== "" && path.includes(currentSection);
        const thisMenuIsOpen = path !== "" && menuIsOpen.includes(path);

        return thisMenuIsOpen || (itemPathMatches && (thisMenuIsOpen || menuIsOpen == ""));
    };

    return (
        <header ref={headerRef} className={componentClassName}>
            <JokulLink
                className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal-header__skip-to-content"
                href="#innhold"
            >
                Hopp til innhold
            </JokulLink>
            <button role="link" className="jkl-portal-header__title" onClick={() => navigate("/")}>
                Jøkul
            </button>
            <MainMenu
                className="jkl-portal-header__menu"
                navigationFunction={navigate}
                isActiveFunction={isActiveFunction}
                showTopLevel
                items={menuItems}
            />
        </header>
    );
};
