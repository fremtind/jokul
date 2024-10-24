import { slugify } from '@org/shared';
import { CollectionConfig } from 'payload/types';
import { authenticatedContributors, authenticatedEditors } from '../access';
import { link } from '../fields/link';

export const MenuItems: CollectionConfig = {
    slug: 'menu-items',
    labels: {
        singular: 'Menypunkt',
        plural: 'Menypunkter',
    },
    access: {
        read: () => true,
        create: authenticatedContributors,
        delete: authenticatedEditors,
        update: authenticatedContributors,
    },
    admin: {
        useAsTitle: 'title',
        group: 'Hovedmeny',
        defaultColumns: ['title', 'slug'],
        description:
            'Menypunkter som kan legges til i hovedmenyen. Tips: Det er lettere å opprette menypunktet rett fra hovedmenyen der du skal bruke det.',
    },
    defaultSort: 'title',
    fields: [
        {
            type: 'row',
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    label: 'Tittel',
                    required: true,
                },
                {
                    type: 'text',
                    name: 'slug',
                    label: 'Slug',
                    required: true,
                    admin: {
                        description:
                            'Stien til siden. Fylles automatisk inn fra tittel hvis feltet er tomt.',
                    },
                    // Feltet autoutfylles fra tittel hvis det er tomt,
                    // så vi lar alltid feltet være gyldig selv om det er påkrevd.
                    validate: () => true,
                    hooks: {
                        beforeValidate: [
                            ({ value, siblingData }) =>
                                value || slugify(siblingData.title),
                        ],
                    },
                },
            ],
        },
        link({
            withoutLabel: true,
            overrides: {
                admin: {
                    hideGutter: true,
                },
            },
        }),
    ],
};
