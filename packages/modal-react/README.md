# [`@fremtind/jkl-modal-react`](https://jokul.fremtind.no/komponenter/modal)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/modal).

## Installasjon

**Tips:** [stilpakken](../modal/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-modal-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```jsx
import {
    ModalContainer,
    ModalOverlay,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalCloseButton,
    ModalBody,
    ModalActions,
    useModal,
} from "@fremtind/jkl-modal-react";

import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-modal/modal.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
import "@fremtind/jkl-icons/icons.min.css";

// Bruk av komponentene
const heading = "Bekreft sletting";
const role = "dialog";
const [instance, { title, overlay, container, modal, closeButton }] = useModal({
    title: heading,
    role,
});

useEffect(() => {
    if (!instance) {
        return;
    }
    instance.show();
}, [instance]);

return ReactDOM.createPortal(
    <ModalContainer {...container}>
        <ModalOverlay {...overlay} />
        <Modal {...modal}>
            <ModalHeader>
                <ModalTitle {...title}>{heading}</ModalTitle>
                <ModalCloseButton {...closeButton} />
            </ModalHeader>
            <ModalBody>Er du sikker på at du vil slette Foo Bar Baz?</ModalBody>
            <ModalActions>
                <PrimaryButton onClick={() => instance?.hide()}>
                    Bekreft
                </PrimaryButton>
                <TertiaryButton onClick={() => instance?.hide()}>
                    Avbryt
                </TertiaryButton>
            </ModalActions>
        </Modal>
    </ModalContainer>,
    document.body,
);
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-modal/modal";
@use "@fremtind/jkl-icon-button/icon-button";
@use "@fremtind/jkl-icons/icons";
```
