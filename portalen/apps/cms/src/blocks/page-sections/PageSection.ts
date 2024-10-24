import { allContentBlocks } from '../content-blocks';
import { createPageSectionBlock } from './createPageSectionBlock';

export const PageSection = createPageSectionBlock({
    slug: 'page-section',
    labels: {
        singular: 'Generell sideseksjon',
        plural: 'Generelle sideseksjoner',
    },
    imageURL: '/media/mediagenerellsideseksjon.webp',
    fields: [
        {
            type: 'blocks',
            name: 'content',
            label: 'Innholdsblokker',
            blocks: allContentBlocks,
            admin: {
                description:
                    'Her kan du legge til blokker med innhold av typen du ønsker. Bruk for eksempel Rich Text for å legge til tekst, eller Showcase for å vise frem komponenter.',
            },
        },
    ],
});
