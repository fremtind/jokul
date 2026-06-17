import { ThemeDraftProvider } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";

export default function ThemeBuilderPreviewLayout({
    children,
}: LayoutProps<"/temabygger">) {
    return <ThemeDraftProvider>{children}</ThemeDraftProvider>;
}
