"use client";

import { ButtonGroup } from "@fremtind/jokul/button-group";
import { Flex } from "@fremtind/jokul/flex";
import { Text, Title } from "@fremtind/jokul/typography";
import Link from "next/link";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { StepCard } from "./StepCard";
import { useModal } from "@fremtind/jokul/modal";
import { NavLink } from "@fremtind/jokul/nav-link";
import { SharePreviewModal } from "./SharePreviewModal";
import { createThemePreviewHref } from "../_shared/themeDraftPayload";
import { createThemeBlob } from "../_shared/themeTokenMail";

export function SendThemeStep() {
    const { draft, dispatch } = useThemeDraft();
    const { themeName, includeDarkMode } = draft;
    const [shareModalInstance, shareModalConfig] = useModal({
        title: "Del forhåndsvisning",
    });

    const previewHref = createThemePreviewHref(draft);

    const downloadAction = {
        as: "a",
        download: `${themeName || "tema"}.json`,
        href: createThemeBlob(draft),
        children: "Last ned tema",
    };

    return (
        <StepCard>
            <NavLink
                as={Link}
                href={
                    includeDarkMode
                        ? "/temabygger/farger/morkt"
                        : "/temabygger/farger"
                }
                back
            >
                Tilbake til redigering
            </NavLink>
            <Flex direction="column" gap="8">
                <Title as="h3" size="m">
                    Send tema til Jøkul
                </Title>
                <Text>Last ned tema og send til oss på jokul@fremtind.no</Text>
            </Flex>
            <ButtonGroup
                // @ts-ignore Trenger bedre typer i ButtonGroup
                mainAction={downloadAction}
                secondaryAction={{
                    onClick: () => shareModalInstance?.show(),
                    children: "Del forhåndsvisning",
                }}
            />
            <SharePreviewModal
                instance={shareModalInstance}
                config={shareModalConfig}
                previewHref={previewHref}
            />
        </StepCard>
    );
}
