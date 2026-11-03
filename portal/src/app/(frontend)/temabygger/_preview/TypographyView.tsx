"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";

const HEADING_LEAD =
    "Bak hver bregne ventet en ny duft av bar, en mild påminnelse om fortrylling.";

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
 */
export function TypographyView() {
    return (
        <Flex direction="column" gap="32">
            {HEADINGS.map((heading) => (
                <Flex key={heading.label} direction="column" gap="8">
                    <Title as={heading.as} size={heading.size}>
                        {heading.label}
                    </Title>
                    <Text>{HEADING_LEAD}</Text>
                </Flex>
            ))}

            {PARAGRAPHS.map((paragraph) => (
                <Flex key={paragraph.label} direction="column" gap="8">
                    <Text size={paragraph.size} bold>
                        {paragraph.label}
                    </Text>
                    <Text size={paragraph.size}>{PARAGRAPH_BODY}</Text>
                </Flex>
            ))}
        </Flex>
    );
}
