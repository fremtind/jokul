import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { FormatProvider } from "../Typography";
import "./uu.scss";

type Role = "developer" | "designer";

type Tag =
    | "skjema"
    | "bilder"
    | "tabell"
    | "tekstinnhold"
    | "media"
    | "modal"
    | "innlogging"
    | "animasjon"
    | "navigasjon"
    | "liste";

const tagMap: { [key in Tag]: string } = {
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

interface MDXNode {
    id: string;
    slug: string;
    frontmatter: {
        title: string;
        tags: Tag[];
        wcagRules: string[];
        role?: Role[];
    };
    body: string;
}

// TODO Scroll til søkeresultat ved klikk på "Kjør UU"
// TODO Trykk i resultatlisten skal scrolle til den enkelte
// TODO Animasjoner av innholdsendringer

export const UU = () => {
    const data = useStaticQuery<{
        allMdx: {
            nodes: MDXNode[];
        };
    }>(graphql`
        {
            allMdx(filter: { fileAbsolutePath: { regex: "/.*/texts/uu/.*/" } }) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                        tags
                        wcagRules
                        role
                    }
                    body
                }
            }
        }
    `);

    const availableTags: Tag[] = useMemo(() => {
        if (!data) {
            return [];
        }

        const tagsForFilter = data.allMdx.nodes.map((node) => node.frontmatter.tags);

        // create a unique array of tags
        return Array.from(new Set(tagsForFilter.flat()));
    }, [data]);

    const [search, setSearch] = useState("");
    const [role, setRole] = useState<Role | "both">("both");
    const [tagFilter, setTagFilter] = useState(
        // set up a checkbox state where key is the tag name
        availableTags.reduce((obj, t) => {
            obj[t] = { checked: false };
            return obj;
        }, {} as { [key in Tag]: { checked: boolean } }),
    );

    console.log(availableTags);

    const handleClear = () => setSearch("");

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const onRoleChange = (e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value as Role);

    const onTagChange = (e: ChangeEvent<HTMLInputElement>) => {
        const _t = { ...tagFilter };
        _t[e.target.value as Tag] = {
            checked: e.target.checked,
        };

        setTagFilter(_t);
    };

    const filterByTag = useCallback(
        (node: MDXNode) => {
            // find tags where checked is true, and make it into a tuple
            const checkedTags = Object.entries(tagFilter).filter(([, { checked }]) => checked) as [
                Tag,
                { checked: boolean },
            ][];

            // if no filter is set, #nofilter
            if (checkedTags.length === 0) {
                return true;
            }

            // check if any checked tag matches a tag in the node
            return node.frontmatter.tags.some((t) =>
                checkedTags.find(([filterTag, { checked }]) => filterTag === t && checked),
            );
        },
        [tagFilter],
    );

    const filterBySearch = useCallback(
        (node: MDXNode) => {
            const bodyMatch = node.body.includes(search);
            const wcagMatch = node.frontmatter.wcagRules.includes(search);

            return bodyMatch || wcagMatch;
        },
        [search],
    );

    const filterByRole = useCallback(
        (node: MDXNode) => {
            if (role === "both") {
                return true;
            }

            if (!node.frontmatter.role) {
                return true;
            }

            return node.frontmatter.role.includes(role);
        },
        [role],
    );

    // check if a filter is enabled
    const hasFilter = useMemo(() => {
        const hasSearchFilter = !!search;
        const hasRoleFilter = role !== "both";
        const hasTagsFilter = !!Object.entries(tagFilter).filter(([, { checked }]) => checked).length;

        return hasSearchFilter || hasRoleFilter || hasTagsFilter;
    }, [search, role, tagFilter]);

    const filteredNodes = useMemo(() => {
        if (!data) {
            return [];
        }

        if (!hasFilter) {
            return data.allMdx.nodes;
        }

        return data.allMdx.nodes.filter(filterByTag).filter(filterBySearch).filter(filterByRole);
    }, [data, hasFilter, filterBySearch, filterByRole, filterByTag]);

    return (
        <section className="jkl-portal__uu">
            <section className="uu__section--search">
                <RadioButtons
                    onChange={onRoleChange}
                    selectedValue={role}
                    legend="Velg rolle"
                    name="rolle"
                    choices={[
                        { label: "Utvikler", value: "developer" },
                        { label: "Designer", value: "designer" },
                        { label: "Begge", value: "both" },
                    ]}
                />

                <FieldGroup legend="Hva inneholder løsningen din?">
                    {Object.entries(tagFilter).map(([tag, { checked }]) => (
                        <Checkbox name="uu-area-tag" value={tag} key={tag} checked={checked} onChange={onTagChange}>
                            {tagMap[tag as Tag]}
                        </Checkbox>
                    ))}
                </FieldGroup>

                <PrimaryButton>Kjør UU</PrimaryButton>
            </section>

            <section className="uu__section--search-results">
                <h2>{hasFilter ? "Resultat" : "Alle artikler"}</h2>

                {hasFilter && (
                    <ul className="uu__filter-result-list">
                        {filteredNodes.map((node) => (
                            <li key={node.id} className="jkl-link">
                                {node.frontmatter.title}
                            </li>
                        ))}
                    </ul>
                )}

                <TextInput
                    variant="small"
                    width="316px"
                    label="Søk"
                    placeholder="Søk"
                    value={search}
                    onChange={onSearchChange}
                    className="uu__filter-search"
                    action={{ icon: "clear", label: "Fjern søk", onClick: handleClear }}
                />

                {filteredNodes.map((node) => (
                    <article key={node.id} className="uu-article">
                        <header className="uu-article__header">
                            <h3 className="uu-article__header--heading">{node.frontmatter.title}</h3>
                            <ul className="uu-article__header--tags">
                                {node.frontmatter.tags.map((t) => (
                                    <span key={t} className="uu-article__header__tag">
                                        {tagMap[t]}
                                    </span>
                                ))}
                            </ul>
                        </header>
                        <FormatProvider>
                            <MDXRenderer>{node.body}</MDXRenderer>
                        </FormatProvider>
                    </article>
                ))}
            </section>
        </section>
    );
};
