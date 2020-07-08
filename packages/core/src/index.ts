export { initTabListener, getValuePair, breakpoints } from "./utils";
export { Label, Link, ScreenReaderOnly, SupportLabel } from "./components";

export type LabelVariant = "small" | "medium" | "large";
export type ValuePair = {
    value: string;
    label: string;
};

// Brukes til å extende props for komponenter som skal støtte data-testautoid ifbm. Test Complete
export interface DataTestAutoId {
    "data-testautoid"?: string;
}
