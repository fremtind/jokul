export type IconVariant = "inherit" | "small" | "medium";

export interface IconProps {
    as?: "div" | "span";
    "data-testid"?: string;
    /**
     * Størrelsesvarianten til ikonet. `"small"` er 16px med 20px bounding box, og `"medium"` er 20px med 24px bounding box.
     * `"inherit"` setter størrelsen til ikonet (ikke bounding box) lik skriftstørrelsen (1em).
     */
    variant?: IconVariant;
    /**
     * Angir om ikonet skal vises i fet versjon
     * @default false
     */
    bold?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
