export type IconVariant = "inherit" | "small" | "medium";

export interface IconProps {
    "data-testid"?: string;
    /**
     * @deprecated Størrelsen settes nå automatisk etter fontstørrelse.
     * Størrelsesvarianten til ikonet. `"small"` er 16px med 20px bounding box,
     * og `"medium"` er 20px med 24px bounding box.
     * `"inherit"` setter størrelsen til ikonet (ikke bounding box) lik skriftstørrelsen (1em).
     */
    variant?: IconVariant;
    /**
     * @deprecated Fra Jøkul 5.0 har ikonene alltid samme vekt, og bold har ingen effekt
     * @default false
     */
    bold?: boolean;
    filled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
