import { Field } from "payload/types";
import { link } from "./link";

/**
 * Bruk denne funksjonen for å få menypunkter til hovedmenyen. Kalt uten
 * argumenter gir den mulighet til å lage lenker. Sender man inn et array
 * av felter kan man også legge inn undermenyer der hvert menypunkt utgjøres
 * av feltene man har sendt inn. Funksjonen kan sendes inn som argument
 * til seg selv (se eksempel)!
 *
 * @example
 * // Gir en meny der elementene kun kan være lenker
 * {
 *      type: 'array',
 *      name: 'items',
 *      label: 'Menyelementer',
 *      fields: menuItemFields(),
 * }
 *
 * @example
 * // Gir en nøstet meny der elementene på nivå to kun kan være lenker
 * {
 *      type: 'array',
 *      name: 'items',
 *      label: 'Menyelementer',
 *      fields: menuItemFields(menuItemFields()),
 * }
 *
 * @param {Field[]} subMenuItemFields Et array med felter som utgjør strukturen
 * til menypunktene i eventuelle undermenyer. Hvis det er undefined kan menyen
 * kun bestå av lenker.
 * @returns {Field[]} Et array med felter som kan brukes som f.eks. menypunkter i en meny.
 */
export const menuItemFields = (subMenuItemFields?: Field[]): Field[] => [
    {
        type: "row",
        fields: [
            {
                type: "text",
                name: "label",
                label: "Etikett",
                required: true,
                admin: {
                    width: "50%",
                    description: "Teksten som vises i menyen",
                },
            },
            {
                type: "text",
                name: "slug",
                label: "Slug",
                required: true,
                admin: {
                    width: "50%",
                    description:
                        "Del av URL som skal legges før menypunktene i undermenyen",
                    condition: (_, siblingData) =>
                        siblingData.type === "menu" ||
                        siblingData.link?.type === "reference",
                },
            },
        ],
    },
    {
        name: "type",
        type: "radio",
        defaultValue: "link",
        required: true,
        admin: {
            layout: "horizontal",
            hidden: !subMenuItemFields,
        },
        options: [
            {
                label: "Lenke",
                value: "link",
            },
            {
                label: "Undermeny",
                value: "menu",
            },
        ],
    },
    link({
        withoutLabel: true,
        overrides: {
            admin: {
                hideGutter: true,
                condition: (_, siblingFields) => siblingFields.type === "link",
            },
        },
    }),
    {
        type: "group",
        name: "menu",
        label: "Undermeny",
        admin: {
            hideGutter: true,
            condition: (_, siblingFields) =>
                siblingFields.type === "menu" && !!subMenuItemFields,
        },
        fields: [
            {
                type: "array",
                name: "items",
                label: "Menyelementer",
                labels: {
                    singular: "menyelement",
                    plural: "menyelementer",
                },
                required: true,
                fields: subMenuItemFields || [],
            },
        ],
    },
];
