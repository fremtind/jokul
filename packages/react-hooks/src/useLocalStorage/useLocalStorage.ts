import { useCallback, useState } from "react";

export const useLocalStorage = <T>(
    key: string,
    defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState<T>(() => {
        if (typeof window === "undefined" || !localStorage) {
            return defaultValue;
        }
        const storedValue = JSON.parse(localStorage.getItem(key) || "null");
        return storedValue || defaultValue;
    });

    const updateState = useCallback(
        (setStateAction: React.SetStateAction<T>) => {
            setState((previousValue) => {
                const newValue =
                    typeof setStateAction === "function"
                        ? (setStateAction as (prevState: T) => T)(previousValue)
                        : setStateAction;

                if (typeof window !== "undefined" && localStorage) {
                    localStorage.setItem(key, JSON.stringify(newValue));
                }

                return newValue;
            });
        },
        [key],
    );

    return [state, updateState];
};
