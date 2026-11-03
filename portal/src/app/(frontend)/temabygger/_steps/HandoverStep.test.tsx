import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeDraftProvider } from "../_context/ThemeDraftContext";
import { INITIAL_STATE } from "../_context/themeDraftReducer";
import type { ThemeDraft } from "../_context/types";
import { HandoverStep } from "./HandoverStep";

// Modalen og toasten bruker hooks som ikke deler React-instans med portalen i testmiljøet.
vi.mock("./ResetThemeModal", () => ({ ResetThemeModal: () => null }));
vi.mock("@fremtind/jokul/toast", () => ({
    ToastProvider: ({ children }: { children: unknown }) => children,
    useToast: () => ({ add: () => "", close: () => {} }),
}));

const originalLocation = window.location;

afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    Object.defineProperty(window, "location", {
        configurable: true,
        writable: true,
        value: originalLocation,
    });
    Reflect.deleteProperty(navigator, "clipboard");
});

function renderStep(draft: ThemeDraft = INITIAL_STATE) {
    return render(
        <ThemeDraftProvider initialDraft={draft}>
            <HandoverStep />
        </ThemeDraftProvider>,
    );
}

/**
 * Meldingen skal åpnes i brukerens egen klient. `mailto:` og `slack:`
 * håndteres av maskinen, så de skrives til `location`, mens web-klientene
 * åpnes i en ny fane.
 */
function stubNavigation() {
    const location = { href: "", origin: "https://jokul.fremtind.no" };
    Object.defineProperty(window, "location", {
        configurable: true,
        writable: true,
        value: location,
    });

    const open = vi.fn();
    vi.stubGlobal("open", open);

    return { location, open };
}

function stubClipboard(result: () => Promise<void>) {
    const spy = vi.fn<(text: string) => Promise<void>>(result);
    Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: spy },
    });

    return spy;
}

function chooseChannel(name: RegExp) {
    fireEvent.click(screen.getByRole("radio", { name }));
}

const withUploadedFont: ThemeDraft = {
    ...INITIAL_STATE,
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
    it("sier ingenting om vedlegg når temaet bruker en standardfont", () => {
        renderStep();

        expect(screen.queryByText(/Fontfila må du legge ved selv/)).toBe(null);
    });

    /**
     * Ingen av kanalene kan legge ved en fil via en URL, så nedlastinga er
     * eneste vei fra utkastet til et vedlegg brukeren kan sende.
     */
    it("lar brukeren hente ut fontfila de må legge ved", () => {
        renderStep(withUploadedFont);

        const link = screen.getByRole("link", {
            name: /Last ned Merkevare\.woff2/,
        });

        expect(link.getAttribute("download")).toBe("Merkevare.woff2");
        expect(link.getAttribute("href")).toBe(
            withUploadedFont.customFonts.regular?.dataUrl,
        );
    });

    it("fyller ut en e-post til designsystem-teamet med hele temaet i lenken", async () => {
        const { location } = stubNavigation();

        renderStep();
        fireEvent.click(screen.getByRole("button", { name: "Åpne e-post" }));

        expect(await screen.findByText("Meldingen er åpnet")).toBeTruthy();

        const href = decodeURIComponent(location.href);
        expect(
            href.startsWith("mailto:fremtind.designsystem@fremtind.no"),
        ).toBe(true);
        // Lenken må være absolutt for å kunne åpnes fra en e-postklient
        expect(href).toContain(
            "https://jokul.fremtind.no/temabygger/forhandsvisning?draft=",
        );
    });

    it("åpner Teams i en ny fane", async () => {
        const { open } = stubNavigation();

        renderStep();
        chooseChannel(/Teams/);
        fireEvent.click(screen.getByRole("button", { name: "Åpne Teams" }));

        expect(await screen.findByText("Meldingen er åpnet")).toBeTruthy();

        const [url, target] = open.mock.calls[0];
        expect(url.startsWith("https://teams.microsoft.com/")).toBe(true);
        expect(decodeURIComponent(url)).toContain(
            "/temabygger/forhandsvisning?draft=",
        );
        expect(target).toBe("_blank");
    });

    it("kopierer meldingen når Slack er valgt, siden Slack ikke kan fylles ut", async () => {
        const { open } = stubNavigation();
        const writeText = stubClipboard(() => Promise.resolve());

        renderStep();
        chooseChannel(/Slack/);
        fireEvent.click(
            screen.getByRole("button", {
                name: "Kopier melding og åpne Slack",
            }),
        );

        expect(await screen.findByText("Meldingen er kopiert")).toBeTruthy();
        expect(writeText.mock.calls[0][0]).toContain(
            "https://jokul.fremtind.no/temabygger/forhandsvisning?draft=",
        );
        expect(open).not.toHaveBeenCalled();
    });

    it("viser meldingen hvis utklippstavla ikke kan brukes, slik at ingenting går tapt", async () => {
        stubNavigation();
        stubClipboard(() => Promise.reject(new Error("Avslått")));

        renderStep();
        chooseChannel(/Slack/);
        fireEvent.click(
            screen.getByRole("button", {
                name: "Kopier melding og åpne Slack",
            }),
        );

        const message = await screen.findByLabelText(
            /Melding til designsystem-teamet/,
        );
        expect((message as HTMLTextAreaElement).value).toContain(
            "/temabygger/forhandsvisning?draft=",
        );
    });
});
