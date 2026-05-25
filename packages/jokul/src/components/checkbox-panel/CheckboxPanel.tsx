import React, { forwardRef } from "react";
import { InputPanel } from "../input-panel/InputPanel.js";
import type { CheckboxPanelProps } from "./types.js";

export const CheckboxPanel = forwardRef<HTMLInputElement, CheckboxPanelProps>(
    function CheckboxPanel(props, ref) {
        return <InputPanel {...props} ref={ref} type="checkbox" />;
    },
);
