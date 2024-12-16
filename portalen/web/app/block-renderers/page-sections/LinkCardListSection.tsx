import React, { type FC } from "react";
import { PageSection } from "./PageSection";
import { type PageSectionProps } from "./types";
import { assertSectionIs } from "./types";
import { LinkCardList } from "~/components/link-card-list/LinkCardList";

export const LinkCardListSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs("link-card-list-section", pageSection);

    const { links, ...sectionProps } = pageSection;

    return (
        <PageSection {...sectionProps}>
            <LinkCardList links={links} />
        </PageSection>
    );
};
