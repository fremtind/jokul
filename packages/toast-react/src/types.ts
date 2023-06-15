import { type ToastOptions as StatelyToastOptions } from "@react-stately/toast";
import { type ReactNode } from "react";

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
