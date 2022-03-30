import { Reducer, useEffect, useReducer } from "react";
import { addMediaQueryListener, getInitialMediaQueryMatch, removeMediaQueryListener } from "../mediaQueryUtils";

export type ColorScheme = "light" | "dark";

type BrowserPreferences = {
    prefersReducedMotion: boolean;
    prefersColorScheme: ColorScheme;
    forcedColors: boolean;
};

enum ActionType {
    PrefersColorScheme = "COLOR_SCHEME_CHANGED",
    PrefersReducedMotion = "REDUCED_MOTION_CHANGED",
    ForcedColors = "FORCED_COLORS_CHANGED",
}

type Action =
    | {
          type: ActionType.PrefersColorScheme;
          value: ColorScheme;
      }
    | {
          type: ActionType.PrefersReducedMotion;
          value: boolean;
      }
    | {
          type: ActionType.ForcedColors;
          value: boolean;
      };

const PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const PREFERS_LIGHT_COLOR_SCHEME = "(prefers-color-scheme: light)";
const FORCED_COLORS = "(forced-colors: active)";

const initialState: BrowserPreferences = {
    prefersReducedMotion: false,
    prefersColorScheme: "light",
    forcedColors: false,
};

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
        case ActionType.ForcedColors:
            return {
                ...state,
                forcedColors: action.value,
            };
        default:
            return state;
    }
};

const initializer: (initialState: BrowserPreferences) => BrowserPreferences = () => {
    const prefersReducedMotion = getInitialMediaQueryMatch(PREFERS_REDUCED_MOTION);
    const prefersColorScheme = getInitialMediaQueryMatch(PREFERS_LIGHT_COLOR_SCHEME) ? "light" : "dark";
    const forcedColors = getInitialMediaQueryMatch(FORCED_COLORS);

    return {
        prefersColorScheme,
        prefersReducedMotion,
        forcedColors,
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
        const onForcedColorsChange = (e: MediaQueryListEvent) => {
            dispatch({ type: ActionType.ForcedColors, value: e.matches });
        };

        if (typeof window !== "undefined" && window.matchMedia) {
            addMediaQueryListener(window.matchMedia(PREFERS_REDUCED_MOTION), onPrefersReducedMotionChange);
            addMediaQueryListener(window.matchMedia(PREFERS_LIGHT_COLOR_SCHEME), onPrefersColorSchemeChange);
            addMediaQueryListener(window.matchMedia(FORCED_COLORS), onForcedColorsChange);
        }

        return () => {
            if (typeof window !== "undefined" && window.matchMedia) {
                removeMediaQueryListener(window.matchMedia(PREFERS_REDUCED_MOTION), onPrefersReducedMotionChange);
                removeMediaQueryListener(window.matchMedia(PREFERS_LIGHT_COLOR_SCHEME), onPrefersColorSchemeChange);
                removeMediaQueryListener(window.matchMedia(FORCED_COLORS), onForcedColorsChange);
            }
        };
    }, []);

    return { ...state };
};
