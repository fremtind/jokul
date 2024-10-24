import { slateEditor } from '@payloadcms/richtext-slate';
import { type Block } from 'payload/types';

export const RichTextBlock: Block = {
    slug: 'rich-text',
    labels: {
        singular: 'Rikt tekstinnhold',
        plural: 'Rikt tekstinnhold',
    },
    imageURL: '/media/mediarichtext.webp',
    fields: [
        {
            type: 'richText',
            name: 'content',
            label: 'Rikt tekstinnhold',
            editor: slateEditor({
                admin: {
                    hideGutter: true,
                },
            }),
        },
    ],
};
