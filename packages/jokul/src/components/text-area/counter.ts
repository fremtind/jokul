import type { CounterStrategy } from "./types.js";

const textEncoder = new TextEncoder();

export function getCounterValue(
    value: string | number | readonly string[] | undefined,
    strategy: CounterStrategy = "characters",
): number {
    if (typeof value === "undefined") {
        return 0;
    }

    const normalizedValue =
        typeof value === "string"
            ? value
            : Array.isArray(value)
              ? value.join("")
              : String(value);

    if (strategy === "bytes") {
        return textEncoder.encode(normalizedValue).length;
    }

    return normalizedValue.length;
}
