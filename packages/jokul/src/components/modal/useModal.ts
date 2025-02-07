import { useA11yDialog } from "react-a11y-dialog";
import { useId } from "../../hooks/useId/useId.js";
import { ModalConfig, UseModalOptions } from "./types.js";

export type ModalInstance = ReturnType<typeof useModal>[0];

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
export function useModal(props: UseModalOptions) {
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

    return [instance, modalConfig] as const;
}
