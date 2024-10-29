import type { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { type FC } from "react";
import { RichText } from "../../components/rich-text";
import { SectionHeading } from "../../components/section-heading/SectionHeading";
import type { Ingress } from "./types";

interface PageSectionProps extends WithChildren {
    title: string;
    ingress?: Ingress;
    className?: string;
}

export const PageSection: FC<PageSectionProps> = ({
    children,
    title,
    ingress,
    className,
}) => (
    <section className={cn("jkl-portal-page-section", className)}>
        <SectionHeading>{title}</SectionHeading>
        {ingress && <RichText content={ingress} />}

        {children}
    </section>
);
