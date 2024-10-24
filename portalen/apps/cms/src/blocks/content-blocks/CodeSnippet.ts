import type { Block } from 'payload/types';
import prettierFormat, { languageSupport } from '../../hooks/prettierFormat';

export const CodeSnippet: Block = {
    slug: 'code-snippet',
    labels: {
        singular: 'Kodesnutt',
        plural: 'Kodesnutter',
    },
    imageURL: '/media/mediakodesnutt.webp',
    fields: [
        {
            name: 'code',
            type: 'code',
            label: 'Eksempelkode',
            required: true,
            admin: {
                width: '100%',
                style: {
                    maxWidth: '120ch',
                },
            },
            hooks: {
                beforeValidate: [
                    ({ value, siblingData }) =>
                        prettierFormat(value, {
                            language: siblingData.language,
                            noinline: siblingData.noinline,
                        }),
                ],
            },
        },
        {
            name: 'language',
            type: 'select',
            options: Object.entries(languageSupport).map(([label, value]) => ({
                label,
                value,
            })),
            label: 'Språk',
            required: true,
            defaultValue: 'tsx',
            admin: {
                description:
                    'Brukes til å vise riktig syntax highlighting i eksempelkoden.',
                width: '50ch',
            },
        },
    ],
};
