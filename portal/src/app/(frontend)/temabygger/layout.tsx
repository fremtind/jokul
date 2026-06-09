import "./global.scss";
import { ThemeBuilder } from "./_components/ThemeBuilder";
import { ThemeDraftProvider } from "./_context/ThemeDraftContext";

type ThemeBuilderLayoutProps = {
    children: React.ReactNode;
};

export default function ThemeBuilderLayout({
    children,
}: ThemeBuilderLayoutProps) {
    return (
        <ThemeDraftProvider>
            <ThemeBuilder>{children}</ThemeBuilder>
        </ThemeDraftProvider>
    );
}
