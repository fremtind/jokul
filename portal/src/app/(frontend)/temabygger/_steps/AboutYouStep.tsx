"use client";

import { Flex } from "@fremtind/jokul/flex";
import { TextInput } from "@fremtind/jokul/text-input";
import { Title } from "@fremtind/jokul/typography";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { useThemeDraftActions } from "../_hooks/useThemeDraftActions";
import { StepCard } from "./StepCard";

/**
 * Temaet kommer inn til oss som en fil, uten avsender. Navn og e-post blir
 * derfor med i temaet selv, slik at vi vet hvem vi skal svare.
 */
export function AboutYouStep() {
    const { draft } = useThemeDraft();
    const { setThemeName, setAuthorName, setAuthorEmail } =
        useThemeDraftActions();

    return (
        <StepCard segment="hvem-er-du">
            <Title as="h3" size="m">
                Hvem er du?
            </Title>
            <Flex direction="column" gap="24">
                <TextInput
                    label="Navngi tema"
                    description="Brukes til å navngi fila di"
                    name="themeName"
                    width="100%"
                    value={draft.themeName}
                    onChange={(event) => setThemeName(event.target.value)}
                />
                <TextInput
                    label="Navnet ditt"
                    name="authorName"
                    autoComplete="name"
                    width="100%"
                    value={draft.authorName}
                    onChange={(event) => setAuthorName(event.target.value)}
                />
                <TextInput
                    label="E-postadressen din"
                    description="Brukes til å svare deg når temaet er mottatt"
                    name="authorEmail"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    width="100%"
                    value={draft.authorEmail}
                    onChange={(event) => setAuthorEmail(event.target.value)}
                />
            </Flex>
        </StepCard>
    );
}
