import { useCookieConsent } from "@fremtind/jkl-cookie-consent-react";
import { Feedback } from "@fremtind/jkl-feedback-react";
import { LogoStamp, TeknologiFraFremtind } from "@fremtind/jkl-logo-react";
import cn from "classnames";
import { Link } from "packages/core";
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
            <div
                className={cn("jkl-portal-footer__header", {
                    "jkl-portal-footer__header--no-feedback": isFrontPage || consents.statistics !== "accepted",
                })}
            >
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
                            helpLabel:
                                "Ikke del personlige opplysninger. Vi behandler dine data i henhold til vår personvernserklæring.",
                        }}
                        successMessage={{
                            title: "Takk! Jøkul blir enda bedre med dine tilbakemeldinger.",
                            children: (
                                <>
                                    <p className="mb-12">
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
            <footer className={cn("jkl-footer", className)}>
                <p className="jkl-footer__description">Jøkul er designsystemet til Fremtind Forsikring</p>
                <div className="jkl-footer__links">
                    <ul>
                        <Link href="https://www.fremtind.no/personvern/" external={true}>
                            Personvernserklæring
                        </Link>
                        <Link href="https://github.com/fremtind/jokul" external={true}>
                            Jøkul på GitHub
                        </Link>
                        <Link href="https://jobb.fremtind.no" external={true}>
                            Jobb i Fremtind
                        </Link>
                    </ul>
                </div>
            </footer>
        </div>
    );
};
