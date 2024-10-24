import { CollectionConfig } from 'payload/types';
import { authenticatedAdmins } from '../access';
import { FeedbackList } from '../components/FeedbackList';

export const Feedback: CollectionConfig = {
    slug: 'feedback',
    labels: {
        singular: 'Tilbakemelding',
        plural: 'Tilbakemeldinger',
    },
    access: {
        read: authenticatedAdmins,
        delete: () => false,
        update: () => false,
        create: () => true,
    },
    admin: {
        group: 'Admin',
        components: {
            views: {
                List: FeedbackList,
            },
        },
    },
    fields: [
        {
            name: 'page',
            type: 'text',
        },
        {
            name: 'feedbackValue',
            type: 'number',
        },
        {
            name: 'message',
            type: 'textarea',
        },
    ],
};
