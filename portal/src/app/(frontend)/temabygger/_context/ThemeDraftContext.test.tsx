import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ColorTokenField } from "../_components/ColorTokenField";
import { getStoredThemeDraft } from "../_storage/themeDraftStorage";
import { ThemeDraftProvider, useThemeDraft } from "./ThemeDraftContext";
import { INITIAL_STATE } from "./themeDraftReducer";

vi.mock("next/navigation", () => ({
    useSelectedLayoutSegments: () => ["identitet"],
}));

afterEach(() => {
    cleanup();
    window.localStorage.clear();
});

function ColorEditor() {
    const { draft, dispatch } = useThemeDraft();

    return (
        <>
            <ColorTokenField
                group="background"
                tokenRole="contrast"
                colorScheme="light"
                label="Kontrastfarge"
            />
            <span data-testid="color">
                {draft.colorTokens.background.contrast.light}
            </span>
            <button
                type="button"
                onClick={() => dispatch({ type: "UNDO", step: "farger" })}
            >
                Angre farge
            </button>
        </>
    );
}

function Editor() {
    const { draft, dispatch, canUndo } = useThemeDraft();

    return (
        <div>
            <span>{draft.themeName}</span>
            <span>{canUndo ? "Kan angre" : "Kan ikke angre"}</span>
            <button
                type="button"
                onClick={() =>
                    dispatch({ type: "SET_THEME_NAME", themeName: "Endret" })
                }
            >
                Endre
            </button>
            <button
                type="button"
                onClick={() => dispatch({ type: "UNDO", step: "identitet" })}
            >
                Angre
            </button>
        </div>
    );
}

describe("ThemeDraftProvider", () => {
    it("lager ett angresteg per fargevalg", () => {
        const originalColor =
            INITIAL_STATE.colorTokens.background.contrast.light;
        render(
            <ThemeDraftProvider initialDraft={INITIAL_STATE}>
                <ColorEditor />
            </ThemeDraftProvider>,
        );

        const picker = screen.getByLabelText("Kontrastfarge light fargevelger");
        fireEvent.input(picker, { target: { value: "#112233" } });
        fireEvent.input(picker, { target: { value: "#445566" } });
        expect(screen.getByTestId("color").textContent).toBe("#445566");
        fireEvent.change(picker);
        fireEvent.input(picker, { target: { value: "#778899" } });
        fireEvent.change(picker);

        fireEvent.click(screen.getByText("Angre farge"));
        expect(screen.getByTestId("color").textContent).toBe("#445566");
        fireEvent.click(screen.getByText("Angre farge"));
        expect(screen.getByTestId("color").textContent).toBe(originalColor);
    });

    it("lagrer bare gjeldende utkast etter endring og angre", async () => {
        render(
            <ThemeDraftProvider>
                <Editor />
            </ThemeDraftProvider>,
        );

        fireEvent.click(screen.getByText("Endre"));
        expect(screen.getByText("Kan angre")).toBeDefined();
        await waitFor(() =>
            expect(getStoredThemeDraft()?.themeName).toBe("Endret"),
        );
        const stored = window.localStorage.getItem("jokul.temabygger.draft");
        expect(Object.keys(JSON.parse(stored ?? "{}"))).toEqual([
            "version",
            "draft",
        ]);

        fireEvent.click(screen.getByText("Angre"));
        await waitFor(() => expect(getStoredThemeDraft()?.themeName).toBe(""));
    });
});
