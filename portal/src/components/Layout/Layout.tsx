import React, { ReactNode, useContext, useLayoutEffect, useRef } from "react";

import { FormatProvider } from "../Typography";
import { Header } from "../Header";
import { ThemeBG } from "./components";
import { themeContext } from "../../contexts/themeContext";

import "./Layout.scss";
import Helmet from "react-helmet";

interface Props {
    children: ReactNode;
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    showFooter?: boolean;
}

export const Layout = ({ children, title }: Props) => {
    const PageTitle = `${title ? `${title} - ` : ""}Jøkul designsystem`;
    const { theme } = useContext(themeContext);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        wrapperRef.current?.setAttribute("data-theme", theme || "");
    }, [theme, wrapperRef]);
    return (
        <div className="portal-content" data-theme={theme} ref={wrapperRef}>
            <Helmet>
                <html lang="no-nb" />
                <title>{PageTitle}</title>
            </Helmet>
            <ThemeBG />
            <Header />
            <main className="portal-content__main">
                <FormatProvider>{children}</FormatProvider>
            </main>
        </div>
    );
};
