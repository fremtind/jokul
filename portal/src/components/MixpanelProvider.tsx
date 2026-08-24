"use client";

import { initMixpanel } from "@/utils/tracking/mixpanel";
import { type ReactNode, useEffect } from "react";

type ProviderProps = { children?: ReactNode; disabled?: boolean };
export function MixpanelProvider({ children, disabled }: ProviderProps) {
    useEffect(() => {
        if (!disabled) {
            initMixpanel();
        }
    }, [disabled]);

    return <>{children}</>;
}
