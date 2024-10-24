import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
    key: string,
    defaultValue: T
): [T, (newValue: T) => void] {
    const [state, setState] = useState<T>(defaultValue);

    useEffect(() => {
        if (!localStorage) {
            return;
        }
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            setState(JSON.parse(storedValue));
        }
        // Kjøres bare én gang ved oppstart
    }, [key]);

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
