// url=https://www.figma.com/file/jnE6mPCHVfbjn7a0AiKGEK/Modal?node-id=34145:601
// component=Modal

import figma from "figma";

const children = figma.selectedInstance
    .getInstanceSwap("Content")
    ?.executeTemplate().example;
const title = figma.selectedInstance.getString("Title");

const example = figma.code`<ModalContainer role="document" id="my-modal" aria-labelledby="heading" aria-modal aria-hidden={false}>
    <ModalOverlay />
    <Modal role="document">
        <ModalHeader>
            {/* biome-ignore lint/a11y/useSemanticElements:  */}
            <ModalTitle aria-level={1} role="heading" id={""}>
                ${figma.helpers.react.renderChildren(title)}
            </ModalTitle>
            <ModalCloseButton type="button" aria-label="close"/>
        </ModalHeader>
        <ModalBody>
            ${figma.helpers.react.renderChildren(children)}
        </ModalBody>
        <ModalActions>
            <Button>Avbryt</Button>
            <Button variant="primary" data-testid="confirm-modal">
                Slett
            </Button>
        </ModalActions>
    </Modal>
</ModalContainer>`;

export default {
    id: "Modal",
    imports: [
        'import { Modal, ModalContainer, ModalOverlay, ModalHeader, ModalTitle, ModalCloseButton, ModalBody, ModalActions } from "@fremtind/jokul/components/modal";',
    ],
    example,
    metadata: { nestable: true },
};
