import { Block } from 'payload/types';
import { LinkCardList } from '../content-blocks';
import { createPageSectionBlock } from './createPageSectionBlock';

export const LinkCardListSection: Block = createPageSectionBlock({
    ...LinkCardList,
    slug: 'link-card-list-section',
    imageURL: '/media/medialenkekort.webp',
});
