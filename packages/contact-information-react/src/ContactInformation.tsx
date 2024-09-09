import { DataTestAutoId, Density, Link, WithChildren, NavLink, WithOptionalChildren } from "@fremtind/jkl-core";
import { formatTelefonnummer } from "@fremtind/jkl-formatters-util";
import cn from "classnames";
import React, { HTMLAttributes, FC, ReactNode } from "react";
export interface FooterProps extends DataTestAutoId, HTMLAttributes<HTMLElement> {
    headingComponent: ReactNode;
    density?: Density;
}

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 */
export const ContactInformation: FC<FooterProps> = ({ headingComponent, className, density, children, ...rest }) => {
    return (
        <div className={cn("jkl-contact-info", className)} data-density={density} {...rest}>
            {headingComponent}
            {children}
        </div>
    );
};

interface HeadingProps extends WithOptionalChildren {
    heading?: string;
}

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 */
export const ContactInformationHeading: FC<HeadingProps> = ({
    heading = "Trenger du hjelp med forsikring?",
    children,
}) => {
    return (
        <div className="jkl-contact-info__heading">
            <p className="jkl-heading-2">{heading}</p>
            {children && children}
        </div>
    );
};

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 */
export const Content: FC<WithChildren> = ({ children }) => {
    return <div className="jkl-contact-info__content">{children}</div>;
};

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 */
export const InfoColumn: FC<WithChildren> = ({ children }) => {
    return <div className="jkl-contact-info__column">{children}</div>;
};

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 */
export const PhoneColumn = ({ phone, openingHours }: { phone: string; openingHours?: string }) => {
    return (
        <InfoColumn>
            <p>
                Telefon <Link href={`tel:${phone.replace(/\s/g, "")}`}>{formatTelefonnummer(phone)}</Link>
            </p>
            {openingHours && <p>{openingHours}</p>}
        </InfoColumn>
    );
};

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 */
export const ChatAndMailColumn = ({ chat, email }: { chat?: () => void; email?: string }) => {
    return (
        <InfoColumn>
            <p>
                <Link onClick={chat}>Chat</Link> med rådgiver
            </p>
            {email && <Link href={`mailto:${email}`}>{email}</Link>}
        </InfoColumn>
    );
};

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 */
export const QAndAColumn = ({ qAndA }: { qAndA: () => void }) => {
    return (
        <InfoColumn>
            <NavLink onClick={qAndA}>Spørsmål og svar</NavLink>
        </InfoColumn>
    );
};
