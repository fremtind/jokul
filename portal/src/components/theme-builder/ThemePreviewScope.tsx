"use client";

import { type PropsWithChildren, useMemo } from "react";
import type { EditableColorToken, ThemeMode } from "./types";
import { buildThemePreviewScopeStyle } from "./utils";

type ThemePreviewScopeProps = PropsWithChildren<{
    className?: string;
    theme: ThemeMode;
    tokens: EditableColorToken[];
}>;

export function ThemePreviewScope({
    children,
    className,
    theme,
    tokens,
}: ThemePreviewScopeProps) {
    const previewStyle = useMemo(
        () => buildThemePreviewScopeStyle(tokens),
        [tokens],
    );

    return (
        <div className={className} data-theme={theme} style={previewStyle}>
            {children}
        </div>
    );
}
