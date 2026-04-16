import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useEffect, useMemo, useState } from "react";
import type { ColorTokenGroup, ThemeValue } from "../globals/colorTokens.js";
import {
    clearAllColorOverrides,
    clearColorOverride,
    colorTokens,
    cssColorToHex,
    readOverrides,
    resolveTheme,
    setColorOverride,
    subscribeToOverrideChanges,
} from "../globals/colorTokens.js";

const groupLabels: Record<ColorTokenGroup, string> = {
    background: "Bakgrunn",
    border: "Kanter",
    text: "Tekst",
};

const themeLabels: Record<ThemeValue, string> = {
    light: "Lyst tema",
    dark: "Mørkt tema",
};

type TokenRowProps = {
    token: (typeof colorTokens)[number];
    theme: ThemeValue;
    overrideValue: string | undefined;
};

function TokenRow({ token, theme, overrideValue }: TokenRowProps) {
    const effectiveValue = overrideValue ?? token.defaults[theme];
    const effectiveHex = useMemo(
        () => cssColorToHex(effectiveValue),
        [effectiveValue],
    );
    const defaultHex = useMemo(
        () => cssColorToHex(token.defaults[theme]),
        [token.defaults, theme],
    );
    const isOverridden = overrideValue !== undefined;

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns:
                    "minmax(180px, 1fr) auto auto minmax(160px, 1fr) auto",
                gap: "0.75rem",
                alignItems: "center",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                background: isOverridden
                    ? "rgba(0, 0, 0, 0.04)"
                    : "transparent",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: 600 }}>{token.label}</span>
                <code
                    style={{
                        fontSize: "0.75rem",
                        opacity: 0.7,
                        fontFamily:
                            "ui-monospace, SFMono-Regular, Menlo, monospace",
                    }}
                >
                    {token.name}
                </code>
            </div>

            <div
                title={`Default: ${token.defaults[theme]}`}
                aria-label={`Default for ${token.label}`}
                style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "0.25rem",
                    background: token.defaults[theme],
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
            />

            <div
                title={`Aktiv verdi: ${effectiveValue}`}
                aria-label={`Aktiv verdi for ${token.label}`}
                style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "0.25rem",
                    background: effectiveValue,
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
            />

            <label
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                }}
            >
                <input
                    type="color"
                    value={effectiveHex}
                    onChange={(event) => {
                        setColorOverride(
                            theme,
                            token.name,
                            event.target.value,
                        );
                    }}
                    style={{
                        width: "2.5rem",
                        height: "2rem",
                        padding: 0,
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "0.25rem",
                        background: "transparent",
                        cursor: "pointer",
                    }}
                    aria-label={`Velg farge for ${token.label}`}
                />
                <code
                    style={{
                        fontFamily:
                            "ui-monospace, SFMono-Regular, Menlo, monospace",
                        fontSize: "0.8rem",
                    }}
                >
                    {effectiveHex}
                </code>
                {isOverridden && defaultHex !== effectiveHex && (
                    <span
                        style={{
                            fontSize: "0.75rem",
                            opacity: 0.6,
                        }}
                    >
                        (default {defaultHex})
                    </span>
                )}
            </label>

            <button
                type="button"
                onClick={() => clearColorOverride(theme, token.name)}
                disabled={!isOverridden}
                style={{
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    background: isOverridden ? "white" : "transparent",
                    cursor: isOverridden ? "pointer" : "not-allowed",
                    opacity: isOverridden ? 1 : 0.4,
                    fontSize: "0.75rem",
                }}
            >
                Tilbakestill
            </button>
        </div>
    );
}

type PlaygroundProps = {
    theme: ThemeValue;
};

function ColorPlayground({ theme }: PlaygroundProps) {
    const [overrides, setOverrides] = useState(() => readOverrides(theme));

    useEffect(() => {
        setOverrides(readOverrides(theme));

        const unsubscribe = subscribeToOverrideChanges((changedTheme) => {
            if (changedTheme === theme) {
                setOverrides(readOverrides(theme));
            }
        });

        return () => {
            unsubscribe();
        };
    }, [theme]);

    const grouped = useMemo(() => {
        const map: Record<ColorTokenGroup, typeof colorTokens> = {
            background: [],
            border: [],
            text: [],
        };
        for (const token of colorTokens) {
            map[token.group].push(token);
        }
        return map;
    }, []);

    const overrideCount = Object.keys(overrides).length;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                padding: "1.5rem",
                maxWidth: "72rem",
                color: "var(--jkl-color-text-default)",
                background: "var(--jkl-color-background-page)",
            }}
        >
            <header
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
                    Color playground
                </h1>
                <p style={{ margin: 0, opacity: 0.8 }}>
                    Eksperimenter med farge-tokens for å se hvordan de slår inn
                    i komponentene. Endringene gjelder nåværende tema (
                    <strong>{themeLabels[theme]}</strong>) og lagres i{" "}
                    <code>localStorage</code>, slik at de følger med mens du
                    navigerer mellom stories. De påvirker ikke
                    SCSS-kildekoden.
                </p>
                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                    }}
                >
                    <button
                        type="button"
                        onClick={() => clearAllColorOverrides(theme)}
                        disabled={overrideCount === 0}
                        style={{
                            padding: "0.5rem 0.75rem",
                            borderRadius: "0.25rem",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                            background:
                                overrideCount === 0 ? "transparent" : "white",
                            cursor:
                                overrideCount === 0
                                    ? "not-allowed"
                                    : "pointer",
                            opacity: overrideCount === 0 ? 0.4 : 1,
                        }}
                    >
                        Tilbakestill alle ({overrideCount})
                    </button>
                </div>
            </header>

            {(Object.keys(grouped) as ColorTokenGroup[]).map((group) => (
                <section
                    key={group}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 0.5rem",
                            fontSize: "1.125rem",
                        }}
                    >
                        {groupLabels[group]}
                    </h2>
                    {grouped[group].map((token) => (
                        <TokenRow
                            key={token.name}
                            token={token}
                            theme={theme}
                            overrideValue={overrides[token.name]}
                        />
                    ))}
                </section>
            ))}
        </div>
    );
}

const meta: Meta<typeof ColorPlayground> = {
    title: "Design tokens/Color playground",
    component: ColorPlayground,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component:
                    "Bruk denne siden til å overstyre farge-tokens live i Storybook. Endringene påvirker alle komponent-stories og lagres i localStorage per tema.",
            },
        },
        // Disable the page background override so the playground can preview
        // the selected background token itself.
        backgrounds: { disable: true },
    },
    tags: ["!autodocs"],
};

export default meta;

type Story = StoryObj<typeof ColorPlayground>;

export const Playground: Story = {
    render: (_, context) => (
        <ColorPlayground theme={resolveTheme(context.globals.theme)} />
    ),
};
