import type { ReactNode } from "react";

export const COMPONENT_GRID_SIZES = ["small", "medium", "large"] as const;
export type ComponentGridSize = (typeof COMPONENT_GRID_SIZES)[number];

export type UserPreferencesProviderProps = {
    children: ReactNode;
    initialPreferences?: UserPreferences;
};

export type UserPreferences = {
    showComponentImage: boolean;
    showComponentDescription: boolean;
    componentGridSize: ComponentGridSize;
};

export type UserPreferencesContextType = {
    preferences: UserPreferences;
    setPreference: <K extends keyof UserPreferences>(
        key: K,
        value: UserPreferences[K],
    ) => void;
};
