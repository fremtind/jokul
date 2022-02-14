import { AutocompleteSource } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";

/**
 * This is the public API key to use in your frontend code. This key is only usable for search queries and sending data to the Insights API.
 * The key is restricted to work on jokul.fremtind.no, and is rate limited.
 * https://www.algolia.com/doc/guides/security/security-best-practices/
 * https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/javascript/?client=javascript
 *
 */
const searchOnlyApiKey = "f8a338dd8d63bebdac11e29c4607ae17";
const appId = "QKC2U21V9H";

export const searchClient = algoliasearch(appId, searchOnlyApiKey);

export type IndexItem = {
    path: string;
    title: string;
    excerpt: string;
};

type Source = Array<AutocompleteSource<IndexItem>>;

function debounceSearch(fn: (items: Source) => Promise<Source>) {
    let timerId: number | undefined = undefined;

    return function debounced(items: Source): Promise<Source> {
        if (timerId) {
            clearTimeout(timerId);
        }

        return new Promise((resolve) => {
            timerId = window.setTimeout(() => resolve(fn(items)), 300);
        });
    };
}

export const debouncedSearch = debounceSearch((items: Source) => Promise.resolve(items));
