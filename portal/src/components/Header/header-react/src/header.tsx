import React, { ReactNode, MouseEventHandler } from "react";
import classNames from "classnames";
import { Logo } from "@fremtind/jkl-logo-react";

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
    const componentClassName = classNames("jkl-header", className, { "jkl-header--dark": dark });

    return (
        <div data-testid="jkl-header" className={componentClassName}>
            {title && (
                <div data-testid="jkl-header__title" className="jkl-header__title">
                    {clickable ? (
                        <a className="jkl-header__link" href={clickable.href} onClick={clickable.onClick}>
                            {brand && <span className="jkl-header__link--brand">{brand}</span>} {title}
                        </a>
                    ) : (
                        <span>
                            {brand && <span className="jkl-header__link--brand">{brand}</span>} {title}
                        </span>
                    )}
                </div>
            )}
            {children}
            <div className="jkl-header__logo">
                <Logo isSymbol centered={false} />
            </div>
        </div>
    );
};
