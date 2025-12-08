import { ToastQueue } from "@react-stately/toast";
import { type FC, createContext, useContext, useState } from "react";
import { ToastRegion } from "./ToastRegion.js";
import type {
    ToastContent,
    ToastContext,
    ToastContextProviderProps,
    ToastOptions,
} from "./types.js";

const context = createContext<ToastContext>({
    add: () => {
        return "missing-provider";
    },
    close: () => {},
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
                close: queue.close.bind(queue),
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
