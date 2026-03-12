"use client";

import { client } from "@/sanity/lib/client";
import { searchQuery } from "@/sanity/queries/search";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Icon } from "@fremtind/jokul/icon";
import { Link as JklLink } from "@fremtind/jokul/link";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

import styles from "./search.module.scss";

type SearchResult = {
    _id: string;
    name: string | null;
    slug: { current?: string } | null;
    short_description: string | null;
    image: string | null;
    type: "Komponent" | "Fundament" | "Blogg";
    href: string;
};

const getRankScore = (result: SearchResult, query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) return Number.POSITIVE_INFINITY;

    const fields: Array<{ value: string | null; weight: number }> = [
        { value: result.name, weight: 0 },
        { value: result.short_description, weight: 1 },
        { value: result.type, weight: 2 },
        { value: result.href, weight: 3 },
    ];

    let best = Number.POSITIVE_INFINITY;

    for (const field of fields) {
        const text = (field.value || "").toLowerCase();
        const index = text.indexOf(q);
        if (index === -1) continue;

        const score = field.weight * 1000 + index;
        if (score < best) best = score;
    }

    const blogPenalty = result.type === "Blogg" ? 10_000 : 0;
    return best + blogPenalty;
};

const escapeRegExp = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightMatch = (text: string | null, query: string) => {
    if (!text) return text;

    const q = query.trim();
    if (!q) return text;

    const normalizedQuery = q.toLowerCase();
    const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, "gi"));

    if (parts.length === 1) return text;

    return parts.map((part, index) =>
        part.toLowerCase() === normalizedQuery && part.length > 2 ? (
            <mark key={`${part}-${index}`}>{part}</mark>
        ) : (
            <Fragment key={`${part}-${index}`}>{part}</Fragment>
        ),
    );
};

export const Results = ({
    searchString = "",
    onNavigate,
}: {
    searchString: string;
    onNavigate?: () => void;
}) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const resultLinkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

    useEffect(() => {
        const trimmed = searchString.trim();

        if (trimmed) {
            client
                .fetch<SearchResult[]>(searchQuery, { searchString })
                .then((fetched) => {
                    const ranked = [...fetched].sort((a, b) => {
                        const aScore = getRankScore(a, trimmed);
                        const bScore = getRankScore(b, trimmed);

                        if (aScore !== bScore) return aScore - bScore;

                        // Stable-ish fallback for equal rank
                        return (a.name || "").localeCompare(b.name || "");
                    });

                    setResults(ranked);
                });
            setSelectedIndex(-1);
        } else {
            setResults([]);
            setSelectedIndex(-1);
        }
    }, [searchString]);

    useEffect(() => {
        resultLinkRefs.current = resultLinkRefs.current.slice(
            0,
            results.length,
        );
    }, [results]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (results.length === 0) return;

            const activeElement = document.activeElement as HTMLElement | null;
            const isSearchInput = activeElement?.matches(
                "input[type='search']",
            );
            const isResultLink =
                activeElement?.dataset.searchResultLink === "true";

            if (!isSearchInput && !isResultLink) {
                return;
            }

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex((prev) =>
                        prev < results.length - 1
                            ? prev + 1
                            : results.length - 1,
                    );
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex((prev) => {
                        if (prev === -1) {
                            return results.length - 1;
                        }
                        return prev > 0 ? prev - 1 : 0;
                    });
                    break;
                case "Enter":
                    if (selectedIndex >= 0 && isSearchInput) {
                        e.preventDefault();
                        resultLinkRefs.current[selectedIndex]?.click();
                    }
                    break;
                case "Escape":
                    setSelectedIndex(-1);
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [results, selectedIndex]);

    useEffect(() => {
        if (selectedIndex >= 0) {
            const link = resultLinkRefs.current[selectedIndex];
            link?.focus();
            link?.closest("li")?.scrollIntoView({ block: "nearest" });
        }
    }, [selectedIndex]);

    if (!searchString.trim()) {
        return (
            <Card variant="low" padding="xl">
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="s"
                >
                    <Icon>search</Icon>
                    <p>Søk i vei</p>
                </Flex>
            </Card>
        );
    }

    if (!results.length) {
        return (
            <Card variant="low" padding="xl">
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="s"
                    textAlign="center"
                >
                    <Icon>sentiment_very_dissatisfied</Icon>
                    <p>
                        Fant ingenting. Prøv å søke etter noe annet, eller{" "}
                        <JklLink href="https://github.com/fremtind/jokul/issues/new?template=innspill-komponent.yml">
                            send en forespørsel om innhold
                        </JklLink>
                        .
                    </p>
                </Flex>
            </Card>
        );
    }

    return (
        <Flex
            as="ul"
            direction="column"
            style={{ listStyleType: "none", padding: 0, margin: 0 }}
            gap="none"
        >
            {results.map((result, index) => (
                <Card
                    as="li"
                    key={result._id}
                    data-search-result-index={index}
                    className={styles.result}
                >
                    <Flex gap="s" alignItems="center">
                        <figure
                            style={{
                                width: "86px",
                                height: "86px",
                                padding: "0",
                                margin: "0",
                                background: "var(--jkl-color-background-page)",
                                border: "1px solid var(--jkl-color-border-separator)",
                                borderRadius: "4px",
                                overflow: "hidden",
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {result.image && (
                                <img
                                    src={result.image}
                                    alt=""
                                    style={{
                                        objectFit: "cover",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            )}
                        </figure>
                        <Flex direction="column" gap="none">
                            <p>
                                <JklLink
                                    as={Link}
                                    href={result.href}
                                    onClick={onNavigate}
                                    ref={(element) => {
                                        resultLinkRefs.current[index] =
                                            element as HTMLAnchorElement | null;
                                    }}
                                    data-search-result-link="true"
                                    tabIndex={index === selectedIndex ? 0 : -1}
                                >
                                    {highlightMatch(result.name, searchString)}
                                </JklLink>
                                <span className={styles.type}>
                                    {highlightMatch(result.type, searchString)}
                                </span>
                            </p>

                            <p className={styles.description}>
                                {highlightMatch(
                                    result.short_description ||
                                        "Ingen beskrivelse",
                                    searchString,
                                )}
                            </p>
                        </Flex>
                    </Flex>
                </Card>
            ))}
        </Flex>
    );
};
