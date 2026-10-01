import { type AriaToastRegionProps, useToastRegion } from "@react-aria/toast";
import {
    type ToastQueue,
    type ToastState,
    useToastQueue,
} from "@react-stately/toast";
import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { Tracking } from "../types.js";
import { Toast } from "./Toast.js";
import type { ToastContent } from "./types.js";

interface ToastRegionProps<T extends ToastContent = ToastContent>
    extends AriaToastRegionProps {
    placement: "center" | "left";
    state: ToastState<T>;
    maxVisibleToasts?: number;
    tracking?: Tracking;
}

function Region<T extends ToastContent>({
    placement,
    state,
    maxVisibleToasts,
    tracking,
    ...props
}: ToastRegionProps<T>) {
    const ref = React.useRef(null);
    const { regionProps } = useToastRegion(props, state, ref);

    return (
        <div
            className={clsx("jkl", "jkl-toast-region", {
                "jkl-toast-region--left": placement === "left",
            })}
            data-track-component-name={COMPONENT_NAMES.Toast}
            data-track-id={tracking?.id}
            data-track-placement={placement}
            data-track-max-visible-toasts={maxVisibleToasts}
            {...getExtraTrackingAttributes(tracking?.extra)}
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
    maxVisibleToasts,
    tracking,
}: {
    queue: ToastQueue<ToastContent>;
    placement: "center" | "left";
    maxVisibleToasts?: number;
    tracking?: Tracking;
}) {
    const state = useToastQueue<ToastContent>(queue);
    return state.visibleToasts.length > 0
        ? ReactDOM.createPortal(
              <Region
                  state={state}
                  placement={placement}
                  maxVisibleToasts={maxVisibleToasts}
                  tracking={tracking}
              />,
              document.body,
          )
        : null;
}
