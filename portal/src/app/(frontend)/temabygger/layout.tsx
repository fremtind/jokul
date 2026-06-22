import "./theme-fonts.scss";
import { ThemeBuilder } from "./ThemeBuilder";
import { ThemeDraftProvider } from "./_context/ThemeDraftContext";

export default function ThemeBuilderLayout({
    children,
}: LayoutProps<"/temabygger">) {
    return (
        <ThemeDraftProvider>
            <ThemeBuilder>{children}</ThemeBuilder>
        </ThemeDraftProvider>
    );
}
