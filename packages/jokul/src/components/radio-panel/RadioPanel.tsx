import React, { forwardRef } from "react";
import { InputPanel } from "../input-panel/InputPanel.js";
import type { RadioPanelProps } from "./types.js";

export const RadioPanel = forwardRef<HTMLInputElement, RadioPanelProps>(
    function RadioPanel(props, ref) {
        return <InputPanel {...props} type="radio" ref={ref} />;
    },
);
