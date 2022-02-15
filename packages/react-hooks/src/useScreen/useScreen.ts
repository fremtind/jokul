import { useCallback, useEffect, useMemo, useReducer } from "react";
import { breakpoints } from "@fremtind/jkl-core";
import { addMediaQueryListener, getInitialMediaQueryMatch } from "../mediaQueryUtils";
import { ScreenAction, ActionType, reducer, ScreenState } from "./state";

const MEDIA_RULES: Record<keyof ScreenState, string> = {
    isSmallDevice: `(max-width: ${breakpoints.medium - 1}px)`,
    isMediumDevice: `(min-width: ${breakpoints.medium}px) and (max-width: ${breakpoints.large - 1}px)`,
    isLargeDevice: `(min-width: ${breakpoints.large}px) and (max-width: ${breakpoints.xl - 1}px)`,
    isXlDevice: `(min-width: ${breakpoints.xl}px)`,
    isPortrait: "(orientation: portrait)",
    isLandscape: "(orientation: landscape)",
};

const createAction = (property: keyof ScreenState): ScreenAction => ({
    type: property === "isLandscape" || property === "isPortrait" ? ActionType.orientation : ActionType.deviceSize,
    property,
});

export const useScreen = (): ScreenState => {
    const initialState: ScreenState = useMemo(
        () =>
            Object.fromEntries(
                Object.entries(MEDIA_RULES).map(([key, rule]) => [key, getInitialMediaQueryMatch(rule)]),
            ) as unknown as ScreenState,
        [],
    );
    const [device, deviceDispatch] = useReducer(reducer, initialState);
    const createListener = useCallback(
        (key: keyof ScreenState) => (e: MediaQueryListEvent) => e.matches && deviceDispatch(createAction(key)),
        [],
    );

    useEffect(() => {
        const eventListenerPairs: Array<[MediaQueryList, (e: MediaQueryListEvent) => void]> = [];
        if (typeof window !== "undefined" && window.matchMedia) {
            Object.entries(MEDIA_RULES).forEach(([key, rule]) => {
                const queryList = window.matchMedia(rule);
                const listener = createListener(key as keyof ScreenState);
                eventListenerPairs.push([queryList, listener]);
                addMediaQueryListener(queryList, listener);
            });
        }

        return () => {
            eventListenerPairs.forEach(([queryList, listener]) => queryList.removeEventListener("change", listener));
        };
    }, [createListener]);

    return { ...device };
};
