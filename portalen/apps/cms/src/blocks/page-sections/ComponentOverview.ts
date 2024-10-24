import { Block } from 'payload/types';
import { Component } from '../../types';

export const ComponentOverview: Block = {
    slug: 'component-overview',
    imageURL: '/media/mediakomponentoversikt.webp',
    fields: [
        {
            name: 'intro',
            type: 'richText',
        },
        {
            name: 'components',
            admin: {
                description: 'Hvis ingen komponenter velges vises alle',
            },
            type: 'array',
            fields: [
                {
                    name: 'component',
                    type: 'relationship',
                    relationTo: 'components',
                    required: true,
                },
            ],
            hooks: {
                afterRead: [
                    async ({ req, value }) => {
                        if (
                            // This is ugly but the alternative is probably worse.
                            // When reading the collection from the admin UI we
                            // do not want to automatically fill in all components if none
                            // are selected
                            req.header?.('Referer')?.includes('/admin') ||
                            value.length > 0
                        ) {
                            return value;
                        }

                        const { docs: components } = await req.payload.find({
                            collection: 'components',
                            depth: 1, // Sørg for å ikke hente opp mer innhold enn nødvendig (vi trenger ett nivå for bilder i metadata)
                            where: {
                                type: { equals: 'Komponent' },
                            },
                            limit: 100,
                        });
                        return components.map((component: Component) => ({
                            // This id really should be the id of a relation but since we're faking
                            // them there is no relation. The typings still expect an id field so
                            // we're using the component id.
                            id: component.id,
                            component,
                        }));
                    },
                ],
            },
        },
    ],
};
