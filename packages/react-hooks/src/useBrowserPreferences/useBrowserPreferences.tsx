import { Reducer, useEffect, useReducer } from "react";
import { addMediaQueryListener, getInitialMediaQueryMatch, removeMediaQueryListener } from "../mediaQueryUtils";

export type ColorScheme = "light" | "dark";

type BrowserPreferences = {
    prefersReducedMotion: boolean;
    prefersColorScheme: ColorScheme;
};

enum ActionType {
    PrefersColorScheme = "COLOR_SCHEME_CHANGED",
    PrefersReducedMotion = "REDUCED_MOTION_CHANGED",
}

type Action =
    | {
          type: ActionType.PrefersColorScheme;
          value: ColorScheme;
      }
    | {
          type: ActionType.PrefersReducedMotion;
          value: boolean;
      };

const PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const PREFERS_LIGHT_COLOR_SCHEME = "(prefers-color-scheme: light)";

const initialState: BrowserPreferences = { prefersReducedMotion: false, prefersColorScheme: "light" };

const reducer: Reducer<BrowserPreferences, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.PrefersColorScheme:
            return {
                ...state,
                prefersColorScheme: action.value,
            };
        case ActionType.PrefersReducedMotion:
            return {
                ...state,
                prefersReducedMotion: action.value,
            };
        default:
            return state;
    }
};

const initializer: (initialState: BrowserPreferences) => BrowserPreferences = () => {
    const prefersReducedMotion = getInitialMediaQueryMatch(PREFERS_REDUCED_MOTION);
    const prefersColorScheme = getInitialMediaQueryMatch(PREFERS_LIGHT_COLOR_SCHEME) ? "light" : "dark";

    return {
        prefersColorScheme,
        prefersReducedMotion,
    };
};

export const useBrowserPreferences = (): BrowserPreferences => {
    const [state, dispatch] = useReducer(reducer, initialState, initializer);

    useEffect(() => {
        const onPrefersReducedMotionChange = (e: MediaQueryListEvent) => {
            dispatch({ type: ActionType.PrefersReducedMotion, value: e.matches });
        };
        const onPrefersColorSchemeChange = (e: MediaQueryListEvent) => {
            dispatch({ type: ActionType.PrefersColorScheme, value: e.matches ? "light" : "dark" });
        };

        if (typeof window !== "undefined" && window.matchMedia) {
            addMediaQueryListener(window.matchMedia(PREFERS_REDUCED_MOTION), onPrefersReducedMotionChange);
            addMediaQueryListener(window.matchMedia(PREFERS_LIGHT_COLOR_SCHEME), onPrefersColorSchemeChange);
        }

        return () => {
            if (typeof window !== "undefined" && window.matchMedia) {
                removeMediaQueryListener(window.matchMedia(PREFERS_REDUCED_MOTION), onPrefersReducedMotionChange);
                removeMediaQueryListener(window.matchMedia(PREFERS_LIGHT_COLOR_SCHEME), onPrefersColorSchemeChange);
            }
        };
    }, []);

    return { ...state };
};
