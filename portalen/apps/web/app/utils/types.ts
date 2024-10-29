import type { Component, General, Foundation, Pattern } from "@org/cms";

export type PageType = Component | General | Pattern | Foundation;

export type PageCollection = "patterns" | "components" | "general" | "foundations";

export type PageCollectionType = PageType & {
    collection: PageCollection;
};

export interface DokumentasjonssideTabProps {
    className?: string;
}
