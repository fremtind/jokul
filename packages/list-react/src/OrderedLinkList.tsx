import cn from "classnames";
import React, { ComponentProps } from "react";
import { LinkListItem } from "./LinkListItem";
import { LinkListLink } from "./LinkListLink";

export const OrderedLinkList = ({ className, ...rest }: ComponentProps<"ul">): React.JSX.Element => {
    return <ul className={cn("jkl-ordered-link-list", className)} {...rest}></ul>;
};

OrderedLinkList.Link = LinkListLink;
OrderedLinkList.Item = LinkListItem;
