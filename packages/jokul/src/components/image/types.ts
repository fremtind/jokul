export interface ImageProps {
    src: string;
    srcSet?: string;
    placeholder?: string;
    /**
     * Send inn en tom streng hvis bildet kun er dekorativt. Sannsynligvis bør du beskrive innholdet i
     * bildet så en person med nedsatt syn får en fullgod opplevelse av siden.
     * Les mer på https://jokul.fremtind.no/universell-utforming/guide#uu/dekorativt-innhold
     */
    alt: string;
    className?: string;
}
