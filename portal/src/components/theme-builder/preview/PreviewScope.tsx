"use client";

import { type PropsWithChildren, useMemo } from "react";
import type { ColorToken } from "../tokens";
import { buildPreviewStyle } from "./buildPreviewStyle";

type PreviewScopeProps = PropsWithChildren<{
    className?: string;
    tokens: ColorToken[];
}>;

/**
 * Scoper de live tokens (som CSS-variabler) til sitt eget undertre.
 *
 * `data-theme` settes på et høyere wrapper-element av `PreviewPanel` via
 * `dataAttributes(display)`, så denne komponenten holder seg til å eksponere
 * token-verdiene som CSS-variabler.
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
