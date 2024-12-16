import type { Component, AllContent } from "@org/cms";

export type TabContent = Component["tabs"][number];
export type ContentBlock = AllContent["blocks"][number];
export interface ContentBlockProps {
    contentBlock: ContentBlock;
}

export function assertBlockIs<T extends ContentBlock["blockType"]>(
    type: T,
    block: ContentBlock,
): asserts block is ContentBlock & { blockType: T } {
    if (block.blockType !== type) {
        throw new Error(`Blokken er ikke av type ${type}`);
    }
}
