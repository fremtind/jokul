import type { WithOptionalChildren } from "@fremtind/jkl-core";
import { IconButton, type IconButtonProps } from "@fremtind/jkl-icon-button-react";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { ModalConfig } from "./useModal";

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

type BaseModalProps = Omit<ModalProps, "padding" | "component">;

/**
 * Ment å brukes med `useModal`.
 */
export const ModalContainer = forwardRef<HTMLDivElement, ModalConfig["container"] & BaseModalProps>(
    ({ className, ...rest }, ref) => {
        return <div className={clsx("jkl-modal-container", className)} {...rest} ref={ref} />;
    },
);
ModalContainer.displayName = "ModalContainer";

type ModalOverlayProps = ModalConfig["overlay"] &
    BaseModalProps & {
        /**
         * Rendre uten bakgrunnsfarge, men med click target for å lukke modalen ved klikk utenfor.
         */
        transparent?: boolean;
    };

/**
 * Ment å brukes med `useModal`.
 */
export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
    ({ className, transparent, ...rest }, ref) => (
        <div
            className={clsx("jkl-modal-overlay", className, {
                "jkl-modal-overlay--transparent": transparent,
            })}
            {...rest}
            ref={ref}
        />
    ),
);
ModalOverlay.displayName = "ModalOverlay";

/**
 * Ment å brukes med `useModal`.
 */
export const Modal = forwardRef<HTMLElement, ModalConfig["modal"] & ModalProps>(
    ({ className, component, padding, style, ...rest }, ref) => {
        const C = component || "div";
        return (
            <C
                className={clsx("jkl jkl-modal", className)}
                style={
                    {
                        "--jkl-modal-padding": padding ? `var(--jkl-spacing-${padding})` : undefined,
                        ...style,
                    } as React.CSSProperties
                }
                {...rest}
                ref={ref}
            />
        );
    },
);
Modal.displayName = "Modal";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalHeader = forwardRef<HTMLDivElement, BaseModalProps>(({ className, ...rest }, ref) => (
    <div className={clsx("jkl-modal-header", className)} {...rest} ref={ref} />
));
ModalHeader.displayName = "ModalHeader";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalTitle = forwardRef<HTMLParagraphElement, ModalConfig["title"] & BaseModalProps>(
    ({ className, ...rest }, ref) => <p className={clsx("jkl-modal-title", className)} {...rest} ref={ref} />,
);
ModalTitle.displayName = "ModalTitle";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalCloseButton = forwardRef<
    HTMLButtonElement,
    Omit<ModalConfig["closeButton"], "onClick"> & BaseModalProps & IconButtonProps
>(({ className, ...rest }, ref) => (
    <IconButton className={clsx("jkl-modal-close", className)} data-testautoid="jkl-modal-close" {...rest} ref={ref}>
        <CloseIcon variant="medium" />
    </IconButton>
));
ModalCloseButton.displayName = "ModalCloseButton";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalBody = forwardRef<HTMLDivElement, BaseModalProps>(({ className, ...rest }, ref) => (
    <div className={clsx("jkl-modal-body", className)} {...rest} ref={ref} />
));
ModalBody.displayName = "ModalBody";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalActions = forwardRef<HTMLDivElement, BaseModalProps>(({ className, ...rest }, ref) => (
    <div className={clsx("jkl-modal-actions", className)} {...rest} ref={ref} />
));
ModalActions.displayName = "ModalActions";
