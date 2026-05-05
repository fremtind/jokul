const MANUAL_MIGRATION_WARNINGS = [
    {
        pattern: /--jkl-color-text-on-alert-/,
        message:
            "Tokens --jkl-color-text-on-alert-* er fjernet. Bruk --jkl-color-<rolle>-text-default i stedet, f.eks. --jkl-color-info-text-default.",
    },
    {
        pattern: /--jkl-color-(?:background|text)-interactive\b/,
        message:
            "Tokens --jkl-color-background-interactive og --jkl-color-text-interactive er fjernet og skal ikke brukes lenger.",
    },
    {
        pattern: /\bvariant=["'](?:outlined|high|low)["']/,
        message:
            'Card variant-prop er fjernet i Jøkul 5. Bruk `outlined`-prop (boolean) for ramme: `<Card outlined>`. Fjern `variant="high"` og `variant="low"` — de er erstattet av standard flat flate.',
    },
    {
        pattern:
            /(?<![A-Za-z0-9-])(?:bg|text|border|ring|shadow|fill|stroke|accent|caret|outline|placeholder|divide|from|via|to|decoration)-(?:background-interactive|text-interactive)(?![A-Za-z0-9-])/,
        message:
            "Fjernede Tailwind-klasser basert på background-interactive og text-interactive (f.eks. bg-background-interactive, text-text-interactive). Disse er fjernet fra Jøkul 5-temaet og skal ikke brukes lenger.",
    },
    {
        pattern:
            /(?<![A-Za-z0-9-])(?:border|ring|outline|divide|decoration)-border-(?:action|input(?:-focus)?|separator(?:-strong|-hover)?)(?![A-Za-z0-9-])/,
        message:
            "Fjernede Tailwind-kantklasser (border-border-action, border-border-input, border-border-separator m.fl.). Bruk border-border-default, border-border-subdued eller border-border-strong i stedet.",
    },
];

export function collectManualMigrationWarnings(text) {
    const warnings = [];

    for (const { pattern, message } of MANUAL_MIGRATION_WARNINGS) {
        if (pattern.test(text)) {
            warnings.push(`Manuell vurdering: ${message}`);
        }
    }

    return warnings;
}
