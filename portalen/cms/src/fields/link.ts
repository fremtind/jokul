import { GroupField } from "payload/types";
import { allPageCollectionSlugs } from "../page-slugs";
import deepMerge from "../utilities/deepMerge";

type linkProps = {
    withoutLabel?: boolean;
    overrides?: Partial<GroupField>;
};

export const link = ({ withoutLabel, overrides }: linkProps): GroupField => {
    const baseLink: GroupField = {
        name: "link",
        label: "Lenke",
        type: "group",
        fields: [
            {
                name: "type",
                type: "radio",
                label: "Type lenke",
                required: true,
                options: [
                    {
                        label: "Intern lenke",
                        value: "reference",
                    },
                    {
                        label: "Egendefinert URL",
                        value: "custom",
                    },
                ],
                defaultValue: "reference",
                admin: {
                    layout: "horizontal",
                },
            },
            {
                type: "row",
                fields: [
                    {
                        name: "label",
                        label: "Lenketekst",
                        type: "text",
                        admin: {
                            width: "50%",
                            condition: () => !withoutLabel,
                        },
                    },
                    {
                        name: "reference",
                        label: "Side som skal lenkes til",
                        type: "relationship",
                        relationTo: allPageCollectionSlugs,
                        required: true,
                        maxDepth: 0,
                        admin: {
                            width: "50%",
                            condition: (_, linkFields) =>
                                linkFields?.type === "reference",
                        },
                    },
                    {
                        name: "url",
                        label: "Egendefinert URL",
                        type: "text",
                        required: true,
                        admin: {
                            width: "50%",
                            condition: (_, linkFields) =>
                                linkFields?.type === "custom",
                        },
                    },
                ],
            },
            {
                name: "newTab",
                label: "Åpne i ny fane",
                type: "checkbox",
                defaultValue: false,
                admin: {
                    width: "50%",
                },
            },
        ],
    };

    return deepMerge(baseLink, overrides);
};
