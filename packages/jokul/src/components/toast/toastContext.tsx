import { ToastQueue } from "@react-stately/toast";
import React, { createContext, useContext, useState, type FC } from "react";
import { ToastRegion } from "./ToastRegion.js";
import {
    ToastContent,
    ToastContext,
    ToastContextProviderProps,
    ToastOptions,
} from "./types.js";

const context = createContext<ToastContext>({
    add: () => {
        return "missing-provider";
    },
});

export const useToast = (): ToastContext => useContext(context);

export const ToastProvider: FC<ToastContextProviderProps> = ({
    children,
    maxVisibleToasts = 5,
    placement = "center",
}) => {
    const [queue] = useState(
        new ToastQueue<ToastContent>({
            maxVisibleToasts,
            hasExitAnimation: true,
        }),
    );

    return (
        <context.Provider
            value={{
                add: (toast: ToastContent, options?: ToastOptions) => {
                    let timeout: number | undefined = 5000;

                    if (typeof options?.timeout === "number") {
                        timeout = options.timeout as number;
                    } else if (
                        options?.timeout === null ||
                        options?.timeout === "off"
                    ) {
                        timeout = undefined;
                    }

                    return queue.add(toast, {
                        ...options,
                        timeout,
                    });
                },
            }}
        >
            {children}
            <ToastRegion queue={queue} placement={placement} />
        </context.Provider>
    );
};
