import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeBuilder } from "./ThemeBuilder";
import { ColorTokenField } from "./_components/ColorTokenField";
import {
    ThemeDraftProvider,
    useThemeDraft,
} from "./_context/ThemeDraftContext";
import { INITIAL_STATE } from "./_context/themeDraftReducer";

const route = vi.hoisted(() => ({ step: "identitet" }));

vi.mock("next/navigation", () => ({
    useSelectedLayoutSegments: () => route.step.split("/"),
}));

vi.mock("./_components/ThemeBuilderLayout", () => ({
    ThemeBuilderLayout: Object.assign(
        ({ children }: { children: ReactNode }) => <div>{children}</div>,
        {
            Form: ({ children }: { children: ReactNode }) => (
                <div>{children}</div>
            ),
            Preview: ({ children }: { children: ReactNode }) => (
                <div>{children}</div>
            ),
        },
    ),
}));

vi.mock("./_preview/ThemePreview", () => ({ ThemePreview: () => null }));

afterEach(() => {
    cleanup();
    window.localStorage.clear();
    route.step = "identitet";
});

function Editor() {
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
                Endre
            </button>
            <input aria-label="Annet felt" />
            <input
                aria-label="Navngi tema"
                data-theme-history
                value={draft.themeName}
                onChange={(event) =>
                    dispatch({
                        type: "EDIT_FIELD",
                        field: "themeName",
                        action: {
                            type: "SET_THEME_NAME",
                            themeName: event.target.value,
                        },
                    })
                }
                onBlur={() =>
                    dispatch({ type: "END_EDIT", field: "themeName" })
                }
            />
        </>
    );
}

function BuilderWrapper({ children }: { children: ReactNode }) {
    return (
        <ThemeDraftProvider initialDraft={INITIAL_STATE}>
            <ThemeBuilder>{children}</ThemeBuilder>
        </ThemeDraftProvider>
    );
}

function renderBuilder(children: ReactNode = <Editor />) {
    return render(children, { wrapper: BuilderWrapper });
}

describe("temabyggerens hurtigtaster", () => {
    it("lar andre tekstfelt beholde nettleserens angre", () => {
        renderBuilder();
        fireEvent.click(screen.getByText("Endre"));
        const field = screen.getByRole("textbox", { name: "Annet felt" });

        expect(fireEvent.keyDown(field, { key: "z", metaKey: true })).toBe(
            true,
        );
        expect(screen.getByTestId("name").textContent).toBe("Nytt");
    });

    it.each([
        {
            modifier: { metaKey: true },
            redo: { key: "z", shiftKey: true },
            label: "Cmd",
        },
        {
            modifier: { ctrlKey: true },
            redo: { key: "z", shiftKey: true },
            label: "Ctrl+Shift",
        },
        { modifier: { ctrlKey: true }, redo: { key: "y" }, label: "Ctrl+Y" },
    ])(
        "angrer og gjør om navnet etter blur med $label",
        ({ modifier, redo }) => {
            renderBuilder();
            const name = screen.getByRole("textbox", { name: "Navngi tema" });

            fireEvent.change(name, { target: { value: "abc" } });
            fireEvent.blur(name);
            expect(fireEvent.keyDown(window, { key: "z", ...modifier })).toBe(
                false,
            );
            expect((name as HTMLInputElement).value).toBe("");

            fireEvent.focus(name);
            expect(fireEvent.keyDown(name, { ...modifier, ...redo })).toBe(
                false,
            );
            expect((name as HTMLInputElement).value).toBe("abc");
        },
    );

    it("samler skriving i hex-feltet til én endring som kan angres og gjøres om", () => {
        route.step = "farger";
        renderBuilder(
            <ColorTokenField
                group="background"
                tokenRole="contrast"
                colorScheme="light"
                label="Kontrastfarge"
            />,
        );
        const field = screen.getByRole("textbox", { name: "Kontrastfarge" });
        const original = (field as HTMLInputElement).value;

        fireEvent.change(field, { target: { value: "a" } });
        fireEvent.change(field, { target: { value: "abc" } });
        fireEvent.blur(field);
        expect(fireEvent.keyDown(field, { key: "z", metaKey: true })).toBe(
            false,
        );
        expect((field as HTMLInputElement).value).toBe(original);
        expect(
            fireEvent.keyDown(field, {
                key: "z",
                metaKey: true,
                shiftKey: true,
            }),
        ).toBe(false);
        expect((field as HTMLInputElement).value).toBe("ABC");
    });

    it("angrer ikke mørke farger mens lys modus er aktiv", () => {
        route.step = "farger/morkt";
        const field = (
            <ColorTokenField
                group="background"
                tokenRole="contrast"
                colorScheme="dark"
                label="Kontrastfarge"
            />
        );
        const view = renderBuilder(field);
        const input = screen.getByRole("textbox", { name: "Kontrastfarge" });
        fireEvent.change(input, { target: { value: "abc" } });
        const changed = (input as HTMLInputElement).value;
        fireEvent.blur(input);

        route.step = "farger";
        view.rerender(field);
        expect(fireEvent.keyDown(window, { key: "z", metaKey: true })).toBe(
            false,
        );
        expect((input as HTMLInputElement).value).toBe(changed);
    });

    it("beholder utkastet, men tømmer historikken når man går videre", () => {
        const view = renderBuilder();
        fireEvent.click(screen.getByText("Endre"));

        const rerenderAtStep = (step: string) => {
            route.step = step;
            view.rerender(<Editor />);
        };

        rerenderAtStep("grunnfarge");
        expect(fireEvent.keyDown(window, { key: "z", metaKey: true })).toBe(
            false,
        );
        expect(screen.getByTestId("name").textContent).toBe("Nytt");

        rerenderAtStep("identitet");
        fireEvent.keyDown(window, { key: "z", metaKey: true });
        expect(screen.getByTestId("name").textContent).toBe("Nytt");

        const name = screen.getByRole("textbox", { name: "Navngi tema" });
        fireEvent.change(name, { target: { value: "Nyere" } });
        fireEvent.blur(name);
        fireEvent.keyDown(window, { key: "z", metaKey: true });
        expect(screen.getByTestId("name").textContent).toBe("Nytt");
    });

    it("stopper nettleserens angre og gjør om når temahistorikken er tom", () => {
        renderBuilder();
        expect(fireEvent.keyDown(window, { key: "z", metaKey: true })).toBe(
            false,
        );
        expect(fireEvent.keyDown(window, { key: "y", ctrlKey: true })).toBe(
            false,
        );
    });
});
