import { CSSTransitionProps } from "react-transition-group/CSSTransition";

export interface EasingProps {
    easing: string | { enter?: string; exit?: string };
}

export interface TimingProps {
    timing: number | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined };
}

export interface TransitionProps
    extends Partial<Pick<CSSTransitionProps, "appear" | "in">>,
        Partial<EasingProps>,
        Partial<TimingProps> {
    id?: string;
}
