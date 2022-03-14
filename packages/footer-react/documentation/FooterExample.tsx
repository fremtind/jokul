import React, { FC } from "react";
import { ExampleComponentProps, CodeExample, ExampleKnobsProps } from "../../../doc-utils";
import { Footer } from "../src";

export const footerExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Compact", defaultValue: true },
        { prop: "Med lenker", defaultValue: true },
        { prop: "Med adresse", defaultValue: false },
    ],
};

export const FooterExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const isCompact = boolValues?.["Compact"];
    const withLinks = boolValues?.["Med lenker"];
    const withAddress = boolValues?.["Med adresse"];
    return (
        <div
            {...(isCompact
                ? { "data-compactlayout": true, style: { minWidth: "21rem" } }
                : { style: { minWidth: "82rem" } })}
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
                                  title: "Jøkul på GitHub",
                                  href: "https://github.com/fremtind/jokul",
                                  external: true,
                              },
                              {
                                  title: "Personvernserklæring",
                                  href: "https://www.fremtind.no/personvern/",
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
                title: "Jøkul på GitHub",
                href: "https://github.com/fremtind/jokul",
                external: true,
            },
            {
                title: "Personvernserklæring",
                href: "https://www.fremtind.no/personvern/",
                external: true,
            },
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
                title: "Jøkul på GitHub",
                href: "https://github.com/fremtind/jokul",
                external: true,
            },
            {
                title: "Personvernserklæring",
                href: "https://www.fremtind.no/personvern/",
                external: true,
            },
        ]
    }
/>`;
};
