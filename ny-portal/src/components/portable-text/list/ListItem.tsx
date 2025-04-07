import { ListItem as JokulListItem } from "@fremtind/jokul/components";
import type { PortableTextComponentProps } from "@portabletext/react";
import type { FC } from "react";

export const ListItem: FC<PortableTextComponentProps<any>> = ({ children }) => {
    return <JokulListItem>{children}</JokulListItem>;
};
