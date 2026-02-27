import { useEffect, useRef } from "react";

/**
 * Lar deg huske en verdi fra forrige render.
 * @param value Verdien som skal huskes.
 * @returns Forrige render av verdien, eller undefined første render.
 */
export const usePreviousValue = <T>(value: T): T | undefined => {
    const ref = useRef<T>(undefined);

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};
