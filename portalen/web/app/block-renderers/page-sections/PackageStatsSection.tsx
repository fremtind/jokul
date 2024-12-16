import { NavLink } from "@remix-run/react";
import cn from "classnames";
import {
    type MainMenu,
    type MenuItem,
    type SubMenu,
} from "payload/generated-types";
import React, { type FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { assertBlockIs } from "~/block-renderers/content-blocks/types";
import { type PageSectionProps } from "~/block-renderers/page-sections/types";
import { type RichTextChildren } from "~/components/rich-text";
import { richTextToString } from "~/components/rich-text";
import { useMainMenu } from "~/utils";

function findComponentSlugs(
    fields: MainMenu["items"],
    root?: string,
): { id: string; slug: string }[] {
    return (fields || [])
        .map((field) => {
            if ((field.item.value as SubMenu).items) {
                return findComponentSlugs(
                    (field.item.value as SubMenu).items,
                    (field.item.value as SubMenu).slug,
                );
            } else if (
                (field.item.value as MenuItem).link?.reference?.relationTo ===
                "components"
            ) {
                return {
                    id: (field.item.value as MenuItem).link?.reference
                        ?.value as string,
                    slug: [root, (field.item.value as MenuItem).slug].join("/"),
                };
            } else {
                return [];
            }
        })
        .filter((f) => f)
        .flatMap((f) => f);
}

export const PackageStatsSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertBlockIs("package-stats-section", pageSection);

    const [selected, setSelected] = useState(0);
    const buttons = useRef<Array<HTMLButtonElement | null>>([]);

    useEffect(() => {
        buttons.current = buttons.current.slice(0, pageSection.content.length);
    }, [pageSection.content.length]);

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                const nextIndex =
                    selected - 1 < 0
                        ? pageSection.content.length - 1
                        : selected - 1;

                setSelected(nextIndex);
                buttons.current[nextIndex]?.focus();
            } else if (e.key === "ArrowRight") {
                const nextIndex =
                    selected + 1 > pageSection.content.length - 1
                        ? 0
                        : selected + 1;

                setSelected(nextIndex);
                buttons.current[nextIndex]?.focus();
            }
        },
        [selected, pageSection.content.length],
    );

    const slugs = findComponentSlugs(useMainMenu().items);

    return (
        <div className={"jkl-portal-package-stats"}>
            <h2 className={"jkl-portal-package-stats__header"}>
                Mest brukte komponenter
            </h2>
            <div
                role={"tablist"}
                className={"jkl-portal-package-stats__tab-list"}
            >
                {pageSection.content?.map((p, index) => (
                    <button
                        key={index}
                        ref={(el) => (buttons.current[index] = el)}
                        role={"tab"}
                        className={cn(
                            "jkl-nav-link",
                            { "jkl-nav-link--active": selected === index },
                            "jkl-portal-package-stats__tab",
                        )}
                        aria-selected={selected === index}
                        aria-controls={`panel-${p.package}`}
                        id={`tab-${p.package}`}
                        tabIndex={selected === index ? 0 : -1}
                        onClick={() => setSelected(index)}
                        onKeyDown={onKeyDown}
                    >
                        {p.title}
                    </button>
                ))}
            </div>
            <div className={"jkl-portal-package-stats__panel"}>
                {pageSection.content?.map((component, index) => (
                    <div
                        key={index}
                        role={"tabpanel"}
                        id={`panel-${component.package}`}
                        tabIndex={0}
                        aria-labelledby={`tab-${component.package}`}
                        hidden={selected !== index}
                    >
                        <NavLink
                            to={`/${
                                slugs.find(
                                    ({ id, slug }) =>
                                        id === component.componentId,
                                )?.slug
                            }`}
                            className={
                                "jkl-nav-link jkl-portal-package-stats__nav-link"
                            }
                        >
                            {component.title}
                        </NavLink>
                        <div
                            className={
                                "jkl-portal-package-stats__panel-content jkl-small"
                            }
                        >
                            {richTextToString(
                                component.ingress as RichTextChildren,
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
