import { type AriaToastRegionProps, useToastRegion } from "@react-aria/toast";
import {
    useToastQueue,
    type ToastState,
    type ToastQueue,
} from "@react-stately/toast";
import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";
import { Toast } from "./Toast.js";
import type { ToastContent } from "./types.js";

interface ToastRegionProps<T extends ToastContent = ToastContent>
    extends AriaToastRegionProps {
    placement: "center" | "left";
    state: ToastState<T>;
}

function Region<T extends ToastContent>({
    placement,
    state,
    ...props
}: ToastRegionProps<T>) {
    const ref = React.useRef(null);
    const { regionProps } = useToastRegion(props, state, ref);

    return (
        <div
            className={clsx("jkl", "jkl-toast-region", {
                "jkl-toast-region--left": placement === "left",
            })}
        >
            <div
                {...regionProps}
                ref={ref}
                className="jkl-toast-region__toasts"
            >
                {[...state.visibleToasts].reverse().map((toast) => (
                    <Toast key={toast.key} toast={toast} state={state} />
                ))}
            </div>
        </div>
    );
}

export function ToastRegion({
    queue,
    placement,
}: {
    queue: ToastQueue<ToastContent>;
    placement: "center" | "left";
}) {
    const state = useToastQueue<ToastContent>(queue);
    return state.visibleToasts.length > 0
        ? ReactDOM.createPortal(
              <Region state={state} placement={placement} />,
              document.body,
          )
        : null;
}
