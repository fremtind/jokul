import { Block, PayloadRequest } from 'payload/types';

const fetchContent = async ({ req }: { req: PayloadRequest }) => {
    return (
        await req.payload.find({
            collection: 'blog',
            user: req.user,
            overrideAccess: false,
            sort: '-published_date',
            limit: 3,
            where: {
                and: [
                    {
                        _status: { equals: 'published' },
                    },
                    {
                        published_date: { less_than: new Date().toJSON() },
                    },
                    {
                        'tag.type': {
                            equals: 'info',
                        },
                    },
                ],
            },
        })
    ).docs.map((b: Partial<any>) => {
        return {
            tagType: b.tag.type,
            tagLabel: b.tag.label,
            title: b.title,
            ingress: b.ingress,
            author: b.author.name,
            slug: b.slug,
            date: b.published_date,
            image: b.meta?.imageLight?.url,
        };
    });
};

export const ScrollSection: Block = {
    slug: 'scroll',
    imageURL: '/media/mediascroll.webp',
    fields: [
        {
            admin: { hidden: true },
            type: 'array',
            name: 'type',
            required: true,
            fields: [
                {
                    name: 'tagType',
                    type: 'text',
                },
                {
                    name: 'tagLabel',
                    type: 'text',
                },
                {
                    type: 'text',
                    name: 'title',
                },
                {
                    type: 'richText',
                    name: 'ingress',
                },
                {
                    type: 'text',
                    name: 'author',
                },
                {
                    type: 'text',
                    name: 'slug',
                },
                {
                    type: 'date',
                    name: 'date',
                },
                {
                    type: 'text',
                    name: 'image',
                },
            ],
            hooks: {
                beforeValidate: [fetchContent],
                afterRead: [fetchContent],
            },
        },
    ],
};
