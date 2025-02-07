import { A11yDialogConfig, A11yDialogProps } from "react-a11y-dialog";
import { WithOptionalChildren } from "../../core/types.js";

export interface UseModalOptions
    extends Omit<A11yDialogProps, "id" | "closeButtonPosition"> {
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

export interface ModalConfig extends Omit<A11yDialogConfig, "dialog"> {
    modal: A11yDialogConfig["dialog"];
    closeButton: A11yDialogConfig["closeButton"] & {
        "aria-label": string;
    };
}

export interface ModalProps extends WithOptionalChildren {
    id?: string;
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
    /**
     * Overstyrer padding på modalen via en CSS-variabel.
     */
    padding?: 16 | 24 | 40;
}

export type BaseModalProps = Omit<ModalProps, "padding" | "component">;

export type ModalOverlayProps = ModalConfig["overlay"] &
    BaseModalProps & {
        /**
         * Rendre uten bakgrunnsfarge, men med click target for å lukke modalen ved klikk utenfor.
         */
        transparent?: boolean;
    };
