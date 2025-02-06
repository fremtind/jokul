import { getPayload } from "payload";
import { NavigationMenuGroup } from "./NavigationMenuGroup";
import { NavigationMenuList } from "./NavigationMenuList";
import configPromise from "@/payload.config";

export type MenuItems = {
    id?: number;
    title: string;
    slug: string;
};

export const NavigationMenu = async () => {
    const payload = await getPayload({ config: configPromise });

    const { docs: components } = await payload.find({
        collection: "component-page",
        select: {
            title: true,
            slug: true,
        },
    });

    return (
        <NavigationMenuList>
            <NavigationMenuGroup
                title="Komponenter"
                parentPath="komponenter"
                items={[
                    {
                        title: "Oversikt",
                        slug: "",
                    },
                    ...components,
                ]}
            />
        </NavigationMenuList>
    );
};
