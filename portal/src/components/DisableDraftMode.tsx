"use client";

import { Link } from "@fremtind/jokul/link";
import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
    const environment = useDraftModeEnvironment();

    // Only show the disable draft mode button when outside of Presentation Tool
    if (environment !== "live" && environment !== "unknown") {
        return null;
    }

    return <Link href="/api/draft-mode/disable">Disable Draft Mode</Link>;
}
