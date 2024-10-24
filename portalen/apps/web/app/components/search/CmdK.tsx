import { NavCard } from '@fremtind/jkl-card-react';
import { IconButton } from '@fremtind/jkl-icon-button-react';
import { SearchIcon } from '@fremtind/jkl-icons-react';
import { useClickOutside } from '@fremtind/jkl-react-hooks';
import type { Component, General, Foundation, Pattern, Blog } from '@org/cms';
import { NavLink, useNavigate } from '@remix-run/react';
import { Command } from 'cmdk';
import React, {
    type Dispatch,
    type SetStateAction,
    useState,
    type FC,
    useRef,
    useCallback,
} from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useMainMenu } from '../../utils';
import { getPagePathFromId } from '../navigation/utils';
import { getTabFromMatch } from './search-utils';
import { SearchResult } from './SearchResult';

let controller: AbortController | null;

const doSearch = async (search: string) => {
    if (controller) {
        controller.abort();
    }
    controller = new AbortController();
    const response = await fetch(
        `/api/search?q=${encodeURIComponent(search)}&limit=9`,
        { signal: controller.signal }
    );
    const data = await response.json();
    return data;
};

export const CmdK: FC<{
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
}> = ({ open, onOpenChange }) => {
    const dialog = useRef<HTMLDivElement>(null);
    useClickOutside(dialog, () => {
        onOpenChange(false);
    });

    const [search, setSearch] = useState('');
    const [hasResponded, setHasResponded] = useState(false);

    const [matches, setMatches] = useState<
        Record<
            string,
            Array<{
                document: Component | General | Foundation | Pattern | Blog;
                field: string;
            }>
        >
    >({});

    const debouncedSearchFor = useDebouncedCallback(
        async (searchString) => {
            if (!searchString) {
                setMatches({});
                return;
            }
            try {
                const data = await doSearch(searchString);
                setMatches(data);
                setHasResponded(true);
            } catch (e) {
                const error = e as Error;
                if (error.name === 'AbortError') {
                    return;
                }
                console.error(error);
            }
        },
        200,
        {
            maxWait: 400,
            leading: true,
            trailing: true,
        }
    );

    const handleSearch = useCallback(
        (searchString: string) => {
            setSearch(searchString);
            debouncedSearchFor(searchString);
        },
        [debouncedSearchFor]
    );

    const navigate = useNavigate();
    const mainMenu = useMainMenu();

    return (
        <Command.Dialog
            ref={dialog}
            label="Søk"
            open={open}
            onOpenChange={onOpenChange}
            shouldFilter={false} // Vi gjør filtreringen på backend
        >
            <div className="cmdk-input-wrapper">
                <Command.Input
                    value={search}
                    onValueChange={handleSearch}
                    placeholder="Søk"
                />
                <IconButton
                    className="jkl-text-input-action-button"
                    title="Avansert søk"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.stopPropagation();
                            e.preventDefault();
                            navigate(`/soek?q=${search}`);
                            onOpenChange(false);
                        }
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        navigate(`/soek?q=${search}`);
                        onOpenChange(false);
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </div>
            <Command.List aria-label="Søketreff">
                {hasResponded ? (
                    <Command.Empty
                        style={{
                            padding: 'var(--jkl-spacing-24)',
                        }}
                    >
                        {/* TODO: hent heading og kort fra en global i CMSet? */}
                        <p className="jkl-heading-2 jkl-spacing-24--bottom">
                            Ingen treff. Har du prøvd her?
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'var(--jkl-spacing-12)',
                            }}
                        >
                            <NavCard
                                title="Fundamenter"
                                component={NavLink}
                                to="/fundamenter/oversikt"
                                onClick={() => onOpenChange(false)}
                            />
                            <NavCard
                                title="Kom i gang"
                                component={NavLink}
                                to="/kom-i-gang/oversikt"
                                onClick={() => onOpenChange(false)}
                            />
                            <NavCard
                                title="Komponenter"
                                component={NavLink}
                                to="/komponenter/oversikt"
                                onClick={() => onOpenChange(false)}
                            />
                            <NavCard
                                title="Mønstre"
                                component={NavLink}
                                to="/monstre/oversikt"
                                onClick={() => onOpenChange(false)}
                            />
                        </div>
                    </Command.Empty>
                ) : null}
                {Object.entries(matches).map(([collection, documents]) => {
                    const withLinks = documents
                        .map(({ document, field }) => {
                            let to: string | undefined;
                            if (collection === 'Bloggposter') {
                                to = `/blogg/${(document as Blog).slug}`;
                            } else {
                                to = getPagePathFromId(mainMenu, document.id);
                            }
                            if (!to) {
                                // Siden finnes ikke i hovedmenyen
                                return null;
                            }

                            const tab = getTabFromMatch(
                                document,
                                search,
                                field
                            );
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
                        <Command.Group heading={collection} key={collection}>
                            {withLinks.map((document) => {
                                if (document === null) {
                                    return null;
                                }
                                return (
                                    <Command.Item
                                        key={document.id}
                                        id={document.id}
                                        value={document.id}
                                        onSelect={() => {
                                            navigate(document.to);
                                            onOpenChange(false);
                                        }}
                                    >
                                        <SearchResult
                                            search={search}
                                            result={document}
                                        />
                                    </Command.Item>
                                );
                            })}
                        </Command.Group>
                    );
                })}
            </Command.List>
        </Command.Dialog>
    );
};
