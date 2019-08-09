import React from "react";
import { Layout } from "../../components";

interface Props {
    src: string;
}

export const Sandbox = ({ src }: Props) => {
    return (
        <Layout isComponentPage showFooter={false}>
            <iframe
                src={src}
                title="jokul-demo"
                style={{
                    width: "100%",
                    height: "calc(100vh - 175px)",
                    border: "0",
                    overflow: "hidden",
                }}
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            ></iframe>
        </Layout>
    );
};
