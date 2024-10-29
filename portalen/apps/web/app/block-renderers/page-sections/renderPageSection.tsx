import React, { Fragment } from "react";
import { CallToAction } from "./CallToAction";
import { FigmaExampleSection } from "./FigmaExampleSection";
import { HeroSection } from "./HeroSection";
import { LinkCardListSection } from "./LinkCardListSection";
import { LiveDemoSection } from "./LiveDemoSection";
import { PackageReportSection } from "./PackageReportSection";
import { PageSection } from "./PageSection";
import { ScrollSection } from "./ScrollSection";
import { ShowcaseSection } from "./ShowcaseSection";
import type { PageSection as PageSectionType } from "./types";
import { VideoCTABlock } from "./VideoCTA";
import { PackageStatsSection, renderContentBlock } from "~/block-renderers/content-blocks";
import { ComponentOverviewSection } from "~/block-renderers/page-sections/ComponentOverviewSection";
import { FeedbackSection } from "~/block-renderers/page-sections/FeedbackSection";

export function renderPageSection(
    pageSection: PageSectionType,
    packages?: {
        react?: string;
        css?: string;
    },
) {
    switch (pageSection.blockType) {
        case "call-to-action":
            return <CallToAction key={pageSection.id} pageSection={pageSection} />;
        case "figma-example-section":
            return <FigmaExampleSection key={pageSection.id} pageSection={pageSection} />;
        case "hero-section":
            return <HeroSection key={pageSection.id} pageSection={pageSection} />;
        case "link-card-list-section":
            return <LinkCardListSection key={pageSection.id} pageSection={pageSection} />;
        case "live-demo-section":
            return <LiveDemoSection key={pageSection.id} pageSection={pageSection} />;
        case "package-report-section":
            return <PackageReportSection key={pageSection.id} pageSection={pageSection} packages={packages} />;
        case "page-section":
            return (
                <PageSection key={pageSection.id} title={pageSection.title} ingress={pageSection.ingress}>
                    {pageSection.content?.map((block) => (
                        <Fragment key={block.id}>{renderContentBlock(block)}</Fragment>
                    ))}
                </PageSection>
            );
        case "showcase-section":
            return <ShowcaseSection key={pageSection.id} pageSection={pageSection} />;
        case "video-cta":
            return <VideoCTABlock key={pageSection.id} pageSection={pageSection} />;
        case "feedback-section":
            return <FeedbackSection key={pageSection.id} pageSection={pageSection} />;
        case "component-overview":
            return <ComponentOverviewSection key={pageSection.id} pageSection={pageSection} />;

        case "scroll":
            return <ScrollSection key={pageSection.id} pageSection={pageSection} />;

        case "package-stats-section":
            return <PackageStatsSection pageSection={pageSection} />;

        default:
            console.warn("Fant ingen blokk for å rendre innholdet:", pageSection);
            return null;
    }
}
