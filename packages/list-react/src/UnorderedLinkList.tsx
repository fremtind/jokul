import cn from "classnames";
import React, { ComponentProps } from "react";
import { LinkListItem } from "./LinkListItem";
import { LinkListLink } from "./LinkListLink";

export const UnorderedLinkList = ({ className, ...rest }: ComponentProps<"ul">): React.JSX.Element => {
    return <ul className={cn("jkl-unordered-link-list", className)} {...rest}></ul>;
};

UnorderedLinkList.Link = LinkListLink;
UnorderedLinkList.Item = LinkListItem;
