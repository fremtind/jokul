"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { setCookie } from "cookies-next";
import { defaultPreferences } from "./defaultPreferences";
import type {
    UserPreferences,
    UserPreferencesContextType,
    UserPreferencesProviderProps,
} from "./types";

const USER_PREFERENCES_COOKIE = "userPreferences";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const UserPreferencesContext = createContext<UserPreferencesContextType | null>(
    null,
);

export const UserPreferencesProvider = ({
    children,
    initialPreferences,
}: UserPreferencesProviderProps) => {
    const [preferences, setPreferences] = useState<UserPreferences>(
        initialPreferences || defaultPreferences,
    );

    const setPreference = useCallback(
        <K extends keyof UserPreferences>(
            key: K,
            value: UserPreferences[K],
        ) => {
            const updatedPreferences = { ...preferences, [key]: value };
            setPreferences(updatedPreferences);
            setCookie(
                USER_PREFERENCES_COOKIE,
                JSON.stringify(updatedPreferences),
                {
                    maxAge: COOKIE_MAX_AGE,
                },
            );
        },
        [preferences],
    );

    return (
        <UserPreferencesContext.Provider value={{ preferences, setPreference }}>
            {children}
        </UserPreferencesContext.Provider>
    );
};

export const useUserPreferences = () => {
    const context = useContext(UserPreferencesContext);
    if (!context) {
        throw new Error(
            "useUserPreferences must be used within a UserPreferencesProvider",
        );
    }
    return context;
};
