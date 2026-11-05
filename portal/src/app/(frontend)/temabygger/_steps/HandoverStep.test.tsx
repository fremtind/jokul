import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeDraftProvider } from "../_context/ThemeDraftContext";
import { INITIAL_STATE } from "../_context/themeDraftReducer";
import type { ThemeDraft } from "../_context/types";
import { HandoverStep } from "./HandoverStep";

// Toasten bruker hooks som ikke deler React-instans med portalen i testmiljøet.
vi.mock("@fremtind/jokul/toast", () => ({
    ToastProvider: ({ children }: { children: unknown }) => children,
    useToast: () => ({ add: () => "", close: () => {} }),
}));

afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
});

function renderStep(draft: ThemeDraft = INITIAL_STATE) {
    return render(
        <ThemeDraftProvider initialDraft={draft}>
            <HandoverStep />
        </ThemeDraftProvider>,
    );
}

/**
 * Nedlastinga skjer ved å klikke en lenke vi lager selv. jsdom har verken
 * objekt-URL-er eller navigasjon, så begge stubbes, og klikket fanges opp.
 */
function stubDownload() {
    const blobs: Blob[] = [];

    class UrlStub extends URL {
        static createObjectURL = (blob: Blob) => {
            blobs.push(blob);
            return "blob:tema";
        };
        static revokeObjectURL = () => {};
    }

    vi.stubGlobal("URL", UrlStub);

    const click = vi
        .spyOn(HTMLAnchorElement.prototype, "click")
        .mockImplementation(() => {});

    return { blobs, click };
}

const withUploadedFont: ThemeDraft = {
    ...INITIAL_STATE,
    themeName: "Merkevare",
    regularFont: "custom",
    customFonts: {
        regular: {
            name: "Merkevare.woff2",
            size: 42_000,
            dataUrl: "data:font/woff2;base64,d09GMgABAAAAAA",
        },
    },
};

describe("HandoverStep", () => {
    /**
     * Fontfila ligger bare i nettleseren, og en e-post kan ikke få et vedlegg
     * fra en URL. Arkivet er derfor eneste vei fra utkastet til noe brukeren
     * kan sende.
     */
    it("laster ned temaet og fonten som et arkiv oppkalt etter temaet", () => {
        const { blobs, click } = stubDownload();

        renderStep(withUploadedFont);
        fireEvent.click(screen.getByRole("button", { name: "Last ned tema" }));

        const link = click.mock.instances[0] as HTMLAnchorElement;
        expect(link.download).toBe("tema-merkevare.zip");
        expect(link.getAttribute("href")).toBe("blob:tema");
        expect(blobs[0].type).toBe("application/zip");
    });

    /**
     * Lenka skal limes inn i en melding, så den må vises hel og absolutt — også
     * om kopieringen feiler.
     */
    it("viser hele lenka til forhåndsvisningen i delingsdialogen", () => {
        renderStep(withUploadedFont);
        fireEvent.click(
            screen.getByRole("button", { name: "Del forhåndsvisning" }),
        );

        const shown = screen.getByTitle(/temabygger\/forhandsvisning\?draft=/);
        expect(shown.textContent).toContain(
            `${window.location.origin}/temabygger/forhandsvisning?draft=`,
        );
    });

    it("viser hvor temaet skal sendes", () => {
        renderStep();

        expect(
            screen
                .getByRole("link", { name: /fremtind.designsystem/ })
                .getAttribute("href"),
        ).toBe("mailto:fremtind.designsystem@fremtind.no");
    });
});
