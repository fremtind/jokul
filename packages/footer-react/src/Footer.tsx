import { DataTestAutoId, Density, Link, WithChildren } from "@fremtind/jkl-core";
import { formatNumber } from "@fremtind/jkl-formatters-util";
import { Logo } from "@fremtind/jkl-logo-react";
import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes, FC, ElementType, MouseEventHandler } from "react";

export interface FooterAddress {
    /** @example "Postboks 778 Sentrum" */
    addressLine1?: string;
    addressLine2?: string;
    /** @example "0106" */
    postalCode?: string;
    /** @example "Oslo" */
    postalArea?: string;
    /**
     * Formateres automatisk og blir gitt prefikset "Org. nr."
     * @example "915651232"
     */
    organizationNumber?: string;
}

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

export interface FooterProps extends DataTestAutoId, DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    links?: Array<FooterLink>;
    address?: FooterAddress;
    density?: Density;
}

const AddressLine: FC<WithChildren> = ({ children }) => (
    <>
        {children}
        <br />
    </>
);

export const Footer: FC<FooterProps> = ({ className, address, links, density, ...rest }) => {
    return (
        <footer className={cn("jkl-footer", className)} data-density={density} {...rest}>
            <div>
                <div className="jkl-footer__logo">
                    <Logo />
                </div>
                {address && (
                    <address className="jkl-footer__address">
                        {address.addressLine1 && <AddressLine>{address.addressLine1}</AddressLine>}
                        {address.addressLine2 && <AddressLine>{address.addressLine2}</AddressLine>}
                        {(address.postalCode || address.postalArea) && (
                            <AddressLine>
                                {address.postalCode} {address.postalArea}
                            </AddressLine>
                        )}
                        {address.organizationNumber && (
                            <AddressLine>Org. nr. {formatNumber(address.organizationNumber)}</AddressLine>
                        )}
                    </address>
                )}
            </div>
            {links && (
                <div className="jkl-footer__links">
                    <ul>
                        {links.map(({ component = Link, title: children, ...rest }) => {
                            const C = component;
                            return (
                                <li key={children}>
                                    <C {...rest}>{children}</C>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </footer>
    );
};
