import { SearchIcon } from '@fremtind/jkl-icons-react';
import { TextInput } from '@fremtind/jkl-text-input-react';
import type { Component, General, Foundation, Pattern } from '@org/cms';
import { NavLink, useSearchParams } from '@remix-run/react';
import React, {
    useEffect,
    useState,
    useCallback,
    type FC,
    type FormEvent,
} from 'react';
import { getPagePathFromId } from '../../components/navigation/utils';
import { SearchResult } from '../../components/search';
import { getTabFromMatch } from '../../components/search/search-utils';
import { useMainMenu } from '../../utils';
import { useFadingContent } from '~/hooks';

export const SearchResults: FC = () => {
    const [search, setSearch] = useSearchParams();
    const q = search.get('q') || '';

    const [matches, setMatches] = useState<
        Record<
            string,
            Array<{
                document: Component | General | Foundation | Pattern;
                field: string;
            }>
        >
    >({});

    useEffect(() => {
        if (!q) {
            return;
        }
        const doSearch = async () => {
            const response = await fetch(`/api/search?q=${q}&limit=100`);
            const data = await response.json();
            setMatches(data);
        };
        doSearch();
    }, [q, setMatches]);

    useFadingContent();
    const mainMenu = useMainMenu();

    const onSubmit = useCallback(
        (e: Event | FormEvent) => {
            e.preventDefault();

            const query = (
                document.querySelector(
                    'input[type="search"]'
                ) as HTMLInputElement
            ).value;

            if (!query) {
                return;
            }

            setSearch(`q=${query}`);
        },
        [setSearch]
    );

    const isEmpty = Object.entries(matches).every(
        ([, documents]) => documents.length === 0
    );

    return (
        <div className="search-results">
            <div className="search-results__header-container">
                <h1 className="search-results__heading">Søkeresultater</h1>
                <form name="search" onSubmit={onSubmit}>
                    <TextInput
                        label="Søk"
                        labelProps={{ srOnly: true }}
                        defaultValue={q}
                        type="search"
                        action={{
                            icon: <SearchIcon />,
                            label: 'Søk på siden',
                            onClick: onSubmit,
                        }}
                    />
                    <button type="submit" className="jkl-sr-only">
                        Søk på siden
                    </button>
                </form>
            </div>
            <div className="search-results__content">
                {isEmpty && <p>Ingen treff</p>}
                {Object.entries(matches).map(([collection, documents]) => {
                    const withLinks = documents
                        .map(({ document, field }) => {
                            let to = getPagePathFromId(mainMenu, document.id);
                            if (!to) {
                                // Siden finnes ikke i hovedmenyen
                                return null;
                            }

                            const tab = getTabFromMatch(document, q, field);
                            if (tab) {
                                to += `/${tab}`;
                            }

                            return {
                                ...document,
                                to,
                            };
                        })
                        .filter((doc) => {
                            return doc !== null;
                        });

                    if (withLinks.length === 0) {
                        return null;
                    }

                    return (
                        <div
                            className="search-results__category"
                            key={collection}
                        >
                            <h2 className="jkl-heading-1">{collection}</h2>
                            <div className="search-results__results">
                                {withLinks.map((document) => {
                                    if (document === null) {
                                        return null;
                                    }
                                    return (
                                        <NavLink
                                            className="search-results__result"
                                            to={document.to}
                                            key={document.id}
                                        >
                                            <SearchResult
                                                search={q}
                                                result={document}
                                            />
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
