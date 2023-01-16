import { PrimaryButton } from "@fremtind/jkl-button-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { Link } from "@fremtind/jkl-core";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { useScrollIntoView } from "@fremtind/jkl-react-hooks";
import { Tag } from "@fremtind/jkl-tag-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import React, { ChangeEvent, FC, useCallback, useContext, useMemo, useRef, useState } from "react";
import { a11yContext } from "../../a11yContext";
import { UUContent, uuContent, UUTagType } from "./uu-content";
import { getCriteriaById } from "./wcag";
import "./uu.scss";

const tagMap: { [key in UUTagType]: string } = {
    skjema: "Skjema",
    bilder: "Bilder",
    tabell: "Tabell",
    tekstinnhold: "Tekstinnhold",
    media: "Media (lyd/video)",
    modal: "Modal/Dialog",
    innlogging: "Innlogging",
    animasjon: "Animasjon",
    navigasjon: "Navigasjon",
    liste: "Lister",
};

export const UU: FC = () => {
    const availableTags = useMemo(() => {
        const tagsForFilter = uuContent.map((node) => node.tags);
        // create a unique array of tags
        return Array.from(new Set(tagsForFilter.flat()));
    }, []);

    const { prefersReducedMotion } = useContext(a11yContext);
    const resultWrapperRef = useRef<HTMLElement>(null);
    const [search, setSearch] = useState("");
    const [tagFilter, setTagFilter] = useState(
        // set up a checkbox state where key is the tag name
        availableTags.reduce((obj, t) => {
            obj[t] = { checked: false };
            return obj;
        }, {} as { [key in UUTagType]: { checked: boolean } }),
    );

    const [scrollToResults] = useScrollIntoView({
        ref: resultWrapperRef,
        autoScroll: false,
    });

    const handleClear = () => setSearch("");

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const onTagChange = (e: ChangeEvent<HTMLInputElement>) => {
        const _t = { ...tagFilter };
        _t[e.target.value as UUTagType] = {
            checked: e.target.checked,
        };

        setTagFilter(_t);
    };

    const filterByTag = useCallback(
        (node: UUContent) => {
            // find tags where checked is true, and make it into a tuple
            const checkedTags = Object.entries(tagFilter).filter(([, { checked }]) => checked) as [
                UUTagType,
                { checked: boolean },
            ][];

            // if no filter is set, #nofilter
            if (checkedTags.length === 0) {
                return true;
            }

            // check if any checked tag matches a tag in the node
            return node.tags.some((t) => checkedTags.find(([filterTag, { checked }]) => filterTag === t && checked));
        },
        [tagFilter],
    );

    const filterBySearch = useCallback(
        (node: UUContent) => {
            const titleMatch = node.title.toLowerCase().includes(search.toLowerCase());
            const wcagMatch = node.wcagRules ? node.wcagRules.includes(search) : true;
            return titleMatch || wcagMatch;
        },
        [search],
    );

    // check if a filter is enabled
    const hasFilter = useMemo(() => {
        const hasSearchFilter = !!search;
        const hasTagsFilter = !!Object.entries(tagFilter).filter(([, { checked }]) => checked).length;

        return hasSearchFilter || hasTagsFilter;
    }, [search, tagFilter]);

    const filteredNodes = useMemo(() => {
        if (!hasFilter) {
            return uuContent;
        }

        return uuContent.filter(filterByTag).filter(filterBySearch);
    }, [hasFilter, filterBySearch, filterByTag]);

    return (
        <section className="jkl-portal__uu">
            <section className="uu__section--search">
                <FieldGroup legend="Hva inneholder løsningen din?">
                    {Object.entries(tagFilter).map(([tag, { checked }]) => (
                        <Checkbox name="uu-area-tag" value={tag} key={tag} checked={checked} onChange={onTagChange}>
                            {tagMap[tag as UUTagType]}
                        </Checkbox>
                    ))}
                </FieldGroup>

                <PrimaryButton onClick={scrollToResults}>Vis resultat</PrimaryButton>
            </section>

            <section className="uu__section--search-results" ref={resultWrapperRef}>
                <TextInput
                    width="316px"
                    label="Søk"
                    labelProps={{ variant: "small" }}
                    placeholder="Søk i artikler"
                    value={search}
                    onChange={onSearchChange}
                    className="uu__filter-search"
                    action={hasFilter ? { icon: "clear", label: "Fjern søk", onClick: handleClear } : undefined}
                    aria-label="Søk i artikler"
                />

                {hasFilter && <h2>Resultat</h2>}

                <ul className="uu__filter-result-list">
                    {hasFilter &&
                        filteredNodes.map((node) => (
                            <motion.li
                                key={node.id}
                                initial={{ y: prefersReducedMotion ? 0 : -40, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                }}
                                layout
                                transition={{
                                    type: "tween",
                                    duration: 0.3,
                                }}
                                exit={{
                                    y: prefersReducedMotion ? 0 : 40,
                                    opacity: 0,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <GatsbyLink to={`#${node.id}`} className="jkl-link">
                                    {node.title}
                                </GatsbyLink>
                            </motion.li>
                        ))}
                </ul>

                {filteredNodes.map((node) => (
                    <article key={node.id} className="uu-article">
                        <header className="uu-article__header">
                            <h3 className="uu-article__heading" id={node.id}>
                                {node.title}
                            </h3>
                            <ul className="uu-article__tags" aria-label="Artikkel tags">
                                {node.tags.map((t) => (
                                    <li key={t} /* className="uu-article__header__tag" */>
                                        <Tag>{tagMap[t]}</Tag>
                                    </li>
                                ))}
                            </ul>
                        </header>
                        {node.body()}
                        {(node.wcagRules?.length || node.links?.length) && (
                            <>
                                <h4>Lenker</h4>
                                <ul className="uu-article__links uu-article__links--wcag">
                                    {node.wcagRules?.map((rule) => {
                                        const criteria = getCriteriaById(rule);
                                        return (
                                            <li key={rule}>
                                                <Link
                                                    title={`${criteria.title} på w3.org`}
                                                    href={`https://www.w3.org/TR/WCAG21/#${criteria.w3OrgId}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    external
                                                >
                                                    WCAG {rule}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className="uu-article__links">
                                    {node.links?.map(([label, url]) => (
                                        <li key={url}>
                                            <Link href={url} external={!url.startsWith("/") && !url.startsWith("#")}>
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </article>
                ))}
            </section>
        </section>
    );
};
