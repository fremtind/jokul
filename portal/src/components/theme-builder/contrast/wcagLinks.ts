export function wcagUrl(scope: "tekst" | "grafisk", rating: string): string {
    if (scope === "tekst" && rating === "AAA") {
        return "https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html";
    }
    if (scope === "tekst") {
        return "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html";
    }
    return "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html";
}

export function wcagLabel(scope: "tekst" | "grafisk", rating: string): string {
    if (scope === "tekst" && rating === "AAA") return "WCAG 2.1 SC 1.4.6";
    if (scope === "tekst") return "WCAG 2.1 SC 1.4.3";
    return "WCAG 2.1 SC 1.4.11";
}
