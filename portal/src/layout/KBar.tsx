import cn from "classnames";
import { navigate } from "gatsby";
import {
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    useMatches,
    KBarResults,
    ActionImpl,
    useRegisterActions,
    Action,
} from "kbar";
import React, { useCallback, type FC } from "react";
import {
    pageNames,
    PageType,
    useNavigationLinks,
} from "./header/useNavigationLinks";
import "./kbar.scss";

export const KBar: FC = () => {
    const {
        getStartedDocPages,
        profileDocPages,
        componentDocPages,
        demoPages,
        uuDocPages,
        guiderDocPages,
        blogPages,
    } = useNavigationLinks();

    const mapToAction = useCallback(
        ({
            parent,
            name,
            path,
            keywords,
        }: {
            parent: PageType;
            name: string;
            path: string;
            keywords?: string;
        }): Action => {
            return {
                id: path,
                name,
                parent,
                keywords,
                section: pageNames[parent],
                perform: () => navigate(path),
            };
        },
        [],
    );

    useRegisterActions([
        {
            id: "hjem",
            name: "Hjem",
            keywords: "index landing",
            section: "Områder",
            perform: () => navigate("/"),
        },
        {
            id: PageType.KOMIGANG,
            name: pageNames[PageType.KOMIGANG],
            keywords: "start introduksjon",
            section: "Områder",
        },
        ...getStartedDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                keywords: page.keywords,
                parent: PageType.KOMIGANG,
            }),
        ),
        {
            id: PageType.PROFIL,
            name: pageNames[PageType.PROFIL],
            keywords: "typografi font logo farger spacing stil tone stemme",
            section: "Områder",
        },
        ...profileDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                keywords: page.keywords,
                parent: PageType.PROFIL,
            }),
        ),
        {
            id: PageType.KOMPONENTER,
            name: pageNames[PageType.KOMPONENTER],
            section: "Områder",
        },
        ...componentDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                keywords: `${page.group} ${page.keywords || ""}`.trim(),
                parent: PageType.KOMPONENTER,
            }),
        ),
        {
            id: PageType.DEMOER,
            name: pageNames[PageType.DEMOER],
            section: "Områder",
        },
        ...demoPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                keywords: page.keywords,
                parent: PageType.DEMOER,
            }),
        ),
        {
            id: PageType.UU,
            name: pageNames[PageType.UU],
            section: "Områder",
        },
        ...uuDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                keywords: page.keywords,
                parent: PageType.UU,
            }),
        ),
        {
            id: PageType.GUIDER,
            name: pageNames[PageType.GUIDER],
            section: "Områder",
        },
        ...guiderDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                keywords: page.keywords,
                parent: PageType.GUIDER,
            }),
        ),
        {
            id: PageType.BLOG,
            name: pageNames[PageType.BLOG],
            section: "Områder",
        },
        ...blogPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                keywords: page.keywords,
                parent: PageType.BLOG,
            }),
        ),
    ]);

    return (
        <KBarPortal>
            <KBarPositioner className="kbar-positioner">
                <KBarAnimator className="jkl kbar-animator">
                    <KBarSearch
                        className="kbar-search"
                        defaultPlaceholder="Skriv en kommando eller søk"
                    />
                    <RenderResults />
                </KBarAnimator>
            </KBarPositioner>
        </KBarPortal>
    );
};

const RenderResults: FC = () => {
    const { results, rootActionId } = useMatches();
    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) => {
                if (typeof item === "string") {
                    return <div className="kbar-group-name">{item}</div>;
                }

                return (
                    <ResultItem
                        item={item}
                        active={active}
                        currentRootActionId={rootActionId}
                    />
                );
            }}
        />
    );
};

const ResultItem: FC<{
    item: ActionImpl;
    active: boolean;
    currentRootActionId: string | null | undefined;
}> = ({ item, active, currentRootActionId }) => {
    const ancestors = React.useMemo(() => {
        if (!currentRootActionId) return item.ancestors;
        const index = item.ancestors.findIndex(
            (ancestor) => ancestor.id === currentRootActionId,
        );
        return item.ancestors.slice(index + 1);
    }, [item.ancestors, currentRootActionId]);

    return (
        <div
            className={cn("kbar-result-item", {
                "kbar-result-item--active": active,
            })}
        >
            <div className="kbar-result-item__wrapper">
                {item.icon && item.icon}
                <div className="kbar-result-item__content">
                    <div>
                        {ancestors.length > 0 &&
                            ancestors.map((ancestor) => (
                                <React.Fragment key={ancestor.id}>
                                    <span className="kbar-result-item__ancestor">
                                        {ancestor.name}
                                    </span>
                                    <span className="kbar-result-item__divider">
                                        &rsaquo;
                                    </span>
                                </React.Fragment>
                            ))}
                        <span>{item.name}</span>
                    </div>
                    {item.subtitle && (
                        <span style={{ fontSize: 12 }}>{item.subtitle}</span>
                    )}
                </div>
            </div>
            {item.shortcut?.length ? (
                <div aria-hidden className="kbar-shortcut">
                    {item.shortcut.map((sc) => (
                        <kbd className="kbar-shortcut__key" key={sc}>
                            {sc}
                        </kbd>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
