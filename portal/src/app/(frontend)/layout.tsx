import { DisableDraftMode } from "@/components/DisableDraftMode";
import { MixpanelProvider } from "@/components/MixpanelProvider";
import { TabListener } from "@/components/TabListener";
import { Footer, Header } from "@/components/layout";
import { SanityLive } from "@/sanity/lib/live";
import { CookiesNextProvider } from "cookies-next";
import type { Metadata } from "next";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import "./global.scss";

export const metadata: Metadata = {
    title: "Jøkul – Fremtinds designsystem",
    description:
        "Jøkul er Fremtinds designsystem for å bygge enkle og helhetlige brukeropplevelser.",
};

interface Props {
    children: React.ReactNode;
}

export default async function PortalLayout({ children }: Props) {
    return (
        <html lang="no" className="jkl">
            <body>
                <TabListener />
                <CookiesNextProvider>
                    <MixpanelProvider>
                        <div className="jkl-portal-layout">
                            <Header />
                            <main>{children}</main>
                            <Footer />
                        </div>
                    </MixpanelProvider>
                </CookiesNextProvider>
                <SanityLive />
                {(await draftMode()).isEnabled && (
                    <>
                        <DisableDraftMode />
                        <VisualEditing />
                    </>
                )}
            </body>
        </html>
    );
}
