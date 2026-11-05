"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";

// Et pangram, som skriftprøver flest: alle bokstavene i alfabetet én gang, så
// hele fonten vises i overskriftene.
const HEADING_SAMPLE =
    "Vi åt wienerbrød og quizet om fjærkre og calypso i taxien hjem.";

const PARAGRAPH_BODY =
    "Barn som lekte i en grønn li, hevdet de så et hult bjørketre tindre av innvendige lyn. Da de ropte på de voksne, var treet helt normalt. Men i det fjerne hørte man en summelyd, og en enkelt gnist føk fra toppgrenen og ned i bakken, som et svakt, pulserende varsel om energier man ikke kan forklare.";

const HEADINGS = [
    { as: "h1", size: "xl", label: "Heading-1" },
    { as: "h2", size: "l", label: "Heading-2" },
    { as: "h3", size: "m", label: "Heading-3" },
    { as: "h4", size: "s", label: "Heading-4" },
    { as: "h5", size: "xs", label: "Heading-5" },
] as const;

const PARAGRAPHS = [
    { size: "l", label: "Paragraph Large" },
    { size: "m", label: "Paragraph Medium" },
    { size: "s", label: "Paragraph Small" },
] as const;

/**
 * Fontvalget gjøres i dette steget, så forhåndsvisningen er en skriftprøve:
 * hver tekststil én gang, i den rekkefølgen de står i skalaen. Overskriftene
 * bruker `h1`–`h5`, slik at display-fonten vises der den faktisk slår inn.
 * Navnet på stilen står i en fast, liten tekst — det er prøveteksten under som
 * skal vise fonten, og et navn i stilen ville konkurrert med den.
 */
export function TypographyView() {
    return (
        <Flex direction="column" gap="32">
            {HEADINGS.map((heading) => (
                <Flex key={heading.label} direction="column" gap="8">
                    <StyleLabel>{heading.label}</StyleLabel>
                    <Title as={heading.as} size={heading.size}>
                        {HEADING_SAMPLE}
                    </Title>
                </Flex>
            ))}

            {PARAGRAPHS.map((paragraph) => (
                <Flex key={paragraph.label} direction="column" gap="8">
                    <StyleLabel>{paragraph.label}</StyleLabel>
                    <Text size={paragraph.size}>{PARAGRAPH_BODY}</Text>
                </Flex>
            ))}
        </Flex>
    );
}

function StyleLabel({ children }: { children: string }) {
    return (
        <Text as="span" size="s" subdued short>
            {children}
        </Text>
    );
}
