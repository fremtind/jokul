/**
 * Minimal type som beskriver det `extractPlainText` trenger fra en Portable Text-array:
 * en `_type`-streng og en valgfri `children`-array med tekstspans.
 *
 * Brukes i stedet for de spesifikke Sanity-dokumenttypene slik at artikkelArrayene
 * fra alle tre dokumenttyper (komponenter, fundamenter og blogginnlegg) kan brukes
 * her uten typekonvertering.
 */
type PortableTextBlock = {
    _type: string;
    children?: Array<{ text?: string }>;
};

/**
 * Trekker ut ren tekst fra ett element i en Portable Text-array.
 * Bare elementer av typen `block` inneholder indekserbar tekst — andre typer
 * (bilder, kodeeksempler, Storybook-embedder osv.) hoppes over.
 *
 * Følger Sanitys anbefalte mønster for serialisering til ren tekst:
 * https://www.sanity.io/docs/developer-guides/presenting-block-text#ac67a867dd69
 */
function extractTextFromBlock(item: PortableTextBlock): string {
    if (item._type !== "block" || !item.children) {
        return "";
    }

    return item.children.map((child) => child.text ?? "").join("");
}

/**
 * Trekker ut all ren tekst fra en Portable Text-array.
 * Avsnitt slås sammen med dobbelt linjeskift (i tråd med Sanitys anbefaling),
 * og resultatet trimmes for ren indeksering.
 */
export function extractPlainText(
    article: PortableTextBlock[] | undefined,
): string {
    if (!article || article.length === 0) {
        return "";
    }

    return article
        .map(extractTextFromBlock)
        .filter(Boolean)
        .join("\n\n")
        .trim();
}
