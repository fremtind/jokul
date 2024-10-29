import { type AriaToastRegionProps, useToastRegion } from "@react-aria/toast";
import {
    useToastQueue,
    type ToastState,
    ToastQueue,
} from "@react-stately/toast";
import cn from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import { Toast } from "./Toast";
import { ToastContent } from "./types";

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
    let ref = React.useRef(null);
    let { regionProps } = useToastRegion(props, state, ref);

    return (
        <div
            className={cn("jkl", "jkl-toast-region", {
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
