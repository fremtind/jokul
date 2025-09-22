import { DisableDraftMode } from "@/components/DisableDraftMode";
import { TabListener } from "@/components/TabListener";
import { Header } from "@/components/header/Header";
import Link from "next/link";

import "./global.scss";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { cookies } from "next/headers";
import { draftMode } from "next/headers";
import { UserPreferencesProvider } from "@/context/UserPreferencesContext/UserPreferencesContext";
import { defaultPreferences } from "@/context/UserPreferencesContext/defaultPreferences";
import type { UserPreferences } from "@/context/UserPreferencesContext/types";

interface Props {
    children: React.ReactNode;
}

const getUserPreferences = async (): Promise<UserPreferences> => {
    try {
        const cookieStore = await cookies();
        const userPreferences = cookieStore.get("userPreferences")?.value;
        const cookieUserPreferences = JSON.parse(userPreferences || "{}");

        return { ...defaultPreferences, ...cookieUserPreferences };
    } catch (e) {
        return defaultPreferences;
    }
};

export default async function PortalLayout({ children }: Props) {
    const initialPreferences = await getUserPreferences();

    return (
        <html lang="no" className="jkl">
            <body>
                <TabListener />
                <Link
                    id="content-skip-link"
                    className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal-skip-link"
                    href="#innhold"
                >
                    Hopp til innhold
                </Link>
                <UserPreferencesProvider
                    initialPreferences={initialPreferences}
                >
                    <div className="jkl-portal-layout">
                        <Header />
                        <main>{children}</main>
                    </div>
                </UserPreferencesProvider>
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
