import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        group: 'Annet innhold',
    },
    access: {
        read: (): boolean => true, // Everyone can read Media
    },
    upload: {
        adminThumbnail: 'card',
        formatOptions: {
            format: 'webp',
        },
        imageSizes: [
            {
                name: 'thumbnail',
                width: 100,
                height: 100,
                fit: 'inside',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 50,
                    },
                },
            },
            {
                name: 'tiny',
                width: 400,
                height: 400,
                fit: 'inside',
                formatOptions: {
                    format: 'webp',
                },
            },
            {
                name: 'small',
                width: 800,
                height: 800,
                fit: 'inside',
                formatOptions: {
                    format: 'webp',
                },
            },
            {
                name: 'medium',
                width: 1200,
                height: 1200,
                fit: 'inside',
                formatOptions: {
                    format: 'webp',
                },
            },
            {
                name: 'large',
                width: 1920,
                height: 1920,
                fit: 'inside',
                formatOptions: {
                    format: 'webp',
                },
            },
        ],
    },
    fields: [
        {
            type: 'text',
            name: 'aspectRatio',
            label: 'Sideforhold',
            admin: {
                description:
                    'Overstyr sideforholdet til bildet eller videoen når det vises med MediaViewer. Format er høyde / bredde, f.eks. 16 / 9 eller 1200 / 800. Hvis du lar feltet stå tomt brukes 16 / 9 for videoer eller bildets dimensjoner for bilder.',
            },
        },
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: false,
        },
    ],
};

export default Media;
