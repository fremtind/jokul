import type { WithChildren } from "../../core/types.js";

export interface NavTabsProps extends WithChildren {
    "aria-label"?: string;
    className?: string;
    id?: string;
}

export interface TabProps extends WithChildren {
    className?: string;
}

export interface TabListProps extends WithChildren {
    "aria-label"?: string;
    className?: string;
}

export interface TabPanelProps extends WithChildren {
    className?: string;
}

export interface TabsProps extends WithChildren {
    className?: string;
    onChange?: (tabIndex: number) => void;
    defaultTab?: number;
}
