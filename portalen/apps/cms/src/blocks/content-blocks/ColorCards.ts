import { Block } from 'payload/types';

export const ColorCard: Block = {
    slug: 'color-card',
    imageURL: '/media/mediacolorcard.webp',
    fields: [
        {
            name: 'cards',
            labels: {
                singular: 'Kort',
                plural: 'Kort',
            },
            type: 'array',
            fields: [
                {
                    name: 'color',
                    type: 'select',
                    options: [
                        {
                            label: 'Svart',
                            value: 'svart',
                        },
                        {
                            label: 'Skifer',
                            value: 'skifer',
                        },
                        {
                            label: 'Stein',
                            value: 'stein',
                        },
                        {
                            label: 'Svaberg',
                            value: 'svaberg',
                        },
                        {
                            label: 'Dis',
                            value: 'dis',
                        },
                        {
                            label: 'Sand',
                            value: 'sand',
                        },
                        {
                            label: 'Hvit',
                            value: 'hvit',
                        },
                        {
                            label: 'Suksess',
                            value: 'suksess',
                        },
                        {
                            label: 'Info',
                            value: 'info',
                        },
                        {
                            label: 'Advarsel',
                            value: 'advarsel',
                        },
                        {
                            label: 'Feil',
                            value: 'feil',
                        },
                    ],
                },
            ],
        },
    ],
};
