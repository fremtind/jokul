"use client";

import { usePathname } from "next/navigation";

/**
 * Steget brukeren står i, lest fra `/temabygger/<steg>`. Utenfor løypa — og i
 * tester uten ruter — finnes det ikke noe steg.
 */
export function useActiveStep(): string | undefined {
    return usePathname()?.split("/")[2];
}
