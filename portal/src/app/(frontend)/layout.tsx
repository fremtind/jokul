import { DisableDraftMode } from "@/components/DisableDraftMode";
import { TabListener } from "@/components/TabListener";
import { Header } from "@/components/header/Header";

import "./global.scss";
import { SanityLive } from "@/sanity/lib/live";
import { CookiesNextProvider } from "cookies-next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

interface Props {
    children: React.ReactNode;
}

export default async function PortalLayout({ children }: Props) {
    return (
        <html lang="no" className="jkl">
            <body>
                <TabListener />
                <CookiesNextProvider>
                    <div className="jkl-portal-layout">
                        <Header />
                        <main>{children}</main>
                    </div>
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
