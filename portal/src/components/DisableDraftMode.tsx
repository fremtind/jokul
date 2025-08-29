"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import DraftToolbar from "./DraftToolbar";

export function DisableDraftMode() {
    const environment = useDraftModeEnvironment();

    // Only show the disable draft mode button when outside of Presentation Tool
    if (environment !== "live" && environment !== "unknown") {
        return null;
    }

    return <DraftToolbar />;
}
