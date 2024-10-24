import { CollectionConfig } from 'payload/types';
import { authenticatedAdmins, authenticatedContributors } from '../access';
import { KnobUsage } from '../components/KnobUsage';
import prettierFormat from '../hooks/prettierFormat';

export const CodeExamples: CollectionConfig = {
    slug: 'codeExample',
    admin: {
        group: 'Annet innhold',
        useAsTitle: 'title',
        defaultColumns: ['title', 'components', 'noinline'],
    },
    access: {
        read: () => true,
        create: authenticatedContributors,
        update: authenticatedContributors,
        delete: authenticatedAdmins,
    },
    labels: {
        singular: 'Kodeeksempel',
        plural: 'Kodeeksempler',
    },
    defaultSort: 'title',
    fields: [
        {
            type: 'text',
            name: 'title',
            label: 'Tittel',
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Kode',
                    fields: [
                        {
                            type: 'checkbox',
                            name: 'noinline',
                            defaultValue: false,
                            label: 'Tillat kode utover rene komponenter',
                            admin: {
                                description:
                                    'Se dokumentasjon fra React Live for mer info',
                            },
                        },
                        {
                            type: 'code',
                            name: 'code',
                            label: 'Eksempelkode',
                            required: true,
                            admin: {
                                style: {
                                    maxWidth: '120ch',
                                },
                                description: KnobUsage,
                            },
                            hooks: {
                                beforeValidate: [
                                    ({ value, siblingData }) =>
                                        prettierFormat(value, {
                                            language: 'tsx',
                                            noinline: siblingData.noinline,
                                        }),
                                ],
                            },
                        },
                    ],
                },
                {
                    label: 'Egenskaper',
                    admin: {
                        description:
                            'Her kan du legge til egenskaper som kan endres i demoen ved hjelp av avkrysningsbokser eller radioknapper',
                    },
                    fields: [
                        {
                            name: 'knobs',
                            type: 'array',
                            label: 'Egenskaper',
                            labels: {
                                singular: 'Egenskap',
                                plural: 'Egenskaper',
                            },
                            fields: [
                                {
                                    name: 'label',
                                    type: 'text',
                                    label: 'Navn',
                                    required: true,
                                    admin: {
                                        description:
                                            'Vises som etikett for valget i kodeeksemplet, og for å referere til verdien i eksempelkoden',
                                    },
                                },
                                {
                                    name: 'type',
                                    type: 'radio',
                                    label: 'Type egenskap',
                                    options: [
                                        {
                                            label: 'Av/på',
                                            value: 'bool',
                                        },
                                        {
                                            label: 'Flervalg',
                                            value: 'choice',
                                        },
                                    ],
                                    defaultValue: 'bool',
                                    required: true,
                                },
                                {
                                    type: 'group',
                                    name: 'boolOptions',
                                    label: 'Av/på-verdier',
                                    admin: {
                                        condition: (_, siblingData) =>
                                            siblingData.type &&
                                            siblingData.type === 'bool',
                                    },
                                    fields: [
                                        {
                                            type: 'text',
                                            name: 'trueValue',
                                            defaultValue: 'true',
                                            required: true,
                                            label: 'Verdi hvis sann/på',
                                        },
                                        {
                                            type: 'text',
                                            name: 'falseValue',
                                            defaultValue: 'false',
                                            required: true,
                                            label: 'Verdi hvis usann/av',
                                        },
                                    ],
                                },
                                {
                                    type: 'array',
                                    name: 'choiceOptions',
                                    label: 'Flervalgsverdier',
                                    admin: {
                                        condition: (_, siblingData) =>
                                            siblingData.type &&
                                            siblingData.type === 'choice',
                                    },
                                    fields: [
                                        {
                                            type: 'text',
                                            name: 'label',
                                            label: 'Etikett',
                                            required: true,
                                        },
                                        {
                                            type: 'text',
                                            name: 'value',
                                            label: 'Verdi',
                                            required: true,
                                        },
                                    ],
                                },
                                {
                                    type: 'number',
                                    name: 'defaultValue',
                                    label: 'Standardvalg',
                                    required: true,
                                    defaultValue: 0,
                                    admin: {
                                        condition: (_, siblingData) =>
                                            siblingData.type &&
                                            siblingData.type === 'choice',
                                        description:
                                            'Indeksen til standardvalget (null-indeksert)',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'tabs',
            admin: {
                position: 'sidebar',
            },
            tabs: [
                {
                    label: 'Metadata',
                    fields: [
                        {
                            type: 'relationship',
                            name: 'components',
                            label: 'Relevante komponenter',
                            relationTo: 'components',
                            hasMany: true,
                            maxDepth: 0,
                            admin: {
                                position: 'sidebar',
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
