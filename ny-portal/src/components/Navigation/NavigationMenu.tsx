import { getPayload } from "payload";
import { useId } from "react";
import { NavigationMenuLink } from "./NavigationMenuLink";
import { NavigationMenuNested } from "./NavigationMenuNested";
import configPromise from "@/payload.config";

type RootPath = "komponenter";

type NavItem = {
    title: string;
    rootPath: RootPath;
    hasChildren: boolean;
};

export type NavChildItem = {
    title: string;
    slug: string;
};

const navItems: NavItem[] = [
    {
        title: "Komponenter",
        rootPath: "komponenter",
        hasChildren: true,
    },
];

export const NavigationMenu = async () => {
    const navId = useId();

    const payload = await getPayload({
        config: configPromise,
    });

    const { docs: components } = await payload.find({
        collection: "component-page",
        select: {
            title: true,
            slug: true,
        },
    });

    const navChildItems: Record<RootPath, NavChildItem[]> = {
        komponenter: [
            {
                title: "Oversikt",
                slug: "",
            },
            ...components,
        ],
    };

    return (
        <ul id={navId}>
            {navItems.map((item) => {
                if (item.hasChildren) {
                    return (
                        <NavigationMenuNested
                            key={item.title}
                            title={item.title}
                            parentPath={item.rootPath}
                            items={navChildItems[item.rootPath]}
                        />
                    );
                }

                return (
                    <li key={item.title}>
                        <NavigationMenuLink
                            label={item.title}
                            path={item.rootPath}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
