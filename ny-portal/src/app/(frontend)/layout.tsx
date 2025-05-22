import { TabListener } from "@/components/TabListener";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import Link from "next/link";

import "./global.scss";

interface Props {
    children: React.ReactNode;
}

export default function PortalLayout({ children }: Props) {
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
                <div className="jkl-portal-layout">
                    <SiteHeader />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
