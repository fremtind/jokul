import { type Reducer, useEffect, useReducer, useState } from "react";
import type { ColorScheme } from "../../core/types.js";
import {
    addMediaQueryListener,
    getInitialMediaQueryMatch,
    removeMediaQueryListener,
} from "../mediaQueryUtils.js";

type BrowserPreferences = {
    prefersReducedMotion: boolean;
    prefersColorScheme: ColorScheme;
    forcedColors: boolean;
};

const ActionType = {
    PrefersColorScheme: "COLOR_SCHEME_CHANGED",
    PrefersReducedMotion: "REDUCED_MOTION_CHANGED",
    ForcedColors: "FORCED_COLORS_CHANGED",
} as const;

type Action =
    | {
          type: typeof ActionType.PrefersColorScheme;
          value: ColorScheme;
      }
    | {
          type: typeof ActionType.PrefersReducedMotion;
          value: boolean;
      }
    | {
          type: typeof ActionType.ForcedColors;
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

/**
 * Hook som gir informasjon om brukerens foretrukne konfigurasjon.
 * @returns Objekt med informasjon om brukerens foretrukne tema (lyst vs mørkt), redusert bevegelse, og høykontrast (forced colors).
 */
export const useBrowserPreferences = (): BrowserPreferences => {
    const [hasMounted, setHasMounted] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        setHasMounted(true);
        const prefersReducedMotion = getInitialMediaQueryMatch(
            PREFERS_REDUCED_MOTION,
        );
        const prefersColorScheme = getInitialMediaQueryMatch(
            PREFERS_LIGHT_COLOR_SCHEME,
        )
            ? "light"
            : "dark";
        const forcedColors = getInitialMediaQueryMatch(FORCED_COLORS);
        dispatch({
            type: ActionType.PrefersReducedMotion,
            value: prefersReducedMotion,
        });
        dispatch({
            type: ActionType.PrefersColorScheme,
            value: prefersColorScheme,
        });
        dispatch({ type: ActionType.ForcedColors, value: forcedColors });
    }, []);

    useEffect(() => {
        if (!hasMounted || !window.matchMedia) {
            return;
        }
        const onPrefersReducedMotionChange = (e: MediaQueryListEvent) => {
            dispatch({
                type: ActionType.PrefersReducedMotion,
                value: e.matches,
            });
        };
        const onPrefersColorSchemeChange = (e: MediaQueryListEvent) => {
            dispatch({
                type: ActionType.PrefersColorScheme,
                value: e.matches ? "light" : "dark",
            });
        };
        const onForcedColorsChange = (e: MediaQueryListEvent) => {
            dispatch({ type: ActionType.ForcedColors, value: e.matches });
        };

        addMediaQueryListener(
            window.matchMedia(PREFERS_REDUCED_MOTION),
            onPrefersReducedMotionChange,
        );
        addMediaQueryListener(
            window.matchMedia(PREFERS_LIGHT_COLOR_SCHEME),
            onPrefersColorSchemeChange,
        );
        addMediaQueryListener(
            window.matchMedia(FORCED_COLORS),
            onForcedColorsChange,
        );

        return () => {
            removeMediaQueryListener(
                window.matchMedia(PREFERS_REDUCED_MOTION),
                onPrefersReducedMotionChange,
            );
            removeMediaQueryListener(
                window.matchMedia(PREFERS_LIGHT_COLOR_SCHEME),
                onPrefersColorSchemeChange,
            );
            removeMediaQueryListener(
                window.matchMedia(FORCED_COLORS),
                onForcedColorsChange,
            );
        };
    }, [hasMounted]);

    return { ...state };
};
