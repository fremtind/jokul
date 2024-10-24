import { slateEditor } from '@payloadcms/richtext-slate';
import { CollectionConfig } from 'payload/types';
import { authenticatedAdmins } from '../access/index';
import { allPageSectionBlocks } from '../blocks/page-sections';
import { pageMeta } from '../fields/meta';

export const GENERAL_PAGE_SLUG = 'general';

export const General: CollectionConfig = {
    slug: GENERAL_PAGE_SLUG,
    admin: {
        group: 'Innholdssider',
        useAsTitle: 'title',
        // TODO: Finn en bedre måte å unngå typefeil på importer i serveren
        /* eslint-disable @typescript-eslint/ban-ts-comment */
        preview: (doc) => {
            // @ts-ignore typesjekk i serveren klager over window
            if (typeof window !== 'undefined') {
                // @ts-ignore
                const { protocol, host } = window.location;

                return `${protocol}//${host}/preview/${GENERAL_PAGE_SLUG}/${doc.id}`;
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
        read: () => true,
        create: authenticatedAdmins,
        delete: authenticatedAdmins,
        update: authenticatedAdmins,
    },
    labels: {
        singular: 'Generell side',
        plural: 'Generelle sider',
    },
    defaultSort: 'title',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Tittel',
            required: true,
            admin: {
                description:
                    'Vises som tittel i søkeresultater, og i listen over sider i CMS-et',
            },
        },
        {
            name: 'ingress',
            type: 'richText',
            label: 'Ingress',
            editor: slateEditor({
                admin: {
                    elements: ['link'],
                },
            }),
            admin: {
                description: 'Valgfri',
            },
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Innhold',
                    fields: [
                        {
                            name: 'sections',
                            label: 'Sideseksjoner',
                            type: 'blocks',
                            blocks: allPageSectionBlocks,
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Metadata',
                    fields: [pageMeta],
                },
            ],
        },
    ],
};

export default General;
