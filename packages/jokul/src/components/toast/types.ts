import { type ToastOptions as StatelyToastOptions } from "@react-stately/toast";
import { type ReactNode } from "react";
import { WithChildren } from "../../core/types.js";

export type ToastContent =
    | {
          content: ReactNode;
          title?: string;
      }
    | string;

export type ToastOptions = Omit<StatelyToastOptions, "timeout"> & {
    variant?: "info" | "success" | "warning" | "error";
    timeout?: number | null | "off";
};

export type ToastContext = {
    add: (toast: ToastContent, options?: ToastOptions) => string;
};

export type ToastContextProviderProps = WithChildren & {
    maxVisibleToasts?: number;
    /**
     * @default "center"
     */
    placement?: "center" | "left";
};
