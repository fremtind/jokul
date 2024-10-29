import { GlobalConfig } from 'payload/types';
import { allPageSectionBlocks } from '../blocks/page-sections';

export const AllSections: GlobalConfig = {
    slug: 'all-sections',
    label: 'Alle sideseksjoner',
    admin: {
        group: 'Admin',
        hidden: true,
    },
    fields: [
        {
            type: 'blocks',
            name: 'sections',
            required: true,
            blocks: allPageSectionBlocks,
        },
    ],
};
