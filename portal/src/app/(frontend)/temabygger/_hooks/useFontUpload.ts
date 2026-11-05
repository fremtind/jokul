import type { UploadedFile } from "@fremtind/jokul/file-input";
import { useMemo, useState } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import {
    type FontAxes,
    type FontSlot,
    readCustomFont,
} from "../_shared/customFont";
import { useThemeDraftActions } from "./useThemeDraftActions";

/** Tilstand og handlinger for ett fontslot med opplasting. */
export function useFontUpload(slot: FontSlot) {
    const { draft } = useThemeDraft();
    const { setCustomFont, setFontAxes, removeCustomFont } =
        useThemeDraftActions();
    const [rejected, setRejected] = useState<UploadedFile | null>(null);

    const customFont = draft.customFonts[slot];

    /**
     * Et gjenopprettet utkast har fontfila som base64, ikke som `File`. Lista
     * trenger likevel en oppføring, så navnet bæres av en tom `File` og
     * størrelsen leses fra utkastet.
     */
    const restored = useMemo<UploadedFile | null>(
        () =>
            customFont
                ? {
                      file: new File([], customFont.name),
                      state: undefined,
                      uploadProgress: 0,
                  }
                : null,
        [customFont],
    );

    // En avvist fil erstatter ikke fonten som alt er i bruk, men feilmeldingen
    // må fram, så den holder plassen i lista til brukeren fjerner den. En
    // godkjent fil leses derimot alltid fra utkastet, slik at lista følger med
    // når en opplasting angres.
    const shown = rejected ?? restored;

    const upload = async (files: UploadedFile[]) => {
        const candidate = files.at(-1);

        if (!candidate) {
            return;
        }

        if (candidate.validation) {
            setRejected({ ...candidate, state: "error" });
            return;
        }

        try {
            const font = await readCustomFont(candidate.file);

            setRejected(null);
            setCustomFont(slot, font);
        } catch {
            setRejected({
                ...candidate,
                state: "error",
                validation: {
                    type: "WRONG_TYPE",
                    message: "Fontfila kunne ikke leses",
                },
            });
        }
    };

    const remove = () => {
        if (rejected) {
            setRejected(null);
            return;
        }

        removeCustomFont(slot);
    };

    return {
        shown,
        shownSize: rejected ? rejected.file.size : (customFont?.size ?? 0),
        errorLabel: rejected?.validation?.message,
        axes: customFont?.axes ?? {},
        setAxes: (axes: FontAxes) => setFontAxes(slot, axes),
        upload,
        remove,
    };
}
