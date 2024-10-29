import React from "react";

export type PossibleRef<T> = React.LegacyRef<T> | undefined;

export function mergeRefs<T>(
    ...possibleRefs: PossibleRef<T>[]
): React.RefCallback<T> {
    return (instance) =>
        possibleRefs.forEach((ref) => {
            if (typeof ref === "function") {
                ref(instance);
            } else if (ref !== null && ref !== undefined) {
                (ref as React.MutableRefObject<T | null>).current = instance;
            }
        });
}
