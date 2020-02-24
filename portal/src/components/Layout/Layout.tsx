import React, { ReactNode } from "react";
import { Link } from "@fremtind/jkl-typography-react";
import { OrderedList, UnorderedList, ListItem } from "@fremtind/jkl-list-react";

import { PageTitle, HeadingLarge, HeadingMedium, HeadingSmall, HeadingXS, Paragraph } from "../Typography";
import { Header, Menu } from "..";
import { Sidebar } from "../Sidebar";
import "./Layout.scss";

interface Props {
    children: ReactNode;
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    showFooter?: boolean;
}

/* eslint-disable */
const h1 = PageTitle;
const h2 = HeadingLarge;
const h3 = HeadingMedium;
const h4 = HeadingSmall;
const h5 = HeadingXS;
const p = Paragraph;
const ul = (props: any) => <UnorderedList {...props} />;
const li = (props: any) => <ListItem {...props} />;
const ol = (props: any) => <OrderedList {...props} />;
const a = (props: any) => <Link {...props} />;
/* eslint-enable */

const components = {
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    ul,
    li,
    ol,
    a,
};

export const Layout = ({ children }: Props) => {
    return (
        <div className="portal-content">
            <Header />
            <Sidebar className="portal-content__sidebar">
                <Menu />
            </Sidebar>
            <main className="portal-content__main">{children}</main>
        </div>
    );
};
