"use client";

import { Flex } from "@fremtind/jokul/flex";
import {
    Modal,
    ModalCloseButton,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    useModal,
} from "@fremtind/jokul/modal";
import { useState } from "react";
import { useThemeBuilder } from "./ThemeBuilderProvider";
import { DEFAULT_DISPLAY_STATE, type DisplayState } from "./displayAttributes";
import { EditorRoot } from "./editor/EditorRoot";
import { PageHeader } from "./layout/PageHeader";
import { WorkspaceTabs } from "./layout/WorkspaceTabs";

const EDITOR_TITLE = "Editor";

/**
 * Toppnivå-side for theme-builder. Editoren ligger i en høyre-festet Modal;
 * workspace-en under viser fanene fra {@link WorkspaceTabs}. Display-staten
 * (theme/brand/size) eies her men sendes inn til demo-fanen — øvrige faner
 * inspiserer tokens, ikke det rendrede chromet, og ignorerer den.
 */
export function ThemeBuilder() {
    const { tokens } = useThemeBuilder();
    const [display, setDisplay] = useState<DisplayState>(DEFAULT_DISPLAY_STATE);
    const [instance, { title, overlay, container, modal, closeButton }] =
        useModal({ title: EDITOR_TITLE, role: "dialog" });

    return (
        <Flex direction="column" gap="l">
            <PageHeader onOpenEditor={() => instance?.show()} />
            <ModalContainer {...container} placement="right" slideIn>
                <ModalOverlay {...overlay} transparent={true} />
                <Modal {...modal} padding={24}>
                    <ModalHeader>
                        <ModalTitle {...title}>{EDITOR_TITLE}</ModalTitle>
                        <ModalCloseButton {...closeButton} />
                    </ModalHeader>
                    <EditorRoot />
                </Modal>
            </ModalContainer>
            <WorkspaceTabs
                tokens={tokens}
                display={display}
                onDisplayChange={setDisplay}
            />
        </Flex>
    );
}
