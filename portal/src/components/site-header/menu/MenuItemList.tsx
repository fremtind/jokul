import { client } from "@/sanity/client";
import { blogPostsQuery } from "@/sanity/queries/blog";
import { componentsQuery } from "@/sanity/queries/component";
import clsx from "clsx";
import styles from "../SiteHeader.module.scss";
import { MenuItem } from "./MenuItem";

export const MenuItemList = async () => {
    const components = await client.fetch(componentsQuery);
    const blogPosts = await client.fetch(blogPostsQuery);

    const menuId = "global-menu";

    return (
        <ul id={menuId} className={clsx("jkl-list", styles.list)}>
            {blogPosts.map((blogPost) => {
                const { slug, name } = blogPost;

                return (
                    <li
                        key={name}
                        className={clsx(
                            "jkl-list__item",
                            styles.listHeading,
                            styles.hasChildren,
                        )}
                    >
                        <MenuItem href={`/blog/${slug?.current}`}>
                            Kom i gang
                        </MenuItem>
                    </li>
                );
            })}

            <li
                className={clsx(
                    "jkl-list__item",
                    styles.listHeading,
                    styles.hasChildren,
                )}
            >
                <MenuItem href={"/komponenter"}>Komponenter</MenuItem>
                <ul aria-label="Komponenter">
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
            </li>
        </ul>
    );
};
