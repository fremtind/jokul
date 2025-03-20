import { NavigationMenuGroup } from "./NavigationMenuGroup";
import { NavigationMenuList } from "./NavigationMenuList";
import { client } from "@/sanity/client";
import { componentsQuery } from "@/sanity/queries/component";

export const NavigationMenu = async () => {
    const components = await client.fetch(componentsQuery);

    return (
        <NavigationMenuList>
            <NavigationMenuGroup
                title="Komponenter"
                parentPath="komponenter"
                items={[
                    {
                        name: "Oversikt",
                        slug: {
                            current: "",
                            _type: "slug",
                        },
                    },
                    ...components,
                ]}
            />
        </NavigationMenuList>
    );
};
