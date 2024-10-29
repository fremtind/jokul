import type { Block } from 'payload/types';
import { createPageSectionBlock } from './createPageSectionBlock';

export const PackageReportSection: Block = createPageSectionBlock({
    slug: 'package-report-section',
    defaultHeading: 'Kom i gang',
    labels: {
        singular: 'Pakkeinformasjon',
        plural: 'Pakkeinformasjon',
    },
    imageURL: '/media/mediapakkeinformasjon.webp',
    fields: [
        {
            name: 'installCode',
            type: 'textarea',
            label: 'Hvordan installere',
            required: true,
            admin: {
                width: '100%',
            },
        },
        {
            name: 'usageCode',
            type: 'textarea',
            label: 'Hvordan bruke',
            required: true,
            admin: {
                width: '100%',
            },
        },
        {
            name: 'reactDocs',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Tittel',
                    required: true,
                },
                {
                    name: 'href',
                    type: 'text',
                    label: 'Lenke',
                    required: true,
                },
            ],
        },
        {
            name: 'cssDocs',
            label: 'CSS Docs',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Tittel',
                    required: true,
                },
                {
                    name: 'href',
                    type: 'text',
                    label: 'Lenke',
                    required: true,
                },
            ],
        },
    ],
});
