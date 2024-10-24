import { Block } from 'payload/types';

export const Table: Block = {
    slug: 'table',
    imageURL: '/media/mediatable.webp',
    fields: [
        {
            name: 'rows',
            labels: {
                singular: 'Rad',
                plural: 'Rader',
            },
            type: 'array',
            fields: [
                {
                    name: 'type',
                    label: 'Type',
                    type: 'select',
                    required: true,
                    hasMany: false,
                    options: [
                        {
                            label: 'Hovedfarger',
                            value: 'mainColors',
                        },
                        {
                            label: 'Funksjonelle farger',
                            value: 'functionalColors',
                        },
                        {
                            label: 'Utvidede funksjonelle farger',
                            value: 'expandedFunctionalColors',
                        },
                        {
                            label: 'Spacing',
                            value: 'spacing',
                        },
                        {
                            label: 'Typografi',
                            value: 'typo',
                        },
                        {
                            label: 'Typografi liten skjerm',
                            value: 'typo-small',
                        },
                    ],
                },
            ],
        },
    ],
};
