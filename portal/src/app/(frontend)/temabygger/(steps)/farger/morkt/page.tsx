"use client";

import { redirect } from "next/navigation";
import { useThemeDraft } from "../../../_context/ThemeDraftContext";
import { AdjustColorsStep } from "../../../_steps/AdjustColorsStep";

export default function ThemeBuilderDarkColorsPage() {
    const { draft, storageLoaded } = useThemeDraft();

    if (!storageLoaded) {
        return null;
    }

    if (!draft.includeDarkMode) {
        redirect("/temabygger/farger");
    }

    return <AdjustColorsStep colorScheme="dark" />;
}
