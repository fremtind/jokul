// TODO: Eksporter denne fra Jøkul og bruk derfra

export function throttle<R, A extends any[]>(fn: (...args: A) => R, delay: number) {
    let wait = false;

    return (...args: A) => {
        if (wait) return undefined;

        const result = fn(...args);

        if (delay !== 0) {
            wait = true;
            window.setTimeout(() => {
                wait = false;
            }, delay);
        }

        return result;
    };
}

export const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

export const clamp = (numberToClamp: number, min = 0, max = 1) => Math.min(max, Math.max(min, numberToClamp));

export const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x));
