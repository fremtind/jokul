import type { Metadata } from "next";
import "../base.scss";
import "../(frontend)/temabygger/theme-fonts.scss";

export const metadata: Metadata = {
    title: "Forhåndsvisning av tema",
};

export default function PreviewRootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="no" className="jkl">
            <body>{children}</body>
        </html>
    );
}
