import { useCallback, useState } from "react";

export const useLocalStorage = <T>(
    key: string,
    defaultValue: T,
): [T, (newValue: T) => void] => {
    const [state, setState] = useState(() => {
        if (typeof window === "undefined" || !localStorage) {
            return defaultValue;
        }
        const storedValue = JSON.parse(localStorage.getItem(key) || "null");
        return storedValue || defaultValue;
    });

    const updateState = useCallback(
        (newValue: T) => {
            setState(newValue);
            if (typeof window !== "undefined" && localStorage) {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
        },
        [key],
    );

    return [state, updateState];
};
