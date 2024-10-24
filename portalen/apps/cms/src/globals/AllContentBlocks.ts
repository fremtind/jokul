import { GlobalConfig } from 'payload/types';
import { allContentBlocks } from '../blocks/content-blocks';

export const AllBlocks: GlobalConfig = {
    slug: 'all-content-blocks',
    label: 'Innholdsblokker',
    admin: {
        group: 'Admin',
        hidden: true,
    },
    fields: [
        {
            name: 'blocks',
            type: 'blocks',
            blocks: allContentBlocks,
            required: true,
        },
    ],
};
