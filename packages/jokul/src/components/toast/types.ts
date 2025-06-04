import type { ToastOptions as StatelyToastOptions } from "@react-stately/toast";
import type { ReactNode } from "react";
import type { WithChildren } from "../../core/types.js";

export type ToastContent =
    | {
          content: ReactNode;
          title?: string;
      }
    | string;

type ToastActionProps = {
    label: string;
    onClick: () => void;
};

export type ToastOptions = Omit<StatelyToastOptions, "timeout"> & {
    variant?: "info" | "success" | "warning" | "error";
    timeout?: number | null | "off";
    action?: ToastActionProps;
};

export type ToastContext = {
    add: (toast: ToastContent, options?: ToastOptions) => string;
    close: (key: string) => void;
};

export type ToastContextProviderProps = WithChildren & {
    maxVisibleToasts?: number;
    /**
     * @default "center"
     */
    placement?: "center" | "left";
};
