"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Temabyggeren er et skjema over flere steg, og har sin egen navigasjon både ut
 * til portalen og mellom stegene. Headeren og footeren ville lagt ekstra menyer
 * rundt et løp som helst skal følges fra start til slutt.
 */
export function PortalChromeSlot({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    if (pathname?.startsWith("/temabygger")) {
        return null;
    }

    return children;
}
