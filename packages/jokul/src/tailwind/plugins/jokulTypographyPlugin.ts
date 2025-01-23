import plugin from "tailwindcss/plugin.js";
import tokens from "../../core/tokens.js";

const { breakpoint, typography } = tokens;

export const jokulTypographyPlugin = plugin(({ addComponents }) => {
    addComponents({
        ".title": {
            ...typography.title.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.title.base,
            },
        },
        ".title-small": {
            ...typography.titleSmall.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.titleSmall.base,
            },
        },
        ".heading-1": {
            ...typography.heading_1.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.heading_1.base,
            },
        },
        ".heading-2": {
            ...typography.heading_2.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.heading_2.base,
            },
        },
        ".heading-3": {
            ...typography.heading_3.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.heading_3.base,
            },
        },
        ".heading-4": {
            ...typography.heading_4.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.heading_4.base,
            },
        },
        ".heading-5": {
            ...typography.heading_5.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.heading_5.base,
            },
        },
        ".body": {
            ...typography.body.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.body.base,
            },
        },
        ".small": {
            ...typography.small.small,
            [`@media (min-width: ${breakpoint.medium})`]: {
                ...typography.small.base,
            },
        },
    });
});
