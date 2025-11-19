import { useA11yDialog } from "react-a11y-dialog";
import { useId } from "../../hooks/useId/useId.js";
import type { ModalConfig, UseModalOptions } from "./types.js";

export type ModalInstance = ReturnType<typeof useA11yDialog>[0];

export type UseModalReturn = readonly [ModalInstance, ModalConfig];

/**
 * @example
 * ```jsx
 * const heading = "Bekreft sletting";
 * const [instance, { title, overlay, container, modal, closeButton }] = useModal({ title: heading });
 *
 * useEffect(() => {
 *      if (!instance) {
 *          return;
 *      }
 *      instance.show();
 *  }, [instance]);
 *
 * return ReactDOM.createPortal(
 *      <ModalContainer {...container}>
 *          <ModalOverlay {...overlay} />
 *          <Modal {...modal}>
 *              <ModalHeader>
 *                  <ModalTitle {...title}>{heading}</ModalTitle>
 *                  <ModalCloseButton {...closeButton} />
 *              </ModalHeader>
 *              <ModalBody>
 *                  Er du sikker på at du vil slette Foo Bar Baz?
 *              </ModalBody>
 *              <ModalActions>
 *                  <PrimaryButton
 *                      onClick={() => {
 *                          // Do the thing
 *                          instance?.hide()
 *                      }}
 *                  >
 *                      Bekreft
 *                  </PrimaryButton>
 *                  <TertiaryButton onClick={() => instance?.hide()}>
 *                     Avbryt
 *                 </TertiaryButton>
 *              </ModalActions>
 *          </Modal>
 *      </ModalContainer>,
 *      document.body,
 *  );
 * ```
 */
export function useModal(props: UseModalOptions): UseModalReturn {
    const {
        id: idProp,
        role = "dialog",
        closeButtonLabel = "Lukk",
        ...rest
    } = props;

    const id = useId(idProp || "jkl-modal", { generateSuffix: !idProp });

    const [instance, config] = useA11yDialog({
        id,
        role,
        ...rest,
    });

    const { dialog, ...restConfig } = config;

    const modalConfig: ModalConfig = {
        modal: config.dialog,
        ...restConfig,
        closeButton: {
            ...config.closeButton,
            "aria-label": closeButtonLabel,
        },
    };

    return [instance, modalConfig];
}
