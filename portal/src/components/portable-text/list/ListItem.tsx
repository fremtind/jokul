import { ListItem as JokulListItem } from "@fremtind/jokul/list";
import type { PortableTextComponentProps } from "@portabletext/react";
import type { FC } from "react";

export const ListItem: FC<PortableTextComponentProps<any>> = ({ children }) => {
    return <JokulListItem>{children}</JokulListItem>;
};
