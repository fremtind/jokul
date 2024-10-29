import { useCallback, useEffect, useReducer, useState } from "react";
import { tokens } from "../../core/index.js";
import {
    addMediaQueryListener,
    getInitialMediaQueryMatch,
    removeMediaQueryListener,
} from "../mediaQueryUtils.js";
import { ScreenAction, ActionType, reducer, ScreenState } from "./state.js";

const { breakpoint } = tokens;

const MEDIA_RULES: Record<keyof ScreenState, string> = {
    isSmallDevice: `(max-width: calc(${breakpoint.medium} - 1px))`,
    isMediumDevice: `(min-width: ${breakpoint.medium}) and (max-width: calc(${breakpoint.large} -1px))`,
    isLargeDevice: `(min-width: ${breakpoint.large}) and (max-width: calc(${breakpoint.xl} -1px))`,
    isXlDevice: `(min-width: ${breakpoint.xl})`,
    isPortrait: "(orientation: portrait)",
    isLandscape: "(orientation: landscape)",
};

const createAction = (property: keyof ScreenState): ScreenAction => ({
    type:
        property === "isLandscape" || property === "isPortrait"
            ? ActionType.orientation
            : ActionType.deviceSize,
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
        const eventListenerPairs: Array<
            [MediaQueryList, (e: MediaQueryListEvent) => void]
        > = [];

        Object.entries(MEDIA_RULES).forEach(([key, rule]) => {
            const queryList = window.matchMedia(rule);
            const listener = createListener(key as keyof ScreenState);
            eventListenerPairs.push([queryList, listener]);
            addMediaQueryListener(queryList, listener);
        });

        return () => {
            eventListenerPairs.forEach(([queryList, listener]) =>
                removeMediaQueryListener(queryList, listener),
            );
        };
    }, [createListener, hasMounted]);

    return { ...device };
};
