import React, { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { H1 } from "@fremtind/jkl-typography-react";
import HeaderMenu from "./HeaderMenu";
import { useClickToggler } from "../useClickToggler/useClickToggler";
import { Header } from "@fremtind/jkl-header-react";

interface MobileHeaderProps {
    children: ReactNode;
}

const MobileHeader = ({ children }: MobileHeaderProps) => {
    const [showMenu, toggleMenu] = useState(false);
    useClickToggler(showMenu, toggleMenu);

    return (
        <div className="portal__header-wrapper">
            <Header
                start={
                    <Link className="portal__header--link" to="/">
                        <H1 styledAs="h4">Jøkul</H1>
                    </Link>
                }
                end={
                    <div className="portal__header--menu">
                        <button
                            className="portal__header--menu-button"
                            onClick={() => {
                                toggleMenu(!showMenu);
                            }}
                        >
                            <span role="img" aria-label="hamburger-meny" className="portal__header--menu-hamburger">
                                🍔
                            </span>
                        </button>
                    </div>
                }
            />
            <HeaderMenu>
                <nav
                    className={`portal__header--toggle-menu portal__header--toggle-menu--${showMenu ? "show" : "hide"}`}
                >
                    <ul className="portal__header--toggle-menu__item">
                        {React.Children.map(children, (child) => (
                            <li>{child}</li>
                        ))}
                    </ul>
                </nav>
            </HeaderMenu>
        </div>
    );
};

export default MobileHeader;
