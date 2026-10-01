import type { CSSProperties } from "react";
import type { Tracking } from "../types.js";

export interface CountdownProps
    extends Pick<
        React.HTMLAttributes<HTMLDivElement>,
        "onAnimationEnd" | "onAnimationStart"
    > {
    id?: string;
    className?: string;
    /**
     * Millisekunder å telle ned fra
     */
    from: number;
    isPaused?: boolean;
    style?: CSSProperties;
    tracking?: Tracking;
}
