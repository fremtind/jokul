import { slateEditor } from '@payloadcms/richtext-slate';
import { Block } from 'payload/types';
import { link } from '../../fields/link';

export const HeroSection: Block = {
    slug: 'hero-section',
    labels: {
        singular: 'Hero',
        plural: 'Hero-seksjoner',
    },
    imageURL: '/media/mediahero.webp',
    fields: [
        {
            type: 'richText',
            name: 'heroText',
            label: 'Hero-tekst',
            editor: slateEditor({
                admin: {
                    elements: ['link'],
                    leaves: ['bold', 'italic'],
                },
            }),
        },
        {
            type: 'array',
            name: 'actions',
            label: 'Handlinger',
            labels: {
                singular: 'Handling',
                plural: 'Handlinger',
            },
            admin: {
                description: 'CTA-lenker utformet som knapper',
            },
            fields: [
                {
                    type: 'select',
                    name: 'type',
                    label: 'Knappetype',
                    required: true,
                    options: [
                        {
                            value: 'primary',
                            label: 'Primær',
                        },
                        {
                            value: 'secondary',
                            label: 'Sekundær',
                        },
                        {
                            value: 'tertiary',
                            label: 'Tertiær',
                        },
                    ],
                    defaultValue: 'primary',
                },
                link({}),
            ],
        },
    ],
};
