"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Temabyggeren er et skjema over flere steg, og har sin egen tilbakelenke både
 * ut til portalen og mellom stegene. Den globale headeren ville lagt en ekstra
 * meny over et løp som helst skal følges fra start til slutt.
 */
export function HeaderSlot({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    if (pathname?.startsWith("/temabygger")) {
        return null;
    }

    return children;
}
