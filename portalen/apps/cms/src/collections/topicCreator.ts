import { slugify } from '@org/shared';
import { slateEditor } from '@payloadcms/richtext-slate';
import type { CollectionConfig, Field, TabsField } from 'payload/types';
import {
    authenticatedContributors,
    authenticatedEditors,
    defaultReadAccess,
} from '../access/index';
import { allPageSectionBlocks } from '../blocks/page-sections';
import { pageMeta } from '../fields/meta';

type TopicCreatorProps = {
    slug: string;
    overrides?: Partial<Omit<CollectionConfig, 'slug' | 'fields'>>;
    customFields?: {
        heading?: string;
        fields: Field[];
    };
};

export const createTopicCollection = ({
    slug,
    customFields,
    overrides,
}: TopicCreatorProps): CollectionConfig => {
    const customFieldsTab: TabsField['tabs'] = customFields
        ? [
              {
                  label: customFields.heading || 'Custom felter',
                  fields: customFields.fields,
              },
          ]
        : [];

    return {
        slug: slug,
        admin: {
            group: 'Innholdssider',
            useAsTitle: 'title',
            defaultColumns: ['title', 'parent'],
            // TODO: Finn en bedre måte å unngå typefeil på importer i serveren
            /* eslint-disable @typescript-eslint/ban-ts-comment */
            preview: (doc) => {
                // @ts-ignore typesjekk i serveren klager over window
                if (typeof window !== 'undefined') {
                    // @ts-ignore
                    const { protocol, host } = window.location;

                    return `${protocol}//${host}/preview/${slug}/${doc.id}`;
                } else {
                    return '#';
                }
            },
            /* eslint-enable @typescript-eslint/ban-ts-comment */
        },
        versions: {
            drafts: true,
        },
        access: {
            read: defaultReadAccess,
            create: authenticatedContributors,
            update: authenticatedContributors,
            delete: authenticatedEditors,
        },
        ...overrides,
        defaultSort: 'title',
        fields: [
            {
                name: 'title',
                type: 'text',
                label: 'Sidetittel',
                required: true,
            },
            {
                type: 'tabs',
                tabs: [
                    {
                        label: 'Innhold',
                        fields: [
                            {
                                name: 'ingress',
                                type: 'richText',
                                label: 'Ingress',
                                editor: slateEditor({
                                    admin: {
                                        elements: ['link'],
                                    },
                                }),
                            },
                            {
                                name: 'tabs',
                                type: 'array',
                                label: 'Undersider',
                                labels: {
                                    singular: 'Underside',
                                    plural: 'Undersider',
                                },
                                required: true,
                                fields: [
                                    {
                                        type: 'text',
                                        name: 'title',
                                        label: 'Tittel for underside',
                                        required: true,
                                        admin: {
                                            className: 'tab-title-field',
                                        },
                                    },
                                    {
                                        type: 'text',
                                        name: 'slug',
                                        label: 'Sti for undersiden',
                                        required: true,
                                        hooks: {
                                            beforeValidate: [
                                                ({ value, siblingData }) =>
                                                    value ||
                                                    slugify(siblingData.title),
                                            ],
                                        },
                                        admin: {
                                            description:
                                                'Genereres automatisk ut fra tittelen ved lagring hvis du lar feltet stå tomt',
                                        },
                                    },
                                    {
                                        type: 'blocks',
                                        name: 'sections',
                                        label: 'Sideseksjoner',
                                        labels: {
                                            singular: 'Sideseksjon',
                                            plural: 'Sideseksjoner',
                                        },
                                        admin: {
                                            description:
                                                'Sideseksjonene som skal vises på undersiden. Vises med hver sin overskrift og dukker opp i innholdsfortegnelsen',
                                        },
                                        blocks: allPageSectionBlocks,
                                        required: true,
                                    },
                                ],
                            },
                        ],
                    },
                    ...customFieldsTab,
                    {
                        label: 'Metadata',
                        fields: [pageMeta],
                    },
                ],
            },
        ],
    };
};
