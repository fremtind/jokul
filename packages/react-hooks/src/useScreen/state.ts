export interface ScreenState {
    isSmallDevice: boolean;
    isMediumDevice: boolean;
    isLargeDevice: boolean;
    isXlDevice: boolean;
    isLandscape: boolean;
    isPortrait: boolean;
}

export enum ActionType {
    orientation = "ORIENTATION_CHANGED",
    deviceSize = "DEVICE_SIZE_CHANGED",
}

interface Action {
    type: ActionType;
    property: keyof ScreenState;
}

function setDeviceSize(orientation: keyof ScreenState): Omit<ScreenState, "isLandscape" | "isPortrait"> {
    return {
        isSmallDevice: orientation === "isSmallDevice",
        isMediumDevice: orientation === "isMediumDevice",
        isLargeDevice: orientation === "isLargeDevice",
        isXlDevice: orientation === "isXlDevice",
    };
}

function setOrientation(orientation: keyof ScreenState): Pick<ScreenState, "isLandscape" | "isPortrait"> {
    return {
        isLandscape: orientation === "isLandscape",
        isPortrait: orientation === "isPortrait",
    };
}

export const reducer = (state: ScreenState, action: Action): ScreenState => {
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
