"use client";

import { initMixpanel } from "@/utils/tracking/mixpanel";
import { type ReactNode, useEffect } from "react";

type ProviderProps = { children?: ReactNode };
export function MixpanelProvider({ children }: ProviderProps) {
    useEffect(() => {
        initMixpanel();
    }, []);

    return <>{children}</>;
}
