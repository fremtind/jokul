import plugin from "tailwindcss/plugin";
import { tokens, breakpoints } from "../..";

export default plugin(function ({ addComponents }) {
    addComponents({
        ".title": {
            ...tokens.typography.title.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.title.base,
            },
        },
        ".title-small": {
            ...tokens.typography.titleSmall.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.titleSmall.base,
            },
        },
        ".heading-1": {
            ...tokens.typography.heading_1.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.heading_1.base,
            },
        },
        ".heading-2": {
            ...tokens.typography.heading_2.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.heading_2.base,
            },
        },
        ".heading-3": {
            ...tokens.typography.heading_3.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.heading_3.base,
            },
        },
        ".heading-4": {
            ...tokens.typography.heading_4.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.heading_4.base,
            },
        },
        ".heading-5": {
            ...tokens.typography.heading_5.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.heading_5.base,
            },
        },
        ".body": {
            ...tokens.typography.body.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.body.base,
            },
        },
        ".small": {
            ...tokens.typography.small.small,
            [`@media (min-width: ${breakpoints.medium}px)`]: {
                ...tokens.typography.small.base,
            },
        },
    });
});
