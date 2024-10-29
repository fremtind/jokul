import { Hamburger } from "@fremtind/jkl-hamburger-react";
import { useFocusOutside, useId } from "@fremtind/jkl-react-hooks";
import { Link } from "@remix-run/react";
import cn from "classnames";
import React, {
    useState,
    type FC,
    useEffect,
    useCallback,
    useRef,
} from "react";
import { SearchTrigger, CmdK } from "../search";
import { GlobalContextualMenu } from "./GlobalContextualMenu";
import { useNavigationMenu } from "./navigationMenuContext";
import { NavigationMenuLink } from "./NavigationMenuLink";
import { NestedMenu } from "./NestedMenu";
import { useMainMenu, usePageTitle } from "~/utils";

export const Navigation: FC = () => {
    const mainMenu = useMainMenu();
    const pageTitle = usePageTitle();

    const menuItems =
        mainMenu && Array.isArray(mainMenu.items)
            ? mainMenu.items.map((item) => item.item)
            : [];

    const burgerId = useId("hamburger");
    const menuId = useId("navigation-menu");
    const { open, setOpen } = useNavigationMenu();
    const [searchOpen, setSearchOpen] = useState(false);

    const onOpenSearch = useCallback(() => {
        setSearchOpen(true);
        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }

        // Toggle the menu when ⌘K is pressed
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                setSearchOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    useEffect(
        function closeOnEscape() {
            if (typeof document === "undefined") {
                return;
            }

            const listener = (e: KeyboardEvent) => {
                if (open && e.key === "Escape") {
                    setOpen(false);
                    document.getElementById(burgerId)?.focus();
                }
            };

            document.addEventListener("keydown", listener);

            return () => document.removeEventListener("keydown", listener);
        },
        [open, setOpen, burgerId],
    );

    const rootRef = useRef<HTMLDivElement>(null);
    useFocusOutside(rootRef, () => {
        if (open) {
            document.getElementById(burgerId)?.focus();
        }
    });

    return (
        <div
            ref={rootRef}
            className={cn("jkl-portal-navigation", {
                "jkl-portal-navigation--open": open,
            })}
        >
            <nav>
                <button
                    className="jkl-portal-navigation-scrim"
                    aria-hidden="true" // Hamburgeren er den tilgjengelige lukkeknappen
                    tabIndex={-1}
                    onClick={() => setOpen(false)}
                    hidden={!open}
                />
                <header className="jkl-portal-navigation__header">
                    <div className="jkl-portal-navigation__header-column">
                        <Hamburger
                            className="jkl-portal-navigation__burger"
                            aria-controls={menuId}
                            aria-expanded={open}
                            id={burgerId}
                            density="compact"
                            aria-label={open ? "Lukk meny" : "Åpne meny"}
                            onClick={() => setOpen(!open)}
                            isOpen={open}
                        />
                        <Link
                            tabIndex={open ? -1 : 0}
                            className="jkl-portal-navigation__home"
                            to="/"
                        >
                            {pageTitle}
                        </Link>
                        <GlobalContextualMenu className="jkl-portal-navigation__contextual-menu" />
                    </div>
                    <div className="jkl-portal-navigation__header-column">
                        <CmdK open={searchOpen} onOpenChange={setSearchOpen} />
                        <form
                            className="jkl-portal-navigation__header-search"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <SearchTrigger
                                tabIndex={open ? -1 : 0}
                                variant="icon"
                                onClick={onOpenSearch}
                            />
                        </form>
                    </div>
                </header>
                <div className="jkl-portal-navigation__menu jkl-portal-navigation-menu">
                    <form
                        className="jkl-portal-navigation__search"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <SearchTrigger variant="full" onClick={onOpenSearch} />
                    </form>
                    <ul id={menuId} aria-labelledby={burgerId} role="group">
                        {menuItems.map((item, index) => {
                            if (typeof item.value === "string") {
                                return null;
                            }

                            if (item.relationTo === "menu-items") {
                                const { link, title, slug } = item.value;

                                return (
                                    <li key={index}>
                                        <NavigationMenuLink
                                            {...link}
                                            label={title}
                                            linkSlug={slug}
                                            onClick={() => setOpen(false)}
                                        />
                                    </li>
                                );
                            }
                            if (item.relationTo === "sub-menus") {
                                return (
                                    <li key={index}>
                                        <NestedMenu {...item.value} />
                                    </li>
                                );
                            }

                            return null;
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
