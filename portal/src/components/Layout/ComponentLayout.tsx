import React, { ReactNode } from "react";
import { ReactIcon, SassIcon } from "../icons";
import { Layout } from "./layout-react/src";
import { CodeLink } from "./CodeLink";
import "./Layout.scss";

interface Props {
    children: ReactNode;
    pageContext: {
        frontmatter: {
            title: string;
            react?: string;
            scss?: string;
        };
    };
}

export const ComponentLayout = ({
    children,
    pageContext: {
        frontmatter: { title, react, scss },
    },
}: Props) => (
    <Layout title={title} isComponentPage>
        <>
            <header className="portal-content__heading">
                <h1 className="jkl-title-large portal-content__title">{title}</h1>
                {(react || scss) && (
                    <aside className="portal-content__packages">
                        {react && <CodeLink alt="React package" icon={<ReactIcon />} link={`${react}`} />}
                        {scss && <CodeLink alt="Style package" icon={<SassIcon />} link={scss} />}
                        <p className="jkl-micro portal-content__packages__description">Se på GitHub</p>
                    </aside>
                )}
            </header>
            <section className="portal-content__main">{children}</section>
        </>
    </Layout>
);

export default ComponentLayout;
