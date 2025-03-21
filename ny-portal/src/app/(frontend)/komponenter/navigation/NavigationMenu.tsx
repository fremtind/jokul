import NavigationMenuLink from "./NavigationMenuLink";
import { client } from "@/sanity/client";
import { componentsQuery } from "@/sanity/queries/component";

import "./NavigationMenu.scss";

export const NavigationMenu = async () => {
    const components = await client.fetch(componentsQuery);

    const menuId = "global-menu";

    return (
        <nav className={menuId}>
            <ul className={"global-menu-list"} id={menuId}>
                <li>
                    <NavigationMenuLink href={"/komponenter"}>
                        Komponenter
                    </NavigationMenuLink>
                </li>
                {components.map((component) => {
                    const { slug, name } = component;

                    return (
                        <li key={name}>
                            <NavigationMenuLink
                                href={`/komponenter/${slug?.current}`}
                            >
                                {name}
                            </NavigationMenuLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
