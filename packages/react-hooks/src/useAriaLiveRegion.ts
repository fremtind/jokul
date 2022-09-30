import { useEffect, useState } from "react";
import { usePreviousValue } from ".";

export interface UseAriaLiveRegionOptions {
    /**
     * @default "polite"
     */
    politeness?: "polite" | "assertive" | "off";
}

/**
 * Hjelper for å bare sette aria-live dersom det har skjedd en endring. Unngår at innholdet annonseres ved sidelasting.
 * @param watch Verdi som indikerer at det har skjedd en endring. For eksempel en boolean som styrer en loader, eller selve teksten som skal bli lest opp.
 * @param options Bestem om aria-live skal være polite, assertive eller off.
 * @returns
 */
export function useAriaLiveRegion(watch: unknown, options?: UseAriaLiveRegionOptions) {
    //
    const previousValue = usePreviousValue(watch);

    const [hasChanged, setHasChanged] = useState(false);
    useEffect(() => {
        if (watch !== previousValue && !hasChanged) {
            setHasChanged(true);
        }
    }, [watch, previousValue, hasChanged]);

    return {
        "aria-live": hasChanged ? options?.politeness || "polite" : undefined,
    };
}
