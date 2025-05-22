import clsx from "clsx";
import React, { forwardRef } from "react";
import { IconButton } from "../icon-button/IconButton.js";
import type { IconButtonProps } from "../icon-button/types.js";
import { CloseIcon } from "../icon/icons/CloseIcon.js";
import type {
    BaseModalProps,
    ModalConfig,
    ModalOverlayProps,
    ModalProps,
} from "./types.js";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalContainer = forwardRef<
    HTMLDivElement,
    ModalConfig["container"] & BaseModalProps
>(({ className, ...rest }, ref) => {
    // TODO: 'data-portal' fjernes når modalen tar i bruk Popover komponenten. Issue: https://github.com/fremtind/jokul/issues/4356
    return (
        <div
            className={clsx("jkl-modal-container", className)}
            {...rest}
            ref={ref}
            data-portal
        />
    );
});
ModalContainer.displayName = "ModalContainer";

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
                        "--jkl-modal-padding": padding
                            ? `var(--jkl-spacing-${padding})`
                            : undefined,
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
export const ModalHeader = forwardRef<HTMLDivElement, BaseModalProps>(
    ({ className, ...rest }, ref) => (
        <div
            className={clsx("jkl-modal-header", className)}
            {...rest}
            ref={ref}
        />
    ),
);
ModalHeader.displayName = "ModalHeader";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalTitle = forwardRef<
    HTMLParagraphElement,
    ModalConfig["title"] & BaseModalProps
>(({ className, ...rest }, ref) => (
    <p className={clsx("jkl-modal-title", className)} {...rest} ref={ref} />
));
ModalTitle.displayName = "ModalTitle";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalCloseButton = forwardRef<
    HTMLButtonElement,
    Omit<ModalConfig["closeButton"], "onClick"> &
        BaseModalProps &
        IconButtonProps
>(({ className, ...rest }, ref) => (
    <IconButton
        className={clsx("jkl-modal-close", className)}
        data-testautoid="jkl-modal-close"
        {...rest}
        ref={ref}
    >
        <CloseIcon variant="medium" />
    </IconButton>
));
ModalCloseButton.displayName = "ModalCloseButton";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalBody = forwardRef<HTMLDivElement, BaseModalProps>(
    ({ className, ...rest }, ref) => (
        <div
            className={clsx("jkl-modal-body", className)}
            {...rest}
            ref={ref}
        />
    ),
);
ModalBody.displayName = "ModalBody";

/**
 * Ment å brukes med `useModal`.
 */
export const ModalActions = forwardRef<HTMLDivElement, BaseModalProps>(
    ({ className, ...rest }, ref) => (
        <div
            className={clsx("jkl-modal-actions", className)}
            {...rest}
            ref={ref}
        />
    ),
);
ModalActions.displayName = "ModalActions";
