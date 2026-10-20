"use client";

import { useVisualEditingEnvironment } from "next-sanity/hooks";
import DraftToolbar from "./DraftToolbar";

export function DisableDraftMode() {
    const environment = useVisualEditingEnvironment();

    // Only show the disable draft mode button when outside of Presentation Tool
    if (environment !== "standalone") {
        return null;
    }

    return <DraftToolbar />;
}
