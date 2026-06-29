import { ThemeDraftProvider } from "@/app/(frontend)/temabygger/_context/ThemeDraftContext";
import {
    THEME_DRAFT_QUERY_PARAM,
    parseThemeDraftPayload,
} from "@/app/(frontend)/temabygger/_shared/themeDraftPayload";
import { ThemePreviewPage } from "./_components/ThemePreviewPage";

export default async function ThemeBuilderPreviewPage({
    searchParams,
}: PageProps<"/temabygger/forhandsvisning">) {
    const params = await searchParams;
    const serializedDraft = params[THEME_DRAFT_QUERY_PARAM];
    const draftValue =
        typeof serializedDraft === "string" ? serializedDraft : undefined;

    const initialDraft = getInitialDraftFromSearchParam(draftValue);

    return (
        <ThemeDraftProvider initialDraft={initialDraft}>
            <ThemePreviewPage />
        </ThemeDraftProvider>
    );
}

function getInitialDraftFromSearchParam(draftValue?: string) {
    if (!draftValue) {
        return undefined;
    }

    try {
        return parseThemeDraftPayload(JSON.parse(draftValue))?.draft;
    } catch {
        return undefined;
    }
}
