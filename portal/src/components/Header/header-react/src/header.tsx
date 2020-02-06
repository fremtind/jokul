import React, { ReactNode, MouseEventHandler } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";

type validButtons = "primary" | "secondary" | "tertiary";

type Action = {
    type: validButtons;
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

type Media = {
    src: string;
    alt: string;
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
    logo?: Media;
    action?: Action;
    dark?: boolean;
    clickable?: Clickable;
}

export const Header = ({ title, brand, children, className, logo, dark, clickable }: Props) => {
    const componentClassName = "jkl-header".concat(className ? ` ${className}` : "", dark ? " jkl-header--dark" : "");

    return (
        <div data-testid="jkl-header" className={componentClassName}>
            {logo && <img className="jkl-header__media" src={logo.src} alt={logo.alt}></img>}
            {title && (
                <div data-testid="jkl-header__title">
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
        </div>
    );
};
