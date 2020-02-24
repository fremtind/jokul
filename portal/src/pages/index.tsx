import React from "react";
import { Layout } from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { jokulRenderer } from "../presentation/markdownRenderer";
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
import "@fremtind/jkl-core/core.min.css";
import "./style.scss";

import { ThemeContextProvider } from "../contexts/themeContext";

const IndexPage = () => (
    <ThemeContextProvider>
        <Layout>
            <div className="portal-main__content">
                <ReactMarkdown renderers={jokulRenderer} source={frontPageMarkdown} />
            </div>
        </Layout>
    </ThemeContextProvider>
);

export default IndexPage;
