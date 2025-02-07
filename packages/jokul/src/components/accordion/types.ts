import { Density, WithChildren } from "../../core/types.js";

export interface AccordionProps extends WithChildren {
    className?: string;
    density?: Density;
    id?: string;
}

export interface AccordionItemProps extends WithChildren {
    title: string;
    startExpanded?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent, isOpen: boolean) => void;
    id?: string;
}
