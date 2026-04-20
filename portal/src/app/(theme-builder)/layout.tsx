import { ThemeBuilderProvider } from "@/components/theme-builder/ThemeBuilderProvider";
import type { ColorSchemeSource } from "@/components/theme-builder/types";
import { flattenColorTokens } from "@/components/theme-builder/utils";
import colorTokens from "../../../../packages/jokul/src/tokens/color.tokens.json";
import "./global.scss";

type ThemeBuilderLayoutProps = {
    children: React.ReactNode;
};

export default function ThemeBuilderLayout({
    children,
}: ThemeBuilderLayoutProps) {
    const baseTokens = flattenColorTokens(colorTokens as ColorSchemeSource);

    return (
        <html lang="no" className="jkl">
            <body className="jkl-theme-builder-layout">
                <ThemeBuilderProvider baseTokens={baseTokens}>
                    <main className="jkl-theme-builder-main">{children}</main>
                </ThemeBuilderProvider>
            </body>
        </html>
    );
}
