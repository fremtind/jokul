import type { Density, WithChildren } from "../../core/types.js";

export interface BreadcrumbProps extends WithChildren {
    className?: string;
    density?: Density;
}

export interface BreadcrumbItemProps extends WithChildren {
    className?: string;
    /**
     * Settes automatisk av Breadcrumb
     * @default false
     */
    isLastElement?: boolean;
}
