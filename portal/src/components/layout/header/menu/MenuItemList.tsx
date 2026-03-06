import { client } from "@/sanity/lib/client";
import { komIGangQuery } from "@/sanity/queries/blog";
import { MenuItemListClient } from "./MenuItemListClient";

export const MenuItemList = async () => {
    const komIGang = await client.fetch(komIGangQuery);

    return <MenuItemListClient komIGang={komIGang} />;
};
