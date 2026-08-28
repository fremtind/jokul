import { blocks } from "@/sanity/schemas/blocks";
import { documents } from "@/sanity/schemas/documents";
import { seoFields } from "@/sanity/schemas/fields";
import {
    colorSchemeImages,
    storybookEmbed,
    storybookExample,
} from "@/sanity/schemas/objects";
import { toBeDeleted } from "@/sanity/schemas/to-be-deleted";
import { siteData } from "./documents/siteData";
import { internalLink } from "./links/internalLink";

export const schemaTypes = [
    ...documents,
    ...toBeDeleted,
    ...blocks,
    siteData,
    colorSchemeImages,
    seoFields,
    internalLink,
    storybookEmbed,
    storybookExample,
];
