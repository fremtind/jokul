import cn from "classnames";
import React, {
    forwardRef,
    type HTMLAttributes,
    type KeyboardEventHandler,
    type MouseEventHandler,
    type ReactNode,
} from "react";
import { useSwipeGesture, type SwipeChangeHandler } from "../../hooks";
import { CheckIcon } from "../icon";

export interface MenuItemCheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, "aria-checked" | "onChange"> {
    "aria-checked": boolean;
    /**
     * Et ikon som vises før innholdet i menypunktet
     */
    icon?: ReactNode;
    onChange?: SwipeChangeHandler<HTMLDivElement> &
        ((event: React.KeyboardEvent<HTMLDivElement> | React.PointerEvent<HTMLDivElement>, pressed: boolean) => void);
}

export const MenuItemCheckbox = forwardRef<HTMLDivElement, MenuItemCheckboxProps>((props, ref) => {
    const {
        "aria-checked": checked,
        className,
        children,
        icon,
        onChange,
        onClick,
        onPointerCancel,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onKeyDown,
        ...rest
    } = props;

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault(); // Prevents the menu from closing on toggle
        onChange?.(event, !checked);
        onClick?.(event);
    };

    const handleChange: SwipeChangeHandler<HTMLDivElement> = (event, toggleTo) => {
        if (toggleTo !== checked) {
            onChange?.(event, toggleTo);
        }
    };

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === "Enter") {
            onChange?.(event, !checked);
        } else if (event.key === " ") {
            event.preventDefault(); // Prevents the menu from closing on toggle, https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role#keyboard_interactions
            onChange?.(event, !checked);
        }
        onKeyDown?.(event);
    };

    const { gestureHandlers } = useSwipeGesture({
        onClick: handleClick,
        onChange: handleChange,
        onPointerCancel,
        onPointerDown,
        onPointerMove,
        onPointerUp,
    });

    return (
        <div
            ref={ref}
            tabIndex={-1}
            {...rest}
            role="menuitemcheckbox"
            aria-checked={checked}
            className={cn("jkl-menu-item", "jkl-menu-item--checkbox", className)}
            {...gestureHandlers}
            onKeyDown={handleKeyDown}
        >
            {icon && <span className="jkl-menu-item__icon">{icon}</span>}
            <div className="jkl-menu-item__content">{children}</div>
            <div className="jkl-toggle-switch">
                <div className="jkl-toggle-switch-widget">
                    <div className="jkl-toggle-switch-widget__slider">
                        <div className="jkl-toggle-switch-widget__knob" />
                        <CheckIcon variant="small" bold className="jkl-toggle-switch-widget__indicator" />
                    </div>
                </div>
            </div>
        </div>
    );
});

MenuItemCheckbox.displayName = "MenuItemCheckbox";
