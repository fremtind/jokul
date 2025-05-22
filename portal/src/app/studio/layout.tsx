export const metadata = {
    title: "Jøkul Portal Studio",
    description:
        "Velkommen til Jøkul Portal Studio. Her kan du redigere innholdet på Portalen.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
