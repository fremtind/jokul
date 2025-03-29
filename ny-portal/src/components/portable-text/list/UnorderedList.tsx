import { UnorderedList as JokulUnorderedList } from "@fremtind/jokul/components";
import type { PortableTextComponentProps } from "@portabletext/react";
import type { FC } from "react";

export const UnorderedList: FC<PortableTextComponentProps<any>> = ({
    children,
}) => {
    return (
        <JokulUnorderedList className="jkl-body">{children}</JokulUnorderedList>
    );
};
