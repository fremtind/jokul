import { Block } from 'payload/types';
import { createPageSectionBlock } from './createPageSectionBlock';

export const FigmaExampleSection: Block = createPageSectionBlock({
    slug: 'figma-example-section',
    defaultHeading: 'Figma-eksempler',
    labels: {
        singular: 'Figma-eksempel',
        plural: 'Figma-eksempler',
    },
    imageURL: '/media/figma-eksempel.png',
    fields: [
        {
            type: 'array',
            name: 'examples',
            labels: {
                singular: 'Eksempel',
                plural: 'Eksempler',
            },
            fields: [
                {
                    type: 'text',
                    name: 'fileName',
                    label: 'Navn',
                    required: true,
                },
                {
                    type: 'text',
                    name: 'url',
                    label: 'Figma-lenke',
                    required: true,
                    admin: {
                        description:
                            'Du finner denne lenken ved å trykke "Share" i Figma. Husk å krysse av for "Link to selected frame"',
                    },
                },
            ],
        },
    ],
});
