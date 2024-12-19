import { CollectionConfig } from 'payload'

export const Components: CollectionConfig = {
  slug: 'components',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Sidetittel',
      required: true,
    },
    {
      name: 'ingress',
      type: 'richText',
      label: 'Ingress',
    },
  ],
}
