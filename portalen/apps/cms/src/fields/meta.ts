import { Field } from 'payload/types';

export const pageMeta: Field = {
    name: 'meta',
    label: 'Page Meta',
    type: 'group',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
        },
        {
            name: 'keywords',
            label: 'Keywords',
            type: 'text',
        },
        {
            name: 'imageLight',
            label: 'Forhåndsvisningsbilde (Lyst)',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description:
                    'Om det ikke finnes et bilde vil det genereres et fra Figma-lenken.',
            },
        },
        {
            name: 'imageDark',
            label: 'Forhåndsvisningsbilde (Mørkt)',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description:
                    'Om det ikke finnes et bilde vil det genereres et fra Figma-lenken.',
            },
        },
        {
            name: 'figma',
            label: 'Forhåndsvisningsbilde (Figma)',
            type: 'text',
            admin: {
                description:
                    'Om det ikke finnes en Figma-lenke, eller et bilde, vil et coverbilde genereres fra sidetittelen.',
            },
        },
    ],
};
