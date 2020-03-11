import { breakpoints } from "@fremtind/jkl-core";

interface State {
    isSmallDevice: boolean;
    isMediumDevice: boolean;
    isLargeDevice: boolean;
    isXlDevice: boolean;
    isLandscape: boolean;
    isPortrait: boolean;
    inner: {
        height: number;
        width: number;
    };
}

enum ActionTypes {
    resized = "WINDOW_RESIZED",
}

interface Action {
    type: ActionTypes;
    width: number;
    height: number;
}

export const actionTypes = {
    resized: ActionTypes.resized,
};

const setDeviceSize = (width: number, height: number) => ({
    isSmallDevice: width < breakpoints.small,
    isMediumDevice: width > breakpoints.small && width < breakpoints.medium,
    isLargeDevice: width > breakpoints.medium && width < breakpoints.large,
    isXlDevice: width > breakpoints.large,
    isPortrait: height >= width,
    isLandscape: height < width,
    inner: {
        height,
        width,
    },
});

export const initialState = {
    isSmallDevice: false,
    isMediumDevice: false,
    isLargeDevice: false,
    isXlDevice: false,
    isLandscape: false,
    isPortrait: false,
    inner: {
        height: 0,
        width: 0,
    },
};

export const init = () => {
    const width = typeof window !== "undefined" ? window.innerWidth : 0;
    const height = typeof window !== "undefined" ? window.innerHeight : 0;
    return setDeviceSize(width, height);
};

export const reducer = (state: State, { type, width, height }: Action) => {
    switch (type) {
        case actionTypes.resized:
            return {
                ...state,
                ...setDeviceSize(width, height),
            };
    }
};
