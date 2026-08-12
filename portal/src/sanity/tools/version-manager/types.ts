import { documents } from "@/sanity/schemas/documents";

export type Row = {
    _id: string;
    _type: string;
    title: string;
    versjon?: string;
    _updatedAt: string;
    _createdAt: string;
};

export const TYPES = documents.map((d) => d.name);

export const TYPE_TITLES: Record<string, string> = Object.fromEntries(
    documents.map((d) => [d.name, d.title ?? d.name]),
);
