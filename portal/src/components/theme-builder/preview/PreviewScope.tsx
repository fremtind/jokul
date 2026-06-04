"use client";

import { type PropsWithChildren, useMemo } from "react";
import type { ColorToken } from "../tokens";
import { buildPreviewStyle } from "../utils";

type PreviewScopeProps = PropsWithChildren<{
    className?: string;
    tokens: ColorToken[];
}>;

/**
 * Scoper de live tokens (som CSS-variabler) til sitt eget undertre.
 */
export function PreviewScope({
    children,
    className,
    tokens,
}: PreviewScopeProps) {
    const previewStyle = useMemo(() => buildPreviewStyle(tokens), [tokens]);

    return (
        <div className={className} style={previewStyle}>
            {children}
        </div>
    );
}
