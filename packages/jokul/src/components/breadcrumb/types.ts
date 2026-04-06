import type { WithChildren } from "../../utilities/types.js";

export interface BreadcrumbProps extends WithChildren {
    className?: string;
}

export interface BreadcrumbItemProps extends WithChildren {
    className?: string;
    /**
     * Settes automatisk av Breadcrumb
     * @default false
     */
    isLastElement?: boolean;
}
