"use client";

import { useSelectedLayoutSegments } from "next/navigation";

/**
 * Steget brukeren står i, lest fra temabyggerens layoutsegmenter. Rutegrupper
 * ignoreres, og mørke farger får eget angrescope.
 */
export function useActiveStep(): string | undefined {
    const [step, mode] = useSelectedLayoutSegments().filter(
        (segment) => !segment.startsWith("("),
    );
    return step === "farger" && mode === "morkt" ? "farger/morkt" : step;
}
