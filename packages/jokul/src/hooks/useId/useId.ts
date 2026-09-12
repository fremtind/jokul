import { useId as useReactId } from "react";

/**
 * Returnerer en stabil, unik ID til bruk i HTML-attributter (`id`, `aria-*`
 * osv.). Bygger på Reacts `useId`, så den er trygg ved server-side rendering.
 *
 * Regelen er enkel:
 * 1. Har konsumenten allerede en `id`? Bruk den uendret.
 * 2. Ellers: lag en unik ID – med et lesbart prefiks hvis du oppgir ett.
 *
 * @example
 * useId()                       // "«r0»"                    – bare unik
 * useId("jkl-text-input")       // "jkl-text-input-«r0»"     – prefiks + unik
 * useId("jkl-text-input", id)   // id ?? "jkl-text-input-«r0»" – konsumentens id vinner
 */
export const useId = (prefix?: string, id?: string | null): string => {
    const uniqueId = useReactId();

    // 1. Konsumentens egen id har alltid forrang.
    if (id != null) {
        return id;
    }

    // 2. Ellers genererer vi en – med prefiks hvis oppgitt.
    return prefix ? `${prefix}-${uniqueId}` : uniqueId;
};
