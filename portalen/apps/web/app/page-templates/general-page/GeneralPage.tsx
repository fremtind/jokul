import cn from "classnames";
import type { General } from "payload/generated-types";
import React, { type FC } from "react";
import { RichText } from "../../components/rich-text";
import { AnimatedPageWrapper } from "../AnimatedPageWrapper";
import { renderPageSection } from "~/block-renderers/page-sections";
import { useFadingContent } from "~/hooks";

const WIDE_SECTIONS = ["component-overview", "live-demo-section"];

export const GeneralPageTemplate: FC<General> = ({
    title,
    ingress,
    sections,
}) => {
    useFadingContent();

    const hasWideSection = sections.some((section) =>
        WIDE_SECTIONS.includes(section.blockType),
    );

    return (
        <AnimatedPageWrapper className="general-page">
            <div className="general-page__header">
                <h1 className="general-page__header-title">{title}</h1>
                {ingress && (
                    <RichText
                        className="general-page__header-ingress"
                        content={ingress}
                    />
                )}
            </div>
            <div
                className={cn("collection-page__content", {
                    "collection-page__content--wide": hasWideSection,
                })}
            >
                <div className="collection-page__children">
                    {sections.map((section) => renderPageSection(section))}
                </div>
            </div>
        </AnimatedPageWrapper>
    );
};
