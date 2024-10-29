import { Command } from "cmdk";
import { Search } from "payload/components";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Component, Foundation, General, Pattern } from "../../types";

const categories: { [key: string]: string } = {
    Fundamenter: "foundations",
    Generell: "general",
    Komponenter: "components",
    Mønstre: "patterns",
};

let controller: AbortController | null;

export const GlobalSearch = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 200, {
        maxWait: 400,
        leading: true,
        trailing: true,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [matches, setMatches] = useState<Record<
        string,
        Array<{
            document: Component | General | Foundation | Pattern;
            field: string;
        }>
    > | null>(null);

    useEffect(() => {
        (async () => {
            controller?.abort();

            if (!debouncedSearch) {
                setMatches(null);
                return;
            }

            controller = new AbortController();
            setIsLoading(true);

            const result = await fetch(`/api/search?q=${debouncedSearch}&limit=9`, { signal: controller.signal }).then(
                (res) => res.json(),
            );

            setMatches(result);
            setIsLoading(false);
        })();
        return () => controller?.abort();
    }, [debouncedSearch]);

    return (
        <div className={"jkl-portal-admin-global-search"}>
            <Command label="Command Menu" shouldFilter={false}>
                <div className={"search-filter"}>
                    <Command.Input
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus={true}
                        className={`search-filter__input`}
                        placeholder={"Globalt sidesøk"}
                        onValueChange={(value) => setSearch(value)}
                    />
                    <Search />
                </div>
                {matches && (
                    <Command.List>
                        <>
                            {!isLoading && <Command.Empty>Fant ingen sider</Command.Empty>}
                            {isLoading && <Command.Loading>Søker…</Command.Loading>}
                            {Object.entries(matches)
                                .filter(([, documents]) => documents.length > 0)
                                .map(([category, documents]) => (
                                    <Command.Group heading={category} key={`${category}`}>
                                        {documents.map(({ document }) => (
                                            <Command.Item
                                                key={document.id}
                                                value={`/admin/collections/${categories[category]}/${document.id}`}
                                                onSelect={(url) => {
                                                    window.location.href = url;
                                                }}
                                            >
                                                {document.title}
                                            </Command.Item>
                                        ))}
                                    </Command.Group>
                                ))}
                        </>
                    </Command.List>
                )}
            </Command>
        </div>
    );
};
