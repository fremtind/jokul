import type { Component } from "payload/generated-types";
import React, { type FC } from "react";
import { renderPageSection, PageSection } from "~/block-renderers/page-sections";
import { ReactApi } from "~/components/react-api";

type TabContent = Component["tabs"][number];

export type TopicTabProps = {
    tabContent: TabContent;
    packages?: {
        react?: string;
        css?: string;
    };
};

export const TopicTab: FC<TopicTabProps> = ({ tabContent, packages }) => {
    const isCodeTab = tabContent.slug === "kode";

    return (
        <div className="jkl-body">
            {tabContent.sections.map((section) => renderPageSection(section, packages))}
            {isCodeTab && packages?.react && (
                <PageSection title="React API">
                    <p className="jkl-portal-paragraph">
                        Her finner du en oversikt over props på komponentene i pakken.
                    </p>
                    <ReactApi packageName={packages.react} />
                </PageSection>
            )}
        </div>
    );
};
