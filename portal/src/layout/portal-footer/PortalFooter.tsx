import { useCookieConsent } from "@fremtind/jkl-cookie-consent-react";
import { Feedback } from "@fremtind/jkl-feedback-react";
import { Footer } from "@fremtind/jkl-footer-react";
import { LogoStamp, TeknologiFraFremtind } from "@fremtind/jkl-logo-react";
import cn from "classnames";
import React from "react";
import { useAnalytics, EventName } from "../../analytics";
import { useLocation } from "../locationContext";
import { Cookies } from "./Cookies";
import "./portal-footer.scss";

export interface PortalFooterProps {
    className?: string;
}

export const PortalFooter: React.FC<PortalFooterProps> = ({ className }) => {
    const { consents } = useCookieConsent();
    const analytics = useAnalytics();
    const { isFrontPage } = useLocation();
    return (
        <div className={cn("jkl-portal-footer", className)}>
            <div className="jkl-portal-footer__feedback">
                <div className="jkl-portal-footer__feedback-spacer"></div>
                {!isFrontPage && consents.statistics === "accepted" && (
                    <Feedback
                        type="radio"
                        label="Fant du det du lette etter?"
                        options={[
                            {
                                label: "Ja",
                                value: "ja",
                                textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
                            },
                            {
                                label: "Nei",
                                value: "nei",
                                textAreaLabel:
                                    "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
                            },
                        ]}
                        addOnQuestion={{
                            label: "Vil du legge til noe mer?",
                            helpLabel:
                                "Ikke del personlige opplysninger. Vi behandler dine data i henhold til vår personvernserklæring.",
                        }}
                        successMessage={{
                            title: "Takk! Jøkul blir enda bedre med dine tilbakemeldinger.",
                            children: (
                                <>
                                    <p className="jkl-spacing-s--bottom">
                                        Spill gjerne inn på GitHub, eller delta på forum (hver tirsdag{" "}
                                        <time dateTime="14:00">kl. 14</time>)!
                                    </p>
                                    <a
                                        href="https://github.com/fremtind/jokul/discussions"
                                        className="jkl-button jkl-button--secondary"
                                    >
                                        Diskuter på GitHub
                                    </a>
                                </>
                            ),
                        }}
                        onSubmit={async (feedback) => {
                            await analytics.track({
                                eventName: EventName.Feedback,
                                properties: feedback,
                            });
                        }}
                    />
                )}
                <LogoStamp className="jkl-portal-footer__stamp" animated title={TeknologiFraFremtind.displayName}>
                    <TeknologiFraFremtind />
                </LogoStamp>
            </div>
            <Footer
                links={[
                    { external: false, component: Cookies, title: "Bruk av informasjonskapsler" },
                    { external: true, href: "https://www.fremtind.no/personvern/", title: "Personvernserklæring" },
                    { external: true, href: "https://github.com/fremtind/jokul", title: "Jøkul på GitHub" },
                    { external: true, href: "https://jobb.fremtind.no", title: "Jobb i Fremtind" },
                ]}
            />
        </div>
    );
};
