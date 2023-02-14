import React, { FC } from "react";
import { ExampleComponentProps, CodeExample, ExampleKnobsProps } from "../../../doc-utils";
import { Footer } from "../src";
import "./footer-example.scss";

export const footerExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Mobil", defaultValue: true },
        { prop: "Med lenker", defaultValue: true },
        { prop: "Med adresse", defaultValue: false },
    ],
};

export const FooterExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const isMobile = boolValues?.["Mobil"];
    const withLinks = boolValues?.["Med lenker"];
    const withAddress = boolValues?.["Med adresse"];
    return (
        <div
            {...(isMobile ? { style: { minWidth: "21rem" } } : { style: { minWidth: "82rem" } })}
            data-simulate-mobile={isMobile ? "true" : undefined}
        >
            <Footer
                role="none presentation"
                address={
                    withAddress
                        ? {
                              addressLine1: "Postboks 778 Sentrum",
                              postalCode: "0106",
                              postalArea: "Oslo",
                              organizationNumber: "915651232",
                          }
                        : undefined
                }
                links={
                    withLinks
                        ? [
                              {
                                  title: "Personvern og vilkår",
                                  href: "https://github.com/fremtind/jokul",
                                  external: false,
                              },
                              {
                                  title: "Bruk av informasjonskapsler",
                                  href: "https://www.fremtind.no/personvern/",
                                  external: false,
                              },
                              {
                                  title: "Sammenlign våre priser med andere selskaper på finansportalen.no",
                                  href: "https://www.finansportalen.no/",
                                  external: true,
                              },
                          ]
                        : undefined
                }
            />
        </div>
    );
};

export default FooterExample;

export const footerExampleCode: CodeExample = ({ boolValues }) => {
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
