import type { TooltipPlacement } from "../types.js";

export function getPlacement(choice?: string): TooltipPlacement {
    switch (choice) {
        case "Right":
            return "right";
        case "Left":
            return "left";
        case "Top end":
            return "top-end";
        case "Top start":
            return "top-start";
        default:
            return "top";
    }
}
