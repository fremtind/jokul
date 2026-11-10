"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Temabyggeren har sin egen sidetittel og en forhåndsvisning som bruker hele
 * bredden, og vises derfor uten portalens header.
 */
export const HeaderSlot = ({ children }: { children: ReactNode }) => {
    const segment = useSelectedLayoutSegment();

    if (segment === "temabygger") {
        return null;
    }

    return <>{children}</>;
};
