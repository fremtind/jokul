import { breakpoints } from "@fremtind/jkl-core";
import { useCallback, useEffect, useReducer, useState } from "react";
import { addMediaQueryListener, getInitialMediaQueryMatch, removeMediaQueryListener } from "../mediaQueryUtils";
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

/**
 * Finn størrelsen og orienteringen til skjermen.
 * @returns Et objekt med boolean som indikerer om skjermstørrelsen er liten, medium, stor eller ekstra stor, og om skjermen er i portrett- eller landskapsmodus.
 */
export const useScreen = (): ScreenState => {
    const [hasMounted, setHasMounted] = useState(false);

    const [device, deviceDispatch] = useReducer(reducer, {
        isSmallDevice: false,
        isMediumDevice: false,
        isLargeDevice: false,
        isXlDevice: false,
        isLandscape: false,
        isPortrait: false,
    });

    useEffect(() => {
        setHasMounted(true);
        Object.entries(MEDIA_RULES)
            .map(([key, rule]) => [key, getInitialMediaQueryMatch(rule)])
            .forEach(([key, value]) => {
                if (value) {
                    deviceDispatch(createAction(key as keyof ScreenState));
                }
            });
    }, []);

    const createListener = useCallback(
        (key: keyof ScreenState) => (e: MediaQueryListEvent) => {
            requestAnimationFrame(() => {
                if (e.matches) {
                    deviceDispatch(createAction(key));
                }
            });
        },
        [],
    );

    useEffect(() => {
        if (!hasMounted || !window.matchMedia) {
            return;
        }
        const eventListenerPairs: Array<[MediaQueryList, (e: MediaQueryListEvent) => void]> = [];

        Object.entries(MEDIA_RULES).forEach(([key, rule]) => {
            const queryList = window.matchMedia(rule);
            const listener = createListener(key as keyof ScreenState);
            eventListenerPairs.push([queryList, listener]);
            addMediaQueryListener(queryList, listener);
        });

        return () => {
            eventListenerPairs.forEach(([queryList, listener]) => removeMediaQueryListener(queryList, listener));
        };
    }, [createListener, hasMounted]);

    return { ...device };
};
