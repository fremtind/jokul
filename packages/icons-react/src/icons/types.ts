export type IconVariant = "inherit" | "small" | "medium" | "large";

export interface ArrowIconProps extends IconProps {
    bold?: boolean;
}

export interface IconProps {
    className?: string;
    variant?: IconVariant;
    /**
     * @deprecated Ikoner skal ikke ha alt-tekst eller tittel. Denne propen vil bli ignorert.
     */
    title?: string;
    /**
     * @deprecated Ikoner skal ikke ha alt-tekst eller tittel. Denne propen vil bli ignorert.
     */
    description?: string;
}
