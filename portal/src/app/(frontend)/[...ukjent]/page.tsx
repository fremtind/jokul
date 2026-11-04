import { notFound } from "next/navigation";

/**
 * Next.js kan ikke rendre en `not-found` på rot når rot-layoutene ligger inne i
 * rutegrupper. Denne catch-all-ruten fanger derfor ukjente adresser inne i
 * `(frontend)`, slik at de får portalens egen 404-side med vanlig navigasjon.
 * Konkrete ruter vinner alltid over catch-all, så den skygger ikke for noe.
 */
export default function UkjentSide() {
    notFound();
}
