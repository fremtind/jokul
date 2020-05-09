export { initTabListener, getValuePair, breakpoints } from "./utils";
export { Label, Link, ScreenReaderOnly, SupportLabel } from "./components";

export type LabelVariant = "small" | "medium" | "large";
export type ValuePair = {
    value: string;
    label: string;
};
