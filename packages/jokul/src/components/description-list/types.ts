import type { WithChildren } from "../../core/types.js";

export interface DescriptionListProps extends WithChildren {
    className?: string;
    separators?: boolean;
    alignment: "horizontal" | "vertical" | "justified";
}

export interface DescriptionTermProps extends WithChildren {
    className?: string;
}

export interface DescriptionDetailProps extends WithChildren {
    className?: string;
}
