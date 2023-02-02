import { DataTestAutoId, Density, Link, WithChildren, NavLink } from "@fremtind/jkl-core";
import { formatTelefonnummer } from "@fremtind/jkl-formatters-util";
import cn from "classnames";
import React, { HTMLAttributes, FC } from "react";

export interface FooterProps extends DataTestAutoId, HTMLAttributes<HTMLElement> {
    /** @example "Ola Nordmann" */
    contactName?: string;
    phone?: {
        number: string;
        openingHours?: string;
    };
    chatAndMail?: {
        chat?: () => void;
        email?: string;
    };
    qAndA?: () => void;
    density?: Density;
}

const InfoColumn: FC<WithChildren> = ({ children }) => {
    return <div className="jkl-contact-info__column">{children}</div>;
};

export const ContactInfo: FC<FooterProps> = ({
    className,
    contactName,
    phone,
    chatAndMail,
    qAndA,
    density,
    ...rest
}) => {
    return (
        <div className={cn("jkl-contact-info", className)} data-density={density} {...rest}>
            <div className="jkl-contact-info__heading">
                <p className="jkl-heading-2">Trenger du hjelp med forsikring?</p>
                {contactName && <p className="jkl-body">{`Ta kontakt med din rådgiver ${contactName}`}</p>}
            </div>

            <div className="jkl-contact-info__content">
                {phone && (
                    <InfoColumn>
                        <Link href={`tel:${phone.number.replace(/\s/g, "")}`}>{formatTelefonnummer(phone.number)}</Link>
                        {phone.openingHours && <p>{phone.openingHours}</p>}
                    </InfoColumn>
                )}

                {chatAndMail && (
                    <InfoColumn>
                        <p>
                            <Link onClick={chatAndMail.chat}>Chat</Link> med rådgiver
                        </p>
                        {chatAndMail.email && <Link href={`mailto:${chatAndMail.email}`}>{chatAndMail.email}</Link>}
                    </InfoColumn>
                )}
                {qAndA && (
                    <InfoColumn>
                        <NavLink onClick={qAndA}>Spørsmål og svar</NavLink>
                    </InfoColumn>
                )}
            </div>
        </div>
    );
};
