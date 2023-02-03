import React, { FC } from "react";
import { ExampleComponentProps, CodeExample, ExampleKnobsProps } from "../../../doc-utils";
import { ContactInformation } from "../src";

export const contactInformationExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Mobil", defaultValue: true },
        { prop: "Med lenker", defaultValue: true },
        { prop: "Med navn", defaultValue: true },
        { prop: "Med telefon", defaultValue: true },
        { prop: "Med chat og mail", defaultValue: true },
        { prop: "Med QnA", defaultValue: true },
    ],
};

export const ContactInformationExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const isMobile = boolValues?.["Mobil"];
    const withName = boolValues?.["Med navn"];
    const withPhone = boolValues?.["Med telefon"];
    const withChatAndMail = boolValues?.["Med chat og mail"];
    const withQnA = boolValues?.["Med QnA"];
    return (
        <div
            {...(isMobile ? { style: { minWidth: "21rem" } } : { style: { minWidth: "82rem" } })}
            data-simulate-mobile={isMobile ? "true" : undefined}
        >
            <ContactInformation
                contactName={withName ? "Ola Nordmann" : undefined}
                phone={withPhone ? { number: "90040900", openingHours: "07.00 - 23.00 Alle dager" } : undefined}
                chatAndMail={
                    withChatAndMail ? { chat: () => alert("open chat"), email: "fremtind@fremtind.no" } : undefined
                }
                qAndA={withQnA ? () => alert("open link") : undefined}
            />
        </div>
    );
};

export default ContactInformationExample;

export const contactInformationExampleCode: CodeExample = ({ boolValues }) => {
    const withLinks = boolValues?.["Med lenker"];
    const withAddress = boolValues?.["Med adresse"];

    if (!withLinks && !withAddress) {
        return "<Footer />";
    }

    if (!withAddress) {
        return `<Footer
    links={
        [
            {
                title: "Personvern og vilkår",
                href: "https://github.com/fremtind/jokul",
                external: false,
            },
            {
                title: "Bruk av informasjonskapsler",
                href: "https://www.fremtind.no/personvern/",
                external: false,
            },{
                title: "Sammenlign våre priser med andere selskaper på finansportalen.no",
                href: "https://www.finansportalen.no/"
                exsternal: true;
            }
        ]
    }
/>`;
    }

    if (!withLinks) {
        return `<Footer
    address={{
        addressLine1: "Postboks 778 Sentrum",
        postalCode: "0106",
        postalArea: "Oslo",
        organizationNumber: "915651232",
    }}
/>`;
    }

    return `<Footer
    address={{
        addressLine1: "Postboks 778 Sentrum",
        postalCode: "0106",
        postalArea: "Oslo",
        organizationNumber: "915651232",
    }}
    links={
        [
            { 
                title: "Personvern og vilkår",
                href: "https://github.com/fremtind/jokul",
                external: false,
            },
            {
                title: "Bruk av informasjonskapsler",
                href: "https://www.fremtind.no/personvern/",
                external: false,
            },{
                title: "Sammenlign våre priser med andere selskaper på finansportalen.no",
                href: "https://www.finansportalen.no/"
                exsternal: true;
            }
        ]
    }
/>`;
};
