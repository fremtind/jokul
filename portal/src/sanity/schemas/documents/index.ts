import { blogPost } from "@/sanity/schemas/documents/blogPost";
import { component } from "@/sanity/schemas/documents/component";
import { fundamentals } from "@/sanity/schemas/documents/fundamentals";
import { monster } from "@/sanity/schemas/documents/monster";
import { releaseNotes } from "@/sanity/schemas/documents/releaseNotes";
import { temaside } from "@/sanity/schemas/documents/temaside";

export const documents = [
    blogPost,
    component,
    fundamentals,
    releaseNotes,
    temaside,
    monster,
] as const;

export type DocumentType = (typeof documents)[number]["name"];
