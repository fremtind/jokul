import type { HTMLAttributes } from "react";

export type LinkListProps = HTMLAttributes<HTMLUListElement> & {
    label: string;
    hideLabel?: boolean;
};
