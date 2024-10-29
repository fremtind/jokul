import React from "react";
import { AnatomyExampleBlock } from "./AnatomyExampleBlock";
import { CarouselBlock } from "./CarouselBlock";
import { CodeSnippetBlock } from "./CodeSnippetBlock";
import { ColorCardBlock } from "./ColorCardBlock";
import { DoDontContentBlock } from "./DoDontExampleCodeBlock";
import { LiveDemoBlock } from "./LiveDemoBlock";
import { MessageBoxBlock } from "./MessageBoxBlock";
import { RichTextBlock } from "./RichTextBlock";
import { ShowcaseContentBlock } from "./ShowcaseContentBlock";
import { TableBlock } from "./TableBlock";
import { TokensTable } from "./TokensTableBlock";
import type { ContentBlock } from "./types";
import { LinkCardList } from "~/components/link-card-list/LinkCardList";

export function renderContentBlock(contentBlock: ContentBlock) {
    const { blockType } = contentBlock;
    return (
        <div className={"jkl-portal-content-block"}>
            {(() => {
                switch (blockType) {
                    case "anatomy-example":
                        return <AnatomyExampleBlock contentBlock={contentBlock} />;
                    case "carousel":
                        return <CarouselBlock contentBlock={contentBlock} />;
                    case "code-snippet":
                        return <CodeSnippetBlock contentBlock={contentBlock} />;
                    case "dodont-example":
                        return <DoDontContentBlock contentBlock={contentBlock} />;
                    case "live-demo-block":
                        return <LiveDemoBlock contentBlock={contentBlock} />;
                    case "link-card-list":
                        return <LinkCardList links={contentBlock.links} />;
                    case "rich-text":
                        return <RichTextBlock contentBlock={contentBlock} />;
                    case "showcase":
                        return <ShowcaseContentBlock contentBlock={contentBlock} />;
                    case "tokens-table":
                        return <TokensTable contentBlock={contentBlock} />;
                    case "color-card":
                        return <ColorCardBlock contentBlock={contentBlock} />;
                    case "message-box":
                        return <MessageBoxBlock contentBlock={contentBlock} />;
                    case "table":
                        return <TableBlock contentBlock={contentBlock} />;
                    default:
                        console.warn("Fant ingen blokk for å rendre innholdet:", contentBlock);
                        return null;
                }
            })()}
        </div>
    );
}
