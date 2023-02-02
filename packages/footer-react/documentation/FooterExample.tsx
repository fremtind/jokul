import React, { FC } from "react";
import { ExampleComponentProps, CodeExample, ExampleKnobsProps } from "../../../doc-utils";
import { Footer } from "../src";

export const footerExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        { prop: "Mobil", defaultValue: true },
        { prop: "Med lenker", defaultValue: true },
        { prop: "Med finansportalen", defaultValue: true },
    ],
};

export const FooterExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const isMobile = boolValues?.["Mobil"];
    const withLinks = boolValues?.["Med lenker"];
    const withFinansportalen = boolValues?.["Med finansportalen"];
    return (
        <div
            {...(isMobile ? { style: { minWidth: "21rem" } } : { style: { minWidth: "82rem" } })}
            data-simulate-mobile={isMobile ? "true" : undefined}
        >
            <Footer
                role="none presentation"
                showFinansportalenLink={withFinansportalen}
                links={
                    withLinks
                        ? [
                              {
                                  title: "Personvern og vilkår",
                                  href: "https://www.fremtind.no/personvern/",
                                  external: false,
                              },
                              {
                                  title: "Bruk av informasjonskapsler",
                                  component: "button",
                                  onClick: () => alert("Åpne cookieConsent"),
                                  external: false,
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
    const withFinansportalen = boolValues?.["Med finansportalen"];

    if (!withLinks && !withFinansportalen) {
        return "<Footer />";
    }

    if (!withFinansportalen) {
        return `<Footer
    links={
        [
            {
              title: "Personvern og vilkår",
              href: "https://www.fremtind.no/personvern/",
              external: false
            },
            {
              title: "Bruk av informasjonskapsler",
              component: "button",
              onClick: () => alert("Åpne cookieConsent"),
              external: false
            }
        ]
    }
/>`;
    }

    if (!withLinks) {
        return `<Footer showFinansportalenLink={true} />`;
    }

    return `<Footer
    showFinansportalenLink={true}
    links={
        [
            {
              title: "Personvern og vilkår",
              href: "https://www.fremtind.no/personvern/",
              external: false
            },
            {
              title: "Bruk av informasjonskapsler",
              component: "button",
              onClick: () => alert("Åpne cookieConsent"),
              external: false
            }
        ]
    }
/>`;
};
