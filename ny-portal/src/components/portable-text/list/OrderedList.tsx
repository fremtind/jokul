import { OrderedList as JokulOrderedList } from "@fremtind/jokul/components";
import type { PortableTextComponentProps } from "@portabletext/react";
import type { FC } from "react";

export const OrderedList: FC<PortableTextComponentProps<any>> = ({
    children,
}) => {
    return <JokulOrderedList className="jkl-body">{children}</JokulOrderedList>;
};
