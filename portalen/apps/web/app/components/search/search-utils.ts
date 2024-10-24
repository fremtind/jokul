import type {
    AllContentBlock,
    AllSection,
    Blog,
    Component,
    Foundation,
    General,
    Pattern,
} from '@org/cms';
import {
    type RichTextChildren,
    richTextToString,
} from '~/components/rich-text';

function getTextContentFromBlock(block: AllContentBlock['blocks'][number]) {
    switch (block.blockType) {
        case 'anatomy-example':
            return (block.steps ?? []).map((step) => step.title);
        case 'carousel':
            return block.steps.map((step) => [
                step.title,
                richTextToString(step.description as RichTextChildren),
            ]);
        case 'dodont-example':
            return (block.doDontItem ?? []).map((item) => item.description);
        case 'link-card-list':
            return (block.links ?? []).map((link) => link.title);
        case 'rich-text':
            return richTextToString(block.content as RichTextChildren);
        case 'showcase':
            return (block.showcaseItem ?? []).map((item) => [
                item.title,
                item.origin,
                item.description,
            ]);
        case 'tokens-table':
            return block.rows?.map((row) => [
                row.element,
                row.property,
                row.role,
            ]);

        default:
            return [];
    }
}

function getTextContentFromSection(section: AllSection['sections'][number]) {
    switch (section.blockType) {
        case 'hero-section':
        case 'call-to-action':
            return richTextToString(section.heroText as RichTextChildren);
        case 'figma-example-section':
            return [
                section.title,
                richTextToString(section.ingress as RichTextChildren),
                ...(section.examples ?? []).map((example) => example.fileName),
            ];
        case 'link-card-list-section':
            return [
                section.title,
                richTextToString(section.ingress as RichTextChildren),
                ...(section.links ?? []).map((link) => link.title),
            ];
        case 'live-demo-section':
            return [
                section.title,
                richTextToString(section.ingress as RichTextChildren),
            ];
        case 'package-report-section':
            return [
                section.title,
                richTextToString(section.ingress as RichTextChildren),
            ];
        case 'showcase-section':
            return [
                section.title,
                richTextToString(section.ingress as RichTextChildren),
                section.showcaseItem?.map((item) => [
                    item.title,
                    item.origin,
                    item.description,
                ]),
            ];
        case 'video-cta':
            return [section.title, section.description, section.link.label];
        case 'feedback-section':
            return null;
        case 'scroll':
            return null;
        case 'component-overview':
            return [richTextToString(section.intro as RichTextChildren)];
        case 'package-stats-section':
            return null;

        default:
            const content = section.content || [];
            return [
                section.title,
                richTextToString(section.ingress as RichTextChildren),
                ...content.map((content) => getTextContentFromBlock(content)),
            ];
    }
}

export function getTextContentFromTopicPage(
    page: Component | Foundation | Pattern
): string | undefined {
    return [
        richTextToString(page.ingress as RichTextChildren),
        page.tabs?.map((tab) => {
            return [tab.title, tab.sections?.map(getTextContentFromSection)];
        }),
    ]
        .flat(10)
        .map((v) => v?.trim())
        .filter((v) => Boolean(v))
        .join(' ');
}

export function getTextContentFromGeneralPage(
    page: General
): string | undefined {
    return [page.sections.map(getTextContentFromSection)]
        .flat(10)
        .map((v) => v?.trim())
        .filter((v) => Boolean(v))
        .join(' ');
}

export function getTextContentFromMeta(
    meta:
        | {
              description?: string | null;
          }
        | undefined
): string {
    return meta?.description ? meta.description : '';
}

export function getTabFromMatch(
    document: Component | General | Foundation | Pattern | Blog,
    search: string,
    field: string
): string | undefined {
    if (!field.includes('tabs')) {
        return;
    }

    if (Array.isArray((document as Component | Foundation | Pattern).tabs)) {
        const tab = (document as Component | Foundation | Pattern).tabs.find(
            (tab) => {
                const tabContent = [
                    tab.title,
                    tab.sections?.map(getTextContentFromSection),
                ]
                    .flat(10)
                    .map((v) => v?.trim())
                    .filter((v) => Boolean(v))
                    .join(' ');
                return tabContent.toLowerCase().includes(search.toLowerCase());
            }
        );

        if (tab) {
            return tab.slug;
        }
    }
}
