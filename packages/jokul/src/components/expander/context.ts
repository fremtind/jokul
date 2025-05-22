import { createContext } from "react";
import type { ExpandableContext } from "./types.js";

export const ExpanderContext = createContext<ExpandableContext>({
    open: false,
    onToggle: () => {},
    onTransitionStart: () => {},
    onTransitionEnd: () => {},
    setExpanderHeight: () => {},
});
