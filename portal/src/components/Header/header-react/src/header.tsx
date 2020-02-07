import React, { ReactNode, MouseEventHandler } from "react";
import classNames from "classnames";
import { Logo } from "@fremtind/jkl-logo-react";
import "../../header/header.scss";

type validButtons = "primary" | "secondary" | "tertiary";

type Action = {
    type: validButtons;
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

type Clickable = {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

interface Props {
    title?: string;
    brand?: string;
    children?: ReactNode;
    className?: string;
    action?: Action;
    dark?: boolean;
    clickable?: Clickable;
}

export const Header = ({ title, brand, children, className, dark, clickable }: Props) => {
    const componentClassName = classNames("portal-header", className, { "portal-header--dark": dark });

    return (
        <header data-testid="portal-header" className={componentClassName}>
            {title && (
                <div data-testid="portal-header__title" className="portal-header__title">
                    {clickable ? (
                        <a className="portal-header__link" href={clickable.href} onClick={clickable.onClick}>
                            {brand && <span className="portal-header__link--brand">{brand}</span>} {title}
                        </a>
                    ) : (
                        <span>
                            {brand && <span className="portal-header__link--brand">{brand}</span>} {title}
                        </span>
                    )}
                </div>
            )}
            {children}
            <div className="portal-header__logo">
                <Logo isSymbol centered={false} />
            </div>
        </header>
    );
};
