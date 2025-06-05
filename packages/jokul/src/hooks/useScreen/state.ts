export interface ScreenState {
    isSmallDevice: boolean;
    isMediumDevice: boolean;
    isLargeDevice: boolean;
    isXlDevice: boolean;
    isLandscape: boolean;
    isPortrait: boolean;
}

export const ActionType = {
    orientation: "ORIENTATION_CHANGED",
    deviceSize: "DEVICE_SIZE_CHANGED",
} as const;

export interface ScreenAction {
    type: (typeof ActionType)[keyof typeof ActionType];
    property: keyof ScreenState;
}

function setDeviceSize(
    deviceSize: keyof ScreenState,
): Omit<ScreenState, "isLandscape" | "isPortrait"> {
    return {
        isSmallDevice: deviceSize === "isSmallDevice",
        isMediumDevice: deviceSize === "isMediumDevice",
        isLargeDevice: deviceSize === "isLargeDevice",
        isXlDevice: deviceSize === "isXlDevice",
    };
}

function setOrientation(
    orientation: keyof ScreenState,
): Pick<ScreenState, "isLandscape" | "isPortrait"> {
    return {
        isLandscape: orientation === "isLandscape",
        isPortrait: orientation === "isPortrait",
    };
}

export const reducer = (
    state: ScreenState,
    action: ScreenAction,
): ScreenState => {
    switch (action.type) {
        case ActionType.orientation:
            return {
                ...state,
                ...setOrientation(action.property),
            };
        case ActionType.deviceSize:
            return {
                ...state,
                ...setDeviceSize(action.property),
            };
        default:
            return state;
    }
};
