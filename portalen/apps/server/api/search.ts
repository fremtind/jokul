import {
    Component,
    General,
    Foundation,
    Pattern,
    Blog,
    payload,
} from "@org/cms";
import express = require("express");
import { Document, IndexOptionsForDocumentSearch } from "flexsearch";

/**
 * Match collectionstrukturen i Payload
 * https://github.com/nextapps-de/flexsearch#complex-documents
 * Tips er å sjekke JSON-responsen fra Payload via lenke i CMSet (nederst i sidebaren).
 * Kopier inn responsen, formater den, og følg navnene på feltene for å finne riktig path.
 *
 * For å kunne fremheve innholdet i søkeresultatet (vise treff i kontekst) må du også
 * oppdatere SearchResult.tsx i frontenden. Uten det vil treffet
 * fortsatt dukke opp, men det vil kunne være uten highlight.
 */

const richTextIndices = (prefix?: string) => {
    // Søk etter tekst noen nivåer ned i rike tekstfelter
    const indices = [
        "children[]:text",
        "children[]:children[]:text",
        "children[]:children[]:children[]:text",
        "children[]:children[]:children[]:children[]:text",
    ];

    return indices.map((index) => (prefix ? `${prefix}:${index}` : index));
};

// Indekser for alle innholdsblokker
const contentBlockIndices = [
    // Anatomieksempel:
    "steps[]:title",
    "steps[]:description",
    // Karusell:
    // 'steps[]:title', // Finnes allerede i Anatomieksempel
    ...richTextIndices("steps[]:description"),
    // Fargekort:
    "cards[]:color",
    // Fargetabell:
    "rows[]:color",
    // Do/don't-eksempler:
    "doDontItem[]:description",
    // Liste med lenkekort:
    "links[]:title",
    "links[]:description",
    // Live-eksempel:
    // 'codeExample:code',
    "codeExample:title",
    // Rik tekst:
    ...richTextIndices("content[]"),
    // Showcase:
    "showcaseItem[]:title",
    "showcaseItem[]:origin",
    "showcaseItem[]:description",
    // Token-tabell:
    "rows[]:element",
    "rows[]:property",
    "rows[]:role",
];

// Indekser for alle sideseksjonsblokker
const pageSectionIndices = [
    // Tittel og ingress (felles for mange blokker):
    "title",
    ...richTextIndices("ingress[]"),
    // Hero/CTA:
    ...richTextIndices("heroText[]"),
    "actions[]:link:label",
    // Figma-eksempler:
    "examples[]:fileName",
    // Liste med lenkekort:
    "links[]:title",
    "links[]:description",
    // Live-eksempler:
    // 'codeExample:code',
    "codeExample:title",
    // Sideoverskrift:
    "ingress", // Denne bruker et vanlig tekstfelt for ingress
    // Showcase:
    "showcaseItem[]:title",
    "showcaseItem[]:origin",
    "showcaseItem[]:description",
    // Video-CTA:
    "description",
    // Generell sideseksjon:
    // alle innholdsblokker, inne i content[]
    ...contentBlockIndices.map((index) => `content[]:${index}`),
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sharedOptions: IndexOptionsForDocumentSearch<unknown, any> = {
    language: "no",
    tokenize: "forward",
};

const componentsIndex = new Document({
    ...sharedOptions,
    document: {
        id: "id",
        index: [
            "title",
            ...richTextIndices("ingress[]"),
            "tabs[]:title",
            ...pageSectionIndices.map((index) => `tabs[]:sections[]:${index}`),
        ],
    },
});

const generalIndex = new Document({
    ...sharedOptions,
    document: {
        id: "id",
        index: [
            "title",
            ...richTextIndices("ingress[]"),
            "tabs[]:title",
            ...pageSectionIndices.map((index) => `tabs[]:sections[]:${index}`),
        ],
    },
});

const foundationsIndex = new Document({
    ...sharedOptions,
    document: {
        id: "id",
        index: [
            "title",
            ...richTextIndices("ingress[]"),
            "tabs[]:title",
            ...pageSectionIndices.map((index) => `tabs[]:sections[]:${index}`),
        ],
    },
});

const patternsIndex = new Document({
    ...sharedOptions,
    document: {
        id: "id",
        index: [
            "title",
            ...richTextIndices("ingress[]"),
            "tabs[]:title",
            ...pageSectionIndices.map((index) => `tabs[]:sections[]:${index}`),
        ],
    },
});

const blogIndex = new Document({
    ...sharedOptions,
    document: {
        id: "id",
        index: [
            "title",
            ...richTextIndices("ingress[]"),
            ...pageSectionIndices.map((index) => `sections[]:${index}`),
        ],
    },
});

/**
 * key = slug til collection
 */
export const indexes = {
    components: componentsIndex,
    foundations: foundationsIndex,
    general: generalIndex,
    patterns: patternsIndex,
    blog: blogIndex,
};

const indexLabels: Record<string, string> = {
    components: "Komponenter",
    foundations: "Fundamenter",
    general: "Generell",
    patterns: "Mønstre",
    blog: "Bloggposter",
};

const search: express.Router = express.Router();

search.get("/", async (req, res) => {
    const searchParam = req.query["q"];
    const limitParam = req.query["limit"];
    if (typeof searchParam !== "string") {
        return res.status(400).send();
    }

    let limit = 10;
    if (typeof limitParam === "string") {
        try {
            const newLimit = Number.parseInt(limitParam);
            if (Number.isInteger(newLimit) && newLimit > 0 && newLimit < 1000) {
                limit = newLimit;
            } else {
                return res.status(400).send();
            }
        } catch (e) {
            return res.status(400).send();
        }
    }

    const map: Record<
        keyof typeof indexes,
        Map<
            string | number,
            {
                document: Component | Foundation | General | Pattern | Blog;
                field: string;
            }
        >
    > = {
        components: new Map(),
        foundations: new Map(),
        general: new Map(),
        patterns: new Map(),
        blog: new Map(),
    };

    for (const [collection, index] of Object.entries(indexes)) {
        const matches = await index.searchAsync(searchParam, {
            limit,
        });

        for (const match of matches) {
            for (const documentId of match.result) {
                if (!documentId) {
                    continue;
                }

                // Dropp duplikate sidetreff
                if (map[collection as keyof typeof indexes].has(documentId)) {
                    continue;
                }

                const document = await payload.findByID({
                    id: documentId,
                    collection: collection as keyof typeof indexes,
                });

                map[collection as keyof typeof indexes].set(documentId, {
                    document,
                    field: match.field,
                });
            }
        }
    }

    const results = Object.entries(map).reduce<
        Record<
            string,
            Array<{
                document: Component | Foundation | General | Pattern | Blog;
                field: string;
            }>
        >
    >((acc, [collection, map]) => {
        return {
            ...acc,
            [indexLabels[collection]]: [
                ...(acc[indexLabels[collection]] || []),
                ...map.values(),
            ],
        };
    }, {});

    console.log(results);

    return res.status(200).json(results);
});

export default search;
