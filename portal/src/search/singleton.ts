import { type SearchDocument, buildSearchIndex } from "@/search/index";
import { Document } from "flexsearch";

declare global {
    // eslint-disable-next-line no-var
    var __searchIndex: Document<SearchDocument> | undefined;
    // eslint-disable-next-line no-var
    var __searchIndexInitialised: boolean | undefined;
}

const REBUILD_INTERVAL_MS = 10 * 60 * 1000; // 10 minutter

/**
 * Oppretter en ny FlexSearch Document-indeks med feltene og vektene som brukes
 * på tvers av alle dokumenttyper. Høyere `resolution` gir høyere vekt i søketreff:
 *   - title:             resolution 9  (høyest vekt)
 *   - short_description: resolution 7  (middels vekt)
 *   - bodyText:          resolution 5  (lavere vekt)
 *   - keywords:          resolution 1  (lavest vekt)
 *
 * `store: true` gjør at hele dokumentet lagres i indeksen, slik at API-ruten
 * kan returnere innhold direkte uten å slå opp i Sanity på nytt.
 */
function createIndex(): Document<SearchDocument> {
    return new Document<SearchDocument>({
        document: {
            id: "id",
            index: [
                {
                    field: "title",
                    tokenize: "forward",
                    resolution: 9,
                },
                {
                    field: "short_description",
                    tokenize: "forward",
                    resolution: 7,
                },
                {
                    field: "bodyText",
                    tokenize: "forward",
                    resolution: 5,
                },
                {
                    field: "keywords",
                    tokenize: "forward",
                    resolution: 1,
                },
            ],
            store: true,
        },
    });
}

/**
 * Den delte FlexSearch-indeksen for hele serverprosessen.
 * Festes til `globalThis` slik at alle kopier av modulgrafen i Next.js —
 * instrumenteringshook, API-ruter osv. — bruker samme instans i stedet for
 * hver sin tomme kopi.
 */
export function getSearchIndex(): Document<SearchDocument> {
    if (!globalThis.__searchIndex) {
        globalThis.__searchIndex = createIndex();
    }
    return globalThis.__searchIndex;
}

/**
 * Initialiserer søkeindeksen og setter opp periodisk gjenoppbygging.
 *
 * Trygt å kalle flere ganger — bare det første kallet har effekt, så denne
 * kan kalles fra Next.js-instrumenteringshook eller en API-rute uten risiko
 * for å starte duplikate intervaller.
 */
export function initSearchIndex(): void {
    if (globalThis.__searchIndexInitialised) {
        return;
    }
    globalThis.__searchIndexInitialised = true;

    const index = getSearchIndex();

    buildSearchIndex(index).catch((err) => {
        console.error("[search] Initial index build failed:", err);
    });

    setInterval(() => {
        buildSearchIndex(index).catch((err) => {
            console.error("[search] Scheduled index rebuild failed:", err);
        });
    }, REBUILD_INTERVAL_MS);
}
