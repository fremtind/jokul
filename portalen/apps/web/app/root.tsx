import {
    ErrorMessage,
    initTabListener,
    Link,
    CookieConsentProvider,
    type Consent,
    type ColorScheme,
} from "@fremtind/jokul";
import type { MainMenu, User } from "@org/cms";
import uiStyles from "@org/ui/styles.css";
import type {
    LinksFunction,
    LoaderArgs,
    V2_MetaFunction,
} from "@remix-run/node";
import {
    isRouteErrorResponse,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useRouteError,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useCallback, useRef, useState } from "react";
import { NavigationMenuContextProvider } from "./components/navigation";
import { GlobalPreferencesContextProvider } from "./components/navigation/GlobalContextualMenu";
import { RootTemplate } from "./page-templates/root-template/RootTemplate";
import styles from "./styles/global.css";
import jokulStyles from "./styles/jokul.css";
import { consentsCookie, userPreferencesCookie } from "~/cookies";

initTabListener();

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
    if (!data) {
        return [
            { title: "Jøkul Designsystem" },
            { property: "og:site_name", content: "Jøkul designsystem" },
        ];
    }

    return [
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { name: "charset", content: "utf-8" },
        { title: "Jøkul Designsystem" },
        {
            name: "description",
            content: "Jøkul er designsystemet til Fremtind",
        },
        { property: "og:title", content: "Jøkul Designsystem" },
        {
            protepry: "og:description",
            content: "Jøkul er designsystemet til Fremtind",
        },
        { property: "og:type", content: "website" },
        {
            property: "og:image",
            content: `${data.serverUrl}/social-preview?title=Jøkul`,
        },
        { property: "og:url", content: data.serverUrl },
    ];
};

export const links: LinksFunction = () => [
    {
        rel: "stylesheet",
        href: jokulStyles,
    },
    {
        rel: "stylesheet",
        href: uiStyles,
    },
    {
        rel: "stylesheet",
        href: styles,
    },
    {
        rel: "preload",
        href: "/fonts/Fremtind-Material-Symbols.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
    },
];

export type RootLoaderData = {
    pageTitle: string;
    mainMenu: MainMenu;
    user?: {
        user?: User;
        token?: string;
        exp?: number;
    };
};

export const loader = async ({
    context: { payload, user, serverUrl },
    request,
}: LoaderArgs) => {
    const mainMenu = await payload.findGlobal({
        slug: "main-menu",
        user,
        overrideAccess: false,
        depth: 8,
    });

    let theme: ColorScheme | undefined = undefined;

    const today = new Date();
    const isSpooky = today.getMonth() === 9 && today.getDate() === 31;

    const cookies = request.headers.get("Cookie");
    if (cookies) {
        try {
            const consents = consentsCookie.parse<Consent>(cookies);
            if (consents && consents.functional === "accepted") {
                const preferences = userPreferencesCookie.parse<{
                    theme: ColorScheme;
                }>(cookies);

                if (preferences) {
                    theme = preferences.theme;
                }
            }
        } catch (e) {
            console.error(
                "Failed to parse consents in order to set theme on first render",
                e,
            );
        }
    }

    return {
        pageTitle: isSpooky ? "Bøkul 🎃" : "Jøkul",
        mainMenu,
        user,
        theme,
        serverUrl,
        ENV: {
            MIXPANEL_PROJECT_ID: process.env.MIXPANEL_PROJECT_ID,
        },
    };
};

const queryClient = new QueryClient();

export default function App() {
    const { theme, ENV } = useLoaderData<typeof loader>();

    const defaultBrowserTheme: ColorScheme =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    initTabListener();

    const [colorScheme, setColorScheme] = useState<ColorScheme | undefined>(
        theme || defaultBrowserTheme,
    );

    const bodyRef = useRef<HTMLBodyElement>(null);
    const handleSetColorScheme = useCallback(
        (scheme: ColorScheme) => {
            setColorScheme(scheme);

            userPreferencesCookie.setCookie({
                theme: scheme,
            });

            if (!bodyRef.current) {
                return;
            }
            // @ts-ignore Ikke stabilt i alle nettlesere ennå: https://caniuse.com/view-transitions
            if (!document.startViewTransition) {
                bodyRef.current.dataset.theme = scheme;
                return;
            }
            // @ts-ignore Ikke stabilt i alle nettlesere ennå: https://caniuse.com/view-transitions
            document.startViewTransition(() => {
                if (!bodyRef.current) {
                    return;
                }
                bodyRef.current.dataset.theme = scheme;
            });
        },
        [setColorScheme],
    );

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body ref={bodyRef} className="jkl" data-theme={theme}>
                <Link
                    id="content-skip-link"
                    className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal-skip-link"
                    href="#innhold"
                >
                    Hopp til innhold
                </Link>
                <CookieConsentProvider statistics functional>
                    <GlobalPreferencesContextProvider
                        colorScheme={colorScheme}
                        setColorScheme={handleSetColorScheme}
                    >
                        <NavigationMenuContextProvider>
                            <QueryClientProvider client={queryClient}>
                                <RootTemplate />
                            </QueryClientProvider>
                        </NavigationMenuContextProvider>
                    </GlobalPreferencesContextProvider>
                </CookieConsentProvider>
                <ScrollRestoration />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.ENV = ${JSON.stringify(ENV)}`,
                    }}
                />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export const ErrorBoundary = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <html lang="en">
                <head>
                    <Meta />
                    <Links />
                </head>
                <body>
                    <ErrorMessage>{error.data.message}</ErrorMessage>
                    <Outlet />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </body>
            </html>
        );
    }

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <ErrorMessage>
                    {(error as Error)?.message ??
                        "Noe gikk galt, men vi vet ikke helt hva"}
                </ErrorMessage>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
};
