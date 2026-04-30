import "./global.scss";
import { ThemeBuilderProvider } from "@/components/theme-builder/ThemeBuilderProvider";
import { tokensFromSchema } from "@/components/theme-builder/tokens";

type ThemeBuilderLayoutProps = {
    children: React.ReactNode;
};

export default function ThemeBuilderLayout({
    children,
}: ThemeBuilderLayoutProps) {
    return (
        <ThemeBuilderProvider baseTokens={tokensFromSchema()}>
            {children}
        </ThemeBuilderProvider>
    );
}
