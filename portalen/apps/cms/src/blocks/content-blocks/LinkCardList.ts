import { Block, Field } from 'payload/types';
import { link } from '../../fields/link';

export const linkCardFields: Field[] = [
    {
        type: 'text',
        name: 'title',
        label: 'Sidetittel',
        required: true,
    },
    {
        type: 'text',
        name: 'description',
        label: 'Beskrivelse',
    },
    link({ withoutLabel: true }),
];

export const LinkCardList: Block = {
    slug: 'link-card-list',
    labels: {
        singular: 'Liste med lenkekort',
        plural: 'Lister med lenkekort',
    },
    imageURL: '/media/medialenkekort.webp',
    fields: [
        {
            type: 'array',
            name: 'links',
            label: 'Lenker',
            labels: {
                singular: 'Lenke',
                plural: 'Lenker',
            },
            fields: linkCardFields,
        },
    ],
};
