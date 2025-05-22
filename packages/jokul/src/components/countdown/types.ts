import type { CSSProperties } from "react";

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
}
