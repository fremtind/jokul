import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ColorSchemeComparison } from "./ColorSchemeComparison";

afterEach(cleanup);

function renderComparison(includeDarkMode: boolean) {
    return render(
        <ColorSchemeComparison includeDarkMode={includeDarkMode}>
            <p>Eksempel</p>
        </ColorSchemeComparison>,
    );
}

describe("ColorSchemeComparison", () => {
    it("viser innholdet én gang per fargemodus når mørk modus er på", () => {
        renderComparison(true);

        expect(screen.getAllByText("Eksempel")).toHaveLength(2);
        expect(
            screen.getByRole("heading", { name: "Lyst modus" }),
        ).toBeTruthy();
        expect(
            screen.getByRole("heading", { name: "Mørk modus" }),
        ).toBeTruthy();
    });

    it("viser innholdet én gang og uten modusmerking når mørk modus er av", () => {
        renderComparison(false);

        expect(screen.getAllByText("Eksempel")).toHaveLength(1);
        expect(
            screen.queryByRole("heading", { name: "Lyst modus" }),
        ).toBeNull();
        expect(
            screen.queryByRole("heading", { name: "Mørk modus" }),
        ).toBeNull();
    });

    /**
     * `data-theme` setter `color-scheme`, som avgjør hvilken halvdel av
     * `light-dark()` i fargetokenene som vinner. Uten begge verdiene vises
     * samme tema to ganger.
     */
    it("merker halvdelene med hver sin fargemodus", () => {
        const { container } = renderComparison(true);

        expect(container.querySelector('[data-theme="light"]')).toBeTruthy();
        expect(container.querySelector('[data-theme="dark"]')).toBeTruthy();
    });

    /**
     * `data-single` er det eneste som skal endres på den lyse halvdelen. Byttes
     * elementet ut i stedet, remountes eksempelet og mister tilstanden sin midt
     * i bevegelsen oppover.
     */
    it("beholder den lyse halvdelen og krymper den i stedet for å bytte den ut", () => {
        const { container, rerender } = renderComparison(false);
        const lightPane = container.querySelector('[data-theme="light"]');

        expect(lightPane?.getAttribute("data-single")).toBe("true");

        rerender(
            <ColorSchemeComparison includeDarkMode>
                <p>Eksempel</p>
            </ColorSchemeComparison>,
        );

        expect(container.querySelector('[data-theme="light"]')).toBe(lightPane);
        expect(lightPane?.getAttribute("data-single")).toBeNull();
    });
});
