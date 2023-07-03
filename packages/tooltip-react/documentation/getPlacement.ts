import { TooltipPlacement } from "../src";

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
        case "Top":
        default:
            return "top";
    }
}
