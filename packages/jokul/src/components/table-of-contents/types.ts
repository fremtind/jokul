import type { HTMLAttributes } from "react";

export type TableOfContentsProps = HTMLAttributes<HTMLOListElement> & {
    label: string;
};
