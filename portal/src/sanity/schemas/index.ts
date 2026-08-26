import { blocks } from "@/sanity/schemas/blocks";
import { documents } from "@/sanity/schemas/documents";
import { seoFields } from "@/sanity/schemas/fields";
import { colorSchemeImages } from "@/sanity/schemas/objects";
import { toBeDeleted } from "@/sanity/schemas/to-be-deleted";
import { siteData } from "./documents/siteData";
import { story } from "./documents/story";
import { internalLink } from "./links/internalLink";

export const schemaTypes = [
    ...documents,
    ...toBeDeleted,
    ...blocks,
    story,
    siteData,
    colorSchemeImages,
    seoFields,
    internalLink,
];
