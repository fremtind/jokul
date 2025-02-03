import { getPayload } from "payload";
import { useId } from "react";
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
    slug?: string | null;
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
    const burgerId = useId();

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
                slug: "oversikt",
            },
            ...components,
        ],
    };

    return (
        <ul id={navId} aria-labelledby={burgerId} role="group">
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

                return <li key={item.title}></li>;
            })}
        </ul>
    );
};
