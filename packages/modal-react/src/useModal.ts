import { useId } from "@fremtind/jkl-react-hooks";
import { A11yDialogConfig, A11yDialogProps, useA11yDialog } from "react-a11y-dialog";

export interface UseModalOptions extends Omit<A11yDialogProps, "id" | "closeButtonPosition"> {
    id?: string;
    /**
     * @default "Lukk"
     */
    closeButtonLabel?: string;
    /**
     * Sett til `alertdialog` om du ønsker å slå av muligheten til å lukke med ESC og klikk utenfor.
     *
     * @default "dialog"
     */
    role?: "dialog" | "alertdialog";
    /**
     * Påkrevd for universell utforming. Tittelen kan gjenbrukes som `children` i `<ModalTitle>` med en konstant.
     */
    title: string;
}

export type ModalInstance = ReturnType<typeof useModal>[0];

export interface ModalConfig extends Omit<A11yDialogConfig, "dialog"> {
    modal: A11yDialogConfig["dialog"];
}

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
    const { id: idProp, role = "dialog", closeButtonLabel = "Lukk", ...rest } = props;

    const id = useId(idProp || "jkl-modal", { generateSuffix: !idProp });

    const [instance, config] = useA11yDialog({
        id,
        closeButtonPosition: "first",
        role,
        closeButtonLabel,
        ...rest,
    });

    const { dialog, ...restConfig } = config;

    const modalConfig: ModalConfig = {
        modal: config.dialog,
        ...restConfig,
    };

    return [instance, modalConfig] as const;
}
