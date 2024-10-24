import { type AllSection } from 'payload/generated-types';

export type PageSection = AllSection['sections'][number];
export type Ingress = (PageSection & { blockType: 'page-section' })['ingress'];

export interface PageSectionProps {
    pageSection: PageSection;
}

export function assertSectionIs<T extends PageSection['blockType']>(
    type: T,
    block: PageSection
): asserts block is PageSection & { blockType: T } {
    if (block.blockType !== type) {
        throw new Error(`Blokken er ikke av type ${type}`);
    }
}
