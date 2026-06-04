import type { ColorMetadataMap } from "./types.js";

export const colorMetadata: ColorMetadataMap = {
    "@": {
        luminance: {
            light: 1,
            dark: 1,
        },
        maxChroma: 1,
    },
    "on-@": {
        luminance: {
            light: 1,
            dark: 1,
        },
        maxChroma: 1,
    },
    background: {
        luminance: {
            light: 0.96,
            dark: 0.1,
        },
        maxChroma: 0.005,
    },
    surface: {
        luminance: {
            light: 1,
            dark: 0.25,
        },
        maxChroma: 0.01,
    },
    "subtle-surface": {
        luminance: {
            light: 0.85,
            dark: 0.23,
        },
        maxChroma: 0.085,
    },
    content: {
        luminance: {
            light: 0.1,
            dark: 0.98,
        },
        maxChroma: 1,
    },
    "subtle-content": {
        luminance: {
            light: 0.3,
            dark: 0.7,
        },
        maxChroma: 1,
    },
    "subtle-border": {
        luminance: {
            light: 0.7,
            dark: 0.3,
        },
        maxChroma: 1,
    },
    border: {
        luminance: {
            light: 0.2,
            dark: 0.9,
        },
        maxChroma: 1,
    },
};
