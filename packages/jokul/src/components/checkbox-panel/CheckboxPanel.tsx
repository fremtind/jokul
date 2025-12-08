import { InputPanel } from "../input-panel/InputPanel.js";
import type { CheckboxPanelProps } from "./types.js";

export const CheckboxPanel = (props: CheckboxPanelProps) => (
    <InputPanel {...props} type="checkbox" />
);
