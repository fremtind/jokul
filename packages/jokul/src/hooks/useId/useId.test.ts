import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useId } from "./useId.js";

describe("useId", () => {
    it("returnerer konsumentens egen id uendret", () => {
        const { result } = renderHook(() =>
            useId("jkl-checkbox", "min-egen-id"),
        );

        expect(result.current).toBe("min-egen-id");
    });

    it("bruker konsumentens id selv om et prefiks er oppgitt", () => {
        const { result } = renderHook(() =>
            useId("jkl-text-input", "eksternt-styrt-id"),
        );

        expect(result.current).toBe("eksternt-styrt-id");
        expect(result.current).not.toContain("jkl-text-input");
    });

    it("genererer id med prefiks når ingen id er oppgitt", () => {
        const { result } = renderHook(() => useId("jkl-select"));

        expect(result.current).toMatch(/^jkl-select-/);
        expect(result.current.length).toBeGreaterThan("jkl-select-".length);
    });

    it("faller tilbake til generert id når id er undefined", () => {
        const { result } = renderHook(() => useId("jkl-modal", undefined));

        expect(result.current).toMatch(/^jkl-modal-/);
    });

    it("faller tilbake til generert id når id er null", () => {
        const { result } = renderHook(() => useId("jkl-modal", null));

        expect(result.current).toMatch(/^jkl-modal-/);
    });

    it("returnerer en ren generert id uten prefiks", () => {
        const { result } = renderHook(() => useId());

        expect(typeof result.current).toBe("string");
        expect(result.current.length).toBeGreaterThan(0);
        expect(result.current.startsWith("-")).toBe(false);
    });

    it("holder id-en stabil på tvers av re-renders", () => {
        const { result, rerender } = renderHook(() => useId("jkl-message"));
        const first = result.current;

        rerender();
        rerender();

        expect(result.current).toBe(first);
    });

    it("holder konsumentens id stabil på tvers av re-renders", () => {
        const { result, rerender } = renderHook(
            ({ id }) => useId("jkl-message", id),
            { initialProps: { id: "fast-id" } },
        );

        rerender({ id: "fast-id" });

        expect(result.current).toBe("fast-id");
    });

    it("gir unike id-er når hooken brukes flere ganger i samme render-tre", () => {
        const { result } = renderHook(() => ({
            a: useId("jkl-radio-button"),
            b: useId("jkl-radio-button"),
        }));
        expect(result.current.a).not.toBe(result.current.b);
    });
});
