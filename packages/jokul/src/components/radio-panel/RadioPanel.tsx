import React, { type ForwardedRef, forwardRef } from "react";
import { InputPanel } from "../input-panel/InputPanel.js";
import type { RadioPanelProps } from "./types.js";

export const RadioPanel = forwardRef(function RadioPanel(
    { ...rest }: RadioPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    return <InputPanel {...rest} type="radio" ref={ref} />;
});
