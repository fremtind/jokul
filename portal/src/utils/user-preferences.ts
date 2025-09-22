import {
    type CookieValueTypes,
    useReactiveGetCookie,
    useReactiveSetCookie,
} from "cookies-next";

export const COMPONENT_KEYWORDS = [
    "Knapper",
    "Skjema",
    "Navigasjon",
    "Layout",
    "Feedback",
] as const;

export const COMPONENT_GRID_SIZES = ["small", "medium", "large"] as const;
export type ComponentGridSize = (typeof COMPONENT_GRID_SIZES)[number];

export type UserPreferences = {
    showComponentImage: boolean;
    showComponentDescription: boolean;
    componentGridSize: ComponentGridSize;
};

export const defaultPreferences: UserPreferences = {
    showComponentImage: true,
    showComponentDescription: false,
    componentGridSize: "medium",
};

export function parseUserPreferences(
    cookieValue: CookieValueTypes,
): UserPreferences {
    if (!cookieValue) {
        return defaultPreferences;
    }

    try {
        return JSON.parse(decodeURIComponent(cookieValue)) as UserPreferences;
    } catch (error) {
        console.error("Error parsing user preferences from cookie:", error);
        return defaultPreferences;
    }
}

export function useUserPreferences() {
    const getCookie = useReactiveGetCookie();
    const setCookie = useReactiveSetCookie();

    const preferences = parseUserPreferences(getCookie("userPreferences"));

    const updatePreference = <T extends keyof UserPreferences>(
        key: T,
        value: UserPreferences[T],
    ) => {
        const updatedPreferences = { ...preferences, [key]: value };
        setCookie("userPreferences", JSON.stringify(updatedPreferences));
    };

    return { preferences, updatePreference };
}
