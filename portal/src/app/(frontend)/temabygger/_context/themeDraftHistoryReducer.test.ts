import { describe, expect, it } from "vitest";
import {
    initializeThemeDraftHistory,
    themeDraftHistoryReducer,
} from "./themeDraftHistoryReducer";
import { INITIAL_STATE } from "./themeDraftReducer";

const initialHistory = () => initializeThemeDraftHistory(INITIAL_STATE);

describe("themeDraftHistoryReducer", () => {
    it("tømmer angre og gjør om uten å endre utkastet", () => {
        const draft = { ...INITIAL_STATE, themeName: "Vinter" };
        const history = {
            past: [{ draft: INITIAL_STATE, step: "identitet" }],
            present: draft,
            future: [
                { draft: { ...draft, themeName: "Sommer" }, step: "identitet" },
            ],
            activeEdit: null,
        };

        expect(
            themeDraftHistoryReducer(history, { type: "RESET_HISTORY" }),
        ).toEqual(initializeThemeDraftHistory(draft));
    });

    it("skiller mellom fargeendringer i lys og mørk modus", () => {
        const initial = initialHistory();
        const dark = themeDraftHistoryReducer(initial, {
            type: "UPDATE_COLOR_TOKEN",
            group: "background",
            role: "contrast",
            colorScheme: "dark",
            value: "#445566",
        });

        expect(
            themeDraftHistoryReducer(dark, { type: "UNDO", step: "farger" }),
        ).toBe(dark);
        const undone = themeDraftHistoryReducer(dark, {
            type: "UNDO",
            step: "farger/morkt",
        });
        expect(undone.present).toEqual(initial.present);
        expect(
            themeDraftHistoryReducer(undone, { type: "REDO", step: "farger" }),
        ).toBe(undone);
        expect(
            themeDraftHistoryReducer(undone, {
                type: "REDO",
                step: "farger/morkt",
            }).present,
        ).toEqual(dark.present);
    });

    it("fjerner muligheten til å gjøre om ved en ny endring etter angre", () => {
        const changed = themeDraftHistoryReducer(initialHistory(), {
            type: "SET_THEME_NAME",
            themeName: "Vinter",
        });
        const undone = themeDraftHistoryReducer(changed, {
            type: "UNDO",
            step: "identitet",
        });
        const edited = themeDraftHistoryReducer(undone, {
            type: "EDIT_FIELD",
            field: "themeName",
            action: { type: "SET_THEME_NAME", themeName: "Sommer" },
        });

        expect(
            themeDraftHistoryReducer(edited, {
                type: "REDO",
                step: "identitet",
            }),
        ).toBe(edited);
    });
});
