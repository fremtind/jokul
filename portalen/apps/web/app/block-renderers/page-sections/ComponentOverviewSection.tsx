import { NavCard } from "@fremtind/jokul";
import {
    type Component,
    type Media,
    type MainMenu,
    type MenuItem,
    type SubMenu,
} from "payload/generated-types";
import React, { type FC } from "react";
import { useMemo } from "react";
import {
    type PageSectionProps,
    assertSectionIs,
} from "~/block-renderers/page-sections/types";
import { RichText } from "~/components/rich-text";
import { camelShyte, useMainMenu } from "~/utils";
import { useTheme } from "~/utils/useTheme";

function findComponentSlugs(
    fields: MainMenu["items"],
    root?: string,
): { [key: string]: string }[] {
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
        .flat();
}

export const ComponentOverviewSection: FC<PageSectionProps> = ({
    pageSection,
}) => {
    assertSectionIs("component-overview", pageSection);

    const prefersColorScheme = useTheme();
    const menuItems = useMainMenu().items;

    const slugs = useMemo(() => findComponentSlugs(menuItems), [menuItems]);
    const slugMap = useMemo(
        () => slugs.reduce((map, { id, slug }) => ({ ...map, [id]: slug }), {}),
        [slugs],
    );

    return (
        <div className={"jkl-portal-component-overview"}>
            {pageSection.intro && <RichText content={pageSection.intro} />}
            <div className={"jkl-portal-component-overview-list"}>
                {pageSection.components?.map(({ component: _component }) => {
                    const component = _component as Component;
                    if (!slugMap[component.id]) {
                        return null;
                    }

                    const image =
                        prefersColorScheme === "dark"
                            ? component.meta?.imageDark
                            : component.meta?.imageLight;

                    return (
                        <NavCard
                            key={component.id}
                            href={`/${slugMap[component.id]}`}
                            title={camelShyte(component.title)}
                            style={{
                                objectFit: "contain",
                            }}
                            image={{
                                src:
                                    image && typeof image !== "string"
                                        ? ((image as Media).url as string)
                                        : `/social-preview?title=${component.title}&mode=${prefersColorScheme}`,
                                alt: "",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};
