import clsx from "clsx";
import styles from "../SiteHeader.module.scss";
import { MenuItem } from "./MenuItem";
import { client } from "@/sanity/client";
import { componentsQuery } from "@/sanity/queries/component";

export const MenuItemList = async () => {
    const components = await client.fetch(componentsQuery);

    const menuId = "global-menu";

    return (
        <ul id={menuId} className={clsx("jkl-list", styles.list)}>
            <li className={clsx("jkl-list__item", styles.listHeading)}>
                <MenuItem href={"/komponenter"}>Komponenter</MenuItem>
            </li>
            {components.map((component) => {
                const { slug, name } = component;

                return (
                    <li key={name} className={clsx("jkl-list__item")}>
                        <MenuItem href={`/komponenter/${slug?.current}`}>
                            {name}
                        </MenuItem>
                    </li>
                );
            })}
        </ul>
    );
};
