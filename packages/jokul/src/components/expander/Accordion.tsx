import { clsx } from "clsx";
import type { AccordionProps } from "./types.js";

export const Accordion = ({
    children,
    outlined = false,
    className,
    ...rest
}: AccordionProps) => (
    <section
        className={clsx("jkl-accordion", className)}
        data-outlined={outlined}
        {...rest}
    >
        {children}
    </section>
);
