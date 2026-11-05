import { describe, expect, it } from "vitest";
import {
    type ThemeDraftHistory,
    type ThemeDraftHistoryAction,
    initializeHistory,
    themeDraftHistoryReducer,
} from "./themeDraftHistory";
import { INITIAL_STATE } from "./themeDraftReducer";

function run(actions: ThemeDraftHistoryAction[]): ThemeDraftHistory {
    return actions.reduce(
        themeDraftHistoryReducer,
        initializeHistory(INITIAL_STATE),
    );
}

describe("themeDraftHistoryReducer", () => {
    it("angrer siste endring", () => {
        const history = run([
            { type: "SET_INCLUDE_DARK_MODE", includeDarkMode: true },
            { type: "UNDO" },
        ]);

        expect(history.present.includeDarkMode).toBe(false);
        expect(history.future).toHaveLength(1);
    });

    it("gjør om en angret endring", () => {
        const history = run([
            { type: "SET_INCLUDE_DARK_MODE", includeDarkMode: true },
            { type: "UNDO" },
            { type: "REDO" },
        ]);

        expect(history.present.includeDarkMode).toBe(true);
        expect(history.future).toHaveLength(0);
    });

    it("gjør ingenting når det ikke er noe å angre eller gjøre om", () => {
        const history = initializeHistory(INITIAL_STATE);

        expect(themeDraftHistoryReducer(history, { type: "UNDO" })).toBe(
            history,
        );
        expect(themeDraftHistoryReducer(history, { type: "REDO" })).toBe(
            history,
        );
    });

    it("samler tastetrykk i samme felt til ett angresteg", () => {
        const history = run([
            { type: "SET_THEME_NAME", themeName: "T" },
            { type: "SET_THEME_NAME", themeName: "Te" },
            { type: "SET_THEME_NAME", themeName: "Tema" },
        ]);

        expect(history.past).toHaveLength(1);
        expect(
            themeDraftHistoryReducer(history, { type: "UNDO" }).present
                .themeName,
        ).toBe("");
    });

    it("starter et nytt steg når brukeren bytter felt", () => {
        const history = run([
            { type: "SET_THEME_NAME", themeName: "Tema" },
            { type: "SET_INCLUDE_DARK_MODE", includeDarkMode: true },
            { type: "SET_THEME_NAME", themeName: "Tema 2" },
        ]);

        expect(history.past).toHaveLength(3);
    });

    it("skiller fargetokens fra hverandre", () => {
        const history = run([
            {
                type: "UPDATE_COLOR_TOKEN",
                group: "background",
                role: "contrast",
                colorScheme: "light",
                value: "#111111",
            },
            {
                type: "UPDATE_COLOR_TOKEN",
                group: "background",
                role: "contrast",
                colorScheme: "dark",
                value: "#222222",
            },
        ]);

        expect(history.past).toHaveLength(2);
    });

    // Et nytt tastetrykk skal ikke smelte sammen med utkastet vi nettopp
    // hentet fram, ellers mistes det i stedet for å legge seg på toppen.
    it("smelter ikke en ny endring inn i et angret steg", () => {
        const history = run([
            { type: "SET_THEME_NAME", themeName: "Tema" },
            { type: "UNDO" },
            { type: "SET_THEME_NAME", themeName: "Annet" },
            { type: "UNDO" },
        ]);

        expect(history.present.themeName).toBe("");
    });

    it("lar en nullstilling angres", () => {
        const history = run([
            { type: "SET_THEME_NAME", themeName: "Tema" },
            { type: "RESET_DRAFT" },
            { type: "UNDO" },
        ]);

        expect(history.present.themeName).toBe("Tema");
    });

    it("lar ikke et gjenopprettet utkast angres", () => {
        const history = run([
            {
                type: "SET_DRAFT",
                draft: { ...INITIAL_STATE, themeName: "Lagret" },
            },
            { type: "UNDO" },
        ]);

        expect(history.present.themeName).toBe("Lagret");
        expect(history.past).toHaveLength(0);
    });

    it("lager ikke et angresteg av en action som ikke endrer noe", () => {
        const history = run([{ type: "REMOVE_CUSTOM_FONT", slot: "regular" }]);

        expect(history.past).toHaveLength(0);
    });
});
