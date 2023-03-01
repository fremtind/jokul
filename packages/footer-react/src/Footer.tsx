import { DataTestAutoId, Density, Link } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { HTMLAttributes, FC, ElementType, MouseEventHandler } from "react";

export interface FooterLink<T = HTMLAnchorElement> {
    title: string;
    href?: string;
    to?: string;
    external?: boolean;
    /**
     * Overstyr hvilken komponent som skal brukes, for eksempel hvis du har en Link-komponent fra en router.
     * @default "a"
     */
    component?: ElementType;
    onClick?: MouseEventHandler<T>;
}

export interface FooterProps extends DataTestAutoId, HTMLAttributes<HTMLElement> {
    heading?: string;
    links?: Array<FooterLink>;
    showFinansportalenLink?: boolean;
    density?: Density;
}

export const Footer: FC<FooterProps> = ({
    heading = "Fremtind er vår leverandør av forsikring",
    className,
    links,
    showFinansportalenLink = false,
    density,
    ...rest
}) => {
    return (
        <footer className={cn("jkl-footer", className)} data-density={density} {...rest}>
            <p className="jkl-footer__description">{heading}</p>
            {links && (
                <div className="jkl-footer__links">
                    <ul>
                        {links.map(({ component = Link, title: children, external, ...rest }) => {
                            const C = component;
                            return (
                                <li key={children}>
                                    <C
                                        className={
                                            component === "button"
                                                ? "jkl-link jkl-footer__links--small-text"
                                                : "jkl-footer__links--small-text"
                                        }
                                        external={external !== undefined ? external : undefined}
                                        {...rest}
                                    >
                                        {children}
                                    </C>
                                </li>
                            );
                        })}
                        {showFinansportalenLink && (
                            <li>
                                <span className="jkl-footer__links--small-text">
                                    Sammenlign våre priser med andre selskaper på{" "}
                                    <Link href="https://www.finansportalen.no/" external={true}>
                                        finansportalen.no
                                    </Link>
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </footer>
    );
};
