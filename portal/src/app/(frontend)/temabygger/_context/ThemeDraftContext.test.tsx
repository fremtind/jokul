import {
    cleanup,
    fireEvent,
    render,
    renderHook,
    screen,
} from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, expect, it, vi } from "vitest";
import { ColorTokenField } from "../_components/ColorTokenField";
import { useActiveStep } from "../_hooks/useActiveStep";
import { ThemeDraftProvider, useThemeDraft } from "./ThemeDraftContext";
import {
    initializeHistory,
    themeDraftHistoryReducer,
} from "./themeDraftHistory";
import { INITIAL_STATE } from "./themeDraftReducer";

const route = vi.hoisted(() => ({ step: "identitet" }));

vi.mock("next/navigation", () => ({
    useSelectedLayoutSegments: () => route.step.split("/"),
}));

afterEach(() => {
    cleanup();
    route.step = "identitet";
});

it("finner aktivt steg fra Next-segmenter og skiller mørke farger", () => {
    route.step = "(steps)/farger/morkt";
    const { result, rerender } = renderHook(useActiveStep);
    expect(result.current).toBe("farger/morkt");

    route.step = "(steps)/farger";
    rerender();
    expect(result.current).toBe("farger");
});

function WithDraft({ children }: { children: ReactNode }) {
    return (
        <ThemeDraftProvider initialDraft={INITIAL_STATE}>
            {children}
        </ThemeDraftProvider>
    );
}

function ColorEditor() {
    const { dispatch } = useThemeDraft();

    return (
        <>
            <ColorTokenField
                group="background"
                tokenRole="contrast"
                colorScheme="light"
                label="Kontrastfarge"
            />

            <button type="button" onClick={() => dispatch({ type: "UNDO" })}>
                Angre farge
            </button>
        </>
    );
}

function NameEditor() {
    const { draft, dispatch } = useThemeDraft();

    return (
        <>
            <span data-testid="name">{draft.themeName}</span>

            <button
                type="button"
                onClick={() =>
                    dispatch({ type: "SET_THEME_NAME", themeName: "Nytt" })
                }
            >
                Endre navn
            </button>
        </>
    );
}

it("lager ett angresteg per fargevalg", () => {
    route.step = "farger";
    const originalColor = INITIAL_STATE.colorTokens.background.contrast.light;
    render(<ColorEditor />, { wrapper: WithDraft });

    const picker = screen.getByLabelText("Kontrastfarge light fargevelger");
    const color = screen.getByRole("textbox", { name: "Kontrastfarge" });
    fireEvent.input(picker, { target: { value: "#112233" } });
    fireEvent.input(picker, { target: { value: "#445566" } });
    fireEvent.change(picker);
    fireEvent.input(picker, { target: { value: "#778899" } });
    fireEvent.change(picker);

    fireEvent.click(screen.getByText("Angre farge"));
    expect((color as HTMLInputElement).value).toBe("#445566");
    fireEvent.click(screen.getByText("Angre farge"));
    expect((color as HTMLInputElement).value).toBe(originalColor);
});

it("bruker temahistorikk i merkede felt, men ikke i andre inputfelt", () => {
    route.step = "farger";
    const originalColor = INITIAL_STATE.colorTokens.background.contrast.light;
    render(
        <>
            <ColorEditor />
            <input aria-label="Annet felt" />
        </>,
        { wrapper: WithDraft },
    );
    const color = screen.getByRole("textbox", { name: "Kontrastfarge" });
    const other = screen.getByRole("textbox", { name: "Annet felt" });
    fireEvent.change(color, { target: { value: "#112233" } });

    fireEvent.keyDown(other, { key: "z", metaKey: true });
    expect((color as HTMLInputElement).value).toBe("#112233");

    fireEvent.keyDown(color, { key: "z", metaKey: true });
    expect((color as HTMLInputElement).value).toBe(originalColor);
    fireEvent.keyDown(color, { key: "y", ctrlKey: true });
    expect((color as HTMLInputElement).value).toBe("#112233");
});

it("beholder utkastet, men tømmer historikken når man går videre", () => {
    const view = render(<NameEditor />, { wrapper: WithDraft });
    fireEvent.click(screen.getByText("Endre navn"));

    route.step = "grunnfarge";
    view.rerender(<NameEditor />);
    route.step = "identitet";
    view.rerender(<NameEditor />);
    fireEvent.keyDown(screen.getByText("Endre navn"), {
        key: "z",
        metaKey: true,
    });
    expect(screen.getByTestId("name").textContent).toBe("Nytt");
});

it("samler bare endringer i samme redigeringsøkt", () => {
    const edit = (themeName: string) => ({
        type: "SET_THEME_NAME" as const,
        themeName,
        scope: "identitet",
    });
    const initial = initializeHistory(INITIAL_STATE);
    const first = themeDraftHistoryReducer(initial, edit("T"));
    const typing = themeDraftHistoryReducer(first, edit("Tema"));
    expect(typing.past).toHaveLength(1);

    const blurred = themeDraftHistoryReducer(typing, {
        type: "END_EDIT",
        field: "themeName",
    });
    const second = themeDraftHistoryReducer(blurred, edit("Tema 2"));
    expect(second.past).toHaveLength(2);
    expect(
        themeDraftHistoryReducer(second, { type: "UNDO", scope: "identitet" })
            .present.themeName,
    ).toBe("Tema");
});

it("slår ikke sammen endringer på tvers av steg og nullstiller historikken ved videre navigasjon", () => {
    const initial = initializeHistory(INITIAL_STATE);
    const light = themeDraftHistoryReducer(initial, {
        type: "SET_THEME_NAME",
        themeName: "Lyst",
        scope: "farger",
    });
    const dark = themeDraftHistoryReducer(light, {
        type: "SET_THEME_NAME",
        themeName: "Mørkt",
        scope: "farger/morkt",
    });
    expect(dark.past).toHaveLength(2);
    expect(
        themeDraftHistoryReducer(dark, { type: "UNDO", scope: "farger" }),
    ).toBe(dark);

    const reset = themeDraftHistoryReducer(dark, { type: "RESET_HISTORY" });
    expect(reset.present.themeName).toBe("Mørkt");
    expect(reset.past).toHaveLength(0);
    expect(reset.future).toHaveLength(0);
});

it("samler fargeendringer per token og fargemodus", () => {
    const initial = initializeHistory(INITIAL_STATE);
    const light = themeDraftHistoryReducer(initial, {
        type: "UPDATE_COLOR_TOKEN",
        group: "background",
        role: "contrast",
        colorScheme: "light",
        value: "#112233",
        scope: "farger",
    });
    const lightAgain = themeDraftHistoryReducer(light, {
        type: "UPDATE_COLOR_TOKEN",
        group: "background",
        role: "contrast",
        colorScheme: "light",
        value: "#445566",
        scope: "farger",
    });
    const dark = themeDraftHistoryReducer(lightAgain, {
        type: "UPDATE_COLOR_TOKEN",
        group: "background",
        role: "contrast",
        colorScheme: "dark",
        value: "#778899",
        scope: "farger/morkt",
    });

    expect(lightAgain.past).toHaveLength(1);
    expect(dark.past).toHaveLength(2);
    expect(
        themeDraftHistoryReducer(dark, { type: "UNDO", scope: "farger" }),
    ).toBe(dark);
});

it("starter en ny redigering etter angring og tømmer gjør om-historikken", () => {
    const initial = initializeHistory(INITIAL_STATE);
    const changed = themeDraftHistoryReducer(initial, {
        type: "SET_THEME_NAME",
        themeName: "Første",
        scope: "identitet",
    });
    const undone = themeDraftHistoryReducer(changed, {
        type: "UNDO",
        scope: "identitet",
    });
    const replacement = themeDraftHistoryReducer(undone, {
        type: "SET_THEME_NAME",
        themeName: "Andre",
        scope: "identitet",
    });

    expect(replacement.future).toHaveLength(0);
    expect(
        themeDraftHistoryReducer(replacement, {
            type: "UNDO",
            scope: "identitet",
        }).present.themeName,
    ).toBe("");
});

it("gjør om flere angrede endringer i riktig rekkefølge", () => {
    const first = themeDraftHistoryReducer(initializeHistory(INITIAL_STATE), {
        type: "SET_THEME_NAME",
        themeName: "Første",
        scope: "identitet",
    });
    const ended = themeDraftHistoryReducer(first, {
        type: "END_EDIT",
        field: "themeName",
    });
    const second = themeDraftHistoryReducer(ended, {
        type: "SET_THEME_NAME",
        themeName: "Andre",
        scope: "identitet",
    });
    const undoSecond = themeDraftHistoryReducer(second, {
        type: "UNDO",
        scope: "identitet",
    });
    const undoFirst = themeDraftHistoryReducer(undoSecond, {
        type: "UNDO",
        scope: "identitet",
    });
    const redoFirst = themeDraftHistoryReducer(undoFirst, {
        type: "REDO",
        scope: "identitet",
    });
    const redoSecond = themeDraftHistoryReducer(redoFirst, {
        type: "REDO",
        scope: "identitet",
    });

    expect(redoFirst.present.themeName).toBe("Første");
    expect(redoSecond.present.themeName).toBe("Andre");
});

it("behandler et gjenopprettet utkast som nytt utgangspunkt", () => {
    const changed = themeDraftHistoryReducer(initializeHistory(INITIAL_STATE), {
        type: "SET_THEME_NAME",
        themeName: "Første",
        scope: "identitet",
    });
    const restored = themeDraftHistoryReducer(changed, {
        type: "SET_DRAFT",
        draft: { ...INITIAL_STATE, themeName: "Lagret" },
    });

    expect(restored.present.themeName).toBe("Lagret");
    expect(restored.past).toHaveLength(0);
    expect(restored.future).toHaveLength(0);
});

it("angrer ikke en endring fra et annet steg", () => {
    const changed = themeDraftHistoryReducer(initializeHistory(INITIAL_STATE), {
        type: "SET_THEME_NAME",
        themeName: "Nytt",
        scope: "identitet",
    });

    expect(
        themeDraftHistoryReducer(changed, {
            type: "UNDO",
            scope: "grunnfarge",
        }),
    ).toBe(changed);
    expect(
        themeDraftHistoryReducer(changed, { type: "UNDO", scope: "identitet" })
            .present.themeName,
    ).toBe("");
});
